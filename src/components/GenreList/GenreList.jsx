import React from 'react';

import { GenreBox } from '../GenreBox';
import styles from './GenreList.module.css';

export const GenreList = ({ genres, onLike, likedGenres }) => (
  <ul className={styles.genreList}>
    {genres.map(({ id, ...rest }) => (
      <GenreBox
        id={id}
        key={id}
        likedGenres={likedGenres}
        onLike={onLike}
        {...rest}
      />
    ))}
  </ul>
);
