import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <>
                <nav className='navbar_desktop'>

                    <ul id='desktop_nav_ul' >

                        <a className='desktop_nav_li' href='#home_section'><li>Home</li></a>
                        <a className='desktop_nav_li' href='#about_section'><li>About me</li></a>
                        <a className='desktop_nav_li' href='#skills_section'><li>Skills</li></a>
                        <a className='desktop_nav_li' href='#education_section'><li>Education</li></a>
                        <a className='desktop_nav_li' href='#project_section'><li>Projects</li></a>
                        <a className='desktop_nav_li' href='#contact_section'><li>Contact me</li></a>
                        <a className='desktop_nav_li' href='/'><li>Resume</li></a>
                    </ul>
                </nav>

                <nav className='boot_nav'>
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">PORTFOLIO | AVESH</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#home_section">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#about_section">About me</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#skills_section">Skills</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#education_section">Education</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#project_section">Project</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#contact_section">Contact me</a>
                                    </li>

                                   
                                </ul>
                            </div>
                        </div>
                    </nav>
                </nav>

            </>


        )
    }
}
