import React from 'react'
import Resume from '../../assets/resume.pdf'

const HeaderButton = () => {
    return (
        <div className='headerButton'>
            <a href={Resume} download className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
    )
};

export default HeaderButton; 