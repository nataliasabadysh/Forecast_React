// Core
import React, { Component } from 'react';
import Select from 'react-select';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import { connect } from 'react-redux';
import {options} from '../utils/constants';

// Actions 
import  {fetchWeather, fetchWeatherWitUnits } from '../redux/weather/weatherOperations';

// Components
import Card from './Card';
import DegreeToggle from './DegreeToggle';
import Spinner from './Spinner';
import ErrorIndicator from './ErrorIndicator';


const getCategoryFromProps = props =>
  queryString.parse(props.location.search).q;


const getCity = ( allCities, value ) =>  allCities.find(c => c.value === value);


class WeatherViewCard extends Component {

  state = {
    degreeType: ""
  }
  
  updateForecastDegree = event => {
    const {name, value, type, checked } = event.target;
    this.setState({
      [name]: type === 'checked' ? checked : value
    })
       // this.props.fetchWeatherWitUnits(getCategoryFromProps(this.props), this.state.degreeType);
  }

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
      this.props.fetchWeather(nextCity);
      this.setState({
        degreeType: ''
      })
    }

    else if(prevState.degreeType !== this.state.degreeType){
      this.props.fetchWeatherWitUnits(prevCity, this.state.degreeType);
    }
  }
  
  render() {
    const { weather: { items, error, loading } } = this.props;

    const currentCategory = getCategoryFromProps(this.props);
    const test = getCity(options, currentCategory);

    return  <>
      { error && <ErrorIndicator  msg={error.message}/> ||
        <> 
          <div className="top_bar">
            <h1 className="title-center">Select your Country</h1>
            <div className="selector">
              <Select
                value={test}
                defaultValue=''
                onChange={this.onCountryChange}
                options={options}
              />
            </div>
          </div>

          <DegreeToggle degreeType={this.state.degreeType} onUpdateForecastDegree={this.updateForecastDegree} />
          {loading && <Spinner /> ||  <Card items={items}  degreeType={this.state.degreeType} / > }
        </> 
      }
      </>
  }
}

const mapDispatchToProps = {
  fetchWeather,
  fetchWeatherWitUnits,
};
const mapStateToProps =({ weather})=> ({
  weather,
})

export default withRouter(
  connect(  
    mapStateToProps,
mapDispatchToProps)(WeatherViewCard))
