import React, { memo } from 'react'
import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';

export const UserCard  = memo((props)=> {
  const {name, email, hello} = props
  return(
    <Box bg="white" p="3" shadow="md" borderRadius="lg" w={{base: "unset", lg: "2xl", xl: "5xl"}}>
      <Flex>
        <Image
          boxSize={{base: "50px", md: "80px"}}
          objectFit="cover"
          alt={name} 
          m="5"
          borderRadius="full"
          src="https://source.unsplash.com/random" 
          mr={{base: 2, lg: 5}}
          />
        <Text 
          as="h2"
          fontWeight="semibold"
          fontSize={{base: "md", lg: "xl"}}
          mt="auto" 
          mb="auto"
        >
          {name}
        </Text>
      </Flex>
    <Box m={{base: 2, lg: 5}}>
      <Text fontSize={{base: "sm", lg: "lg"}}>{email}</Text>
    </Box>
  </Box>
  )
})

export default UserCard;