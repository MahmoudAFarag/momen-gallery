import { Box, Link } from "@chakra-ui/react"
import { IconContext } from "react-icons"
import { AiFillBehanceSquare } from "react-icons/ai"
import { FaFacebook, FaInstagram } from "react-icons/fa"

export default function MediaLinks() {
  return (
    <Box>
      <IconContext.Provider
        value={{
          size: "1.3rem",
          style: {
            display: "inline-block",
            marginRight: "0.8rem",
            marginLeft: "0.8rem",
            cursor: "pointer",
          },
        }}
      >
        <Link
          href="https://www.facebook.com/ElMo2Mn"
          isExternal
          aria-label="Facebook"
        >
          <FaFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/moamen_designer14/"
          isExternal
          aria-label="Instagram"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.behance.net/moamenmedh7a4f"
          isExternal
          aria-label="Behance"
        >
          <AiFillBehanceSquare />
        </Link>
      </IconContext.Provider>
    </Box>
  )
}
