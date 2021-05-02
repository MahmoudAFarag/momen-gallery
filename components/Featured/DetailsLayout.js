import { Flex } from "@chakra-ui/react"

export default function DetailsLayout({ children }) {
  return (
    <Flex
      padding="0.5rem"
      alignItems="center"
      width="100%"
      bg="#ece9ec"
      alignSelf="flex-end"
      zIndex="2"
    >
      {children}
    </Flex>
  )
}
