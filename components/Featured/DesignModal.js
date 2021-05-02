import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Image,
  Button,
  Spinner,
} from "@chakra-ui/react"
import { useState } from "react"

export default function DesignModal({ isOpen, title, image, onClose }) {
  const [loading, isLoading] = useState(true)
  const cleanURL = image.replace(/(.*)\.[^.]+$/, "$1")

  return (
    <Modal onClose={onClose} size="3xl" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent top={{ base: "-3rem", "2xl": "3rem" }}>
        <ModalHeader textTransform="uppercase">{`${title} - Full Design`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {loading && <Spinner size="xl" position="absolute" left="50%" />}
          <Image
            src={`${cleanURL}.webp`}
            alt={title}
            objectFit="cover"
            visibility={loading ? "hidden" : "visible"}
            onLoad={() => isLoading(false)}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
