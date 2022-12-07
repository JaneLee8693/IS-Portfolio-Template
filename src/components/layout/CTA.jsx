import React from 'react';
import Resume from '../../assets/files/cv.pdf';
import './Header.css';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="mailto:xo930497@gmail.com" className='btn btn-primary'>Message Me</a>

    </div>
  )
}

export default CTA