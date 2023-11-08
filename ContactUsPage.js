import React from 'react';
import './ContactUsPage.css';
import './background.css';

const ContactUsPage = () => {
  return (
    <body >
  <div className="background-image book-page">
    <div className="contact-us-page">
      <div className="contact-info">
        
          <h3><b><strong>Have a question?</strong></b></h3>
          <p>Contact us whenever you have any questions. We are always here for you!</p>
       
        
          <h3>Contact Us</h3>
          <p>Email: abc@example.com</p>
          <p>Phone: +91 1234567890</p>
          <p>Address: 123 Gandhi Nagar, Hyderabad, India</p>
        
      </div>
      <div className="contact-form">
        <h3>Contact Form</h3>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes:</label>
            <textarea id="notes" name="notes" required></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </body>
  );
};

export default ContactUsPage;
