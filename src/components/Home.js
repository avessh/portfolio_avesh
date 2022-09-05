import React, { Component } from 'react'


export default class Home extends Component {
  render() {
    return (

      <>
        <section id='home_section' >
          <div className='wrapper container'>
            <p>Hey, &nbsp; my name is</p>
            <h1 id='name'>Avesh <span className='last_name'> Singh </span></h1>
            <div className='typing'>
              <h2 id='text'> <span id='text_span'>I Find interest in <span id='web_text'> <b>Web</b>  </span>Development <span id='toggel'>|</span> </span></h2>
            </div>
            <p className='brief-info'>I'm pursuing my Bachelor's in Electronics and Communication Engineering from <a href='http://www.mmmut.ac.in/' target='_blank'> Madan Mohan Malaviya University of Technology</a> , Gorakhpur</p>

            <div className='social'>

              {/* <h1 id='social_head'>Connect with me</h1> */}

           <a className='social_icons' href=''> <i className="fa-brands fa-linkedin"></i></a>
           <a id='git' className='social_icons' href=''> <i className="fa-brands fa-github"></i></a>
           <a className='social_icons' href=''> <i className="fa-brands fa-telegram"></i></a>
           <a className='social_icons' href=''> <i className="fa-brands fa-twitter"></i></a>
           <a id='insta' className='social_icons' href=''> <i className="fa-brands fa-instagram"></i></a>

            </div>

          </div>

        </section>
      </>
    )
  }
}
