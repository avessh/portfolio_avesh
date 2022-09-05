
import './App.css';
import '../src/style/NavBar.css';
import '../src/style/Home.css'

import React, { Component } from 'react';

import Home from './components/Home';
import NavBar from './components/NavBar';


export default class App extends Component {
  render() {
    return (
      <>
    
      <div>
      <NavBar/>
        <Home/>
      </div>
      </>
    )
  }
}

