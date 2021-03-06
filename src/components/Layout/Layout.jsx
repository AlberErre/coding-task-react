import React from 'react';
import Head from 'next/head';

import styles from './Layout.module.css';

export const Layout = ({ children, title = 'ACB Coding Task <> Alberto' }) => (
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="#000000" name="theme-color" />
      <link href="/manifest.json" rel="manifest" />
    </Head>
    <main>{children}</main>
  </div>
);
