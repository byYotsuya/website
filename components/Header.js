import { Box, Container, Flex, Spacer } from '@chakra-ui/layout'
import { Center } from '@chakra-ui/react'
import React from 'react'
import SearchButton from './partials/SearchButton'
import TitleHeader from './partials/TitleHeader'

export default function Header() {

  return (

    <Container maxWidth="100%" background={'#f1f5f9'}>

      <Container maxW="container.2xl" paddingX="5rem" paddingY="5">
        <header>
          <Flex height="60px" alignItems="center" justifyContent="center">
            <Box alignItems="flex-start" alignContent="flex-start" >
              <TitleHeader />
            </Box>

            <Spacer />

            <Box>
              <Center >
                <SearchButton />
              </Center>
            </Box>


          </Flex>
        </header>
      </Container>
    </Container>
  )
}
