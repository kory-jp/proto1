import React from 'react';
import TopUsers from '../components/pages/users/TopUsers';


export const UserRoutes = [
  {
    path: "/:id",
    exact: true,
    children: <TopUsers />
  },
  // {
  //   path: "/:id/dm",
  //   exact: false,
  //   children: <DMUser />
  // }
]

export default UserRoutes