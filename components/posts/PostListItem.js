import React from 'react'
import { Box, Flex, Heading, Tag, Text } from '@chakra-ui/react'
import { IconCalendar } from '../icons'

export default function PostListItem({title, date, tags=[]}) {
  return (
    <Box mt={5} className='title'>
      <Heading as="h3" size="md" fontFamily="Poppins">
        {title}
      </Heading>
      <Flex align="center" mt={1} ml={2} fontSize="md" color="#5597da">
        <IconCalendar />
        <Text>
          {date} {" "}
          {
            tags?.map((tag, index) => (
              <Tag key={tag} mx={2} variant='solid' colorScheme='teal'>
                {tag}
              </Tag>
            ))
          }
        </Text>
      </Flex>
    </Box>
  )
}

