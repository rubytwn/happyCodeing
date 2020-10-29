import React, { useState, useEffect } from 'react'
import '../member.css'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Modal,
  NavDropdown,
} from 'react-bootstrap'

function AccountSetting() {
  //原本資料庫裡的memberInfo
  const [memberId, setMemberId] = useState('')
  const [memberName, setMemberName] = useState('')
  const [memberEmail, setMemberEmail] = useState('')
  const [memberGender, setMemberGender] = useState('')
  const [memberBirth, setMemberBirth] = useState('')
  const [memberCountry, setMemberCountry] = useState('')
  const [memberPwd, setMemberPwd] = useState('')

  //載入畫面時從資料庫讀去資料set進各個項目裡
  useEffect(() => {
    fetch('http://localhost:3000/member/getMemberData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        //console.log(res.json());
        return res.json()
      })
      .then((res) => {
        console.log(res)
        //console.log(res[0].email);
        // setMemberCountry(res.info.country);
        setMemberName(res[0].name)
        setMemberEmail(res[0].email)
        if (res[0].birth) {
          setMemberBirth(res[0].birth.slice(0, 10))
        }
        setMemberGender(res[0].gender)
        setMemberCountry(res[0].country)
        setMemberPwd(res[0].pwd)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  //更新的hook
  const [memberEditName, setMembeEdirName] = useState('')
  const [memberEditEmail, setmemberEditEmail] = useState('')
  const [memberEditGender, setMemberEditGender] = useState('')
  const [memberEditBirth, setMemberEditBirth] = useState('')
  const [memberEditCountry, setMemberEditCountry] = useState('')
  const [memberEditPwd, setMemberEditPwd] = useState('')

  //更新按鈕觸發的function
  function formSubmit(event) {
    const data = {
      name: memberEditName ? memberEditName : memberName,
      email: memberEditEmail ? memberEditEmail : memberEmail,
      gender: memberEditGender ? memberEditGender : memberGender,
      birth: memberEditBirth ? memberEditBirth : memberBirth,
      country: memberEditCountry ? memberEditCountry : memberCountry,
    }

    fetch('http://localhost:3000/member/editMemberData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res.json())
        return res.json()
      })
      .then((row) => {
        console.log(row)
      })
      .catch((error) => {})
  }
  //更改密碼的判斷
  const [modalShow, setModalShow] = useState(false)
  
  function upDatePwdBtn(props) {
    const oldPwd = document.querySelector('#oldpwd').value
    const newPwd = document.querySelector('#newpwd').value
    const newPwdCheck = document.querySelector('#newpwdcheck').value
    let errorInfo = document.querySelector('#errorinfo')

    if (oldPwd !== memberPwd) {
      errorInfo.innerHTML = '舊密碼輸入錯誤'
    }
    if (newPwd !== newPwdCheck) {
      errorInfo.innerHTML = '請再確認一次新密碼'
    } 
    if( oldPwd === ''){
      if(newPwd !== newPwdCheck){
      errorInfo.innerHTML = '請輸入舊密碼'}
    }
    if( newPwd === ''){
      errorInfo.innerHTML = '請輸入新密碼'
    }
    if( oldPwd === newPwd || oldPwd === newPwdCheck){
      errorInfo.innerHTML = '請輸入新密碼'
    }
    if( oldPwd === ''){
      errorInfo.innerHTML = '請確認新密碼'
    }
    if(oldPwd === memberPwd && newPwd === newPwdCheck) {
      setMemberEditPwd(newPwd)
      errorInfo.innerHTML = '正確'
      const data={ pwd: memberEditPwd ? memberEditPwd : memberPwd }
      fetch('http://localhost:3000/member/editMemberPwd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res.json())
        return res.json()
      })
      .then((row) => {
        console.log(row)
        setTimeout(()=>{
          setModalShow(true)
        },2000)
      })
      .catch((error) => {})
  }
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">變更密碼</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group">
              <label htmlFor="oldpwd">舊密碼</label>
              <input type="text" className="form-control" id="oldpwd" />
            </div>
            <div class="form-group">
              <label htmlFor="newpwd">新密碼</label>
              <input type="text" className="form-control " id="newpwd" />
            </div>
            <div class="form-group">
              <label htmlFor="newpwdcheck">請再輸入一次新密碼</label>
              <input type="text" className="form-control" id="newpwdcheck" />
            </div>
            <small id="errorinfo" className="text-muted errorinfo"></small>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={upDatePwdBtn} className="update-img-btn">
            更改
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <>
      <div className="member_main">
        <div className="row">
          <h4>帳號設定</h4>
        </div>
        <div className="row">
          <div className="col-6">
            <form>
              <div className="form-group">
                <label htmlFor="name">顯示暱稱</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={memberName}
                  onChange={(e) => {
                    const newmemberName = e.target.value
                    setMemberName(newmemberName)
                    setMembeEdirName(newmemberName)
                  }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  如果不希望真實姓名出現在搜尋頁面，請選擇一個暱稱
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="email">電子郵件 </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={memberEmail}
                  onChange={(e) => {
                    const newmemberEmail = e.target.value
                    setMemberEmail(newmemberEmail)
                    setmemberEditEmail(newmemberEmail)
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">性別</label>
                <select
                  className="form-control"
                  id="gender"
                  onChange={(e) => {
                    const newMemberGenger = e.target.value
                    setMemberEditGender(newMemberGenger)
                  }}
                >
                  <option value="1" selected={memberGender === 1}>
                    男
                  </option>
                  <option value="2" selected={memberGender === 2}>
                    女
                  </option>
                  <option value="3" selected={memberGender === 3}>
                    其他
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="birth">生日</label>
                <br />
                <input
                  className="form-control"
                  id="birth"
                  type="date"
                  value={memberBirth}
                  onChange={(e) => {
                    const newBirth = e.target.value
                    setMemberBirth(newBirth)
                    setMemberEditBirth(newBirth)
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">所在地</label>
                {/* {memberCountry ? countryDisplay : countrySelect} */}
                <select
                  className="form-control"
                  id="location"
                  onChange={(e) => {
                    const newmemberCountry = e.target.value
                    setMemberEditCountry(newmemberCountry)
                  }}
                >
                  <option value="TW" selected={memberCountry === 'TW'}>
                    TW 台灣
                  </option>
                  <option value="HK" selected={memberCountry === 'HK'}>
                    HK 香港
                  </option>
                  <option value="US" selected={memberCountry === 'US'}>
                    US 美國
                  </option>
                  <option value="JP" selected={memberCountry === 'JP'}>
                    JP 日本
                  </option>
                </select>
              </div>
              <h5>變更密碼</h5>
              <Button
                className="update-img-btn"
                onClick={() => setModalShow(true)}
              >
                變更密碼
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <hr />
              <button
                href=""
                type="button"
                className="update-img-btn"
                onClick={formSubmit}
              >
                更新
              </button>
            </form>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <h5>更新大頭照</h5>
            <div
              className="mb-3"
              style={{
                width: '300px',
                height: '300px',
                border: '1px #627a86 solid',
              }}
            ></div>
            <h6 href="" className="img-select">
              從電腦中選取檔案
            </h6>
            <h6>最佳大小為600x600</h6>
            <button href="" className="update-img-btn">
              更新大頭照
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountSetting
