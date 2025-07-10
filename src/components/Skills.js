import React from 'react';
import './skills.css';

function Skills({ skill, index }) {
    return (
        <section className='skills'>
            <h2>Skills</h2>
            <ul className='list'>
                {skill.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    )
}

export default Skills;