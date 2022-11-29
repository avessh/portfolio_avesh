import React, { Component } from 'react'

import project_one from '../img/project_one.png'
import social_media_project from '../img/social_media_project.png'
import portfolio_project from '../img/portfolio.png'
import flipkart_project from '../img/flipkart.png'

export default class Project extends Component {
    render() {
        let project_section_heading = '</Projects>';
        return (

            <>
                <section id='project_section'>
                    <h1 id='project_section_heading' className='fs-2 fw-bold text-center text-light p-4 mb-4'>{project_section_heading}</h1>
                    <div id='projects' className="">
                      <div className=  " project_card float-left col-3 card mb-3 w-25  mx-2 ">
                            <img src={social_media_project} className=" card-img-top" alt="..." />
                            <div className="card-body project_card_body">
                                <h5 className="card-title  project_card_title fw-bold">MMMUT SOCIAL PHP</h5>
                                <p className="  fs-6 card-text fw-bold text-secondary">Full Stack Social Media Site using LAMP Stack. With all major features</p>
                                <a href='http://mmmutsocial.freecluster.eu/avesh' target='_blank' rel="noreferrer"><button className='btn btn-dark mt-4 mr-3'>View</button></a>
                                <a href='https://github.com/avessh/collegesocial.git' target='_blank' rel="noreferrer"><button className='btn btn-secondary mt-4'>code</button></a>

                            </div>
                        </div>
                        <div className=" project_card  float-left col-3 card mb-3 w-25  mx-2 ">
                            <img src={project_one} className=" card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className=" project_card_title card-title fw-bold">XYZ Company Website Template</h5>
                                <p className=" fs-6 card-text fw-bold text-secondary">Static Website Template using HTML, CSS, Bootstrap for XYZ Pvt ltd.</p>
                                <a href='http://projectone.great-site.net/' target='_blank' rel="noreferrer" ><button className='btn btn-dark mt-4 mr-3'>View</button></a>
                                <a href='https://github.com/avessh/xyz_website_template.git' target='_blank' rel="noreferrer"><button className='btn btn-secondary mt-4'>code</button></a>

                            </div>
                        </div>
                        <div className=" project_card  float-left col-3 card mb-3 w-25  mx-2 ">
                            <img src={portfolio_project} className=" card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className=" project_card_title card-title fw-bold">PORTFOLIO WEBSITE</h5>
                                <p className=" fs-6 card-text fw-bold text-secondary">Portfolio website | React.js</p>
                                <a><button className='btn btn-dark mt-5 mr-3'>View</button></a>
                                <a href='https://github.com/avessh/portfolio_avesh.git' rel="noreferrer"><button className='btn btn-secondary mt-5'>code</button></a>

                            </div>
                        </div>

                        <div className=" project_card  float-left col-3 card mb-3 w-25  mx-2 ">
                            <img src={flipkart_project} className=" card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className=" project_card_title card-title fw-bold">Flipkart Clone</h5>
                                <p className=" fs-6 card-text fw-bold text-secondary">Flipkart Clone using MERN-Stack</p>
                                <a href='https://flipkartclonebyavessh.herokuapp.com/' target='_blank' rel="noreferrer" ><button className='btn btn-dark mt-5 mr-3'>View</button></a>
                                <a href='https://github.com/avessh/flipkartclone' target='_blank' rel="noreferrer"><button className='btn btn-secondary mt-5'>code</button></a>

                            </div>
                        </div>

                        
                       
                        </div>


                </section>
            </>
        )
    }
}
