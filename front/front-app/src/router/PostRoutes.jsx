import React from 'react';

import NewPost from '../components/pages/post/NewPost';
import Posts from "../components/pages/post/Posts";
import ShowPost from '../components/pages/post/ShowPost';
import EditPost from '../components/pages/post/EditPost';


export const PostRoutes = [
  {
    path: "/",
    exact: true,
    children: <Posts />
  },
  {
    path: "/:id",
    exact: false,
    children: <ShowPost />
  },
  {
    path: "/new",
    exact: false,
    children: <NewPost />
  },
  {
    path: "/:id/edit",
    exact: false,
    children: <EditPost />
  },
]

export default PostRoutes;