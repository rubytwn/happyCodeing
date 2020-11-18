import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Login from './Login'
// import { Badge, Button } from 'react-bootstrap'
import { Badge, Button } from 'react-bootstrap'
import { useEffect } from 'react'

function Navebar(props) {
  const [click, setClick] = useState(false)
  const { setisAuth, isAuth, cartItems, setCartItems } = props
  const [loginModalShow, setLoginModalShow] = useState(false)
  

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)
  useEffect(() => {
    const a = cartItems
  console.log(a)
  }, [cartItems])
  
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
          <li className="nav-icon">
            {/* <Link to="/cart" onClick={closeMobileMenu}>
            <div>
            <img src="../../images/購物車1.svg" alt="圖片遺失" /><Badge variant="light">9</Badge>
            </div>
              
            </Link> */}
            <Button variant="primary">
              Profile <Badge variant="light">{cartItems}</Badge>
              <span className="sr-only">unread messages</span>
            </Button>
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
