import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/project"
import { Row, Col, Container, Button } from "react-bootstrap"

const IndexPage = () => (
  <>
    <SEO title="Damian Dembicki" />

    {/* Navbar here */}

    <Layout title="Take a look at some of my projects">
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

    <Layout title="A few words about me" >
      <Container style={{
        backgroundColor: `red`,
        Backgroundopacity: `.3`,
        height: `81vh`
        }}>
      <Row>
        <Col>a</Col>
        <Col>tekst</Col>
      </Row>
      <Row>
        <Col>a</Col>
        <Col>tekst</Col>
      </Row>
      </Container>
    </Layout>

    <Layout title="Contact me if you are interested in">
      <h2>Hello my people</h2>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  </>
)

export default IndexPage
