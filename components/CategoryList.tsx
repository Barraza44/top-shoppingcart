import React from "react";
import styles from "../styles/Category.module.css";
import Link from "next/link"

export default function CategoryList() {
  return (
    <aside>
      <h2 className={styles.title}>Plants</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}><Link href="/Shop/Large">Large</Link></li>
        <li className={styles.listItem}><Link href="/Shop/Medium">Medium</Link></li>
        <li className={styles.listItem}><Link href="/Shop/Small">Small</Link></li>
      </ul>
    </aside>
  )

}
