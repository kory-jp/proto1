import { Box, Flex } from '@chakra-ui/layout';
import React,{memo} from 'react'
import {useLocation, Link, Switch, Route} from "react-router-dom";
import UserCard from '../../organisms/user/UserCard';
import UsersFollow from './UsersFollow';
import UsersPost from './UsersPost';

export const TopUsers = memo(()=> {
  const {state} = useLocation();

  return (
    <>
      <UserCard
        name={state.name}
        email={state.email}
      />
      <Flex bg="white"  mt="4" p="3" borderRadius="lg" shadow="md" justifyContent="space-between">
        <Link to={{ pathname: `/users/${state.id}`, state: state}}>投稿一覧</Link>
        <Link to={{ pathname: `/users/${state.id}/follow`, state: state }}>フォロー</Link>
      </Flex>
      <Box>
        <Switch>
          <Route to={`/users/${state.id}`}>
            <UsersPost />
          </Route>
          <Route to={`/users/${state.id}/follow`}>
            <UsersFollow />
          </Route>
        </Switch>
      </Box>
    </>
  )
})

export default TopUsers;