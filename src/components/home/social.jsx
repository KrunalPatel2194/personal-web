import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
    return (
        // <section className="home section" id="home">
            <div className="home__social">
                <Link to="#" className="home__social-icon" target="_blank">
                    <i class="uil uil-linkedin"></i>
                </Link>
                <Link to="#" className="home__social-icon" target="_blank">
                    <i class="uil uil-github"></i>
                </Link>
            </div>
        // </section>
    )
}

export default Social;