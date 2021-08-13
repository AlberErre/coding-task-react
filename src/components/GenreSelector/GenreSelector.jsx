import './GenreSelector.module.css';

import React from 'react';

export const GenreSelector = ({
  id = 'genreSelector',
  name = 'Genre Selector',
}) => (
  <div className="selectorContainer">
    <label htmlFor={id}>Sort by: </label>
    <select id={id} name={name}>
      <option selected value="alphabetical">
        Alphabetical
      </option>
      <option value="showsNumber">No of shows</option>
    </select>
  </div>
);
