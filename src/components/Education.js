import React, { Component } from 'react'

import college_img from '../img/college.jpg'
import dps_img from '../img/dps.png'

export default class Education extends Component {

    render() {
        let heading = "</Education>";
        return (
            <section id='education_section'>
                <h1 id='education_section_heading' className='fs-1  fw-bold  text-center p-4'>{heading}</h1>
                <div id='college '>
                    
                    <div className="card mb-3 w-75 mx-auto  border border-secondary my-4 college_card_body">
                        <img className="card-img-top" src={college_img} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className=" college_card_title fw-bold card-title fs-3">Bachelor of Technology in Electronics and Communication Engineering</h5>
                            <p className=" fw-bold fs-6 card-text">Madan Mohan Malaviya University of Technology, Gorakhpur, Uttar Pradesh</p>
                            <p className=" fw-bold fs-6 card-text text-warning">2020 - 2024 | Pursuing</p>
                            
                        </div>
                    </div>
                </div>
                <div id='intermediate'>
                <div className="card mb-3 w-75 mx-auto  border border-secondary mt-9 college_card_body">
                        <img className=" h-25 card-img-top" src={dps_img} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className=" college_card_title fw-bold card-title fs-3">Intermediate | PCM</h5>
                            <p className=" fw-bold fs-6 card-text">Delhi Public School, Aligarh, Uttar Pradesh</p>
                            <p className=" fw-bold fs-6 card-text text-success">2017-2019 | Completed</p>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
