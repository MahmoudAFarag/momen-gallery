import { Button } from "@chakra-ui/react"
import { FaAngleDoubleDown } from "react-icons/fa"

export default function FeaturedButton({ scrollToFeatured }) {
  return (
    <Button
      fontSize={{ base: "13px", md: "15px", lg: "16px" }}
      fontFamily="primary"
      textTransform="uppercase"
      p="1.5rem"
      mt="2rem"
      bg="secondaryLight"
      color="background"
      rightIcon={<FaAngleDoubleDown />}
      onClick={scrollToFeatured}
      _hover={{ bg: "secondary" }}
      _active={{ bg: "secondary" }}
    >
      Go to featured
    </Button>
  )
}
