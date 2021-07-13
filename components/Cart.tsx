import React, {useEffect, useState} from "react";
import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { motion } from "framer-motion";
import useLocalStorage from "../useLocalStorage";
import Item from "./Item";
import Plant from "../Plant";

export default function Cart({toggleDisplay}) {
  const [items, setItems] = useLocalStorage<Array<Plant>>("items", []);
  const [itemsArray, setItemsArray] = useState([])

  useEffect(() => {
    setItems(items);
    setItemsArray(items);
  }, []);

  const pop = itemId => {
    setItemsArray(itemsArray.filter(item => item.id !== itemId));
  }

  useEffect(() => {
    return () => setItems(itemsArray);
  })

  return(
    <motion.div className={styles.cart}>
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
  );
}
