import React, { memo } from 'react'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Grid, Text } from '@chakra-ui/layout'

export const PostCard = memo((props)=> {
  const {image, name, title} = props 
  return (
    <Box h={{base: "150px", md: "200px"}} bg="white" borderRadius="10px" shadow="md" maxW="1000px" m={{base: 2, md: 4}}>
      <Flex>
        <Box as="a" _hover={{cursor: "pointer"}}>
          <Image 
            boxSize={{base: "100px", md: "160px"}}
            alt={title} 
            m="5"
            borderRadius="5px"
            src={image}
          />
        </Box>
        <Flex flexFlow="column" justify="space-between" m="5" w="80%">
          <Flex as="a" _hover={{cursor: "pointer"}}>
            <Text fontSize={{base: "md", md: "x-large"}}>{title}</Text>
          </Flex>
          <Flex justify="space-between" fontSize={{base: "sm", md: "md"}}>
            <Flex as="a" _hover={{cursor: "pointer"}}>
              <Text >{name}</Text>
            </Flex>
            <Flex>
              <Text>投稿日時xx/yy/zz</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
})

export default PostCard;