import React from 'react'
import {
    Row,
    Col,
    Container,
    Button,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
  } from "react-bootstrap"

import Header from '../components/header'
import Layout from '../components/layout'
import Image from '../components/image'

const Contact = () => (
    <Layout>
        <Header title="Contact me if you are interested in" />
        <Row>
            <Col md="6" style={{ border: `1px solid red` }}>1 of 2</Col>
            <Col md="6" style={{ border: `1px solid red` }}>2 of 2</Col>
        </Row>
      </Layout>
)

export default Contact