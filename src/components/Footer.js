import React from 'react';

import flogo from '../img/white_logo.png';
import './Footer.css';
import '../Mobile.css';

const Footer = (props) => {
  return (
    <div className="footer">
      <section className="f-wrap">
        <div className="f-logo">
          <img src={flogo} alt="d"/>
        </div>
        <div className="f-info">
          <div className="f-box">
            <span className="f-box-title">Звоните</span>
            <span className="f-i">{props.data.phone_number}</span>
          </div>
          <div className="f-box">
            <span className="f-box-title">Заходите в гости</span>
            <span className="f-i">{props.data.street}</span>
          </div>
          <div className="f-box">
            <span className="f-box-title">Ищите нас в соцсетях</span>
            <a className="social-links" href="https://www.facebook.com/KonnoJukuUkraine">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a className="social-links" href="https://www.instagram.com">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
      <div className="copyright">Copyright © Karate Association in Ukraine</div>
    </div>
  )
}


export default Footer;