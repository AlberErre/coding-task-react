import React from 'react';

import { GenreBox } from '../GenreBox';
import styles from './GenreList.module.css';

export const GenreList = ({ genres, onLike }) => (
  <ul className={styles.genreList}>
    {genres.map(({ id, ...rest }) => (
      <GenreBox key={id} onLike={onLike} {...rest} />
    ))}
  </ul>
);
