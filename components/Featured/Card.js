import {
  SimpleGrid,
  Spacer,
  Text,
  Tag,
  TagRightIcon,
  TagLabel,
  useDisclosure,
} from "@chakra-ui/react"
import { FaAdobe } from "react-icons/fa"

import DetailsLayout from "./DetailsLayout"
import Date from "./Date"
import BoxOverlay from "./BoxOverlay"
import DesignModal from "./DesignModal"

export default function Card({ design }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <SimpleGrid
        data-aos="zoom-in-up"
        height={{ base: "160px", md: "180px", lg: "300px", "2xl": "400px" }}
        border="2px solid #4f4846"
      >
        <BoxOverlay
          image={design.Image.url}
          title={design.Title}
          onOpen={onOpen}
        />
        <DesignModal
          title={design.Title}
          image={design.Image.url}
          onClose={onClose}
          isOpen={isOpen}
        />

        <DetailsLayout>
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
            fontWeight="700"
            textTransform="uppercase"
            fontFamily="primary"
          >
            {design.Title}
          </Text>
          <Spacer />
          <Text
            fontSize={{ md: "11px", lg: "13px", "2xl": "sm" }}
            fontWeight="700"
            fontFamily="primary"
            mr="0.4rem"
            textTransform="uppercase"
          >
            <Date dateString={design.created_at} />
          </Text>
        </DetailsLayout>
      </SimpleGrid>
    </>
  )
}
