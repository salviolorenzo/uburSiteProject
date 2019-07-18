import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import uburLogo from '../../assets/Ubur_Cuphead_Vector_image_no_line.png';
import uburText from '../../assets/Ubur_logo_final_text.png';
import './header.scss';

export default () => {
  return (
    <header>
      <div className="logos">
        <img id="uburLogo" src={uburLogo} alt="Ubur Logo" />
        <img id="uburText" src={uburText} alt="Ubur Text" />
      </div>
      <div className="navLinks">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/tour">Tour</NavLink>
        <a
          href="https://open.spotify.com/artist/2m8lZUuPm2BLQ2c8gtIAV6?si=bS8wKITSSPmQ8ZiIQ6P_Xw"
          target="_blank"
          rel="noreferrer noopener"
        >
          Music
        </a>
        <NavLink to="/shop">Shop</NavLink>
      </div>
    </header>
  );
};
