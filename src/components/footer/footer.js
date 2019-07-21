import React from 'react';
import uburText from './images/Ubur_logo_final_text.png';
import './footer.scss';

export default () => {
  return (
    <footer className="mainFooter">
      <img src={uburText} alt="Ubur Text Logo" />
      <ul>
        <li>
          <a
            href="https://www.facebook.com/uburdub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-facebook-square" />
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/groups/297425144206547/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-facebook-square" />
            Ubur's Long Bois
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/uburdub/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-instagram" />
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/uburdub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fab fa-twitter" />
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
};
