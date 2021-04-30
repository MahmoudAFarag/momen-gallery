import NextImage from "next/image"
import {
  SimpleGrid,
  Flex,
  Spacer,
  Text,
  Tag,
  TagRightIcon,
  TagLabel,
} from "@chakra-ui/react"

import { FaAdobe } from "react-icons/fa"
import Date from "./Date"

export default function Card({ design }) {
  return (
    <>
      <SimpleGrid
        data-aos="zoom-in-up"
        height={{ base: "160px", md: "180px", lg: "300px", "2xl": "400px" }}
        border="2px solid #4f4846"
      >
        <NextImage
          src={design.Image.url}
          alt={design.Title}
          layout="fill"
          objectFit="cover"
        />
        <Flex
          padding="0.5rem"
          alignItems="center"
          width="100%"
          bg="#ece9ec"
          alignSelf="flex-end"
          zIndex="2"
        >
          <Tag
            variant="solid"
            colorScheme="teal"
            ml="0.4rem"
            fontFamily="primary"
          >
            <TagRightIcon boxSize="12px" as={FaAdobe} ml="3px" />
            <TagLabel ml="8px">{design.Tag}</TagLabel>
          </Tag>
          <Spacer />
          <Text
            fontSize={{ md: "11px", lg: "13px", "2xl": "sm" }}
            fontWeight="800"
            textTransform="uppercase"
            fontFamily="primary"
          >
            {design.Title}
          </Text>
          <Spacer />
          <Text
            fontSize={{ md: "11px", lg: "13px", "2xl": "sm" }}
            fontWeight="800"
            fontFamily="primary"
            mr="0.4rem"
            textTransform="uppercase"
          >
            <Date dateString={design.created_at} />
          </Text>
        </Flex>
      </SimpleGrid>
    </>
  )
}
