import React from "react";
import styles from "../styles/Category.module.css";

export default function CategoryList() {
  return (
    <aside>
      <h2 className={styles.title}>Plants</h2>
      <ul>
        <li>Large</li>
        <li>Medium</li>
        <li>Small</li>
      </ul>
    </aside>
  )

}
