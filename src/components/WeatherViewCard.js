// Core
import React, { Component } from 'react';
import Select from 'react-select';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import { connect } from 'react-redux';

import {options} from '../utils/constants';


// Actions 
import  {fetchWeather } from '../redux/weather/weatherOperations';

// Components
import Card from './Card';




const getCategoryFromProps = props =>
  queryString.parse(props.location.search).q;


const getCity = ( allCities, value ) =>  allCities.find(c => c.value === value)

class WeatherViewCard extends Component {

  onCountryChange = city => {
    if(city){
      // On change city
      return this.props.history.push({
          ...this.props.location,
          search: `q=${city.value}`,
        });
      };
      // by default
    this.props.history.push({
      ...this.props.location,
      search: `q=London`,
    });
}


  componentDidMount(){
       this.props.fetchWeather();

       this.props.history.push({
        ...this.props.location,
        search: ``,
      });
  }
  componentDidUpdate(prevProps, prevState){
    const prevCity = getCategoryFromProps(prevProps)
    const nextCity = getCategoryFromProps(this.props)

    if(prevCity !== nextCity){
      this.props.fetchWeather(nextCity)
    }

  }
  

  render() {
    const { weather: { items } } = this.props;

    const currentCategory = getCategoryFromProps(this.props);
    const test = getCity(options, currentCategory);

    return (

      <>
       <Select
        value={test}
        defaultValue=''
        onChange={this.onCountryChange}
        options={options}
      />
      
      <Card items={items} / >
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchWeather,
};
const mapStateToProps =({ weather})=> ({
  weather,
})

export default withRouter(
  connect(  
    mapStateToProps,
    mapDispatchToProps)(WeatherViewCard))
