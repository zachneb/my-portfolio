import React from 'react';
import './about.css';
import profilePicture from '../assets/profile.jpg';

function About() {
    return (
        <section id="about">
            <img src={profilePicture} alt="Benjamin Pritchard"/>
            <div>
                <h2>About Me</h2>
                <p className='aboutText'>Hello! My name is Benjamin Pritchard. I am a recent graduate at Wake Technical Community College in the feild of Web Developement.
                    I come from an engineering background but always felt like it was missing creativity. Through my love of creation and problem solving, I found Web Design
                    and knew immediately it was the path I wanted to follow.
                </p>
            </div>
        </section>
    )
}

export default About;