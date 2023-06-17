import React, { Component } from 'react'

import project_one from '../img/project_one.png'
import social_media_project from '../img/social_media_project.png'
import portfolio_project from '../img/portfolio.png'
import flipkart_project from '../img/flipkart.png'
import color_picker from '../img/color-picker.png'

export default class Project extends Component {
    render() {
        let project_section_heading = '</Projects>';
        const skill = [
            {
                id: 1,
                img: project_one,
                name: "HTML",

            },
            {
                id: 2,
                img: social_media_project,
                name: "CSS"
            },
            {
                id: 3,
                img: portfolio_project,
                name: "javaScript"
            },
            {
                id: 4,
                img: flipkart_project,
                name: "PHP"
            },
            {
                id: 5,
                img: color_picker,
                name: "MySQL",
            }
        ]
        return (

            <>
                <section id='project_section'>
                    <h1 id='project_section_heading' className='fs-2 fw-bold text-center text-light p-4 mb-4'>{project_section_heading}</h1>
                    <div id='projects' className="">
                        {skill.map(user => (
                            <div key={user.id} className=" project_card  col-3 card mb-3 ">
                                <img src={user.img} className=" card-img-top" alt="..." />
                                <div className="card-body project_card_body">
                                    <h5 className="card-title  project_card_title fw-bold">MMMUT SOCIAL PHP</h5>
                                    <p className="  fs-6 card-text fw-bold text-secondary">Full Stack Social Media Site using LAMP Stack. With all major features</p>
                                    <a href='http://mmmutsocial.freecluster.eu/avesh' target='_blank' rel="noreferrer"><button className='btn btn-dark mt-4 mr-3'>View</button></a>
                                    <a href='https://github.com/avessh/collegesocial.git' target='_blank' rel="noreferrer"><button className='btn btn-secondary mt-4'>code</button></a>

                                </div>
                            </div>
                        ))}

                    </div>
                    <div id='scroll'>
                        <h3 style={{color:"white"}}>Scroll -- </h3>
                    </div>
                </section>





            </>
        )
    }
}
