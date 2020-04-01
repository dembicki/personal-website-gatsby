import React from "react"
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

import Layout from "../components/layout"
import HeroText from "../components/heroText"

import heroImage from "../images/hero-image.png"

const Hero = () => {
  const Links = ["portfolio", "about", "contact"]

  return (
    <Layout fluid bgSrc={heroImage}>
      <Container>
        <Navbar bg="transparent" expand="md">
          <Navbar.Brand
            href="#home"
            style={{
              color: `white`,
              fontWeight: 600,
            }}
          >
            LOGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {Links.map(e => {
                return <Nav.Link key={e} href={'#'+e} style={{ color: `white`, fontWeight: `500` }}>{e} </Nav.Link>
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <HeroText />
      </Container>
    </Layout>
  )
}
export default Hero
