import { useState, useEffect } from "react" // src/pages/Home.js
import { useSelector } from "react-redux"
import Account from "../header/photos/icon-account-header.svg"
import Cart from "../header/photos/icon-cart-header.svg"
import Search from "../header/photos/icon-search-header.svg"
import Logo from "../header/photos/logo-coolmate.svg"
import Google from "../header/photos/logo-google.png"
import MenuButton from "./menuButton"
import Menu from "./menu"
import { Link } from "react-router-dom"
import "./styles.css"
import "./responsive.css"

export default function Header() {
  const [menu, setMenu] = useState([])
  const [aboutCoolmate, setAboutCoolmate] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/dataProduct")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setMenu(data)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/dataAboutCoolmate")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setAboutCoolmate(data)
      })
  }, [])
  const [isNotSearching, setIsNotSearching] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isNotRegistering, setIsNotRegistering] = useState(true)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleSearch = () => {
    setIsNotSearching(false)
  }
  const handleRegister = () => {
    setIsNotRegistering(false)
  }
  const handleExit = () => {
    setIsNotSearching(true) || setIsNotRegistering(true)
  }
  const cart = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="header-container">
      <div className="slogan">
        <strong>Combo tiết kiệm ưu đãi 44%</strong>
        <div
          className={`${
            isNotSearching ? "navbar flex " : "navbar flex navbar-search"
          }`}
        >
          <MenuButton
            toggleMenu={toggleMenu}
            isOpen={isOpen}
            isNotSearching={isNotSearching}
          />
          {isNotSearching ? (
            <Link to="/">
              <div className="logo">
                <img src={Logo} />
              </div>
            </Link>
          ) : (
            <div className="exit" onClick={handleExit}></div>
          )}
          <div className="menu">
            {isNotSearching ? (
              <ul className="flex">
                {menu.map((item) => (
                  <Menu
                    aboutCoolmate={aboutCoolmate}
                    key={item.id}
                    id={item.id}
                    item={item}
                  />
                ))}
              </ul>
            ) : (
              <input
                className="search"
                type="search"
                placeholder="Tìm kiếm sản phẩm..."
              />
            )}
          </div>
          <div className="icons flex middle">
            <div className="icon flex" onClick={() => handleSearch()}>
              <img src={`${!isOpen ? Search : ""}`} />
            </div>
            <div className="icon flex" onClick={() => handleRegister()}>
              <img src={`${isNotSearching ? Account : ""}`} />
            </div>
            <Link to="/cart">
              <div className="icon flex">
                <div className="cart-icon-holder">
                  <img
                    src={`${isNotSearching ? Cart : ""}`}
                    className="icon-cart"
                  />
                  {isNotSearching && (
                    <div className="shopping-item">
                      <p>{getTotalQuantity() || 0}</p>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {!isNotRegistering && (
        <div className="overlay-container">
          <div className="overlay" onClick={handleExit}></div>
          <form className="registerForm flex column">
            <div className="exitButton" onClick={handleExit}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <h1>Đăng nhập</h1>
            <p className="warning">
              Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính
              năng <a>"Lấy mật khẩu"</a> để có thể truy cập vào tài khoản bằng
              email nhé.
            </p>
            <input
              type="text"
              placeholder="Email/SĐT của bạn"
              autoComplete="on"
            />
            <input type="password" placeholder="Mật khẩu" autoComplete="on" />
            <button type="submit" className="login first-button">
              Đăng nhập
            </button>
            <div className="divider flex column">
              <hr className="line" />
              <span className="or flex middle">Hoặc</span>
            </div>
            <button type="submit" className="login facebook">
              Đăng nhập với Facebook{" "}
              <i className="fa-brands fa-square-facebook"></i>
            </button>
            <button type="submit" className="login google">
              Đăng nhập với Google <img src={Google} />
            </button>
            <div className="flex more">
              <a>Đăng ký tài khoản mới</a>
              <a>Quên mật khẩu</a>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
