import React, {useEffect, useState} from "react";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/Shop.module.css"
import plantData from "../../plantData.json";
import {AnimatePresence} from "framer-motion";
import PlantCard from "../../components/PlantCard";
import CategoryList from "../../components/CategoryList";
import Cart from "../../components/Cart";
import useLocalStorage from "../../useLocalStorage";

export default function Index({plantData}) {
  const [display, setDisplay] = useState(false);
  const toggleDisplay = () => setDisplay(!display);

  let [items, setItems] = useLocalStorage<Array<string>>("items", []);
  const [itemsArray, setItemsArray] = useState([]);

  useEffect(() => {
    // @ts-ignore
    setItems(items);
    setItemsArray(items);
    return () => setItems(itemsArray);
  }, [])

  const pop = itemId => {
    setItemsArray(itemsArray.filter(item => item.id !== itemId));
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
        <meta name="description" content="Website created to showcase routing in React. Part of The Odin Project curriculums"/>
      </Head>

      <Header
        headerStyle={"header2"}
        BoxColor={"Black"}
        toggleDisplay={toggleDisplay}
        items={itemsArray}
      />

      <main className={styles.page}>
        <AnimatePresence>
          {display &&
          <Cart
            toggleDisplay={toggleDisplay}
            itemsArray={itemsArray}
            setItemsArray={setItemsArray}
            pop={pop}
          />
          }
        </AnimatePresence>
        <h2 className={styles.title}>Shop</h2>
        <div className={styles.content}>
          <CategoryList />
          <div className={styles.products}>
            {plantData.map(plant => (
              <PlantCard
                key={plant.id}
                src={plant.src}
                name={plant.name}
                price={plant.price}
                id={plant.id}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      plantData
    },
  }
}
