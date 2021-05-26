import React, { memo, useEffect } from 'react'
import { Image } from '@chakra-ui/image'
import { Flex, Text } from '@chakra-ui/layout'
import {Link} from "react-router-dom"
import useUserInfo from '../../../hooks/useUserInfo'

export const PostCard = memo((props)=> {
  const {image, post} = props 
  const userId = post.userId;
  const {getUserInfo, userInfo} = useUserInfo(userId);
  useEffect(()=> getUserInfo(),[])

  return (
    <Flex 
      h={{base: "170px", md: "200px"}} 
      bg="white" 
      borderRadius="10px" 
      shadow="md" 
      maxW="1000px" 
      m={{base: 2, md: 4}}
    >
      <Flex mr={{base: "2", md: "md"}}>
        <Link to={{ pathname: `post/${post.id}`, state: post}}>
         <Image 
            boxSize={{base: "100px", md: "160px"}}
            objectFit="cover"
            alt={post.title} 
            m="5"
            borderRadius="5px"
            src={image}
          />
        </Link>
      </Flex>
      <Flex flexFlow="column" justify="space-between" m="5" w="80%">
        <Flex fontSize={{base: "sm", md: "x-large"}} mb="3">
          <Link to={{ pathname: `post/${post.id}`, state: post}}>{post.title}</Link>
        </Flex>
        <Flex flexFlow={{base: "column", md: "wrap"}} justify={{base: "flex-end", md: "space-between"}} fontSize={{base: "xs", md: "md"}}>
          <Flex>
            <Link to={{ pathname: `users/${post.userId}`, state: userInfo}}>{userInfo.name}</Link>
          </Flex>
          <Flex>
            <Text>投稿日時xx/yy/zz</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
})

export default PostCard;