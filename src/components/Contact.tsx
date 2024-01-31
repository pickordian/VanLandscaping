import { useState } from "react";
import { setNotification } from "./Notice";
import { FormDataObject } from "./interface";
function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const formContent: FormDataObject = {
    "form-name": "contact",
    name: name,
    email: email,
    message: message,
  };
  const setNotice = setNotification();
  const encode = (data: FormDataObject): string => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(formContent),
      });

      if (!response.ok) {
        throw new Error(
          `Server returned ${response.status} ${response.statusText}`
        );
      }

      setNotice("Form submitted successfully", true);
    } catch (error) {
      console.error("Form submission error:", error);
      setNotice(
        "There was an error submitting the form. Please try again or contact us directly.",
        false
      );
    }
  };

  return (
    <section id="Contact">
      <h2>Contact Information</h2>
      <div>
        <div>
          <h3>Contact us to get your free estimate now!</h3>
          <form
            name="contact"
            data-netlify-honeypot="honey-pot"
            onSubmit={(e) => handleFormSubmit(e)}
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              className="display-none"
              id="honey-pot"
              name="honey-pot"
            ></input>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
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
