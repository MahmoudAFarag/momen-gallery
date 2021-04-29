import { extendTheme } from "@chakra-ui/react"

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
