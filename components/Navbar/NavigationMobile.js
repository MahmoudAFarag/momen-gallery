import NextLink from "next/link"
import { Flex, Link } from "@chakra-ui/react"

export default function NavigationMobile() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      mt="1rem"
      fontSize="1rem"
      textTransform="uppercase"
      display={{ base: "flex", md: "none", lg: "none" }}
    >
      <NextLink href="/designs">
        <Link _hover={{ textDecoration: "none" }}>All Desgins</Link>
      </NextLink>
      <NextLink href="/about">
        <Link mt="0.5rem" _hover={{ textDecoration: "none" }}>
          About
        </Link>
      </NextLink>
      <NextLink href="/contact">
        <Link mt="0.5rem" _hover={{ textDecoration: "none" }}>
          contact
        </Link>
      </NextLink>
    </Flex>
  )
}
