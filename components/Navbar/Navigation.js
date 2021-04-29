import NextLink from "next/link"
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react"
import { FaPhoneAlt } from "react-icons/fa"
import { IconContext } from "react-icons"

export default function Navigation() {
  return (
    <Breadcrumb
      separator=""
      fontSize={{ base: "0.8rem", lg: "0.9rem" }}
      textTransform="uppercase"
      m={4}
      fontFamily="primary"
      display={{ base: "none", md: "flex", lg: "flex" }}
    >
      <BreadcrumbItem
        mr="1.6rem"
        paddingLeft="1rem"
        borderRadius="5px"
        _hover={{ backgroundColor: "backgroundLight" }}
        height="100%"
        transition="background-color 0.4s ease-in-out"
      >
        <NextLink href="/designs">All Designs</NextLink>
      </BreadcrumbItem>

      <BreadcrumbItem
        mr="2rem"
        paddingLeft="1rem"
        borderRadius="5px"
        _hover={{ backgroundColor: "backgroundLight" }}
        height="100%"
        transition="background-color 0.4s ease-in-out"
      >
        <NextLink href="/about">About</NextLink>
      </BreadcrumbItem>

      <BreadcrumbItem
        bg="secondary"
        color="background"
        mr="1rem"
        p="0.7rem"
        borderRadius="5px"
        _hover={{ backgroundColor: "secondaryLight" }}
        transition="background-color 0.4s ease-in-out"
      >
        <NextLink href="/contact">Contact</NextLink>
        <IconContext.Provider value={{ style: { marginLeft: "1rem" } }}>
          <FaPhoneAlt />
        </IconContext.Provider>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
