import { combineReducers } from 'redux';
import { ActionType } from './weatherTypes';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_SUCCESS:
    case ActionType.FETCH_SUCCESS_WITH_UNITS:
      return payload.obj;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_START:
    case ActionType.FETCH_START_WITH_UNITS:
      return true;

    case ActionType.FETCH_SUCCESS:
    case ActionType.FETCH_SUCCESS_WITH_UNITS:
    case ActionType.FETCH_ERROR:
    case ActionType.FETCH_ERROR_WITH_UNITS:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_START:
    case ActionType.FETCH_START_WITH_UNITS:
      return null;

    case ActionType.FETCH_ERROR:
    case ActionType.FETCH_ERROR_WITH_UNITS:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});
