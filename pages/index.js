import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import Router from 'next/router';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Challenges</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul className={styles.challenges}>
          <li key='tic-tac-toe'>
            <a
              className={styles.description}
              href="/tic-tac-toe" >Tic-Tac-Toe</a>
          </li>
          <li key='traffic-light'>
            <a
              className={styles.description}
              href="/traffic-light" >Traffic-Light</a>
          </li>
          <li key='progress-bar'>
            <a
              className={styles.description}
              href="/progress-bar" >Progress-Bar</a>
          </li>
          <li key='whac-a-mole'>
            <a
              className={styles.description}
              href="/whac-a-mole" >Whac-A-Mole</a>
          </li>
          <li key='infinite-scroll'>
            <a
              className={styles.description}
              href="/infinite-scroll" >Infinite-Scroll</a>
          </li>
        </ul>


      </main>
    </div>
  );
}
