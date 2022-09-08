
import './App.css';
import '../src/style/NavBar.css';
import '../src/style/Home.css'
import '../src/style/About.css'
import '../src/style/Skills.css'
import '../src/style/Education.css'
import '../src/style/Project.css'
import '../src/style/Contact.css'
import '../src/style/Footer.css'

import React, { Component } from 'react';

import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default class App extends Component {
  render() {
    return (
      <>
    
      <div>
        <NavBar/>
        <Home/>
        <About/>
        <Skills/>
        <Education/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>

      </>
    )
  }
}

