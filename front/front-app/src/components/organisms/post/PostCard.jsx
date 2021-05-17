import React, { memo } from 'react'
import { Image } from '@chakra-ui/image'
import { Flex } from '@chakra-ui/layout'
import {Link} from "react-router-dom"

export const PostCard = memo((props)=> {
  const {image, name, title, postId} = props 
  return (
    <Flex 
      h={{base: "150px", md: "200px"}} 
      bg="white" 
      borderRadius="10px" 
      shadow="md" maxW="1000px" 
      m={{base: 2, md: 4}}
    >
      <Flex>
        <Link to={`post/${postId}`}>
         <Image 
            boxSize={{base: "100px", md: "160px"}}
            alt={title} 
            m="5"
            borderRadius="5px"
            src={image}
          />
        </Link>
      </Flex>
      <Flex flexFlow="column" justify="space-between" m="5" w="80%">
        <Flex fontSize={{base: "md", md: "x-large"}}>
          <Link to={`post/${postId}`}>{title}</Link>
        </Flex>
        <Flex justify="space-between" fontSize={{base: "sm", md: "md"}}>
          <Flex>
            <Link>{name}</Link>
          </Flex>
          <Flex>
            <Link>投稿日時xx/yy/zz</Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
})

export default PostCard;