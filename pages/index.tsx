import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css';
import Header from "../components/Header";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";
import Cart from "../components/Cart";
import useLocalStorage from "../useLocalStorage";

export default function Home() {
  const [display, setDisplay] = useState(false);
  const toggleDisplay = () => setDisplay(!display);
  const [items, setItems] = useLocalStorage<Array<string>>("items", [])

  useEffect(() => {
    setItems(items);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>The Dock</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/luh8isz.css" />
      </Head>

      <div className={styles.wrap}>
        <Image
          src="/images/fern.jpg"
          alt="image of a big fern"
          layout="fill"
          objectFit="cover"
          quality={69}
          priority={true}
        />
      </div>

      <Header
        headerStyle={"header1"}
        BoxColor={"White"}
        toggleDisplay={toggleDisplay}
        items={items}
      />

      <main className={styles.content}>
        {display &&
        <div className="cartContainer">
          <Cart toggleDisplay={toggleDisplay}/>
        </div>}
        <h1 className={styles.heroText}>The plant you were looking for</h1>
        <motion.button
          className={styles.button}
          whileHover={{scale: 1.2, backgroundColor: "#343f45"}}
          whileTap={{scale: 0.8}}
        >
          <Link href="/Shop">Shop Now</Link>
        </motion.button>
      </main>
    </div>
  )
}
