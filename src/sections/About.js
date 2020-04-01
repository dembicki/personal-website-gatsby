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

  //components
  import Layout from '../components/layout'
  import Header from '../components/header'


  import aboutImage from "../images/about-me-background.png"

const About = () => (
    <Layout fluid bgSrc={aboutImage}>
        <Header title="A few words about me" />
        <Container
          style={{
            height: `100vh`,
          }}
        >
          <Row>
            <Col md="4" style={{ border: `1px solid red` }}>
              1 of 2
            </Col>
            <Col md="8" style={{ border: `1px solid red` }}>
              <h2>
                I'm a 23-years-old frontend developer and graphic designer
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Why do we use it? It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>

)

export default About