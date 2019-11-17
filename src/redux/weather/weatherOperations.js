import axios from 'axios';

import { fetchError, fetchStart, fetchSuccess, fetchStartWithUnits, fetchSuccessWithUnits, fetchErrorWithUnits} from './weatherActions';
import { config } from '../../API/config';

export const fetchWeather = (query='London' ) => dispatch => {
  dispatch(fetchStart());
  axios
    .get(
      `${config.BASE_URI}/?q=${query}&appid=${config.KEY}`) 
    .then(response => {
      dispatch(fetchSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchError(error));
    });
};

export  const fetchWeatherWitUnits = (query='London', units)  => dispatch => {
  dispatch(fetchStartWithUnits());
  axios
    .get(
      `${config.BASE_URI}/?q=${query}&appid=${config.KEY}&amp;units=${units}`) 
    .then(response => {
      dispatch(fetchSuccessWithUnits(response.data));
    })
    .catch(error => {
      dispatch(fetchErrorWithUnits(error));
    });

}



// Examples of API calls:

// London in Celsius
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&amp;appid=ab612ebf5375d77352246f16e80ad5c7&amp;units=metric

// Stockholm in Kelvin
// http://api.openweathermap.org/data/2.5/weather?q=Stockholm&amp;appid=ab612ebf5375d77352246f16e80ad5c7

// Kyiv in Fahrenheit
// http://api.openweathermap.org/data/2.5/weather?q=Kyiv&amp;appid=ab612ebf5375d77352246f16e80ad5c7&amp;units=imperial