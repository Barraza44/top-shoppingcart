import React, {useEffect} from "react";
import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { motion } from "framer-motion";
import useLocalStorage from "../useLocalStorage";

export default function Cart({toggleDisplay}) {
  const [items, setItems] = useLocalStorage<Array<string>>("items", []);
  useEffect(() => {
    setItems(items);
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
    </motion.div>
  );
}
