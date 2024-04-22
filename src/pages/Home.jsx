import React from 'react'
import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import FindCarForm from '../components/UI/FindCarForm'
import { Container, Col, Row } from 'reactstrap'
import AboutSection from '../components/UI/AboutSection'
import ServiceList from '../components/UI/ServiceList'
import carData from '../assets/data/carData'
import CarItem from '../components/UI/CarItem'
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
              <h6 className="section__subtitle">See our</h6>
              <h2 className='section__title'>Popular Service</h2>
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
              <h6 className='section__subtitle'>Come with</h6>
              <h2 className='section__title'>Hot Offers</h2>
            </Col>

            {
              carData.slice(0,6).map(item => (
                <CarItem item={item} key={item.id}/>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home