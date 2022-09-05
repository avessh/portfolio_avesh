import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            
                <nav className='navbar_desktop'>
                  
                    <ul >
                    
                       <a href='#home_section'><li>Home</li></a> 
                        <a href='/'><li>About me</li></a>
                        <a href='/'><li>Skills</li></a>
                        <a href='/'><li>Education</li></a>
                        <a href='/'><li>Projects</li></a>
                        <a href='/'><li>Contact me</li></a>
                    </ul>
                </nav>

           
        )
    }
}
