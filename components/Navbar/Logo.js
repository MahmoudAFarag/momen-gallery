import NextLink from "next/link"
import { Link } from "@chakra-ui/react"

export default function Logo() {
  const headingAfterStyles = {
    display: "block",
    content: '""',
    width: "100%",
    height: "0.25rem",
    marginTop: "0.1rem",
    borderRadius: "6px",
    backgroundColor: "backgroundLight",
  }

  return (
    <NextLink href="/">
      <Link
        m="4"
        fontFamily="primary"
        fontSize={{ base: "1.2rem", lg: "1.5rem" }}
        fontWeight="700"
        textTransform="uppercase"
        _after={headingAfterStyles}
        _hover={{ textDecoration: "none" }}
      >
        Mo'men Gallery
      </Link>
    </NextLink>
  )
}
