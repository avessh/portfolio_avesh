import React, { Component } from 'react'

import project_one from '../img/project_one.png'
import social_media_project from '../img/social_media_project.png'
import portfolio_project from '../img/portfolio.png'

export default class Project extends Component {
    render() {
        let project_section_heading = '</Projects>';
        return (

            <>
                <section id='project_section'>
                    <h1 id='project_section_heading' className='fs-2 fw-bold text-center text-light p-4 mb-4'>{project_section_heading}</h1>
                    <div id='projects' classname="">
                      <div class=  " project_card float-left col-3 card mb-3 w-25  mx-2 ">
                            <img src={social_media_project} class=" card-img-top" alt="..." />
                            <div class="card-body project_card_body">
                                <h5 class="card-title  project_card_title fw-bold">MMMUT SOCIAL PHP</h5>
                                <p class="  fs-6 card-text fw-bold text-secondary">Full Stack Social Media Site using LAMP Stack. With all major features</p>
                                <a href='http://mmmutsocial.freecluster.eu/avesh' target='_blank'><button className='btn btn-dark mt-4 mr-3'>View</button></a>
                                <a><button className='btn btn-secondary mt-4'>code</button></a>

                            </div>
                        </div>
                        <div class=" project_card  float-left col-3 card mb-3 w-25  mx-2 ">
                            <img src={project_one} class=" card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class=" project_card_title card-title fw-bold">XYZ Company Website Template</h5>
                                <p class=" fs-6 card-text fw-bold text-secondary">Static Website Template using HTML, CSS, Bootstrap for XYZ Pvt ltd.</p>
                                <a><button className='btn btn-dark mt-4 mr-3'>View</button></a>
                                <a><button className='btn btn-secondary mt-4'>code</button></a>

                            </div>
                        </div>
                        <div class=" project_card  float-left col-3 card mb-3 w-25  mx-2 ">
                            <img src={portfolio_project} class=" card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class=" project_card_title card-title fw-bold">PORTFOLIO WEBSITE</h5>
                                <p class=" fs-6 card-text fw-bold text-secondary">Portfolio website | React.js</p>
                                <a><button className='btn btn-dark mt-5 mr-3'>View</button></a>
                                <a><button className='btn btn-secondary mt-5'>code</button></a>

                            </div>
                        </div>
                       
                        </div>


                </section>
            </>
        )
    }
}
