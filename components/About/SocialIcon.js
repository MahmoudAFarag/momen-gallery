import { Flex, Link } from "@chakra-ui/react"

import { IconContext } from "react-icons"
import { CgExternal } from "react-icons/cg"

export default function SocialIcon({ media, fill, icon, link }) {
  return (
    <Flex alignItems="center" ml="1rem">
      <IconContext.Provider
        value={{
          size: "2.2rem",
          style: { display: "inline-block", fill },
        }}
      >
        {icon}
      </IconContext.Provider>
      <Link
        href={link}
        isExternal
        fontSize="1rem"
        textTransform="uppercase"
        mx="0.6rem"
      >
        Follow me on {media}!
        <IconContext.Provider
          value={{
            size: "1.4rem",
            style: {
              display: "inline-block",
              fill: "blue",
              marginLeft: "0.5rem",
            },
          }}
        >
          <CgExternal mx="2px" />
        </IconContext.Provider>
      </Link>
    </Flex>
  )
}
