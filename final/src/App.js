import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MemberMain from './member/mcomponents/MemberMain'

//import MemberNav from './member/mcomponents/MemberMain'
import Home from './pages/Home'
import MemberRoot from './pages/MemberRoot'
import Navbar from '../src/pages/Navebar'

function App() {
  //設定登入登出的狀態
  const [isAuth, setisAuth] = useState()
  const [cartItems, setCartItems] = useState(0)
  const [ok, setok] = useState(false)
  useEffect(() => {
    const memberAuth = localStorage.getItem('memberLogInInfo')

    if (memberAuth === null) {
      setisAuth(false)
    } else {
      setisAuth(true)
    }
  }, [])

  useEffect(() => {
    const cartItemsLS = JSON.parse(localStorage.getItem('cart'))
    if (cartItemsLS === null) {
      setCartItems(0)
    } else {
      setCartItems(cartItemsLS.length)
      setok(!ok)
    }
  }, [cartItems, ok])

  // if (isAuth === false) {
  //   localStorage.removeItem('memberLogInInfo')
  // }

  return (
    <Router>
      <>
        <Switch>
          <MemberMain>
            <Navbar
              isAuth={isAuth}
              setisAuth={setisAuth}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/memberroot">
              <MemberRoot
                isAuth={isAuth}
                setisAuth={setisAuth}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </Route>
          </MemberMain>
        </Switch>
      </>
    </Router>
  )
}

export default App
