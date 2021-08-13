import './GenreSelector.module.css';

import React from 'react';

export const GenreSelector = ({
  id = 'genreSelector',
  name = 'Genre Selector',
  onChange,
}) => {
  const handleChange = (event) => {
    if (!onChange) return;

    onChange(event.target.value);
  };

  return (
    <div className="selectorContainer">
      <label htmlFor={id}>Sort by: </label>
      <select id={id} name={name} onChange={handleChange}>
        <option selected value="alphabetical">
          Alphabetical
        </option>
        <option value="showsNumber">No of shows</option>
      </select>
    </div>
  );
};
