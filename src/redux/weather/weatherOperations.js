import axios from 'axios';

import { fetchError, fetchStart, fetchSuccess} from './weatherActions';
import { config } from '../../API/config';

export const fetchWeather = (query) => dispatch => {
  dispatch(fetchStart());

  axios
    .get(`${config.BASE_URI}/?q=${query}&appid=${config.KEY}`)
    .then(response => {
      dispatch(fetchSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchError(error));
    });
};


