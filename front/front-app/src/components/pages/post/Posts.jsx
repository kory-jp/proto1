import { Center, Grid } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React,{memo, useEffect, useState} from "react";
import Pagination from '@material-ui/lab/Pagination';

import useAllPosts from "../../../hooks/useAllPosts";
import PostCard from "../../organisms/post/PostCard";


export const Posts = memo((props)=> {
  const { getPosts, loading, posts} = useAllPosts()
  useEffect(()=> getPosts(), [])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const changeCurrentPage = (e, page) => setCurrentPage(page)

  return(
    <>
      {loading ? (
        <Center h="100vh" w="100vh">
          <Spinner />
        </Center>
      ):(
        <>
          <Grid mb={{base: 3, md: 10}}>
            { currentPosts.map((post) => (
              <PostCard 
                key={post.id}
                image="https://source.unsplash.com/random" 
                name={post.userId}
                title={post.title}
                postId={post.id}
              />
            ))}
          </Grid>
          <Grid>
            <Pagination
              count={pageNumbers.length}
              onChange={changeCurrentPage}
              page={currentPage}
              />
          </Grid>
        </>
      )}
    </>
  );
})
export default Posts;