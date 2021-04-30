import Head from "next/head"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Featured from "@/components/Featured"

import { getFeaturedDesigns } from "../lib/api"

export default function Home({ designs }) {
  return (
    <>
      <Head>
        <title>Mo'men's Gallery -- Home</title>
      </Head>
      <Navbar />
      <Hero />
      <Featured designs={designs} />
    </>
  )
}

export async function getStaticProps() {
  const { designs } = await getFeaturedDesigns()

  return {
    props: {
      designs,
    },
    revalidate: 1800,
  }
}
