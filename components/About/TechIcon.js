import { Text, Flex } from "@chakra-ui/react"
import { IconContext } from "react-icons"

export default function TechIcon({ icon, title, fill }) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <IconContext.Provider value={{ size: "3.5rem", style: { fill } }}>
        {icon}
      </IconContext.Provider>
      <Text fontFamily="bold" mt="1rem" textTransform="uppercase">
        {title}
      </Text>
    </Flex>
  )
}
