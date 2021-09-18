import React, {useEffect, useState} from "react";
import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { motion } from "framer-motion";
import useLocalStorage from "../useLocalStorage";
import Item from "./Item";
import Plant from "../Plant";

export default function Cart({toggleDisplay, itemsArray, setItemsArray, pop}) {
  const [items, setItems] = useLocalStorage<Array<Plant>>("items", []);
  const [total, setTotal] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0)

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setItems(items);
  }, []);

  useEffect(() => {
    return () => setItems(itemsArray);
  })

  useEffect(() => {
    if(total < 0) setTotal(0);
  },[total]);


  const cartVariantsDesktop = {
    start: {
      opacity: 0,
      x: innerWidth < 768 ? 150 : 500,
      scaleX: 0,
    },
    animation: {
      opacity: 100,
      scaleX: 1,
      x: 0,
      transition: {
        duration: 0.5, type: "spring", staggerChildren: 0.2
      }
    },
    out: {
      opacity: 0,
      scaleX: 0,
      x: innerWidth < 768 ? 150 : 500
    }
  }

  const calculatePrice = (qty, price) => {
    setTotal(total => total + (qty * price));
  }

  return(
    <motion.div className="cartContainer" onClick={toggleDisplay}>
      <motion.div
        className={styles.cart}
        variants={cartVariantsDesktop}
        initial="start"
        animate="animation"
        exit="out"
        onClick={(e) => e.stopPropagation()}
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
              calculatePrice={calculatePrice}
            />
          ))}
        </div>
        <p>Total: ${total.toFixed(2)}</p>
      </motion.div>
    </motion.div>
  );
}
