// import React from "react";
// import Social from "./social";
// import Data from "./Data";
// // import './home.css';
import { useState } from 'react';
import './services.css';

const Portfolio = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">Things i Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Full Stack <br/> Developement</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More 
                        <i class="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i class="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">Services with more than 8 Years of experience</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop User Info</p>
                                </li>
                                <li className="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop User Info</p>
                                </li>
                                <li className="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop User Info</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                    <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Product <br/>Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More 
                        <i class="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i class="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">Services with more than 8 Years of experience</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop User Info</p>
                                </li>
                                <li className="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop User Info</p>
                                </li>
                                <li className="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop User Info</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                    <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Product <br/>Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More 
                        <i class="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i class="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">Services with more than 8 Years of experience</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop User Info</p>
                                </li>
                                <li className="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop User Info</p>
                                </li>
                                <li className="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop User Info</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                    <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Product <br/>Designer</h3>
                    </div>

                    <span className="services__button"  onClick={() => toggleTab(4)}>View More 
                        <i class="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i class="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">Services with more than 8 Years of experience</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop User Info</p>
                                </li>
                                <li className="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop User Info</p>
                                </li>
                                <li className="services__modal-service">
                                    <i class="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop User Info</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;