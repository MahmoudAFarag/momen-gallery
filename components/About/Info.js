import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react"

export default function Info() {
  return (
    <SimpleGrid
      alignItems="center"
      my="2rem"
      mx="3rem"
      templateColumns="1.5fr 1fr"
      bg="#eee"
      borderRadius="3px"
      p="1.3rem"
      boxShadow="1px 1px 3px 0px #000"
    >
      <Box ml="2rem" fontFamily="primary" data-aos="fade-right">
        <Text
          display="inline-block"
          fontFamily="bold"
          fontSize="14px"
          textTransform="uppercase"
          letterSpacing="2px"
          border="2px solid #98a2a3"
          p="0.7rem"
        >
          Who Am I ?
        </Text>
        <Text mt="2rem" width="55ch">
          A passionate designer who loves to tinker with the world of art and
          design. I specialize in making social media logos / covers along with
          marketing banners.
        </Text>
        <Text mt="2rem" width="55ch">
          With determination and passion, I was able to deliver many designs
          that helped companies push their limits and express their ideas to
          their customers in an illustrative and compassionate way!
        </Text>
      </Box>
      <Image
        src="/about-img.webp"
        height="400px"
        borderRadius="5%"
        margin="0 auto"
      />
    </SimpleGrid>
  )
}
