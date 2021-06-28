import React from "react";
import plantData from "../../../plantData.json";
import Head from "next/head";
import Image from "next/image";
import Header from "../../../components/Header";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import styles from "../../../styles/Product.module.css"

export default function Product({id, name, price, description, src, potColor}) {
  return(
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

      <Header headerStyle="header2" BoxColor="Black" />
      <main className={styles.page}>
        <Image
          src={src}
          width={333}
          height={230}
          layout="responsive"
        />
        <section>
          <div className={styles.titleGroup}>
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.price}>${price}</p>
          </div>
          <p className={styles.description}>{description}</p>
          <div>
            <p className={styles.pot}>Pot Color</p>
            <motion.div
              className={styles.potColor}
              initial={{
                backgroundColor: potColor
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
