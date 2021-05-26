import { Box, Flex } from '@chakra-ui/layout';
import React, { memo } from 'react'

import Footer from '../organisms/layout/Footer';
import Header from '../organisms/layout/Header'
import SideBar from '../organisms/layout/SideBar';

export const DefaultLayout = memo((props)=> {
  const {children} = props;
  return(
      <>
      <Box
      pos="fixed"
      top="0"
      w="100%"
      zIndex="10"
      >
      <Header/>
      </Box>
      <Flex mt="52" mb="10">
        <Box 
        display={{base: "none", lg: "block"}}
        ml={{base: 0, xl: 10}}
        p="5"
        > 
          <Box pos="sticky" top="28">
            <SideBar />
          </Box>
        </Box>
        <Box minH="100vh" maxW="100%" m={{base: "auto", lg: "unset"}}>
        {children}
        </Box>
      </Flex>
      <Footer />
      </>
    )
})

export default DefaultLayout;
