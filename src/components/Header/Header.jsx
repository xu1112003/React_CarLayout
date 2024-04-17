import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link, NavLink} from 'react-router-dom'
import '../../styles/header.css'

const navLinks = [
    {
      path: "/home",
      display: "Trang chủ",
    },
    {
      path: "/about",
      display: "Giới thiệu",
    },
    {
      path: "/cars",
      display: "Ô tô",
    },
  
    {
      path: "/blogs",
      display: "Tin tức",
    },
    {
      path: "/contact",
      display: "Liên hệ",
    },
  ];


const Header = () => {
  return (
    <header className='header'>
        <div className="header__top">
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6'>
                        <div className="header__top__left">
                            <span>Cần trợ giúp?</span>
                            <span className="header__top__help">
                                <i class="ri-phone-fill"></i> +0364 945 878
                            </span>
                        </div>
                    </Col>
                    <Col lg='6' md='6' sm='6'>
                        <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                            <Link to='#' className='d-flex align-items-center gap-1'>
                                <i class="ri-login-circle-line"></i>
                                Đăng nhập
                            </Link>
                            <Link to='#' className='d-flex align-items-center gap-1'>
                                <i class="ri-user-line"></i>
                                Đăng kí
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


        <div className="header__middle">
            <Container>
                <Row>
                    <Col lg='4' md='3' sm='4'>
                        <div className="logo">
                            <h1>
                                <Link to='/home'>
                                    <i class='ri-car-line'></i>
                                    <span>Dịch vụ <br /> Thuê xe ô tô</span>
                                </Link>
                            </h1>
                        </div>
                    </Col>
                    
                    <Col lg="3" md="3" sm="4">
                    <div className="header__location d-flex align-items-center gap-2">
                        <span>
                        <i class="ri-earth-line"></i>
                        </span>
                        <div className="header__location-content">
                        <h4>Hà Nội</h4>
                        <h6>Bắc Từ Liêm, Hà Nội</h6>
                        </div>
                    </div>
                    </Col>

                    <Col lg="3" md="3" sm="4">
                        <div className="header__location d-flex align-items-center gap-2">
                        <span>
                            <i class="ri-time-line"></i>
                        </span>
                        <div className="header__location-content">
                            <h4>Tất cả các ngày trong tuần</h4>
                            <h6>8am - 6pm</h6>
                        </div>
                    </div>
                    </Col>

                    <Col lg="2" md="3" sm="0" className=" d-flex align-items-center justify-content-end ">
                        <button className="header__btn btn ">
                        <Link to="/contact">
                            <i class="ri-phone-line"></i> Điện thoại
                        </Link>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="main__navbar">
            <Container>
                <div className="navigation_wrapper d-flex align-items-center justify-content-between">
                    <span className="mobile__menu">
                        <i class="ri-menu-line"></i>
                    </span>

                    <div className="navigation">
                        <div className="menu">
                            {
                                navLinks.map((item, index) => (
                                    <NavLink to={item.path} key={index} className={(navClass) => navClass.isActive ? "nav__item nav__active" : "nav__item"}>
                                        {item.display}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                    <div className="nav__right">
                        <div className="search__box">
                            <input type="text" placeholder="Search" />
                            <span>
                                <i class="ri-search-line"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    </header>
  )
}

export default Header