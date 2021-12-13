import { Box, Flex, Heading, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { IconCalendar } from '../icons'

export default function PostListItem({title, date, tags=[]}) {
  return (
    <Box mt={5}>
      <Heading as="h3" size="md" fontFamily="Poppins">{title}</Heading>
      <Flex align="center" mt={1} ml={5} fontSize="sm" color="#5597da">
        <IconCalendar />
        <p>
           {date}
        </p>
        {
          tags?.map((tag, index) => (
            <Tag key={index} ml={2} variant='solid' colorScheme='teal'>
              {tag}
            </Tag>
          ))
        }
      </Flex>
    </Box>
  )
}

