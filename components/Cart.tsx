import React, {useEffect, useState} from "react";
import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { motion } from "framer-motion";
import useLocalStorage from "../useLocalStorage";
import Item from "./Item";
import Plant from "../Plant";

export default function Cart({toggleDisplay, itemsArray, setItemsArray, pop}) {
  const [items, setItems] = useLocalStorage<Array<Plant>>("items", []);

  useEffect(() => {
    setItems(items);
  }, []);

  useEffect(() => {
    return () => setItems(itemsArray);
  })

  const cartVariants = {
    start: {
      x: "100vw"
    },
    animation: {
      x: 0,
      transition: {
        duration: 0.5, type: "spring", staggerChildren: 0.2
      }
    },
    out: {
      x: "100vw"
    }
  }

  return(
    <motion.div className="cartContainer">
      <motion.div
        className={styles.cart}
        variants={cartVariants}
        initial="start"
        animate="animation"
        exit="out"
      >
        <div className={styles.titleContainer}>
          <h2 className={styles.cartTitle}>Cart</h2>
          <div onClick={toggleDisplay} className={styles.cross}>
            <Image
              src="/close.svg"
              width={44}
              height={44}
              layout="intrinsic"
            />
          </div>
        </div>
        <div>
          {itemsArray.map(item => (
            <Item
              key={item.id}
              id={item.id}
              src={item.src}
              name={item.name}
              price={item.price}
              description={item.description}
              pop={pop}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
