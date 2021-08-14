import React from 'react';

import { LikeButton } from '../LikeButton';
import styles from './GenreBox.module.css';

export const GenreBox = ({ color, numShows, title, onLike }) => (
  <li className={styles.box} style={{ backgroundColor: color }}>
    <p className={styles.title}>{title}</p>
    <p className={styles.subtitle}>{`${numShows} Shows`}</p>

    <LikeButton onLike={onLike} />
  </li>
);
