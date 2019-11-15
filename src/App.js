// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components

// Actions 
import  {fetchWeather} from './redux/weather/weatherOperations';



class App extends Component {

  componentDidMount() {
    this.props.fetchWeather('London');
  }
  render() {
    return (
      <div>
        Hello World 
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchWeather: fetchWeather,
};
const mapStateToProps =({weather})=> ({
  weather: weather,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
