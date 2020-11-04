import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemberMain from './member/mcomponents/MemberMain'

//import MemberNav from './member/mcomponents/MemberMain'
import Home from './pages/Home'
import MemberRoot from './pages/MemberRoot'
import Navbar from '../src/pages/Navebar'

function App() {
  //設定登入登出的狀態
  const [isAuth, setisAuth] = useState(false)

  if (isAuth === false) {
    localStorage.removeItem('memberLogInInfo')
  }

  return (
    <Router>
      <>
        <Switch>
          <MemberMain>
            <Navbar isAuth={isAuth} setisAuth={setisAuth} />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/memberroot">
              <MemberRoot isAuth={isAuth} setisAuth={setisAuth} />
            </Route>
          </MemberMain>
        </Switch>
      </>
    </Router>
  )
}

export default App
