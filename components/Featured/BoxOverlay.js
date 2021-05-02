import NextImage from "next/image"
import { Box, Button } from "@chakra-ui/react"
import { FaTh } from "react-icons/fa"

import styles from "./Shadow.module.css"

export default function BoxOverlay({ image, title, onOpen }) {
  return (
    <Box className={styles.overlay}>
      <NextImage src={image} alt={title} layout="fill" objectFit="cover" />
      <Button
        variant="solid"
        colorScheme="red"
        textTransform="uppercase"
        p="1.7rem"
        onClick={onOpen}
        rightIcon={<FaTh />}
      >
        View Design
      </Button>
    </Box>
  )
}
