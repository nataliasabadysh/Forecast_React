import { ActionType } from './weatherTypes';

//Sync Actions 
export const fetchStart = () => ({
    type: ActionType.FETCH_START,
  });
  
// Async Actions 
  export const fetchSuccess = obj => ({
    type: ActionType.FETCH_SUCCESS,
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
