export class Config {
    BASE_URI = 'http://api.openweathermap.org/data/2.5/weather';
}

export const config = new Config();

// Examples of API calls:

// London in Celsius
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&amp;appid=ab612ebf5375d77352246f16e80ad5c7&amp;units=metric

// Stockholm in Kelvin
// http://api.openweathermap.org/data/2.5/weather?q=Stockholm&amp;appid=ab612ebf5375d77352246f16e80ad5c7

// Kyiv in Fahrenheit
http://api.openweathermap.org/data/2.5/weather?q=Kyiv&amp;appid=ab612ebf5375d77352246f16e80ad5c7&amp;units=imperial