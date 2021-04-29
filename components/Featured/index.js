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
        <Box
          data-aos="zoom-in-up"
          bg="tomato"
          height={{ base: "150", md: "180", lg: "250px" }}
        ></Box>
        <Box
          data-aos="zoom-in-up"
          bg="tomato"
          height={{ base: "150", md: "180", lg: "250px" }}
        ></Box>
        <Box
          data-aos="zoom-in-up"
          bg="tomato"
          height={{ base: "150", md: "180", lg: "250px" }}
        ></Box>
        <Box
          data-aos="zoom-in-up"
          bg="tomato"
          height={{ base: "150", md: "180", lg: "250px" }}
        ></Box>
        <Box
          data-aos="zoom-in-up"
          bg="tomato"
          height={{ base: "150", md: "180", lg: "250px" }}
        ></Box>
        <Box
          data-aos="zoom-in-up"
          bg="tomato"
          height={{ base: "150", md: "180", lg: "250px" }}
        ></Box>
      </SimpleGrid>
    </>
  )
}
