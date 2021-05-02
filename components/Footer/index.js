import Image from "next/image"
import { Flex } from "@chakra-ui/react"

import MediaLinks from "./MediaLinks"
import MadeWith from "./MadeWith"

export default function index() {
  return (
    <Flex
      borderTop="3px solid #3a8069"
      p="0.3rem"
      alignItems="center"
      justifyContent="space-around"
    >
      <Image src="/logo-vert.png" height={40} width={90} alt="Mo'men Logo" />
      <MadeWith />
      <MediaLinks />
    </Flex>
  )
}
