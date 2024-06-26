import React from 'react'
import "../../styles/become-driver-section.css"
import { Container, Row, Col } from 'reactstrap'
import driverImg from '../../assets/all-images/toyota-offer-2.png'
const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
        <Container>
            <Row>
                <Col lg='6' sm='12' md='6'>
                    <img src={driverImg} alt="" className='w-100'/>
                </Col>
                <Col lg='6' sm='12' md='6'>
                    <h2 className="section__title become__driver-title">
                        Đăng kí ngay để hợp tác cùng chúng tôi
                    </h2>
                    <button className='btn become__driver-btn mt-4'>
                        Trở thành tài xế
                    </button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default BecomeDriverSection