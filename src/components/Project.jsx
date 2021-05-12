import React from 'react'
import {Link} from 'gatsby'

const Project = ({image, name, description, attributes, repo, page}) => {

    return ( 
        <div className="project" id="projects">
            <img src={image} alt={name}/>
            <div className="project__content">
                <h3>{name}</h3>
                <p>{description}</p>
                <ul>
                    {attributes.map(attribute => (
                        <li>{attribute}</li>
                    ))}
                </ul>
            </div>
            <div className="navigation-buttons">
                {repo ? <Link to={repo}><button>Go repo</button></Link> : null}
                
                <Link to={page}><button>See live</button></Link>
            </div>
        </div>
    );
}
 
export default Project;