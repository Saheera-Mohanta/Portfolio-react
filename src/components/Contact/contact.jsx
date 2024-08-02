import React, { useState } from 'react';
import './contact.css';
import { FaLocationPin } from 'react-icons/fa6'; // Make sure to install react-icons

const MessageForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="message-form-container">
      <div className="icon-container">
        <FaLocationPin className="location-icon" />
      </div>
      <h1>Send me a message!</h1>
      <p>Got a question or proposal, or just want <br/>to say hello? Go ahead.</p>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Your Name<br/>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            /></label>
            <label >Email Address<br/>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            /></label>
          </div>
          
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          />
          
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default MessageForm;
