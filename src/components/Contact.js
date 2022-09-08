import React, { Component } from 'react'

export default class contact extends Component {
  render() {
    let contact_section_heading = '</GET_IN_TOUCH>'
    return (
      <>
      <section id='contact_section'>
        <h1 id='contact_section_heading' className='fs-1 fw-bold text-center p-4 mt-4'>{contact_section_heading}</h1>
        <h1 className=' fs-5 contact_section_info_heading mx-auto mt-20 mb-10'>My inbox is always open for you, if you have any question or just want to say hello, then click on hello button below and send msg.</h1>
        <a href="mailto:aveshsinghwork@gmail.com" rel='noreferrer' target='_blank'>
        <div id='contact_btn' className='mx-auto' >
          Hello!
        </div>
        </a>

      </section>
      </>
    )
  }
}
