import React from 'react';

import { useLikedGenresContext } from '../../context/LikedGenres';
import { LikeButton } from '../LikeButton';
import styles from './GenreBox.module.css';

export const GenreBox = ({ id, color, numShows, title, onLike }) => {
  const onClick = () => onLike(id);

  const { likedGenres } = useLikedGenresContext();

  const isLiked = likedGenres.includes(id);

  return (
    <li className={styles.box} style={{ backgroundColor: color }}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{`${numShows} Shows`}</p>

      <LikeButton isLiked={isLiked} onClick={onClick} />
    </li>
  );
};
