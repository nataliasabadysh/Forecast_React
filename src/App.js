// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Card from './components/WeatherViewCard'
// Actions 
import  {fetchWeather} from './redux/weather/weatherOperations';



class App extends Component {

  componentDidMount() {
    
    this.props.fetchWeather('London');
  }
  
  render() {
    const {weather}= this.props;
    return (
      <div>
        Hello World 
        <Card weather={weather} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchWeather: fetchWeather,
};
const mapStateToProps =({ weather})=> ({
  weather,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
