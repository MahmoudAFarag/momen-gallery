import { Text } from "@chakra-ui/react"

export default function Slogan() {
  return (
    <Text
      fontSize={{ base: "0.6rem", md: "0.8rem", lg: "0.9rem" }}
      fontFamily="primary"
      letterSpacing="5px"
      textTransform="uppercase"
      mt="0.4rem"
    >
      Designs you cant ignore
    </Text>
  )
}
