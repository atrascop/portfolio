import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Med Baghough. All Rights Reserved.
    </Box>
  )
}

export default Footer
