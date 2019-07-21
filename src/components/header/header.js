import React from 'react';
import { NavLink } from 'react-router-dom';
import uburLogo from './images/Ubur_Cuphead_Vector_image_no_line.png';
import uburText from './images/Ubur_logo_final_text.png';
import menuIcon from './images/icons8-menu-48.png';
import './header.scss';

export default ({ isMobile, menuIsOpen, handleMenuClick, handleCartOpen }) => {
  if (isMobile) {
    return (
      <header className="mainHeader">
        <div className="logos">
          <img id="uburLogo" src={uburLogo} alt="Ubur Logo" />
          <img id="uburText" src={uburText} alt="Ubur Text" />
        </div>
        <img
          onClick={handleMenuClick}
          id="menuIcon"
          src={menuIcon}
          alt="Menu Icon"
        />
        <div
          className={
            menuIsOpen ? 'navLinksMenu menuOpen' : 'navLinksMenu menuClosed'
          }
        >
          <NavLink to="/">Home</NavLink>
          <a
            href="https://open.spotify.com/artist/2m8lZUuPm2BLQ2c8gtIAV6?si=bS8wKITSSPmQ8ZiIQ6P_Xw"
            target="_blank"
            rel="noreferrer noopener"
          >
            Music
          </a>
          <NavLink to="/tour">Tour</NavLink>
          <a href="#" onClick={handleCartOpen}>
            Cart
          </a>
        </div>
      </header>
    );
  } else {
    return (
      <header className="mainHeader">
        <div className="logos">
          <img id="uburLogo" src={uburLogo} alt="Ubur Logo" />
          <img id="uburText" src={uburText} alt="Ubur Text" />
        </div>
        <div className="navLinks">
          <NavLink to="/">Home</NavLink>
          <a
            href="https://open.spotify.com/artist/2m8lZUuPm2BLQ2c8gtIAV6?si=bS8wKITSSPmQ8ZiIQ6P_Xw"
            target="_blank"
            rel="noreferrer noopener"
          >
            Music
          </a>
          <NavLink to="/tour">Tour</NavLink>
          <a href="#" onClick={handleCartOpen}>
            Cart
          </a>
        </div>
      </header>
    );
  }
};
