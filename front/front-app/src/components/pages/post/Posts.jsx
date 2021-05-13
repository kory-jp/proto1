import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Grid, Stack, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React,{memo, useEffect} from "react";
import useAllPosts from "../../../hooks/useAllPosts";
import PostCard from "../../organisms/post/PostCard";


export const Posts = memo(()=> {
  const { getPosts, loading, posts} = useAllPosts()
  useEffect(()=> getPosts(), [])
  return(
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ):(
        <Grid m={{base: 3, md: 5}}>
          { posts.map((post) => (
            <PostCard 
              key={post.id}
              image="https://source.unsplash.com/random" 
              name={post.userId}
              title={post.title}
            />
          ))}
        </Grid>
      )}
    </>
  );
})
export default Posts;