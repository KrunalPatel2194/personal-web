import React from "react";
import Social from "./social";
import Data from "./Data";
import './home.css';
// import ParticlesBackground from "../particlesBackground/particles";

const Home = () => {
    return (
        <section className="home section" id="home">
            {/* <ParticlesBackground/> */}
            
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social/>
                    <div className="home__img"/>
                    <Data />
                </div>
            </div>
        </section>
    )
}

export default Home;