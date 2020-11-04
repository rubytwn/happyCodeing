import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Login from './Login'

function Navebar(props) {
  const [click, setClick] = useState(false)
  const { setisAuth, isAuth } = props
  const [loginModalShow, setLoginModalShow] = useState(false)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navberLogo">
          <img src="../../images/navbarLogo.svg" alt="圖片遺失" />
        </Link>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              品牌故事
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-links" onClick={closeMobileMenu}>
              商品列表
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/activity"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              課程活動
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/article" className="nav-links" onClick={closeMobileMenu}>
              文章專欄
            </Link>
          </li>

          <li className="nav-icon member">
            <Link to="/memberroot/aboutme" onClick={closeMobileMenu}>
              <img src="../../images/member.svg" alt="圖片遺失" />
            </Link>
          </li>
          <li className="nav-icon cart">
            <Link to="/cart" onClick={closeMobileMenu}>
              <img src="../../images/購物車.svg" alt="圖片遺失" />
            </Link>
          </li>
          <li className="nav-icon cart1">
            <Link to="/cart" onClick={closeMobileMenu}>
              <img src="../../images/購物車1.svg" alt="圖片遺失" />
            </Link>
          </li>
          <Login
            loginModalShow={loginModalShow}
            setLoginModalShow={setLoginModalShow}
            setisAuth={setisAuth}
            isAuth={isAuth}
          />
        </ul>

        <div className="menu-icon" onClick={handleClick}>
          <i class={click ? 'fas fa-bars' : 'fas fa-times'} />
        </div>
      </nav>
    </>
  )
}

export default Navebar
