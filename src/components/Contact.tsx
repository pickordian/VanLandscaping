import React from "react";
import { useState } from "react";
function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleFormSubmit = () => {};
  return (
    <section id="Contact">
      <h2>Contact Information</h2>
      <div>
        <div>
          <h3>Contact us to get your free estimate now!</h3>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="email"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button className="CTA-link" type="submit">
              Send message
            </button>
          </form>
        </div>
        <div>
        <h3>Our service area</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d199559.2397649896!2d-122.08462954221602!3d48.06085458604349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1706263528896!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
