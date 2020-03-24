import React, { Component } from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Components/Router';
import "../node_modules/video-react/dist/video-react.css"; 

export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    )
  }
}