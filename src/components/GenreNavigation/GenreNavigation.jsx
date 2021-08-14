import React from 'react';
import Link from 'next/link';

import styles from './GenreNavigation.module.css';

export const GenreNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/">
            <a>Shows</a>
          </Link>
        </li>
        <li>
          <Link href="/favourites">
            <a>Favourites</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
