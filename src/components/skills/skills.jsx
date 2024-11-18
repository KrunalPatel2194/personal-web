// import React from "react";
// import Social from "./social";
// import Data from "./Data";
// // import './home.css';

import Backend from "./Backend";
import Frontend from "./Frontend";
import './skills.css';
const Skills = () => {
    return (
        <section className="skills section" id="skills">
           
                <h2 className="section__title grid">
                   Skills
                </h2>
                <span className="section__subtitle grid">
                   My technical level
                </span>
                <div className="skills__container container grid">
                    {/* <img src={AboutImg} alt='' className='about__img' /> */}
                    {/* <div className='skills__data'> */}
                        {/* <Info/> */}

                        <Frontend/>
                        <Backend/>

                    {/* </div> */}
                </div>
        </section>
    )
}

export default Skills;