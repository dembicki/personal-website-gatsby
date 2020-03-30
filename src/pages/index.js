import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/project"
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
import Header from "../components/header"
import HeroText from "../components/heroText"

import aboutImage from "../images/about-me-background.png"
import heroImage from "../images/hero-image.png"

const IndexPage = () => (
  <>
    <SEO title="Damian Dembicki" />
    {/* Hero section */}
    <Layout fluid bgSrc={heroImage}>
      <Container>
        <Navbar bg="transparent" expand="md">
          <Navbar.Brand href="#home" style={{ 
            color: `white`,
            fontWeight: 600,
            }}>
            LOGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">portfolio</Nav.Link>
              <Nav.Link href="#link">about</Nav.Link>
              <Nav.Link href="#link">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <HeroText text="Let's make some beutiful things together." />
      </Container>
    </Layout>

    {/* Portfolio section */}
    <Layout title="Take a look at some of my projects">
      <Header title={"Take a look at some of my projects"} />
      <Row className="pt-3">
        <Col>
          <Project />
        </Col>
        <Col>
          <Project />
        </Col>
        <Col>
          <Project />
        </Col>
      </Row>

      <Row className="pt-3">
        <Col>
          <Project />
        </Col>
        <Col>
          <Project />
        </Col>
        <Col>
          <Project />
        </Col>
      </Row>

      <Row className="pt-5">
        <Button className="mx-auto">all the projects on github</Button>
      </Row>
    </Layout>

    {/* About me section */}
    <Layout fluid bgSrc={aboutImage}>
      <Header title="A few words about me" />
      <Container
        style={{
          height: `100vh`,
        }}
      >
        <Row>
          <Col>image</Col>
          <Col>tekst</Col>
        </Row>
        <Row>
          <Col>
            <Button>Test</Button>
          </Col>
          <Col>tekst</Col>
        </Row>
      </Container>
    </Layout>

    {/* Contact section */}

    <Layout>
      <Header title="Contact me if you are interested in" />
      <h2>Hello my people</h2>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  </>
)

export default IndexPage
