import React from 'react'
import {
    Row,
    Col,
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
            <Col md="6" style={{ border: `1px solid red` }}>1 of 3</Col>
            <Col md="6" style={{ border: `1px solid red` }}>2 of 3</Col>
        </Row>
      </Layout>
)

export default Contact