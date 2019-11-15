import { combineReducers } from 'redux';
import weatherRedux from './weather/weatherRedux';

export default combineReducers({
    weather: weatherRedux,
});