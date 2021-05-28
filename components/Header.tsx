import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header() {
  return(
    <header className={styles.header}>
      <h1 className={styles.dock}>The Dock</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>Shop</li>
        <li className={styles.listItem}>About</li>
        <li>
          <Image
            src="/Box.svg"
            alt="shopping bag"
            width={39}
            height={48}
          />
        </li>
      </ul>
    </header>
  )
}
