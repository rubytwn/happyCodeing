import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import MemberMain from './member/mcomponents/MemberMain'

//import MemberNav from './member/mcomponents/MemberMain'
import Home from './pages/Home'
import MemberRoot from './pages/MemberRoot'
import Login from './pages/Login'
import Navbar from '../src/pages/Navebar'


function App (){
  //暫時設定登入登出的狀態
  const [isLogin ,setisLogin] = useState(false)
  //設定登入登出的狀態
  const [isAuth ,setisAuth] = useState(false)

  if( isLogin === false){
    localStorage.removeItem('memberLogInInfo')
  }


    return(
        <Router>
            <>
            <Switch>
            <MemberMain>
            <Navbar setisLogin={setisLogin} />
              <Route exact path="/">
                <Home isAuth={isAuth} setisAuth={setisAuth} isLogin={isLogin} setisLogin={setisLogin} />
              </Route>
              <Route path="/login">
                <Login isAuth={isAuth} setisAuth={setisAuth} />
              </Route>
              <Route path="/memberroot">
                <MemberRoot isAuth={isAuth} setisAuth={setisAuth} isLogin={isLogin} setisLogin={setisLogin} />
              </Route>
            </MemberMain>
            </Switch>
            </>
        </Router>
    )
}

export default App