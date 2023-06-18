import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
    <>
    <section id='footer_section'>
        <div id='footer' >
        <div id="footer_quick_links"  >
            <h1 id='footer_heading' className=''>Quick links</h1>
            <ul className=''>
               <a href='#home_section'> <li className=' footer_links pb-2'> <i className="fa-solid fa-house"></i> &nbsp; Home</li></a>
               <a href='#about_section'> <li className=' footer_links pb-2'> <i className="fa-solid fa-circle-dot"></i> &nbsp;  About</li></a>
               <a href='#skills_section'> <li className=' footer_links pb-2'> <i className="fa-solid fa-circle-dot"></i> &nbsp;  Skills</li></a>
                <a href='#skills_section'> <li className=' footer_links pb-2'> <i className="fa-solid fa-circle-dot"></i> &nbsp;  Education</li></a>
                <a href='#skills_section'> <li className=' footer_links pb-2'> <i className="fa-solid fa-circle-dot"></i> &nbsp;  Projects</li></a>
               
            </ul>
            
        </div>

        <div id="footer_quick_link"  className='' >
            <h1 id='footer_heading' className=''>Contact me</h1>
            <ul  className=''>
            <a   href="mailto:aveshsinghwork@gmail.com" target='_blank' rel="noreferrer"> <li  className=' footer_links pb-2'><i   className="fa-regular fa-envelope" style={{marginTop:'-15px;'}}></i> : aveshsinghwork@gmail.com</li></a>
               
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
