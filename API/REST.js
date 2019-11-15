import { config } from './config';

export default new class Api {
    getWeather = async (query) => {
        const response = await fetch(`${config.BASE_URI}/?q=${query}/${config.KEY}`);
        const result = await response.json();

        return result;
    };
}();
