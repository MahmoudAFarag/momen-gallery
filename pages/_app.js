import "../public/global.css"
import { useEffect } from "react"
import { ChakraProvider } from "@chakra-ui/react"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import AOS from "aos"
import "aos/dist/aos.css"

import theme from "../themes/theme"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
