import { Box, Flex } from '@chakra-ui/layout';
import React,{memo, useContext} from 'react'
import {useLocation, Link, Switch, Route} from "react-router-dom";
import { UsersContext } from '../../../providers/UsersProvider';
import UserCard from '../../organisms/user/UserCard';
import UsersFollow from './UsersFollow';
import UsersPost from './UsersPost';

export const TopUsers = memo(()=> {
  // const location = useLocation()
  // console.log(location);
  const {state} = useLocation();

  const { UsersProviderInfo} = useContext(UsersContext)
  console.log(UsersProviderInfo)

  return (
    <>
      <UserCard
        name={state.name}
        email={state.email}
      />
      <Flex bg="white"  mt="4" p="3" borderRadius="lg" shadow="md" justifyContent="space-between">
        <Link to={`/users/${state.id}`}>投稿一覧</Link>
        {/* <Link to={{ pathname: `/users/${state.id}`, state: state}}>投稿一覧</Link> */}
        <Link to={`/users/${state.id}/follow`}>フォロー</Link>
        {/* <Link to={{ pathname: `/users/${state.id}/follow`, state: state }}>フォロー</Link> */}
        <Link>フォロワー</Link>
        <Link>ダイレクトメッセージ</Link>
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