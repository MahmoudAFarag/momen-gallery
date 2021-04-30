import { ChakraProvider } from "@chakra-ui/react"

import { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"

import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/900.css"

import theme from "../themes/theme"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
