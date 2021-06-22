import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css"

export default function PlantCard({src, name, price, id}) {
  return (
    <Link href={`/Shop/product/${id}`} passHref={true}>
      <a href="">
        <div className={styles.card}>
          <div className={styles.images}>
            <Image
              src={src}
              layout={"fill"}
              objectFit={"cover"}
              sizes={"(max-width: 768px) 221px, 298px"}
            />
          </div>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>{`$${price}`}</p>
        </div>
      </a>
    </Link>
  )
}
