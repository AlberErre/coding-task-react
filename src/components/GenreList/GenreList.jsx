import React from 'react';

import { GenreBox } from '../GenreBox';
import styles from './GenreList.module.css';

export const GenreList = ({ genres }) => (
  <ul className={styles.genreList}>
    {genres.map(({ id, ...rest }) => (
      <GenreBox key={id} {...rest} />
    ))}
  </ul>
);
