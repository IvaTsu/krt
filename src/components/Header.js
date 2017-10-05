import React from 'react';

import logo from '../img/logo.png';
import './Header.css';

class Header extends React.Component {
  render() {
  const { phone_number } = this.props.data;
    return (
      <header className="header">
        <section className="h-section">
          <div className="logo">
            <img src={logo}/>
          </div>
          <div className="info">
            <span>По любым вопросам</span>
            <span>{phone_number}</span>
          </div>
        </section>
      </header>
    )
  }  
}

export default Header;