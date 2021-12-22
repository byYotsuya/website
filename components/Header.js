import { Box, Container, Flex, Spacer } from '@chakra-ui/layout'
import { Center, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import SearchButton from './partials/SearchButton'
import TitleHeader from './partials/TitleHeader'

      
export default function Header({background = "#f1f5f9"}) {

  return (

    <Container maxWidth="100%" background={background}>

      <Container maxW="container.2xl" paddingX="5rem" paddingY="5">
        <header>
          <Flex height="40px" alignItems="center" justifyContent="center">
            <Box alignItems="flex-start" alignContent="flex-start" >
              <Link href="/">
                <a>
                  <TitleHeader />
                </a>
              </Link>
            </Box>

            <Spacer />

            <Box mx={5}>
              <Link href="/p/about-me">
                <a>
                  <Text fontSize="xl" fontWeight="bold" fontFamily="Poppins">
                    Sobre mí
                  </Text>
                </a>
              </Link>
            </Box>

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
