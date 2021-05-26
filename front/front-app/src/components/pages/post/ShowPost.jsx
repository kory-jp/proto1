import { Box } from '@chakra-ui/layout';
import React,{memo} from 'react'
import {useLocation} from "react-router-dom"
import PostDetail from '../../organisms/post/PostDetail';

export const ShowPost = memo(()=> {
  const {state} = useLocation();
  return (
    <>
      <Box p={{sm: 2, md: 5, lg: 6}}> 
        <PostDetail 
          title={state.title}
          user={state.userId}
          body={state.body}
          />
      </Box>
    </>
  )
})

export default ShowPost;