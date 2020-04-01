import React from "react"
import { Row, Col, Button } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import Project from "../components/project"

const Portfolio = () => {
  //TODO:move to another file .json  
  const projectData = [
    {
      id: "0",
      title: "Title1",
      description: "lorem ipsum",
      link: "#",
    },
    {
      id: "1",
      title: "App #2",
      description: "lorem ipsum",
      link: "#",
    },
    {
      id: "2",
      title: "Random_title()",
      description: "lorem ipsum",
      link: "#",
    },
    // ...other projects here
  ]

  return (
    <Layout title="Take a look at some of my projects">
      <Header title={"Take a look at some of my projects"} />
      <Row className="pt-3">
        {projectData.map(e => (
          <Col>
            <Project key={e.id} title={e.title} description={e.description} />
          </Col>
        ))}
      </Row>

      <Row className="pt-5">
        <Button className="mx-auto">all the projects on github</Button>
      </Row>
    </Layout>
  )
}

export default Portfolio
