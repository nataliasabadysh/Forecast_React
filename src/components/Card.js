// Core
import React from 'react';
// Instruments
import {RAIN_NAME, NAME_VALUES, CLOUDS_NAME, WIND_NAME } from '../utils/constants';

const handleValue = (property, name) => {
    if(!property){
      return <i>No data for {name}</i>
    }
    return <p>{name}: {property} </p>
  }

const Card =({ items }) => (
      <>
        <div className='container_card'>
          <h1>  Weather in {items.name } {items.sys && items.sys.country } </h1>

          <div className="container_item"> 
            {handleValue(items.main && items.main.humidity, NAME_VALUES.HUMIDITY)} % 
          </div>

          <div className="container_item">  
            {handleValue(items.main && items.main.pressure, NAME_VALUES.PRESSURE)} hpa   
          </div>

          <div className="container_item"> 
            {handleValue(items.main && items.main.temp, NAME_VALUES.TEMP)}    
          </div>

          <div className="container_item">  
              {handleValue(items.main && items.main.temp_max, NAME_VALUES.MAX_TEMP)}    
          </div>
          <div className="container_item">  
              {handleValue(items.main && items.main.temp_min, NAME_VALUES.MIN_TEMP)}     
          </div>
          <div className="container_item">  
              {handleValue(items.clouds && items.clouds.all, CLOUDS_NAME.ALL)}     
          </div>

          <div className="container_item">  
              {handleValue(items.rain &&  Object.values(items.rain), RAIN_NAME.ONE_H)}     
          </div>

          <p>Rain: { items.rain && items.rain.lenght > 0 ? items.rain && Object.values(items.rain): 'none'}  </p>

          <div className="container_item">  
              {handleValue(items.wind &&  items.wind.speed, WIND_NAME.WIND)}     
          </div>

      </div>
      </>
);
export default Card;
