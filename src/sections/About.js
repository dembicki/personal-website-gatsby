import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"

//components
import Layout from "../components/layout"
import Header from "../components/header"
import LinkButton from "../components/linkButton"

import aboutImage from "../images/about-me-background.png"
import profileImage from "../images/damian.png"
import skillsBar from "../components/skillsBar"

import reactImage from "../images/logo/react.png"

const About = () => {
  const socialLinks = [
    {
      title: "linkedin",
      link: "",
    },
    {
      title: "github",
      link: "",
    },
    {
      title: "dribbble",
      link: "",
    },
  ]

  return (
    <Layout fluid bgSrc={aboutImage}>
      <Header title="A few words about me" />
      <Container
        style={{
          height: `100vh`,
        }}
      >
        <Row>
          <Col
            md="3"
            style={{
              border: `1px solid red`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `space-between`,
            }}
          >
            {/* TODO:replace with gatsby-image */}
            <img
              src={profileImage}
              style={{ height: `auto`, border: `1px solid #707070` }}
            />
            {socialLinks.map(e => {
              return <LinkButton key={e.title}>{e.title}</LinkButton>
            })}
          </Col>
          <Col md="9" style={{ border: `1px solid red`, paddingLeft: `30px` }}>
            <h2
              style={{
                fontSize: `1.3rem`,
                lineHeight: `1.8rem`,
              }}
            >
              I'm a 23-years-old frontend developer and graphic designer located
              in Gdynia, Poland.
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
            </p>
          </Col>
          <Col
            md="12"
            style={{
              border: `1px solid red`,
              padding: `20px 10px 0`,
              display: `flex`,
              justifyContent: `space-around`,
              flexGrow: `1`,
              flexWrap: `no-wrap`,
            }}
          >
            <div>
              <img src={reactImage} />
              <img src={reactImage} />
              <img src={reactImage} />
              <img src={reactImage} />
              <img src={reactImage} />
              <img src={reactImage} />
              <img src={reactImage} />
              <img src={reactImage} />
              <img src={reactImage} />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default About
