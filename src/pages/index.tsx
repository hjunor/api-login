import Head from 'next/head';
import styles from './styles.module.scss';
import Link from 'next/link';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Api Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.container}>
        <a
          target="_blank"
          className={styles.button}
          href="https://github.com/hjunor/api-login"
          rel="noreferrer"
        >
          Documentação
        </a>
      </section>
    </div>
  );
};

export default Home;
