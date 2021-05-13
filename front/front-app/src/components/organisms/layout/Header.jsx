import React, { memo, useCallback } from 'react'
import {Flex, Heading, Text, Box, Link, Icon, useDisclosure} from "@chakra-ui/react"
import { EditIcon, BellIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router-dom"

import MenuIconButton from '../../atoms/button/MenuIconButton';
import MenuDrawer from '../../molecules/MenuDrawer';

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
          <Text as="p"  fontSize={{ base: "sm", md: "md"}} >COVID-19に関連する会計、税務情報サイト</Text>
        </Box>
        <Flex display={{base: "none", lg: "flex"}}>
          <Link pr="4" fontSize={{ base: "md", md: "lg"}} onClick={onClickNewPost}><Icon as={EditIcon} mr="1" align="center" />新規投稿</Link>
          <Link pr="4" fontSize={{ base: "md", md: "lg"}} onClick={onClickNotification}><Icon as={BellIcon} mr="1" align="center" />通知</Link>
          <Link pr="10" fontSize={{ base: "md", md: "lg"}} onClick={onClickMyPage}>マイページ</Link>
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
