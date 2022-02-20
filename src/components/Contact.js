import React from "react";

const Contact = () => {
  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      action="/success/"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name*
        <input aria-required="true" type="text" id="name" name="name" />
      </label>
      <label>
        Email*
        <input aria-required="true" type="email" id="email" name="email" />
      </label>
      <label>
        Message*
        <textarea aria-required="true" id="message" name="message"></textarea>
      </label>
      <button type="submit" className="button button--primary">
        Submit
      </button>
    </form>
  );
};

export default Contact;
