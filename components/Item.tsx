import React, {useState, useEffect} from "react";
import Image from "next/image";
import styles from "../styles/item.module.css";
import useLocalStorage from "../useLocalStorage";
import Plant from "../Plant";
import {motion, Variants} from "framer-motion";

export default function Item({id, name, price, description, src, pop}) {
  const [count, setCount] = useState(1);
  const [items, setItems] = useLocalStorage<Array<Plant>>("items", []);
  useEffect(() => {
    setItems(items);
  }, []);

  const itemVariants: Variants = {
    start: {
      y: "100vh",
      opacity: 0
    },
    animation: {
      y: 0,
      opacity: 100,
      transition: {
        type: "spring",
        bounce: 0.10
      }
    }
  }

  return (
    <motion.div className={styles.itemContainer} variants={itemVariants}>
      <div className={styles.imageContainer}>
        <Image
          src={src}
          width={175}
          height={150}
          layout="intrinsic"
        />
      </div>
      <h3>{name}</h3>
      <div className={styles.toggleContainer}>
        <Image
          src="/images/remove.svg"
          width={20}
          height={20}
          layout={"intrinsic"}
          onClick={() => count - 1 === 0 ? pop(id) : setCount(count - 1)}
        />
        <p>{count}</p>
        <Image
          src="/images/add.svg"
          width={15}
          height={15}
          layout={"intrinsic"}
          onClick={() => setCount(count + 1)}
        />
      </div>
      <p>{price}</p>
    </motion.div>
  )
}
