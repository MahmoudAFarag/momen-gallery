import { Flex, Spacer, ScaleFade, useBoolean } from "@chakra-ui/react"

import Logo from "./Logo"
import Navigation from "./Navigation"
import BurgerMobile from "./BurgerMobile"
import NavigationMobile from "./NavigationMobile"

export default function Navbar() {
  const [isOpen, onOpen] = useBoolean()

  return (
    <>
      <Flex alignItems="center">
        <Logo />
        <Spacer />
        <Navigation />
        <BurgerMobile isOpen={isOpen} onOpen={onOpen.toggle} />
      </Flex>
      <ScaleFade initialScale={0.9} in={isOpen} unmountOnExit>
        <NavigationMobile />
      </ScaleFade>
    </>
  )
}
