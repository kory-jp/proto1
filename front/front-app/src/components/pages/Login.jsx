import React,{memo, useCallback, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/layout'
import PrimaryButton from '../atoms/button/PrimaryButton'
import axios from 'axios'

export const Login = memo(()=> {
  const history = useHistory();
  const onClickNew = useCallback(()=> history.push("/new"),[history])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onChangeEmail = (e) => setEmail(e.target.value)
  const onChangePassword = (e) => setPassword(e.target.value)
  const onCLickLogin = () => {
    axios
      .post("localhost:3001/api/v1/login", 
      {
        user: {
          email: email,
          password: password
        }
      })
      .then((res) => {
        console.log("ログインしました")
      })
      .catch((res)=> {
        console.log("ログインに失敗しました")
      })
  }

  return(
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center" mb="10">
          COVID-TAX
        </Heading>
        <Stack spacing={6} py={4} px={10}>
          <Input 
            type="email"
            name="email"
            placeholder="メールアドレス"
            onChange={onChangeEmail}
          />
          <Input 
            type="password"
            name="password"
            placeholder="パスワード" 
            onChange={onChangePassword}
          />
          <PrimaryButton onClick={onCLickLogin}>ログイン</PrimaryButton>
          <Link onClick={onClickNew}>新規登録はコチラ</Link>
        </Stack>
      </Box>
    </Flex>
  )
})

export default Login
