import React from "react";
import plantData from "../../../plantData.json";
import Head from "next/head";
import Header from "../../../components/Header";
import { GetServerSideProps } from "next";

export default function Product({id, name, price, src, potColor}) {
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
      <main>

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
