import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';
import './contact.css';

function Contact() {
    return(
        <div>
            <Header title="Web Developer"/>
            <section className='contact-section'>
                <h2>Contact Me</h2>
                <p>Feel free to reach out to me through the form below</p>
            </section>
            <Form />
            <Footer name="Benjamin Pritchard"/>
        </div>
    )
}

export default Contact;