import React from "react";
import './contact.css';
import { QRCodeCanvas } from 'qrcode.react'; // Import the correct component

const ContactMe = () => {
    return (
        <section className="contact container">
            <div className="contact__wrapper">
                <div className="contact__form-container">
                    <h2 className="contact__title">Get in Touch</h2>
                    <form className="contact__form">
                        <div className="contact__input-group">
                            <input
                                type="text"
                                className="contact__input"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="contact__input-group">
                            <input
                                type="email"
                                className="contact__input"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="contact__input-group">
                            <textarea
                                className="contact__input contact__textarea"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="contact__button">
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="contact__qr-container">
                    <h3>Scan to Visit</h3>
                    <QRCodeCanvas
                        value="https://krunal-patel.me" // Replace with your website URL
                        size={150}
                        bgColor="transparent"
                        fgColor="#000"
                        level="H"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
