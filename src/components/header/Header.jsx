import React, { useState } from "react";
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    
    return(
        <header className="header">
            <nav className="nav container">
                <Link to="index.html" className="nav__logo"> Krunal Patel</Link>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu" }>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link to="/" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/career" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Career
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </Link>
                        </li>
                       
                    </ul>
                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}>
                    </i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;