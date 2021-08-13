import React from 'react';

import styles from './GenreSelector.module.css';

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
    <div className={styles.selectorContainer}>
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
