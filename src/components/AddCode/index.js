import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const AddCode = () => (
  <form className="AddCode">
    <h1>Ajout de code</h1>
    <select>
      <option value="">--Choisir une catégorie--</option>
      <option value="react">react</option>
      <option value="html">html</option>
      <option value="css">css</option>
      <option value="js">js</option>
    </select>
    <input type="text" placeholder="Ajouter un titre" />
    <input type="text" placeholder="Ajouter une description" />
    <textarea placeholder="Ton code ici" />
  </form>
);

export default AddCode;
