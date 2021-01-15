/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import codeLogo from 'src/assets/logoCode.png';

import './style.scss';

const Menu = ({ darkMode, dark }) => { 
  console.log(dark);
  return (
  <div className="menu">
    <img className="logo" src={codeLogo} alt="code Logo" />
    <div className="switch-box">
      <label className="switch">
        <input onChange={darkMode} checked={dark} type="checkbox" />
        <span className="slider round" />
      </label>
    </div>
    <div className="search">
      <input type="text" className="search-input" />
    </div>
  </div>
);
  };

Menu.propTypes = {
  darkMode: PropTypes.func.isRequired,
};

export default Menu;
