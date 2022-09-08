import React, { Component } from 'react'
import profile from '../img/profile.jpeg'


export default class About extends Component {
      
  render() {
    return (
     <>
     <section id='about_section'>
     <h1 id='about_section_head'>About <span id='me'> me</span></h1>
        <div className='container'>
           
            <div className='img'>
            <img id='profile_img' src={profile} alt=""/>
            </div>
            <div className='my_info'>
                <h1 id='content_h1'> I&apos;m Avesh Singh <br/>  </h1>
                <h1 id='content_h1_span'>Web Developer</h1>
              
               <p id='my_info_para'>Hello, I am Electronics and Communication Engineering Undergraduate from Madan Mohan Malaviya University of Technology, Gorakhpur. I have geniune ineterst in web development that how websites build how they work. I build websites using PHP, MySQL , MERN stack. I love to build website templates.</p>
               <h1 className='color my-3'>Email: <span className='detail'> aveshsinghwork@gmail.com</span> </h1>
               <h1 className='color my-3'>Phone:<span  className='detail'> +91-993 541 9845</span></h1>
               <h1 className='color my-3'>Age:<span className='detail'> 20</span></h1>
               <h1 className='color my-3'>Place:<span className='detail' > Gorakhpur, Uttar Pradesh</span></h1>
            </div>
        </div>
     </section>
     </>
    )
  }
}
