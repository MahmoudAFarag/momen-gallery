import { extendTheme } from "@chakra-ui/react"

import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/900.css"

const theme = extendTheme({
  colors: {
    background: "#fdf8f5",
    backgroundLight: "#e8cebf",
    secondary: "#266150",
    secondaryLight: "#318069",
  },
  fonts: {
    primary: "Montserrat",
  },
  styles: {
    global: {
      body: {
        bg: "#fdf8f5",
      },
    },
  },
})

export default theme
