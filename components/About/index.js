import { Flex, VStack, StackDivider } from "@chakra-ui/react"

import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremiere,
} from "react-icons/si"
import { FaFacebookSquare, FaInstagram, FaBehanceSquare } from "react-icons/fa"

import { CgFigma } from "react-icons/cg"
import Info from "./Info"
import TechIcon from "./TechIcon"
import SocialIcon from "./SocialIcon"
import Header from "./Header"

export default function index() {
  return (
    <>
      <Info />
      <Header text="Tech Used:" />

      <Flex
        height="20rem"
        alignItems="center"
        justifyContent="space-around"
        mt="-1rem"
      >
        <TechIcon
          icon={<SiAdobephotoshop />}
          title="Photoshop"
          fill="#3C327B"
        />

        <TechIcon
          icon={<SiAdobeillustrator />}
          title="Illustrator"
          fill="#FF4500"
        />

        <TechIcon icon={<CgFigma />} title="Figma" fill="lightred" />

        <TechIcon icon={<SiAdobepremiere />} title="Premier" fill="purple" />
      </Flex>

      <Header text="Social Media:" />
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={8}
        align="stretch"
        mt="3rem"
        mb="5rem"
        data-aos="fade-right"
      >
        <SocialIcon
          media="facebook"
          fill="blue"
          icon={<FaFacebookSquare />}
          link="https://www.facebook.com/ElMo2Mn"
        />
        <SocialIcon
          media="Instagram"
          fill="#bc2a8d	"
          icon={<FaInstagram />}
          link="https://www.instagram.com/moamen_designer14/"
        />
        <SocialIcon
          media="behance"
          fill="black"
          icon={<FaBehanceSquare />}
          link="https://www.behance.net/moamenmedh7a4f"
        />
      </VStack>
    </>
  )
}
