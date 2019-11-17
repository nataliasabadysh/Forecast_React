import shortid from 'shortid';

export const options = [
    { value: 'London', label: 'London' },
    { value: 'Stockholm', label: 'Stockholm' },
    { value: 'Kyiv', label: 'Kyiv' },
  ];
  
export  const NAME_VALUES = {
    HUMIDITY: "Humidity",
    PRESSURE: "Pressure",
    TEMP: 'Temp',
    MAX_TEMP: 'Max temperature',
    MIN_TEMP: 'Min temperature' 
  }
export  const CLOUDS_NAME = {
    ALL: "Cloudiness",
  }
export  const RAIN_NAME = {
    ONE_H: 'Rain'
  }
export  const WIND_NAME = {
    WIND: 'Wind'
  }
  
  export const DEGREE_TYPE = {
    imperial: 'imperial',
    metric: 'metric',

    fahrenheit: "Fahrenheit",
    celsius: "Celsius",
    kelvin: "Kelvin"
  }

export const  CELSIUM_INPUT_ID = shortid.generate();
export const FARENHEIT_INPUT_ID = shortid.generate();
export const KELVIN_INPUT_ID = shortid.generate();