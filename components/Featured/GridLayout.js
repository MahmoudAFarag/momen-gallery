import { SimpleGrid } from "@chakra-ui/react"

export default function GridLayout({ children }) {
  return (
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
      {children}
    </SimpleGrid>
  )
}
