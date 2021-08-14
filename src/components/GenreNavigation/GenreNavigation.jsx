import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './GenreNavigation.module.css';

export const GenreNavigation = () => {
  const router = useRouter();

  const isCurrentRoute = (path) => router.pathname === path;

  return (
    <nav>
      <ul className={styles.navigation}>
        <li
          className={styles.link}
          style={isCurrentRoute('/') ? { textDecorationLine: 'underline' } : {}}
        >
          <Link href="/">
            <a>Shows</a>
          </Link>
        </li>
        <li
          className={styles.link}
          style={
            isCurrentRoute('/favourites')
              ? { textDecorationLine: 'underline' }
              : {}
          }
        >
          <Link href="/favourites">
            <a>Favourites</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
