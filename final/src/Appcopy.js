import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import MemberMain from './member/mcomponents/MemberMain'

import MemberNav from './member/mcomponents/MemberNav'
import AboutMe from './member/mcomponents/AboutMe'
import Order from './member/mcomponents/Order'
import Refund from './member/mcomponents/Refund'
import Level from './member/mcomponents/Level'
import Follow from './member/mcomponents/Follow'
import AccountSetting from './member/mcomponents/AccountSetting'
import MemberRoot from '../src/member/MemberRoot'



function App (){
    return(
        <Router>
            <>
            <Switch>
            <MemberMain>
            <MemberNav />
              <Route exact path="/">
                <AboutMe />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
              <Route path="/refund">
                <Refund />
              </Route>
              <Route path="/level">
                <Level />
              </Route>
              <Route path="/follow">
                <Follow />
              </Route>
              <Route path="/setting">
                <AccountSetting />
              </Route>
              <Route path="/memberroot">
                <MemberRoot />
              </Route>
            
            </MemberMain>
            </Switch>
            </>
        </Router>
    )
}

export default App