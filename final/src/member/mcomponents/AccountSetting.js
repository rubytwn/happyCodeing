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
import EditPwdModal from './EditPwdModal'

function AccountSetting(props) {
  //用localStoragex裡的id判斷是哪個帳號登入
  const localStorageInfo = localStorage.getItem('memberLogInInfo')
  const localStorageId = JSON.parse(localStorageInfo).id

  //那個帳號的初始資料
  const [memberName, setMemberName] = useState('')
  const [memberEmail, setMemberEmail] = useState('')
  const [memberGender, setMemberGender] = useState('')
  const [memberBirth, setMemberBirth] = useState('')
  const [memberCountry, setMemberCountry] = useState('')
  const [memberPwd, setMemberPwd] = useState('')
  const [avatar, setAvatar] = useState('')

  //載入畫面時從資料庫讀去把資料set進各個項目裡
  useEffect(() => {
    if (localStorageId !== '') {
      const data = { id: localStorageId }
      fetch('http://localhost:3000/member/getMemberData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          //console.log(res.json());
          return res.json()
        })
        .then((res) => {
          console.log(res)
          //console.log(res[0].email);
          setMemberName(res[0].name)
          setMemberEmail(res[0].email)
          if (res[0].birth) {
            setMemberBirth(res[0].birth.slice(0, 10))
          }
          setMemberGender(res[0].gender)
          setMemberCountry(res[0].country)
          setMemberPwd(res[0].pwd)
          setAvatar(res[0].avatar)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  //更新後的資料的hook
  const [memberEditName, setMembeEdirName] = useState('')
  const [memberEditEmail, setmemberEditEmail] = useState('')
  const [memberEditGender, setMemberEditGender] = useState('')
  const [memberEditBirth, setMemberEditBirth] = useState('')
  const [memberEditCountry, setMemberEditCountry] = useState('')
  const [memberEditPwd, setMemberEditPwd] = useState('')
  const [memberEditNew1Pwd, setmemberEditNew1Pwd] = useState('')
  const [memberEditNew2Pwd, setmemberEditNew2Pwd] = useState('')

  //更新按鈕觸發的function
  function formSubmit(event) {
    const data = {
      name: memberEditName ? memberEditName : memberName,
      email: memberEditEmail ? memberEditEmail : memberEmail,
      gender: memberEditGender ? memberEditGender : memberGender,
      birth: memberEditBirth ? memberEditBirth : memberBirth,
      country: memberEditCountry ? memberEditCountry : memberCountry,
      id: localStorageId,
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

  //更改密碼的modal的判斷
  const [modalShow, setModalShow] = useState(false)

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
                  className="form-con"
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
                  className="form-con"
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
                  className="form-con"
                  id="gender"
                  onChange={(e) => {
                    const newMemberGenger = e.target.value
                    setMemberEditGender(newMemberGenger)
                  }}
                >
                  <option value="1" selected={memberGender === '1'}>
                    男
                  </option>
                  <option value="2" selected={memberGender === '2'}>
                    女
                  </option>
                  <option value="3" selected={memberGender === '3'}>
                    其他
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="birth">生日</label>
                <br />
                <input
                  className="form-con"
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
                <select
                  className="form-con"
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
              {/* <Button
                className="update-img-btn"
                onClick={() => setModalShow(true)}
              >
                變更密碼
              </Button> */}

              <EditPwdModal
                modalShow={modalShow}
                setModalShow={setModalShow}
                memberPwd={memberPwd}
                setMemberPwd={setMemberPwd}
                memberEditPwd={memberEditPwd}
                setMemberEditPwd={setMemberEditPwd}
                memberEditNew1Pwd={memberEditNew1Pwd}
                setmemberEditNew1Pwd={setmemberEditNew1Pwd}
                memberEditNew2Pwd={memberEditNew2Pwd}
                setmemberEditNew2Pwd={setmemberEditNew2Pwd}
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
              style={{
                height: '160px',
                width: '160px',
              }}
            >
              <img
                className="avatar"
                src={
                  avatar
                    ? `http://localhost:3000/images/member/${avatar}`
                    : 'http://localhost:3001/images/noneavatar.jpg'
                }
                alt="找不到圖片"
              />
            </div>
            <h6 href="" className="img-select">
              從電腦中選取檔案
            </h6>
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
