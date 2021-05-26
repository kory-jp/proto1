import { ArrowLeftIcon, ArrowRightIcon, BellIcon, CopyIcon, EditIcon, PlusSquareIcon, StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Stack } from '@chakra-ui/layout';
import React, { memo } from 'react'
import SideButton from '../../atoms/button/SideButton';

export const SideBar = memo(()=> {
  return(
    <Flex
      as="aside"
      h="3xl"
      w="100%"
      bg="white"
      w=""
      w={{base: 72, xl: 80}}
      shadow="md"
      borderRadius="3xl"
    >
      <Box m="5" w="100%">
        <Stack spacing="6" mt="4">
          <SideButton><BellIcon mr='1'/>通知確認</SideButton>
          <SideButton><PlusSquareIcon mr='1'/>新規投稿</SideButton>
          <SideButton><CopyIcon mr='1'/>投稿済一覧</SideButton>
          <SideButton><StarIcon mr='1'/>お気に入り記事</SideButton>
          <SideButton><ArrowLeftIcon mr='1'/>フォロー</SideButton>
          <SideButton><ArrowRightIcon mr='1'/>フォロワー</SideButton>
          <SideButton><EditIcon mr='1'/>個人情報修正</SideButton>
          <SideButton>ログアウト</SideButton>
        </Stack>
      </Box>
    </Flex>
  )
})

export default SideBar;