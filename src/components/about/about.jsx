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
                       
                    </div>
                </div>
        </section>
    )
}

export default About;