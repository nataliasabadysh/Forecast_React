// Core
import React, { Component } from 'react';
// Components

class Card extends Component {

  render() {
      const { weather: { items } } = this.props;

    return (
      <div>
          <p>Name: {items.name } humidity  </p>

          <p>Humidity: {items.main && items.main.humidity} </p>
          <p>Pressure: {items.main && items.main.pressure} </p>
          <p>Temp: {items.main && items.main.temp} </p>

          <p>Temp max: {items.main && items.main.temp_max} </p>
          <p>Temp min: {items.main && items.main.temp_min} </p>

          <p>Clouds: {items.clouds &&  items.clouds.all }   </p>

          <p>Rain: {items.rain && Object.values(items.rain)}   </p>

          <p>Wind: {items.wind &&items.wind.speed}   </p>

      </div>
    );
  }
}


export default Card;
