import { Button } from '@chakra-ui/button';
import React, { memo } from 'react'

export const SideButton = memo((props)=> {
  const {children} = props
  return(
    <Button
    w="100%"
    h="16"
    fontSize="lg"
    color="gray.600"
    bg="white"
    border="thin"
    borderStyle="groove"
    borderBottomColor="telegram.400"
    _hover={{background: "gray.300"}}
    >
    {children}
    </Button>
  )
})

export default SideButton;