import React from 'react'
import '../../styles/footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
const quickLinks = [
    {
      path: "/about",
      display: "Giới thiệu",
    },
  
    {
      path: "#",
      display: "Chính sách bảo mật",
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
const Footer = () => {
    var date = new Date();
    var year = date.getFullYear();

  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col lg='4' md='4' sm='12'>
                    <div className="logo footer__logo">
                        <h1>
                            <Link to="/home" className=" d-flex align-items-center gap-2">
                                <i class="ri-car-line"></i>
                                <span>
                                    Dịch vụ <br /> Thuê xe ô tô
                                </span>
                            </Link>
                        </h1>
                    </div>
                    <p className="footer__logo-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
                        quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
                        Delectus et ad illo recusandae temporibus?
                    </p>
                </Col>

                <Col lg="2" md="4" sm="6">
                    <div className="mb-4">
                    <h5 className="footer__link-title">Truy cập nhanh</h5>
                    <ListGroup>
                        {quickLinks.map((item, index) => (
                        <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                            <Link to={item.path}>{item.display}</Link>
                        </ListGroupItem>
                        ))}
                    </ListGroup>
                    </div>
                </Col>

                <Col lg="3" md="4" sm="6">
                    <div className="mb-4">
                    <h5 className="footer__link-title mb-4">Trụ sở</h5>
                    <p className="office__info">123 Minh Khai, Bắc Từ Liêm, Hà Nội</p>
                    <p className="office__info">Phone: +0356 354 878</p>

                    <p className="office__info">Email: xuvs9xpro@gmail.com</p>

                    <p className="office__info">Giờ làm việc: 8am - 6pm</p>
                    </div>
                </Col>

                <Col lg="3" md="4" sm="12">
                    <div className="mb-4">
                    <h5 className="footer__link-title">Hỗ trợ</h5>
                    <p className="section__description">Gửi thắc mắc về email</p>
                    <div className="newsletter">
                        <input type="email" placeholder="Email" />
                        <span>
                        <i class="ri-send-plane-line"></i>
                        </span>
                    </div>
                    </div>
                </Col>

                <Col lg="12">
                    <div className="footer__bottom">
                    <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                        <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                        <span>Quang Chiến</span>. All rights reserved.
                    </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer