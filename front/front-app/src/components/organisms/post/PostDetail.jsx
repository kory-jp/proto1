import React, { memo } from 'react'
import { Box, Stack, Text } from '@chakra-ui/layout';
import {Link} from "react-router-dom"
import { Image } from '@chakra-ui/image';

export const PostDetail = memo((props)=> {
  const {title, user, body} = props
  return(
    <Box bg="white" borderRadius="xl" shadow="md" p={{ base: 2, md: 5, xl: 14}} maxW="6xl">
      <Stack spacing="12">
        <Box shadow="md" p="4">
          <Text as="h2" fontSize={{base: 'md', md: '3xl'}} fontWeight="bold" mb={{base: 3, lg: 7}}>{title}</Text>
          <Box textAlign="end">
            <Link to="/post">{user}</Link>
            <Text fontSize={{sm: 'sm', md: "md"}}>投稿日xx/yy/zz</Text>
          </Box>
        </Box>
        <Box>
          <Image 
            src="https://source.unsplash.com/random" 
            boxSize={{base: '300px', lg: '600px'}}
            objectFit="cover"
            m="auto"
          />
        </Box>
        <Box shadow="md" p="4">
          <Text fontSize={{sm: 'sm', md: '2xl'}}>{body}</Text>
        </Box>
      </Stack>
    </Box>
  )
})

export default PostDetail;