import NextLink from "next/link"
import { Link } from "@chakra-ui/react"

const headingAfterStyles = {
  display: "block",
  content: '""',
  width: "100%",
  height: "0.25rem",
  marginTop: "0.1rem",
  borderRadius: "6px",
  backgroundColor: "backgroundLight",
}

export default function Logo() {
  return (
    <NextLink href="/asd">
      <Link
        m="4"
        href="/asd"
        fontFamily="primary"
        fontSize="1.6rem"
        fontWeight="700"
        _after={headingAfterStyles}
        _hover={{ textDecoration: "none" }}
      >
        Mo'men Designs
      </Link>
    </NextLink>
  )
}
