import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'

function MemberLoginModal(props) {

  const {isAuth , setisAuth} = props


  //會員登入的hook
  const [memberLoginEmail, setMemberLoginEmail] = useState('')
  const [memberLoginPwd, setMemberLoginPwd] = useState('')

  function pwdCheck(){
    const loginPwd = document.querySelector('#loginPwd')
    if( loginPwd.type === 'password' ){
      loginPwd.type = 'text'
    }
    else{
      loginPwd.type = 'password'
    }
  }
 
  function loginInfoSubmit(){
    const data ={
      email : memberLoginEmail,
      pwd : memberLoginPwd
    }
    fetch('http://localhost:3000/member/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // console.log(res.json())
        return res.json()
      })
      .then((row) => {
        console.log(row)
        const memberLoginId = JSON.stringify(row)
        localStorage.setItem('memberLogInInfo',memberLoginId)
        // if(localStorage.getItem('memberLogInInfo') !== ''){
        //   setisAuth(true)
        // }
        
      })
      .catch((error) => {})
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        請登入
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="loginEmail">電子郵件</label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              aria-describedby="emailHelp"
              placeholder="請輸入電子郵件"
              onChange={(e)=>{
                const newMeberLoginEmail = e.target.value
                setMemberLoginEmail(newMeberLoginEmail)
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loginPwd">密碼</label>
            <input
              type="password"
              className="form-control"
              id="loginPwd"
              placeholder="請輸入密碼"
              onChange={(e)=>{
                const newMeberLoginPwd = e.target.value
                setMemberLoginPwd(newMeberLoginPwd)
              }}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="loginpwdCheck"
              onClick={pwdCheck}
            />
            <label className="form-check-label" htmlFor="loginpwdCheck" >
              顯示密碼
            </label>
            <small id="loginsmallinfo" className="form-text text-muted">
              
            </small>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{}}>tets</Button>
        <Button onClick={loginInfoSubmit}>{isAuth ? '登出': '登入'}</Button>
      </Modal.Footer>
    </Modal>
  )
}
function Login(props) {
  const {setisAuth} =props
  const { loginModalShow, setLoginModalShow } = props
  return (
    <>
      <Button variant="primary" onClick={() => setLoginModalShow(true)}>
        登入
      </Button>

      <MemberLoginModal
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
    </>
  )
}

export default Login
