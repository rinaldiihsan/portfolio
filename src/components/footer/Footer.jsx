import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">rinaldiihsan.</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/rinaldiihsann" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="https://github.com/rinaldiihsan" className="footer__social-link" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; rinaldiihsan. All right reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
