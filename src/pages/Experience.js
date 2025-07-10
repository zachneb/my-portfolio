import React from 'react';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import './experience.css';

function Experience() {
    return (
        <div>
            <Header title="Web Developer"/>
            <section className='experience-section'>
                <h2>Experience</h2>
                <div className='experience-text'>
                    <p>I've worked on many projects duroing my time at Wake Tech. From developing applications in C#, building websites from the
                        ground up using basic HTML, to creating web stores and blogs with Wordpress. I've become used to many design tools such as
                        Figma, Canva, and Adobe Photoshop.
                    </p>
                </div>
            </section>
            <Skills skill={[
                'HTML',
                'CSS',
                'JavaScript',
                'PHP',
                'WordPress',
                'C#',
                'React',
                'MySQL',
                'MongoDB'
            ]} />
            <Footer name="Benjamin Pritchard"/>
        </div>
    )
}

export default Experience;