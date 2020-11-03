import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import '../member/member.css'

function MemberLoginModal(props) {
  //modal的顯示
  const { isAuth, setisAuth, loginModalShow, setLoginModalShow } = props

  //會員登入的hook
  const [memberLoginEmail, setMemberLoginEmail] = useState('')
  const [memberLoginPwd, setMemberLoginPwd] = useState('')

  //切換密碼input的type
  function pwdCheck() {
    const loginPwd = document.querySelector('#loginPwd')
    if (loginPwd.type === 'password') {
      loginPwd.type = 'text'
    } else {
      loginPwd.type = 'password'
    }
  }
  //切換密碼input的type

  //按下modal裡的「登入」觸發的function
  function loginInfoSubmit() {
    const data = {
      email: memberLoginEmail,
      pwd: memberLoginPwd,
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
        localStorage.setItem('memberLogInInfo', memberLoginId)
        console.log('row')
        if (localStorage.getItem('memberLogInInfo') !== '') {
          setisAuth(true)
          setLoginModalShow(false)
          props.history.push('/memberroot')
        }
      })
      .catch((error) => {})
  }
  //按下modal裡的「註冊」觸發的function
  function RegisterSubmit(){
    
  }

  //登入或註冊的狀態
  const [loginOrRegister, setLoginOrRegister] =useState(true)
  const loginOrRegisterTrue = (
    <>
      <Modal.Header closeButton>
        <Modal.Title>會員登入</Modal.Title>
      </Modal.Header>
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
              onChange={(e) => {
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
              onChange={(e) => {
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
            <label className="form-check-label" htmlFor="loginpwdCheck">
              顯示密碼
            </label>
            <small id="loginsmallinfo" className="form-text text-muted"></small>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <p className="register_info" onClick={()=>{setLoginOrRegister(false)}}>還沒有帳號嗎？點我註冊</p>
        <Button onClick={loginInfoSubmit}>{isAuth ? '登出' : '登入'}</Button>
      </Modal.Footer>
    </>
  )

  const loginOrRegisterFalse = (
    <>
      <Modal.Header closeButton>
        <Modal.Title>會員註冊</Modal.Title>
      </Modal.Header>
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
              onChange={(e) => {
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
              onChange={(e) => {
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
            <label className="form-check-label" htmlFor="loginpwdCheck">
              顯示密碼
            </label>
            <small id="loginsmallinfo" className="form-text text-muted"></small>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <p className="register_info" onClick={()=>{setLoginOrRegister(true)}}>已經有帳號嗎？點我登入</p>
        <Button onClick={RegisterSubmit}>註冊</Button>
      </Modal.Footer>
    </>
  )
  const MemberLoginModal = (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={loginModalShow}
      onHide={() => setLoginModalShow(false)}
    >
    {loginOrRegister ? loginOrRegisterTrue : loginOrRegisterFalse}
    </Modal>
  )

  const loginBtn = (
    <Button variant="primary" onClick={() => setLoginModalShow(true)}>
      登入
    </Button>
  )

  return (
    <>
      {loginBtn}
      {MemberLoginModal}
    </>
  )
}

export default withRouter(MemberLoginModal)
