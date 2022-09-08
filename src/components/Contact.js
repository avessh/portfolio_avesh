import React, { Component } from 'react'

export default class contact extends Component {
  render() {
    let contact_section_heading = '</GET_IN_TOUCH>'
    return (
      <>
      <section id='contact_section'>
        <h1 id='contact_section_heading' className='fs-1 fw-bold text-center p-4 mt-4'>{contact_section_heading}</h1>
        <h1>My inbox is always open for you, if you have any question or just want to say hello, i will get back to you very soon</h1>
        <div id='contact_btn' className='mx-auto' >
          Hello!
        </div>

      </section>
      </>
    )
  }
}
