import { Box, SimpleGrid } from '@chakra-ui/layout'
import { Heading, Text } from '@chakra-ui/react'

import React from 'react'

export default function Hero() {


  return (
    <SimpleGrid columns="2" gap="2">

      <Box>
        <Text fontSize="30" fontFamily="Poppins" >Hola, soy</Text>
        <Heading as="h2" fontFamily="Poppins" letterSpacing="4px" fontWeight="bold">Miguel Martínez</Heading>
        <Text fontSize="25">
          Desarrollador <strong>Java</strong>  con +3 años de experiencia. Actualmente desarrollador y freelance en tecnologías web.
        </Text>
      </Box>

      
    </SimpleGrid>
  )
}
