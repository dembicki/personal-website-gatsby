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
              <div className="mx-auto" style={{width:`300px`}}>
                <h3>Damian Dembicki</h3>
                <ul>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
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