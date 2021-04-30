import { SimpleGrid, Box } from "@chakra-ui/react"
import Header from "./Header"

export default function index() {
  return (
    <>
      <Header />
      <SimpleGrid
        minChildWidth={{
          base: "250px",
          md: "320px",
          lg: "460px",
          "2xl": "600px",
        }}
        spacing={{ base: "60px", md: "50px", lg: "40px", "2xl": "60px" }}
        my="2rem"
        mx="2rem"
      >
        <Box
          data-aos="zoom-in-up"
          bg="tomato"
          height={{ base: "150", md: "180", lg: "300px", "2xl": "400px" }}
        ></Box>
        <Box
          data-aos="zoom-in-up"
          bg="tomato"
          height={{ base: "150", md: "180", lg: "300px", "2xl": "400px" }}
        ></Box>
        <Box
          data-aos="zoom-in-up"
          bg="tomato"
          height={{ base: "150", md: "180", lg: "300px", "2xl": "400px" }}
        ></Box>
        <Box
          data-aos="zoom-in-up"
          bg="tomato"
          height={{ base: "150", md: "180", lg: "300px", "2xl": "400px" }}
        ></Box>
      </SimpleGrid>
    </>
  )
}
