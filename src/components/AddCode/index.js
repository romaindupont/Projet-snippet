import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const AddCode = () => (
  <div className="AddCode">Ajout de code
    <form>
      <input type="text" placeholder="Ajouter un titre" />
      <select>
        <option value="">--Choisir une catégorie--</option>
        <option value="react">react</option>
        <option value="html">html</option>
        <option value="css">css</option>
        <option value="js">js</option>
      </select>
      <label> Ton code ici :
        <textarea>Mon code ici</textarea>
      </label>
    </form>
  </div>
);

export default AddCode;
