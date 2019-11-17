import { ActionType } from './weatherTypes';

//Sync Actions 
export const fetchStart = () => ({
    type: ActionType.FETCH_START,
  });
  export const fetchStartWithUnits = () => ({
    type: ActionType.FETCH_START_WITH_UNITS,
  });
  
// Async Actions 
  export const fetchSuccess = obj => ({
    type: ActionType.FETCH_SUCCESS,
    payload: {
      obj,
    },
  });
  
  export const fetchSuccessWithUnits = obj => ({
    type: ActionType.FETCH_SUCCESS_WITH_UNITS,
    payload: {
      obj,
    },
  });

  export const fetchError = error => ({
    type: ActionType.FETCH_ERROR,
    payload: {
      error,
    },
  });

  export const fetchErrorWithUnits = error => ({
    type: ActionType.FETCH_ERROR_WITH_UNITS,
    payload: {
      error,
    },
  });


