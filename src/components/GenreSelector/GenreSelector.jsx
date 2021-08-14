import React from 'react';

import styles from './GenreSelector.module.css';

export const GenreSelector = ({
  id = 'genreSelector',
  name = 'Genre Selector',
  onChange,
  defaultValue = 'alphabetical',
}) => {
  const handleChange = (event) => {
    if (!onChange) return;

    onChange(event.target.value);
  };

  return (
    <div className={styles.selectorContainer}>
      <label htmlFor={id}>Sort by: </label>
      <select
        defaultValue={defaultValue}
        id={id}
        name={name}
        onChange={handleChange}
      >
        <option value="alphabetical">Alphabetical</option>
        <option value="showsNumber">No of shows</option>
      </select>
    </div>
  );
};
