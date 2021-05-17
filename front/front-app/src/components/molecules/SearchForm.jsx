import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Flex } from '@chakra-ui/layout'
import React,{memo} from 'react'

import SecondaryButton from '../atoms/button/SecondaryButton'


export const SearchForm = memo(()=> {
  return (
    <Flex>
      <InputGroup maxW="sm" mr="4">
        <InputLeftElement
          children={<SearchIcon color="gray.500"/>}
        />
        <Input 
        placeholder="キーワードを入力"
        borderRadius="3xl"
        bg="white"
        color="gray.600"
        />
      </InputGroup>
      <SecondaryButton>検索</SecondaryButton>
    </Flex>
  )
})

export default SearchForm;