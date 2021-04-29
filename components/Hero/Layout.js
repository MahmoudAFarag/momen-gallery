import { Flex } from "@chakra-ui/react"

export default function Layout({ children }) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height={{ base: "70vh", md: "75vh", lg: "85vh" }}
      my="0.2rem"
      mx="1rem"
      borderRadius="5px"
      bgPosition="center"
      bgGradient="linear-gradient(to bottom, rgb(232, 206, 191, 0.9), rgba(221, 174, 146, 0.9) ),url('/hero.webp')"
      clipPath="polygon(0 0, 100% 0%, 100% 94%, 0 100%, 0% 50%)"
    >
      {children}
    </Flex>
  )
}
