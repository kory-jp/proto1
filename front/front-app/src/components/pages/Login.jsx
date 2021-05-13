import { Input } from '@chakra-ui/input'
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/layout'
import React,{memo, useCallback} from 'react'
import { useHistory } from 'react-router-dom'
import PrimaryButton from '../atoms/button/PrimaryButton'

export const Login = memo(()=> {
  const history = useHistory();
  const onClickNew = useCallback(()=> history.push("/new"),[history])
  return(
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center" mb="10">
          COVID-TAX
        </Heading>
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="メールアドレス"/>
          <Input placeholder="パスワード" type="password"/>
          <PrimaryButton>ログイン</PrimaryButton>
          <Link onClick={onClickNew}>新規登録はコチラ</Link>
        </Stack>
      </Box>
    </Flex>
  )
})

export default Login
