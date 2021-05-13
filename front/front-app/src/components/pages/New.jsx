import { Input } from '@chakra-ui/input'
import { Box, Flex, Heading, Stack } from '@chakra-ui/layout'
import React,{memo} from 'react'
import PrimaryButton from '../atoms/button/PrimaryButton'

export const New = memo(()=> {
  return(
    <Flex align="center" justify="center" height="100vh">
    <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
      <Heading as="h2" size="lg" textAlign="center" mb="10">
        新規登録
      </Heading>
      <Stack spacing={6} py={4} px={10}>
        <Input placeholder="氏名"/>
        <Input placeholder="メールアドレス"/>
        <Input placeholder="パスワード" type="password" />
        <Input placeholder="パスワード(確認)" type="password" />
        <PrimaryButton>ログイン</PrimaryButton>
      </Stack>
    </Box>
  </Flex>
  )
})

export default New
