
import './App.css';
import '../src/style/NavBar.css';
import '../src/style/Home.css'
import '../src/style/About.css'
import '../src/style/Skills.css'
import '../src/style/Education.css'
import '../src/style/Project.css'
import '../src/style/Contact.css'
import '../src/style/Footer.css'

import React, { Component , Suspense , lazy } from 'react';


import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './animation/Loading';

const Home = lazy(() => import('./components/Home'));


export default class App extends Component {
  render() {
    return (
      <>
    
      <div>
        <Loading/>
        <NavBar/>
        <Suspense fallback={<h1 id='loading-screen' style={{width:"100vw",fontSize:"18px", height:"100vh", display:"grid" , placeItems:"center"}}>Please wait....
        Portfolio is loading</h1>}>
        <Home/>
        
        
        <About/>
        <Skills/>
        <Education/>
        <Project/>
        <Contact/>
        <Footer/>
        </Suspense>
      </div>

      </>
    )
  }
}

