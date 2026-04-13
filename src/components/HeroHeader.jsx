import React from 'react';
import Navbar from './Navbar';
import headerImg from '../assets/img/header-image.jpg';

function HeroHeader() {
  const headerStyle = {
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) url(${headerImg}) center / cover no-repeat`,
  };

  return (
    <header className="header" style={headerStyle}>
      <Navbar transparent={true} />
      <div className="header-content">
        <h1 className="lg-heading text-light main-heading">Travel The World</h1>
        <p className="text-light">
          travel the world, experience the greatness, it's the best gift given by nature
        </p>
        <a href="#showcase" className="btn btn-primary text-red md-heading">
          Explore Places
        </a>
      </div>
    </header>
  );
}

export default HeroHeader;
