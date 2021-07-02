import React from "react";
import styles from "../styles/Header.module.css"; 
import Link from "next/link";
import Bag from "./Bag";

export default function Header({headerStyle, BoxColor, toggleDisplay, items}) {
  return(
    <header className={headerStyle === "header1" ? styles.header : styles.header2}>
      <h1 className={styles.dock}><Link href="/">The Dock</Link></h1>
      <ul className={styles.list}>
        <li className={styles.listItem}><Link href="/Shop/">Shop</Link></li>
        <li className={styles.listItem}>About</li>
        <li onClick={toggleDisplay}>
         <Bag color={BoxColor} items={items} />
        </li>
      </ul>
    </header>
  )
}
