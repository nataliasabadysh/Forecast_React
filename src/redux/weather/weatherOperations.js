import axios from 'axios';

import { fetchError, fetchStart, fetchSuccess} from './weatherActions';

export const fetchWeather = () => dispatch => {
  dispatch(fetchStart());

  axios
    .get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&amp')
    .then(response => {
      dispatch(fetchSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchError(error));
    });
};