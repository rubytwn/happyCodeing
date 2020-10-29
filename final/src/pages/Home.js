import React, { useState, useEffect } from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Login'
import Register from './Register'


function Home(props) {
  const {setisLogin} = props
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [registerModalShow, setRegisterModalShow] = useState(false);

  return (
    <>
      <h1>Hello</h1>
      <Link to="/memberroot">Link component to memberroot</Link>
      <Login
        loginModalShow={loginModalShow}
        setLoginModalShow={setLoginModalShow}
      />
      <Register
        registerModalShow={registerModalShow}
        setRegisterModalShow={setRegisterModalShow}
      />
      <button onClick={()=>{setisLogin(true)}}>登入</button>
      <button onClick={()=>{setisLogin(false)}}>登出</button>
    </>
  )
}

export default withRouter(Home)
