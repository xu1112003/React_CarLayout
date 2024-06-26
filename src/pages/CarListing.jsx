import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import CarItem from "../components/UI/CarItem"
import carData from "../assets/data/carData"
const CarListing = () => {
  return (
    <Helmet title='Cars'>
      <CommonSection title="Car Listing"/>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='d-flex align-items-center gap-3 mb-5'>
                <span className='d-flex align-items-center gap-2'>
                  <i className="ri-sort-asc"></i> Sắp xếp
                </span>
                <select name="" id="">
                  <option value="low">Từ thấp đến cao</option>
                  <option value="high">Từ cao xuống thấp</option>
                </select>
              </div>
            </Col>

            {
              carData.map(item => <CarItem item={item} key={item.id}/>)
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CarListing