import Head from 'next/head';
import styles from './styles.module.scss';
import Link from 'next/link';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Country House | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.container}>
        <div className={styles.containerLeft}>
          <div className={styles.contentText}>
            Country<span className={styles.span}>&</span>House O lugar para
            encontrar belos caminhos.
          </div>
          <img src="/Assets/frame.svg" alt="frame" className={styles.image} />
        </div>
        <div className={styles.card}>
          <img src="/Assets/img.png" className="Tilt-inner" alt="frame" />
          <Link href="/map" passHref>
            <a className={styles.btn}>Locais disponíveis no mapa</a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
