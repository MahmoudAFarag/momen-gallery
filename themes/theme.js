import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    background: "#fdf8f5",
    backgroundLight: "#e8cebf",
    secondary: "#266150",
    secondaryLight: "#318069",
  },
  fonts: {
    primary:
      "montserratregular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
    bold:
      "montserratbold, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
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
