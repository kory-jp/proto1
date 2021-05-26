import React, { memo } from 'react'
import {Flex, Link} from "@chakra-ui/react"
import { Divider } from '@material-ui/core'

export const Footer = memo(()=> {
  return(
    <Flex 
      as="footer"  
      h={{base: "32", md:"56"}}  
      bg="gray.500"
      opacity="0.8"
      flexFlow="column"
      justifyContent="space-between"
      fontSize="lg"
      color="gray.100"
      pr="14"
      pl={{base: 3, xl: 14}}
      fontWeight="bold"
      >
      <Flex>
        <Flex flexFlow="column" fontSize={{base: "sm", lg: "md"}}>
          <Link mt="2">サイトQ&A</Link>
          <Link mt="2">お問合せ</Link>
          <Link mt="2">ホーム</Link>
        </Flex>
      </Flex>
      <Divider />
      <Flex justifyContent="center" bottom="0">
        <p>&copy; 2020 Kory</p>
      </Flex>
    </Flex>
  )
})

export default Footer;
