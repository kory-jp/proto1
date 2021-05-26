import { Box, Text } from '@chakra-ui/layout';
import React, { memo } from 'react'
import {useLocation} from "react-router-dom";


export const UsersFollow = memo(()=> {
  const {state} = useLocation();
  return(
    <Box bg="white" shadow="md" mt="4" p="3" borderRadius="lg">
    <Text>{state.name}</Text>
  </Box>
  )
})

export default UsersFollow;