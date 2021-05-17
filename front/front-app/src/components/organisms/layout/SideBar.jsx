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
        <Stack>
          <SideButton>通知確認</SideButton>
          <SideButton>新規投稿</SideButton>
          <SideButton>投稿済一覧</SideButton>
          <SideButton>お気に入り記事</SideButton>
          <SideButton>フォローユーザー</SideButton>
          <SideButton>フォロワー</SideButton>
          <SideButton>個人情報修正</SideButton>
          <SideButton>ログアウト</SideButton>
        </Stack>
      </Box>
    </Flex>
  )
})

export default SideBar;