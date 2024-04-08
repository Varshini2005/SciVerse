import React from 'react';
import '../Compnents_Styles/contactStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b534f9e7-4652-4610-b3e7-4a338ccc9e92");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-us-container" id="contact">
      <div className="contact-info">
        <p><FontAwesomeIcon icon={faEnvelope} /> sciverse23@gmail.com</p>
      </div>
      <form className="contact-form" onSubmit={onSubmit}>
        <h2>Send us a message</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows='6' required></textarea>
        </div>
        <button type="submit" className='dark-btn'>Send</button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default Contact;

