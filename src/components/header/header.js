import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './header.scss';

export default () => {
  return (
    <header>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/shop">Shop</NavLink>
    </header>
  );
};
