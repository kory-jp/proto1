import { Box, Text } from '@chakra-ui/layout'
import React, { memo } from 'react'

export const UsersPost = memo(()=> {
  return (
    <Box bg="white" shadow="md" mt="4" p="3" borderRadius="lg">
      <Text>投稿一覧</Text>
    </Box>
  )
})

export default UsersPost