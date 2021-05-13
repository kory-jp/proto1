import React, { memo } from 'react'
import {Switch, Route} from "react-router-dom"
import Contact from '../components/pages/Contact'

import Login from '../components/pages/Login'
import New from '../components/pages/New'
import Page404 from '../components/pages/Page404'
import Questions from '../components/pages/Questions'
import DefaultLayout from '../components/templates/DefaultLayout'
import { MyPageRoutes } from './MyPageRoutes'
import PostRoutes from './PostRoutes'
import { UserRoutes } from './UserRoutes'

export const Router = memo(()=> {
  return(
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/new">
        <New />
      </Route>
      <Route path="/post" render={({match: {url}})=> (
        <Switch >
          {PostRoutes.map((route)=> (
            <Route key={route.children} exact={route.exact} path={`${url}${route.path}`}>
              <DefaultLayout>
              {route.children}
              </DefaultLayout>
            </Route>
          ))}
        </Switch>
      )}/>
      <Route path="/userId" render={({match: {url}})=> (
        <Switch >
          {MyPageRoutes.map((route)=> (
            <Route key={route.children} exact={route.exact} path={`${url}${route.path}`}>
              {route.children}
            </Route>
          ))}
        </Switch>
      )}/>
      <Route path="/users" render={({match: {url}})=> (
        <Switch >
          {UserRoutes.map((route)=> (
            <Route key={route.children} exact={route.exact} path={`${url}${route.path}`}>
              {route.children}
            </Route>
          ))}
        </Switch>
      )}/>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/questions">
        <Questions />
      </Route>
      <Route>
        <Page404/>
      </Route>
    </Switch>
  )
})