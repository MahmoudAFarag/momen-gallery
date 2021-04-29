import { Text } from "@chakra-ui/react"

export default function Slogan() {
  return (
    <Text
      fontSize={{ base: "13px", md: "15px", lg: "16px" }}
      fontFamily="primary"
      letterSpacing={{ base: "1px", md: "3px", lg: "5px" }}
      textTransform="uppercase"
      mt="0.4rem"
    >
      Designs you cant ignore
    </Text>
  )
}
