import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          voluptate non saepe, enim beatae minima quas vero iusto, at et labore
          repellendus adipisci, eos voluptas repellat aperiam omnis distinctio
          unde!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus
          incidunt est odit atque dignissimos ipsum aspernatur voluptates nemo
          qui. Nisi, illum excepturi? Temporibus, molestiae alias optio
          dignissimos esse dolorem.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
