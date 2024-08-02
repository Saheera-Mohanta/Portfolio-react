
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn } from 'react-icons/fa'; 
import './footer.css';

const Footer = () => {
  return (
    <section>
      <div id="footer">
        <div className="information">
          <h1>Saheera Mohanta..</h1>
          <span>
            <p><b>Email &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</b>saheeramohanta@gmail.com</p>
            <p><b>Contact &nbsp;:&nbsp;</b>+919123158758</p>
            <p><b>Address &nbsp;:</b> Sridungri Gamharia,<br /> Jamshedpur, Jharkhand 832108</p>
          </span>
          <div className="social-1">
            <hr/>
            <span>
              <p>Twitter <a id="icon" href="#"><FaTwitter size={24} style={{ color: '#efeff0' }} /></a></p>
              <p>Facebook <a id="icon" href="#"><FaFacebookF size={24} style={{ color: '#f5f7fc' }} /></a></p>
              <p>Instagram <a id="icon" href="#"><FaInstagram size={24} style={{ color: '#f5f7fa' }} /></a></p>
              <p>Skype <a id="icon" href="#"><FaSkype size={24} style={{ color: '#fcfdff' }} /></a></p>
              <p>Linkedin <a id="icon" href="#"><FaLinkedinIn size={24} style={{ color: '#ffffff' }} /></a></p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
