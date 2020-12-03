import React from 'react';
import logo from '../_assets/logo.svg';

export const NavBar = () => (
  <div className="position-relative js-header-wrapper ">

    <div className="Header py-0 js-details-container Details flex-wrap flex-lg-nowrap px-3">
      <div className="Header-item">
        <a className="Header-link" href="/">
          <img className="avatar" height="40" width="40" alt="icon" src={logo} />
        </a>
      </div>

      <div className="Header-item Header-item--full">
        <nav className="d-flex flex-row" aria-label="Global">
          <a data-ga-click="Navigation, go to comics, text:comics" className="js-selected-navigation-item Header-link py-3 mr-0 mr-3 border-top border-top-0 border-white-fade-15" href="/comics">
            Comics
          </a>
        </nav>
      </div>
    </div>

  </div>
);
