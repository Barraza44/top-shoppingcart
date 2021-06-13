import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header({headerStyle, BoxColor}) {
  return(
    <header className={headerStyle === "header1" ? styles.header : styles.header2}>
      <h1 className={styles.dock}><Link href="/">The Dock</Link></h1>
      <ul className={styles.list}>
        <li className={styles.listItem}><Link href="/Shop">Index</Link></li>
        <li className={styles.listItem}>About</li>
        <li>
          <Image
            src={BoxColor === "Black" ? "/BoxBlack.svg" : "/Box.svg"}
            alt="shopping bag"
            width={39}
            height={48}
          />
        </li>
      </ul>
    </header>
  )
}
