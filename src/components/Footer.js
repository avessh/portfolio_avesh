import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
    <>
    <section id='footer_section'>
        <div className='row mx-auto'>
        <div id="footer_quick_links"  className='col-6' >
            <h1 id='footer_heading' className='  fw-bold fs-2 pb-2 pt-4 text-white'>Quick links</h1>
            <ul className='fs-6  text-light'>
               <a href='#home_section'> <li className=' footer_links pb-2'> <i className="fa-solid fa-house"></i> &nbsp; Home</li></a>
               <a href='#about_section'> <li className=' footer_links pb-2'> <i className="fa-solid fa-circle-dot"></i> &nbsp;  About</li></a>
               <a href='#skills_section'> <li className=' footer_links pb-2'> <i className="fa-solid fa-circle-dot"></i> &nbsp;  Skills</li></a>
                <a href='#skills_section'> <li className=' footer_links pb-2'> <i className="fa-solid fa-circle-dot"></i> &nbsp;  Education</li></a>
                <a href='#skills_section'> <li className=' footer_links pb-2'> <i className="fa-solid fa-circle-dot"></i> &nbsp;  Projects</li></a>
               
            </ul>
            
        </div>

        <div id="footer_quick_links"  className='col-6 w-50' >
            <h1 id='footer_heading' className='  fw-bold fs-2 pb-2 pt-4 text-white'>Contact me</h1>
            <ul className='fs-6  text-light'>
            <a href="mailto:aveshsinghwork@gmail.com" target='_blank' rel="noreferrer"> <li className=' footer_links pb-2'><i className="fa-regular fa-envelope"></i> : aveshsinghwork@gmail.com</li></a>
               
            </ul>
            
        </div>
       
        </div>
        <hr className='w-50' />
        <div id='me_footer' className='text-center p-3'>Made with ❤️ by Avesh </div>
    </section>
    </>
    )
  }
}
