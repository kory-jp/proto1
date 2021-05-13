import React, { memo } from 'react'
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/modal';
import { Button } from '@chakra-ui/button';

export const MenuDrawer = memo((props)=> {
  const {onClose, isOpen, onClickHome, onClickMyPage, onClickNewPost, onClickNotification} = props;
  return(
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <Button onClick={onClickHome} w="100%">TOP</Button>
          <Button onClick={onClickNewPost} w="100%">新規投稿</Button>
          <Button onClick={onClickNotification} w="100%">通知</Button>
          <Button onClick={onClickMyPage} w="100%">マイページ</Button>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
  )
})

export default MenuDrawer;
