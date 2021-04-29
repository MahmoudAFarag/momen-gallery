import { Box } from "@chakra-ui/react"
import { Turn as Hamburger } from "hamburger-react"

export default function BurgerMobile({ isOpen, onOpen }) {
  return (
    <Box display={{ base: "block", md: "none", lg: "none" }} mr="0.4rem">
      <Hamburger
        toggled={isOpen}
        toggle={onOpen}
        direction="right"
        distance="md"
        rounded
        label="Show Menu"
      />
    </Box>
  )
}
