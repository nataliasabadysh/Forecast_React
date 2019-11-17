// Core 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

// Instruments
import App from './App';
import store from './redux/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>,
  </Provider>,
  document.getElementById('root'),
);

