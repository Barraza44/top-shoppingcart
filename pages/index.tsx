import Head from 'next/head'
import Image from "next/image";
import styles from '../styles/Home.module.css';
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/luh8isz.css" />
      </Head>

      <div className={styles.wrap}>
        <Image
          src="/images/pexels-daniel-frese-1055379.jpg"
          alt="image of a big fern"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority={true}
        />
      </div>
      <Header />
      <main className={styles.content}>
        <h1 className={styles.heroText}>The plant you were looking for</h1>
        <button className={styles.button}>Shop Now</button>
      </main>
    </div>
  )
}
