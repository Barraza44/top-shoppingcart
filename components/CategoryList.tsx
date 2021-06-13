import React from "react";
import styles from "../styles/Category.module.css";

export default function CategoryList() {
  return (
    <aside>
      <h2 className={styles.title}>Plants</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>Large</li>
        <li className={styles.listItem}>Medium</li>
        <li className={styles.listItem}>Small</li>
      </ul>
    </aside>
  )

}
