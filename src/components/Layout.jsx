import React from 'react'
import {Link} from 'gatsby'


const Layout = ({children}) => {
    return ( 
        <>
            <nav>
                <div className="logo-section">
                    <Link to="#me">CECAM</Link>
                </div>

                <ul>
                    <li><Link to="#projects">Projects</Link></li>
                    <li><Link to="#resume">Resume</Link></li>
                    <li><Link to="#contact">contact me</Link></li>
                </ul>                
            </nav>
            {children}
        </>
    );
}
 
export default Layout;