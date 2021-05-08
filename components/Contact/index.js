import { useState } from 'react'
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  CloseButton,
} from '@chakra-ui/react'
import emailjs from 'emailjs-com'
import { MdEmail } from 'react-icons/md'

export default function index() {
  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  function sendEmail(e) {
    setSubmitted(true)
    e.preventDefault()

    emailjs
      .sendForm(
        'service_woj1dyd',
        'template_y0qgidb',
        e.target,
        'user_Cy5m2Qrs1d2vKlm6RxewH'
      )
      .then(
        result => {
          setSubmitted(false)
          setSuccess(true)
          console.log(result.text)
        },
        error => {
          setSubmitted(false)
          setError(true)
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <>
      {success && (
        <Alert status='success' variant='left-accent'>
          <AlertIcon />
          Your order is recieved. You will be contacted soon!
          <CloseButton position='absolute' right='8px' top='8px' />
        </Alert>
      )}

      {error && (
        <Alert status='error' variant='left-accent'>
          <AlertIcon />
          Error Submitting your request :(. Please try again !
        </Alert>
      )}

      <Flex
        minHeight='81vh'
        justifyContent='center'
        alignItems='center'
        direction='column'
      >
        <form style={{ width: '50%' }} onSubmit={sendEmail}>
          <FormControl id='first_name' isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder='First name' name='first_name' />
          </FormControl>

          <FormControl id='last_name' isRequired mt='1rem'>
            <FormLabel>Last name</FormLabel>
            <Input placeholder='Last name' name='last_name' />
          </FormControl>

          <FormControl id='email' isRequired mt='1rem'>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Email' />
          </FormControl>

          <FormControl id='details' isRequired mt='1rem'>
            <FormLabel>Details</FormLabel>
            <Textarea
              placeholder='Please Provide all details of your order'
              size='md'
              name='details'
            />
          </FormControl>

          <Button
            isLoading={submitted}
            loadingText='Submitting'
            colorScheme='teal'
            variant='solid'
            mt='1.5rem'
            mb='1.5rem'
            rightIcon={<MdEmail />}
            type='submit'
          >
            Submit
          </Button>
        </form>
      </Flex>
    </>
  )
}
