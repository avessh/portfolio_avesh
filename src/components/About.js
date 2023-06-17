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
              <img id='profile_img' src={profile} alt="" />
            </div>
            <div className='my_info'>
              <h1 id='content_h1'> I&apos;m Avesh Singh <br />  </h1>
              <h1 id='content_h1_span'>Web Developer</h1>

              <p id='my_info_para'>Full-Stack Developer | Pursuing B.Tech at Madan Mohan Malaviya University of Technology | Skilled in HTML, CSS, JavaScript, MERN Stack and LAMP Stack. Driven to create seamless and visually appealing web applications. Experienced in responsive design and eager to collaborate with cross-functional teams. Passionate about delivering exceptional user experiences. Seeking opportunities to apply and enhance my skills in the industry.</p>

              <div id='my-para-detail'>
                <h1 className='color my-3'>Email: <span className='detail'> aveshsinghwork@gmail.com</span> </h1>
                <h1 className='color my-3'>Phone:<span className='detail'> +91-993 541 9845</span></h1>
                <h1 className='color my-3'>Age:<span className='detail'> 20</span></h1>
                <h1 className='color my-3'>Place:<span className='detail' > Gorakhpur, Uttar Pradesh</span></h1>
              </div>

            </div>
          </div>
        </section>
      </>
    )
  }
}
