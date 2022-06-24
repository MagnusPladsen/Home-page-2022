import React from 'react';
import '../Css/Contact.css';
import imageContact from '../Images/contact.svg';
import ContactForm from './ContactForm';

export default function Contact() {

    return (
        <div className="contact">
            <header className="contact-header">
                <h2 className="contact-h2">Contact</h2>
            </header>
            <section className="contact-section">
                <div className="contact-grid-item contact-grid-left">
                    <ContactForm/>
                </div>
                <div className="contact-grid-item contact-grid-right">
                    <img src={imageContact} alt="illustration of email" className="contact-image" />
                </div>
            </section>
        </div>
    );
}