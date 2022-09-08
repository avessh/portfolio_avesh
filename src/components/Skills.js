import React, { Component } from 'react'
import img from '../img/html5.png'
import css_img from '../img/css.png'
import javascript_img from '../img/javascript.png'
import php_img from '../img/php.png'
import mysql_img from '../img/mysql.png'
import node_img from '../img/node.png'
import express_img from '../img/express.png'
import react_img from '../img/react.png'
import bootstrap_img from '../img/bootstrap.png'
import cpp_img from '../img/cpp.png'
import git_img from '../img/git.png'
import wordpress_img from '../img/wordpress.png'
import material_img from '../img/material.png'

export class Skills extends Component {
   
    render() {
        let skills_heading = '</Skills>';
        return (
            <>
                <section id='skills_section'>
                 <h1 id='skills_head' className='text-center text-light'>{skills_heading}</h1>
                    <div id='skills_icons' className='container mt-5'>
                        <div className='row '>
                            <div className="  border  border-danger shadow-lg p-1 mb-0 rounded col-4 card card_skills card_color mx-3  " style={{ width: "7rem", height: "9rem" }}>
                                <img className='shadow-lg' src={img} />
                                <h1 className='  p-2 text-center text-danger'>HTML</h1>
                            </div>
                            <div className=" border border-info shadow-lg p-1 mb-5 rounded col-4 card card_skills card_color mx-3  " style={{ width: "7rem", height: "9rem" }}>
                                <img src={css_img} />
                                <h1 className=' p-2 text-center text-info'>CSS</h1>
                            </div>
                            <div className=" border border-warning shadow-lg p-1 mb-5 rounded col-4 card card_skills card_color mx-3  " style={{ width: "7rem", height: "9rem" }}>
                                <img src={javascript_img} />
                                <h1 className=' p-2 text-center text-warning'>javaScript</h1>
                            </div>
                            <div className=" border border-primary shadow-lg p-1 mb-5 rounded col-4 card card_skills card_color mx-3 " style={{ width: "7rem", height: "9rem" }}>
                                <img src={php_img} />
                                <h1 className=' p-2 text-center text-primary'>PHP</h1>
                            </div>
                            <div className=" border border-warning shadow-lg p-1 mb-5 rounded col-4 card card_skills card_color mx-3 " style={{ width: "7rem", height: "9rem" }}>
                                <img src={mysql_img} />
                                <h1 className=' p-2 text-center text-warning'>MySQL</h1>
                            </div>
                            <div className=" border border-success shadow-lg p-1 mb-5 rounded col-4 card card_skills card_color mx-3 " style={{ width: "7rem", height: "9rem" }}>
                                <img src={node_img} />
                                <h1 className=' p-2 text-center text-success'>Node.js</h1>
                            </div>
                            <div className=" border border-success shadow-lg p-1 mb-5 rounded col-4 card card_skills card_color mx-3 " style={{ width: "7rem", height: "9rem" }}>
                                <img src={express_img} />
                                <h1 className=' p-2 text-center text-success'>Express.js</h1>
                            </div>
                            <div className="  border border-primary shadow-lg p-1 mb-5 rounded col-4 card card_skills card_color mx-3 " style={{ width: "7rem", height: "9rem" }}>
                                <img src={react_img} />
                                <h1 className=' p-2 text-center text-primary'>React.js</h1>
                            </div>
                            <div className=" border border-info shadow-lg   p-1 mb-5 rounded col-4 card card_skills card_color mx-3 " style={{ width: "7rem", height: "9rem" }}>
                                <img src={bootstrap_img} />
                                <h1 className=' p-2 text-center text-info'>Bootstrap</h1>
                            </div>
                            <div className=" border border-primary shadow-lg   p-1 mb-5 rounded col-4 card card_skills card_color mx-3  " style={{ width: "7rem", height: "9rem" }}>
                                <img src={material_img} className="mt-3 w-75 text-center ml-3" />
                                <h1 className=' mt-4 p-2 text-center text-primary'>Material UI</h1>
                            </div>
                            <div className=" border border-primary shadow-lg   p-1 mb-5 rounded col-4 card card_skills card_color mx-3 " style={{ width: "7rem", height: "9rem" }}>
                                <img src={cpp_img} />
                                <h1 className=' p-2 text-center text-primary'>C++</h1>
                            </div>
                            <div className=" border border-secondary shadow-lg   p-1 mb-5 rounded col-4 card card_skills card_color mx-3  " style={{ width: "7rem", height: "9rem" }}>
                                <img src={git_img} />
                                <h1 className=' p-2 text-center text-secondary'>GitHub</h1>
                            </div>
                            <div className=" border border-secondary shadow-lg   p-1 mb-5 rounded col-4 card card_skills card_color mx-3  " style={{ width: "7rem", height: "9rem" }}>
                                <img src={wordpress_img}  />
                                <h1 className=' p-2 text-center text-secondary'>Wordpress</h1>
                            </div>
                          
                        </div>
                    </div>


                    {/* <div id='progress_bar'>
                        <h1 className='my-3 text-danger font-weight-bold text-lg' >HTML</h1>
                        <div className="progress my-3">
                            <div style={{ width: "80%" }} className="progress-bar bg-danger" role="progressbar" aria-label="Danger example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h1 className='my-3 text-primary font-weight-bold text-lg' >CSS</h1>
                        <div className="progress my-3">
                            <div style={{ width: "75%" }} className="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h1 className='my-3 text-warning font-weight-bold text-lg' >javaScript</h1>
                        <div className="progress my-3">
                            <div style={{ width: "55%" }} className="progress-bar bg-warning" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h1 className='my-3 text-primary font-weight-bold text-lg' >PHP</h1>
                        <div className="progress my-3">
                            <div style={{ width: "60%" }} className="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h1 className='my-3 text-white font-weight-bold text-lg' >HTML</h1>
                        <div className="progress my-3">
                            <div style={{ width: "" }} className="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h1 className='my-3 text-white font-weight-bold text-lg' >HTML</h1>
                        <div className="progress my-3">
                            <div style={{ width: "" }} className="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div> */}
                </section>
            </>
        )
    }
}

export default Skills
