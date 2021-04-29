import { Heading } from "@chakra-ui/react"

export default function Header() {
  const headingAfterStyles = {
    display: "block",
    content: '""',
    width: "100%",
    height: "0.25rem",
    marginTop: "0.2rem",
    borderRadius: "6px",
    backgroundColor: "backgroundLight",
  }

  return (
    <Heading
      ml="4"
      mt="8"
      fontFamily="primary"
      fontSize={{ base: "1.2rem", lg: "1.5rem" }}
      fontWeight="700"
      textTransform="uppercase"
      display="inline-block"
      _after={headingAfterStyles}
    >
      Featured Designs:
    </Heading>
  )
}
