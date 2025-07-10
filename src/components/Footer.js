import React from 'react';
import './footer.css';

function Footer({ name }) {
    return (
        <footer>
            <p>©{new Date().getFullYear()} {name}</p>
            <div>
                <a className='link' target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/benjamin-pritchard96/">
                    LinkedIn
                </a>
                <span>|</span>
                <a className='link' target='_blank' rel="noreferrer" href="https://github.com/zachneb/">
                    GitHub
                </a>
            </div>
        </footer>
    )
}

export default Footer;