import axios from 'axios';

import { fetchError, fetchStart, fetchSuccess} from './weatherActions';

export const fetchWeather = (query) => dispatch => {
  dispatch(fetchStart());

  axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${query},uk&amp`)
    .then(response => {
      dispatch(fetchSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchError(error));
    });
};
