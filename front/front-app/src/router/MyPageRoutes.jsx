import React from "react";
import MyPage from "../components/pages/mypage/MyPage";
import EditInfo from "../components/pages/mypage/EditInfo";
import FavoritePosts from "../components/pages/mypage/FavoritePosts";
import FollowerUser from "../components/pages/mypage/FollowerUser";
import FollowingUser from "../components/pages/mypage/FollowingUser";
import Notification from "../components/pages/mypage/Notification";
import OwnPost from "../components/pages/mypage/OwnPost";

export const MyPageRoutes = [
  {
    path: "/",
    exact: true,
    children: <MyPage />
  },
  {
    path: "/posts",
    exact: false,
    children: <OwnPost />
  },
  {
    path: "/info",
    exact: false,
    children: <EditInfo />
  },
  {
    path: "/favorite",
    exact: false,
    children: <FavoritePosts />
  },
  {
    path: "/follower",
    exact: false,
    children: <FollowerUser />
  },
  {
    path: "/following",
    exact: false,
    children: <FollowingUser />
  },
  {
    path: "/notification",
    exact: false,
    children: <Notification />
  }
]