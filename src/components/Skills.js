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
        const skill = [
            {
                id: 1,
                img: img,
                name: "HTML",

            },
            {
                id: 2,
                img: css_img,
                name: "CSS"
            },
            {
                id: 3,
                img: javascript_img,
                name: "javaScript"
            },
            {
                id: 4,
                img: php_img,
                name: "PHP"
            },
            {
                id: 5,
                img: mysql_img,
                name: "MySQL"
            },
            {
                id: 6,
                img: node_img,
                name: "Node.js"
            },
            {
                id: 7,
                img: express_img,
                name: "Express.js"
            },
            {
                id: 8,
                img: react_img,
                name: "React.js"
            },
            {
                id: 9,
                img: bootstrap_img,
                name: "Bootstrap"
            },
            {
                id: 10,
                img: cpp_img,
                name: "C++"
            },
            {
                id: 11,
                img: git_img,
                name: "GitHub"
            },
            {
                id: 12,
                img: wordpress_img,
                name: "WordPress"
            },
            {
                id: 13,
                img: material_img,
                name: "MUI"
            }
        ]
        return (
            <>
                <section id='skills_section'>
                    <h1 id='skills_head'>{skills_heading}</h1>
                    <div id='skills_icons'>
                        <div className='row'>
                            {skill.map(user => (
                                <div key={user.id} className= "  col-sm-4  p-1 rounded  card card_skills card_color   "style={{ width: "7rem", height: "9rem" }}>
                                <img className='shadow-lg p-3' src={user.img} />
                                <h1 id='skill-text' className='  p-2 text-center '>{user.name}</h1>
                            </div>
                            ))}




                        </div>
                    </div>


                </section>
            </>
        )
    }
}

export default Skills



