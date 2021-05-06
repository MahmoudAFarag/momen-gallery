import { Heading } from '@chakra-ui/react'

export default function Header({ text }) {
  const headingAfterStyles = {
    display: 'block',
    content: '""',
    width: '100%',
    height: '0.25rem',
    marginTop: '0.1rem',
    borderRadius: '6px',
    backgroundColor: 'backgroundLight',
  }

  return (
    <Heading
      display="inline-block"
      fontSize="1.5rem"
      fontFamily="bold"
      textTransform="uppercase"
      letterSpacing="1.5px"
      ml="4"
      _after={headingAfterStyles}
    >
      {text}
    </Heading>
  )
}
