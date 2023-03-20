import React from 'react';
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <section className='contact'>
        <div className='hours'>
            <h2 className='hours_header'>Come On In!</h2>
            <h4 className='hours_days'>Monday - Friday</h4>
            <p className='hours_time'>7 AM - 2 PM</p>
            <h4 className='hours_days'>Saturday - Sunday</h4>
            <p className='hours_time'>8 AM - 3 PM</p>
            
        </div>

        <div className = 'contact_info'>
            <h2 className='contact_header'>Contact Us</h2>
            <h4>Phone</h4>
            <p>610-541-0122</p>
            <h4>E-Mail</h4>
            <p>hobbscoffee@gmail.com</p>
            <h4>Address</h4>
            <p className='address'>1 Park Avenue <br /> Swarthmore, PA 19081</p>
            <AiFillFacebook />
            <AiFillInstagram />
        </div>
    </section>
  )
}

export default Contact;