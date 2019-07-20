import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import uburLogo from './images/Ubur_Cuphead_Vector_image_no_line.png';
import uburText from './images/Ubur_logo_final_text.png';
import menuIcon from './images/icons8-menu-48.png';
import './header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      menuIsOpen: false
    };
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    if (window.innerWidth >= 700) {
      this.setState({
        isMobile: false,
        menuIsOpen: false
      });
    } else {
      this.setState({
        isMobile: true
      });
    }
  }

  handleMenuClick() {
    let isOpen = this.state.menuIsOpen;
    this.setState({
      menuIsOpen: !isOpen
    });
  }

  render() {
    if (this.state.isMobile) {
      return (
        <header>
          <div className="logos">
            <img id="uburLogo" src={uburLogo} alt="Ubur Logo" />
            <img id="uburText" src={uburText} alt="Ubur Text" />
          </div>
          <img
            onClick={this.handleMenuClick.bind(this)}
            id="menuIcon"
            src={menuIcon}
            alt="Menu Icon"
          />
          <div
            className={
              this.state.menuIsOpen
                ? 'navLinksMenu menuOpen'
                : 'navLinksMenu menuClosed'
            }
          >
            <NavLink to="/">Home</NavLink>
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
    } else {
      return (
        <header>
          <div className="logos">
            <img id="uburLogo" src={uburLogo} alt="Ubur Logo" />
            <img id="uburText" src={uburText} alt="Ubur Text" />
          </div>
          <div className="navLinks">
            <NavLink to="/">Home</NavLink>
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
    }
  }
}
