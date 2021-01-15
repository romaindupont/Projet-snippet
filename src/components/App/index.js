/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Menu from '../Menu';
import AddCode from '../AddCode';
import Tri from '../Tri';
import CodeList from '../CodeList';

// == Import
import './style.scss';

// == Composant
const App = () => {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!dark);
  };

  return (
    <div className={classNames('app--whiteMode', { 'app--darkMode': dark })}>
      <Menu darkMode={darkMode} dark={dark} />
      <AddCode />
      <Tri />
      <CodeList />
    </div>
  );
};

// == Export
export default App;
