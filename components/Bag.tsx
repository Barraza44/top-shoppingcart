import React from "react";
import Image from "next/image";
import Styles from "../styles/Bag.module.css"

export default function Bag({ color, items }) {
  return(
    <div className={Styles.bagContainer}>
      <Image
        src={color === "Black" ? "/BoxBlack.svg" : "/Box.svg"}
        alt="shopping bag"
        width={39}
        height={48}
      />
      <p className={Styles.badge}>{items.length}</p>
    </div>
  )
}
