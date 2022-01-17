import Image from 'next/image'
import React from 'react'
import { Container } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'
import Logo from '../../public/images/logo.svg'

export default function TitleHeader() {

  return (
    <Container>
      <Text 
        fontSize={["xl", "2xl", "3xl", "3xl"]}
        fontFamily="Imperial Script"
        letterSpacing={[3, 3, 5, 5]}
        color="#000"
        fontWeight="bold">
        <strong>Miguel Martinez</strong>
      </Text>
    </Container>

  )
}


/**
 * 
 *     <Image
      alt="Big Deal"
      src={Logo}
      height={60}
      width="150"
    />
 */