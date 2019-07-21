import React from 'react';
import { Route, Link } from 'react-router-dom';
import './footer.scss';

export default () => {
  return (
    <footer className="mainFooter">
      <ul>
        <li>
          <a href="https://www.facebook.com/uburdub">
            <i class="fab fa-facebook-square" />
            Facebook
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/groups/297425144206547/">
            <i class="fab fa-facebook-square" />
            Ubur's Long Bois
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/uburdub/">
            <i class="fab fa-instagram" />Instagram
          </a>
        </li>
        <li>
          <a href="https://twitter.com/uburdub">
            <i class="fab fa-twitter" />Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
};
