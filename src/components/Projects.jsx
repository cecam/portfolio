import React from 'react'

import Project from './Project'

const Projects = () => {
    const projects = [
        {
            image: '/images/task-manager.png',
            name: 'Task Manager',
            description: "Thinking of how simple the design is, I decided to use Bootstrap, to keep the design as clean as be possible",
            attributes: [
                'React JS',
                'React Routing',
                'Styled Components'
            ],
            repo: 'https://github.com/cecam/task-administrator',
            page: 'https://elegant-williams-943090.netlify.app/'
        },
        {
            image: '/images/rt-chat.png',
            name: 'Real time chat',
            description: "The first project developed for this portfolio, I used the system to learn how the real time data bases works and was my first time using sass to style the system",
            attributes: [
                'React JS',
                'Sass',
                'Firebase'
            ],
            repo: 'https://github.com/cecam/realtime-chat',
            page: 'https://eloquent-lichterman-d4c097.netlify.app/'
        },
        {
            image: '/images/drikn-recipees.png',
            name: 'Drinking recipees',
            description: "Thinking of how simple the design is, I decided to use Bootstrap, to keep the design as clean as be possible",
            attributes: [
                'React JS',
                'React Routing',
                'Bootstrap',
                'Api Consuming',
            ],
            repo: 'https://github.com/cecam/drinks-recipee',
            page: 'https://hopeful-mcclintock-f7af81.netlify.app/'
        },
        {
            image: '/images/cabo-marques.png',
            name: 'Cabo Marques',
            description: "This site has been built with Gatsby js. The main objective of the site, was to get a perfect score on google lightroom at the same time that build a great design for introduce myself",
            attributes: [
                'Gatsby JS',
                'CSS3',
                'Performance'
            ],
            page: 'http://cabomarques.excite.cloud/'
        },
        
        
    ]

    return ( 
        <div className="projects">
            <h2>My projects</h2>

            <div className="projects__list">
                {projects.map((project, index) => (
                    <Project {...project} key={index} />
                ))}
            </div>
        </div>
    );
}
 
export default Projects;