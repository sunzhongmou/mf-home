import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../_assets/clean.png';

export const Footer = () => (
  <div className="footer container-xl width-full p-responsive" role="contentinfo">
    <div className="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
      <ul className="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li></li>
        <li>© 2020 sunzhongmou, Inc.</li>
      </ul>

      <a aria-label="Homepage" title="sunzhongmou.com" className="footer-octicon d-none d-lg-block mx-lg-4"
         href="/">
        <img className="avatar" height="24" width="24" alt="icon" src={logo}/>
      </a>
      <ul
        className="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li>
          <NavLink data-ga-click="Navigation, go to about, text:about" to="/about">关于</NavLink>
        </li>
      </ul>
    </div>
  </div>
);
