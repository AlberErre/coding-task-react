import React from 'react';

import styles from './GenreBox.module.css';

export const GenreBox = ({ color, numShows, title }) => (
  <li className={styles.box} style={{ backgroundColor: color }}>
    <p className={styles.title}>{title}</p>
    <p className={styles.subtitle}>{`${numShows} Shows`}</p>
  </li>
);
