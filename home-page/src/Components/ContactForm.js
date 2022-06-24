import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const endpoint = 'https://formspree.io/f/mdobvdgd'

const siteKey = '6LeaJJkgAAAAAEuL6o09LanD8zAgX1S8rtlWHvlV'

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mdobvdgd");
    if (state.succeeded) {
        return <p>Thanks for sending me a Message!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Full Name</label>
            <input
            id="name"
            type="name" 
            name="name"
            />
            <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            />

            <label htmlFor="email">Email Address</label>
            <input
            id="email"
            type="email" 
            name="email"
            />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />

            <label htmlFor="message">Message</label>
            <textarea
            id="message"
            name="message"
            />
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />

            <button class="cta cta-submit" type="submit" disabled={state.submitting}>
            Send message
            </button>
      </form>
    );
  }