import React from 'react'
import '../member.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'


function MemberNav() {
  return (
    <>
      <div className="member_navbar">
        <h4 style={{ color: '#99cb77', fontSize: '20px' }}>會員專區</h4>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link as={NavLink} to="/" exact>關於我</Nav.Link>
          <Nav.Link as={NavLink} to="/order">購買訂單</Nav.Link>
          <Nav.Link as={NavLink} to="/refund">退款申請</Nav.Link>
          <Nav.Link as={NavLink} to="/level">等級權益</Nav.Link>
          <Nav.Link as={NavLink} to="/follow">追蹤商品</Nav.Link>
          <Nav.Link as={NavLink} to="/coupon">優惠券</Nav.Link>
          <Nav.Link as={NavLink} to="/setting">帳號設定</Nav.Link>
          <Nav.Link as={NavLink} to="#">幫助</Nav.Link>
        </Nav>
      </div>
    </>
  )
}

export default MemberNav
