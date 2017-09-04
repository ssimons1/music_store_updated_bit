import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import $ from 'jquery';
import Song from './Song.js';
import MyButton from './MyButton.js';
import My_form from './My_form.js';
import PropTypes from 'prop-types';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App defaultBand="madonna"/>, div);
});
