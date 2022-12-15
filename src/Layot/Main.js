import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from '../Shared/Header'
import LeftSidenav from '../Shared/LeftSidenav'
import RighNav from '../Shared/RighNav'

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className='d-sm-none d-lg-block'>
            <LeftSidenav></LeftSidenav>
          </Col>
          <Col lg="7">
            <Outlet />
          </Col>
          <Col lg="3">
            <RighNav></RighNav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
