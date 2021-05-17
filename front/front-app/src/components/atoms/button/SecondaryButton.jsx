import { Button } from '@chakra-ui/button';
import React, { memo } from 'react'

export const SecondaryButton = memo((props)=> {
  const { children } = props;
  return(
    <Button 
      bg="gray.400" 
      color="white" 
      borderRadius="3xl"
      _hover={{opacity: 0.7 }}
    >
      {children}
    </Button>
  )
})

export default SecondaryButton;