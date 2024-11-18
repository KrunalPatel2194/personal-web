// import React from "react";
// import Social from "./social";
// import Data from "./Data";
import './about.css';
import AboutImg from '../../assets/profile.JPG'
import Info from './info';

const About = () => {
    return (
        <section className="about section" id="about">
           
                <h2 className="section__title grid">
                   About Me
                </h2>
                <span className="section__subtitle grid">
                   Introduction
                </span>
                <div className="about__container container grid">
                    <img src={AboutImg} alt='' className='about__img' />
                    <div className='about__data'>
                        <Info/>

                        <p className='about__description'> Frontend Developer working in an industry since 9 years</p>
                        {/* <a download="" href={null} className='button button-flex'>Download
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" id="file">
  <g id="Page-1" fill="none" fill-rule="evenodd" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
    <g id="Artboard" stroke="#000" stroke-width="2" transform="translate(-1442 -1629)">
      <g id="file-text" transform="translate(1443 1630)">
        <path id="Shape" d="M10 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-6-6z"></path>
        <path id="Shape" d="M10 0v6h6M12 11H4M12 15H4M6 7H4"></path>
      </g>
    </g>
  </g>
</svg>
                        </a> */}
                    </div>
                </div>
        </section>
    )
}

export default About;