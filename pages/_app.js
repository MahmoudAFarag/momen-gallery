import "../public/global.css"
import { useEffect } from "react"
import { ChakraProvider } from "@chakra-ui/react"

import AOS from "aos"
import "aos/dist/aos.css"

import theme from "../themes/theme"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
        media="print"
        onLoad={() => (this.media = "all")}
      /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
