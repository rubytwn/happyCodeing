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

  //按下modal裡的「登入」觸發的function
  function loginInfoSubmit() {
    let loginInfo = document.querySelector('#loginInfo')
    if( memberLoginEmail === ''){
      loginInfo.innerHTML='請輸入電子郵件'
    }
    if( memberLoginPwd === ''){
      loginInfo.innerHTML='請輸入密碼'
    }
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
          props.history.push('/memberroot/aboutme')
          setMemberLoginEmail('')
          setMemberLoginPwd('')
        }
      })
      .catch((error) => {
        console.log("aaaaa")
      })
  }

  //會員註冊的hook
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPwd, setRegisterPwd] = useState('')
  const [registerGender, setRegisterGender] = useState(0)
  const [registerBirth, setRegisterBirth] = useState('')
  const [registerLocation, setRegisterLocation] = useState(0)

  //按下modal裡的「註冊」觸發的function
  function RegisterSubmit() {
    const registerError = document.querySelector('#registerError')

    const data = {
      name: registerName,
      email: registerEmail,
      pwd: registerPwd,
      gender: registerGender,
      birth: registerBirth,
      country: registerLocation,
      address: 'address',
      level: '1',
    }
    if (registerGender === 0) {
      registerError.innerHTML = '請選擇性別'
    } else if (registerLocation === 0) {
      registerError.innerHTML = '請選擇地區'
    } else {
      fetch('http://localhost:3000/member/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          //console.log(res.json())
          registerError.innerHTML = '註冊成功'
          return res.json()
        })
        .then((row) => {
          console.log(row)
          const insertId = row.id
          const a = JSON.stringify({ id: insertId })
          localStorage.setItem('memberLogInInfo', a)
          if (localStorage.getItem('memberLogInInfo') !== '') {
            setisAuth(true)
            setLoginModalShow(false)
            props.history.push('/memberroot/aboutme')
          }
        })
    }
  }

  //登入或註冊的狀態
  const [loginOrRegister, setLoginOrRegister] = useState(true)

  //登入
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
              className="form-con"
              id="loginEmail"
              aria-describedby="emailHelp"
              placeholder="請輸入電子郵件"
              value={memberLoginEmail}
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
              className="form-con"
              id="loginPwd"
              placeholder="請輸入密碼"
              value={memberLoginPwd}
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
          <p id="loginInfo"></p>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <p
          className="register_info"
          onClick={() => {
            setLoginOrRegister(false)
          }}
        >
          還沒有帳號嗎？點我註冊
        </p>
        <button className="login-btn" onClick={loginInfoSubmit}>{isAuth ? '登出' : '登入'}</button>
      </Modal.Footer>
    </>
  )

  //註冊
  const loginOrRegisterFalse = (
    <>
      <Modal.Header closeButton>
        <Modal.Title>會員註冊</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="registerName">顯示暱稱</label>
            <input
              type="text"
              className="form-con"
              id="registerName"
              placeholder="請輸入暱稱"
              value={registerName}
              onChange={(e) => {
                const newRegisterName = e.target.value
                setRegisterName(newRegisterName)
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registerEmail">電子郵件</label>
            <input
              type="email"
              className="form-con"
              id="registerEmail"
              aria-describedby="emailHelp"
              placeholder="請輸入電子郵件"
              onChange={(e) => {
                const newRegisterEmail = e.target.value
                setRegisterEmail(newRegisterEmail)
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registerPwd">密碼</label>
            <input
              type="password"
              className="form-con"
              id="registerPwd"
              placeholder="請輸入密碼"
              value={registerEmail}
              onChange={(e) => {
                const newRegisterPwd = e.target.value
                setRegisterPwd(newRegisterPwd)
              }}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="registerpwdCheck"
            />
            <label className="form-check-label" htmlFor="registerpwdCheck">
              顯示密碼
            </label>
            <small
              id="registersmallinfo"
              className="form-text text-muted"
            ></small>
          </div>
          <div className="form-group">
            <label htmlFor="registerGender">性別</label>
            <select
              className="form-con"
              id="registerGender"
              value={registerGender}
              onChange={(e) => {
                const newRegisterGender = e.target.value
                if (newRegisterGender !== 0) {
                  setRegisterGender(newRegisterGender)
                }
              }}
            >
              <option value="0">請選擇</option>
              <option value="1">男</option>
              <option value="2">女</option>
              <option value="3">其他</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="registerBirth">生日</label>
            <br />
            <input
              className="form-con"
              id="registerBirth"
              type="date"
              value={registerBirth}
              onChange={(e) => {
                const newRegisterBirth = e.target.value
                setRegisterBirth(newRegisterBirth)
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registerLocation">所在地</label>
            <select
              className="form-con"
              id="registerLocation"
              value={registerLocation}
              onChange={(e) => {
                const newRegisterLocation = e.target.value
                if (newRegisterLocation !== 0) {
                  setRegisterLocation(newRegisterLocation)
                }
              }}
            >
              <option value="0">請選擇</option>
              <option value="TW">TW 台灣</option>
              <option value="HK">HK 香港</option>
              <option value="US">US 美國</option>
              <option value="JP">JP 日本</option>
            </select>
          </div>
          <p id="registerError"></p>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <p
          className="register_info"
          onClick={() => {
            setLoginOrRegister(true)
          }}
        >
          已經有帳號嗎？點我登入
        </p>
        <button onClick={RegisterSubmit} className="login-btn">註冊</button>
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
    <button className="login-btn" onClick={() => setLoginModalShow(true)}>
      {isAuth ? '登出' : '登入'}
      {/* 登入 */}
    </button>
  )

  return (
    <>
      {loginBtn}
      {MemberLoginModal}
    </>
  )
}

export default withRouter(MemberLoginModal)
