import React from 'react';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { GenreSelector } from '../GenreSelector';
import styles from './GenreHeader.module.css';

export const GenreHeader = ({ title, setGenreOrder }) => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <header className={styles.section}>
      <h1>{title}</h1>
      {!isMobile && !!setGenreOrder && (
        <GenreSelector onChange={setGenreOrder} />
      )}
    </header>
  );
};
