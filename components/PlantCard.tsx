import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css"

export default function PlantCard({src, name, price}) {
  return (
    <div className={styles.card}>
      <div className={styles.images}>
        <Image
          src={src}
          width={298}
          height={295}
          objectFit={"cover"}
        />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>{`$${price}`}</p>
    </div>
  )
}
