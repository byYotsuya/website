import { Box, Heading } from '@chakra-ui/layout'
import React from 'react'

export default function Layout({children, metadata={}, type="list"}) {

  const isBlogTemplate = type == "list" && metadata.date


  return (
    <Box
      height="100vh"
      background="#f1f5f9"
      padding="10"
      rounded="10"
      width={[
        '100%', // 48em-62em
        '100%', // 30em-48em
        '100%', // 30em-48em
        '60%', // 62em+
      ]}
    >

      

      <Box
        as="article"
        mx={[0, 0, 0, 0, 4]}
        my={4}
        borderRadius="lg"
        width={["100%", "100%", "100%", "100%"]}
      >

        {
          isBlogTemplate
          ? (
            <Heading as="h1" m={2} size="xl">
              {metadata.title}
            </Heading>
          )
          : (
            <Heading as="h2" size="xl" fontWeight="bold" >
              <strong>{metadata.title}</strong>
            </Heading>
          )
        }
        <section style={{marginTop: "3rem"}} >{children}</section>

      </Box>
      
      
    </Box>
  )
}
