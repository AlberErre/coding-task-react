import React from 'react';

import { LikeButton } from '../LikeButton';
import styles from './GenreBox.module.css';

export const GenreBox = ({
  id,
  color,
  numShows,
  title,
  onLike,
  likedGenres,
}) => {
  const onClick = () => onLike(id);

  const isLiked = likedGenres.includes(id);

  return (
    <li className={styles.box} style={{ backgroundColor: color }}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{`${numShows} Shows`}</p>

      <LikeButton isLiked={isLiked} onClick={onClick} />
    </li>
  );
};
