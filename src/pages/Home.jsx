import React from 'react'
import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import FindCarForm from '../components/UI/FindCarForm'
import { Container, Col, Row } from 'reactstrap'
import AboutSection from '../components/UI/AboutSection'
import ServiceList from '../components/UI/ServiceList'
import carData from '../assets/data/carData'
import CarItem from '../components/UI/CarItem'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import BlogList from '../components/UI/BlogList'
const Home = () => {
  return (
    <Helmet title='Home'>
      <section className='p-0 hero__slider-section'>
        <HeroSlider/>
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Tìm xe của bạn tại đây</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* =============================== */}
      <AboutSection/>
      {/* ================================ */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <h6 className="section__subtitle">Xem thông tin</h6>
              <h2 className='section__title'>Dịch vụ phổ biến</h2>
            </Col>

            <ServiceList/>
          </Row>
        </Container>
      </section>


      {/* =============================== */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h6 className='section__subtitle'>Đến với</h6>
              <h2 className='section__title'>Dịch vụ nổi bật</h2>
            </Col>

            {
              carData.slice(0,6).map(item => (
                <CarItem item={item} key={item.id}/>
              ))
            }
          </Row>
        </Container>
      </section>


      {/* =================================== */}
      <BecomeDriverSection/>
      {/* =================================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Khám phá tin tức</h6>
              <h2 className="section__title">Bài viết mới nhất</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home