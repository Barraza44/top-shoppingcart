import React, {useEffect, useState} from "react";
import plantData from "../../../plantData.json";
import Head from "next/head";
import Image from "next/image";
import Header from "../../../components/Header";
import {motion} from "framer-motion";
import {GetServerSideProps} from "next";
import styles from "../../../styles/Product.module.css"
import Cart from "../../../components/Cart";
import useLocalStorage from "../../../useLocalStorage";

export default function Product(props) {
  const [display, setDisplay] = useState(false);
  const toggleDisplay = () => setDisplay(!display);
  let [items, setItems] = useLocalStorage<Array<string>>("items", []);

  useEffect(() => {
    // @ts-ignore
    setItems(items);
  }, [])

  const addItemToBag = () => {
    let currentItem = JSON.stringify(props);
    let itemsString = JSON.stringify(items);
    if (!(itemsString.includes(currentItem))) {
      setItems([...items, props]);
    }
    setDisplay(true);
  }

  return (
    <>
      <Head>
        <title>The Dock | Shop </title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"/>
        <link rel="stylesheet" href="https://use.typekit.net/luh8isz.css"/>
      </Head>

      <Header
        headerStyle={"header2"}
        BoxColor={"Black"}
        toggleDisplay={toggleDisplay}
        items={items}
      />

      <main className={styles.page}>
        {display &&
        <div className="cartContainer">
          <Cart toggleDisplay={toggleDisplay}/>
        </div>}
        <Image
          src={props.src}
          width={333}
          height={230}
          layout="responsive"
          quality={70}
        />
        <section>
          <div className={styles.titleGroup}>
            <h2 className={styles.title}>{props.name}</h2>
            <p className={styles.price}>${props.price}</p>
          </div>
          <p className={styles.description}>{props.description}</p>
          <div>
            <p className={styles.pot}>Pot Color</p>
            <motion.div
              className={styles.potColor}
              initial={{
                backgroundColor: props.potColor
              }}
            />
          </div>
          <motion.button
            className={styles.cartBtn}
            initial={{
              backgroundColor: "#70C24CFF"
            }}
            whileHover={{
              backgroundColor: "#354046"
            }}
            transition={{
              ease: "easeInOut"
            }}
            onClick={addItemToBag}
          >
            Add to cart
          </motion.button>
        </section>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  // @ts-ignore
  const data = plantData[params.id - 1];
  return {
    props: data
  }
}
