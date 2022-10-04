import React from 'react';

function Nav(props) {
  const {
    currentSection,
    setCurrentSection
  } = props;

  return (
       <nav className="nav-links text-center">
        <p className={`link ${'About Me' === currentSection && 'nav-active'}`} id="about-me">
          <span className='nav-link' onClick={() => setCurrentSection ('About Me')}>About Me</span>
        </p>
        <p className={`link ${'About Me' === currentSection && 'nav-active'}`} id="projects">
          <span className='nav-link' onClick={() => setCurrentSection ('Projects')}>Projects</span>
        </p>
        <p className={`link ${'About Me' === currentSection && 'nav-active'}`} id="resume">
          <span className='nav-link' onClick={() => setCurrentSection ('Resume')}>Resume</span>
        </p>
        <p className={`link ${'About Me' === currentSection && 'nav-active'}`} id="contact">
          <span className='nav-link' onClick={() => setCurrentSection ('Contact')}>Contact</span>
        </p>
       </nav>

  );
}

export default Nav;