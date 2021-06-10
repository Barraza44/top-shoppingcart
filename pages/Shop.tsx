import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Shop.module.css"
import plantData from "../plantData.json";
import PlantCard from "../components/PlantCard";

export default function Shop({plantData}) {
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

      <Header headerStyle={"header2"} BoxColor={"Black"}/>
      <main className={styles.page}>
        <h2 className={styles.title}>Shop</h2>
        <div className={styles.content}>
          <aside>
            <p>A list</p>
          </aside>
          <div className={styles.products}>
            {plantData.map(plant => (
              <PlantCard
                key={plant.id}
                src={plant.src}
                name={plant.name}
                price={plant.price}
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
