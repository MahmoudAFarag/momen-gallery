import { Text } from "@chakra-ui/react"
import { IconContext } from "react-icons"
import { FaHeart } from "react-icons/fa"

export default function MadeWith() {
  return (
    <Text as="footer" textTransform="uppercase" fontSize="0.95rem">
      Made with
      <IconContext.Provider
        value={{
          color: "red",
          style: {
            display: "inline-block",
            marginRight: "0.5rem",
            marginLeft: "0.5rem",
          },
        }}
      >
        <FaHeart />
      </IconContext.Provider>
      for Mo'men Designs
    </Text>
  )
}
