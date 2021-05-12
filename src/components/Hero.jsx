import React from 'react'
import {Link} from 'gatsby'
import { 
    FaCalendarAlt,
    FaMapMarked,
    FaGithub,
    FaReact,
    FaSass,
    FaCss3Alt
} from "react-icons/fa";

import { GoGitBranch } from "react-icons/go";
import { RiGatsbyLine } from "react-icons/ri";


const Hero = () => {
    const technologies = [
        {icon: <FaReact/>, name: 'React'},
        {icon: <RiGatsbyLine/>, name: 'Gatsby'},
        {icon: <FaSass/>, name: 'Sass'},
        {icon: <FaCss3Alt/>, name: 'CSS3'},
        {icon: <GoGitBranch/>, name: 'git'},
    ]

    const skills = [
        'Proactive',
        'Problem solver',
        'Visionary',
        "Creative",
    ]



    return ( 
        <>
        <Link to="#contact"><button className="contact-button">Contact me</button></Link>
        <div className="hero" id="me">
            <div className="content-section">
                <div className="presentation-card">
                    <img src="./images/profile.jpg" alt="Personal Image"/>

                    <div className="card-header">
                        <h1>Celso Cárdenas Macías</h1>
                        <p>frontend developer</p>
                    </div>

                    <div className="info">
                        <p><FaCalendarAlt/> August 2, 1997</p>
                        <p><FaMapMarked /> Mexico State, Mexico</p>
                        <p><FaGithub /> cecam</p>
                    </div>

                    <Link to="#projects"><button>Projects</button></Link>
                </div>
                <div className="personal-info">
                    <div className="header">
                        <h2>About me</h2>
                        <p>I am a self-motivated and commited person with the ability to worl well independently or as a part of a professional development team.</p>
                        <p>My mainly soft skills are:</p>
                        <ul>
                            {skills.map(skill => (
                                <li>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="skills">
                        <div className="skills__tech" >
                            <h3>Technologies</h3>
                            <div className="tech-list">
                                {technologies.map((tech, index) => (
                                    <div className={`tech-element ${tech.name}`} key={index}>
                                        {tech.icon}
                                        <p>{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Hero;