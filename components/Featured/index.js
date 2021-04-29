import { SimpleGrid, Box } from "@chakra-ui/react"
import Header from "./Header"

export default function index() {
  return (
    <>
      <Header />
      <SimpleGrid
        minChildWidth={{ base: "250px", md: "320px", lg: "460px" }}
        spacing={{ base: "60px", md: "50px", lg: "40px" }}
        my="2rem"
        mx="2rem"
      >
        <Box bg="tomato" height={{ base: "150", md: "160", lg: "250px" }}></Box>
        <Box bg="tomato" height={{ base: "150", md: "160", lg: "250px" }}></Box>
        <Box bg="tomato" height={{ base: "150", md: "160", lg: "250px" }}></Box>
        <Box bg="tomato" height={{ base: "150", md: "160", lg: "250px" }}></Box>
        <Box bg="tomato" height={{ base: "150", md: "160", lg: "250px" }}></Box>
        <Box bg="tomato" height={{ base: "150", md: "160", lg: "250px" }}></Box>
      </SimpleGrid>
    </>
  )
}
