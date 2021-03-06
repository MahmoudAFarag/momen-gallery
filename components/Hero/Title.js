import { Heading } from "@chakra-ui/react"

export default function Title() {
  return (
    <Heading
      as="h1"
      color="background"
      textShadow="0 0 2px #000"
      fontSize={{
        base: "1.6rem",
        md: "2.7rem",
        lg: "4rem",
        "2xl": "6rem",
      }}
      fontFamily="primary"
      fontWeight="700"
      textTransform="uppercase"
      letterSpacing={{ base: "3px", md: "5px", lg: "5px", "2xl": "6px" }}
    >
      Mo'men Designs
    </Heading>
  )
}
