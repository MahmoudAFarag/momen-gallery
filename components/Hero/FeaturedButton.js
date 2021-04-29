import { Button } from "@chakra-ui/react"
import { FaAngleDoubleDown } from "react-icons/fa"

export default function FeaturedButton({ scrollToFeatured }) {
  return (
    <Button
      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
      textTransform="uppercase"
      p="1.5rem"
      mt="2rem"
      colorScheme="green"
      rightIcon={<FaAngleDoubleDown />}
      onClick={scrollToFeatured}
    >
      Go to featured
    </Button>
  )
}
