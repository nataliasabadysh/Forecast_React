
// Core
import React from 'react';
import { createPortal } from 'react-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const SPINNER_ROOT = document.querySelector('#spinner');

const Spinner = () =>
  createPortal(
    <Loader type="ThreeDots" color="#00BFFF" timeout={0} />,
    SPINNER_ROOT,
  );


  export default Spinner;