import { ChakraProvider } from "@chakra-ui/react"

import { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"

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
