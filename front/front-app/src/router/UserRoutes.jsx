import React from 'react';
import DMUser from '../components/pages/user/DMUser';
import ShowUser from '../components/pages/user/ShowUser';
import Users from '../components/pages/user/Users';


export const UserRoutes = [
  {
    path: "/",
    exact: true,
    children: <Users />
  },
  {
    path: "/show",
    exact: false,
    children: <ShowUser />
  },
  {
    path: "/dm",
    exact: false,
    children: <DMUser />
  }
]

export default UserRoutes