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
import ContactForm from '../components/contactForm'

const Contact = () => (
    <Layout>
        <Header title="Contact me if you are interested in" />
        <Row>
            <Col md="6" style={{ border: `1px solid red`,display:'flex',contentAlign:'center' }}>
              <div style={{width:`300px`}}>
                <h2>Damian Dembicki</h2>
                <ul>
                  <li>
                    <a href="#">Link</a>
                  </li>
                </ul>
                <p>lorem ipsum</p>
              </div>
              
            </Col>
            <Col md="6" style={{ border: `1px solid red` }}>
              <ContactForm />
              </Col>
        </Row>
      </Layout>
)

export default Contact