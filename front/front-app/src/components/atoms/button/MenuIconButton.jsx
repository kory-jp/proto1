import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import React, { memo } from 'react'

export const MenuIconButton = memo((props)=> {
  const {onOpen} = props;
  return(
    <IconButton
    aria-label="メニューボタン" 
    icon={<HamburgerIcon/>}
    size="sm"
    variant="unstyled"
    display={{base: "block", lg: "none"}}
    onClick={onOpen}
    />
  )
})

export default MenuIconButton;
