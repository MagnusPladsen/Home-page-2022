import React from 'react';
import '../Css/Contact.css';
import imageContact from '../Images/contact.svg';

export default function Contact() {

    return (
        <div className="contact">
            <header className="contact-header">
                <h2 className="contact-h2">Contact</h2>
            </header>
            <section className="contact-section">
                <div className="contact-grid-item contact-grid-left">
                    <p>NAME</p>
                    <p>EMAIL</p>
                    <p>PHONE</p>
                    <p>LOCATION</p>
                </div>
                <div className="contact-grid-item contact-grid-right">
                    <p>Magnus Pladsen</p>
                    <p><a href = "mailto: kontakt@magnuspladsen.no">Click here</a></p>
                    <p>+47 948 12 442</p>
                    <p>Lillehammer, Norway</p>
                </div>
                <img src={imageContact} alt="illustration of email" className="contact-image" />
            </section>
        </div>
    );
}