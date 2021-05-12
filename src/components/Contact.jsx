import React from 'react'

import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Contact = () => {

    return ( 
        <div className="contact" id="contact">
            <h2>Contact me!</h2>

            <div className="contact__options">
                <AiFillLinkedin />
                <AiOutlineMail />
            </div>
        </div>
    );
}
 
export default Contact;