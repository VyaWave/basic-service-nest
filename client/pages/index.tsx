import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>You Success Login!</p>
      </main>
    </div>
  );
};

export default Login;
