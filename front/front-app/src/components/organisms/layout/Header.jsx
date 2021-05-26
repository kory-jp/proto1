import React, { memo, useCallback } from 'react'
import {Flex, Heading, Text, Box, useDisclosure} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"

import MenuIconButton from '../../atoms/button/MenuIconButton';
import MenuDrawer from '../../molecules/MenuDrawer';
import SearchForm from '../../molecules/SearchForm';

export const Header = memo(()=> {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const history = useHistory();

  const onClickHome =useCallback(()=> history.push("/post"), [history])
  const onClickMyPage =useCallback(()=> history.push("/userId"), [history])
  const onClickNewPost =useCallback(()=> history.push("/post/new"), [history])
  const onClickNotification =useCallback(()=> history.push("/userId/notification"), [history])
  return(
    <>
      <Flex 
        as="nav" 
        bg="gray.500" 
        color="white" 
        align="center" 
        justify="space-between"
        padding={{base: 3, md: 5}}
        shadow="md"
        opacity="0.8"
      >
        <Box pl={{base: 3, md: 10}}> 
          <Flex as="a" align="center" _hover={{cursor: "pointer"}} onClick={onClickHome}>
            <Heading as="h1" fontSize={{ base: "md", md: "2xl"}} fontFamily="Newsreader">COVID-TAX</Heading>
          </Flex>
          <Text as="p"  fontSize={{ base: "xx-small", md: "md"}} >COVID-19に関連する会計、税務情報サイト</Text>
        </Box>
        <Flex display={{base: "none", lg: "flex"}} mr={{base:0, xl: 7}}>
          <SearchForm />
        </Flex>
        <MenuIconButton onOpen={onOpen}/>
      </Flex>
      <MenuDrawer 
        onClose={onClose} 
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickMyPage={onClickMyPage}
        onClickNewPost={onClickNewPost}
        onClickNotification={onClickNotification}
      />
    </>
  )
})

export default Header;
