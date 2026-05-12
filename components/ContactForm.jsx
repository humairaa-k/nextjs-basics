"use client"
import { useState } from "react";


export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  } 

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label >
        Name
        <input className="input" name="name" placeholder="Your name" required />
      </label>

       <label>
        Email
        <input
          className="input"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />
      </label>

      <label>
        Message
        <textarea
          className="textarea"
          name="message"
          placeholder="Write your message here..."
          required
        />
      </label>

      <button className="button" type="submit">
        Send Message
      </button>

      {submitted && (
        <p className="success-message">
         Thank you! This demo form shows a success message without a backend.
        </p>
      )}

    </form>
  )
}

