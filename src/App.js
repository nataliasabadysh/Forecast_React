// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components

// Actions 
import  {fetchWeather} from './redux/weather/weatherOperations';



class App extends Component {

  componentDidMount() {
    this.props.fetchWeather();
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

export default connect(
  null,
  mapDispatchToProps,
)(App);
