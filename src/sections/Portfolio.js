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
      title: "Thumbnail generator",
      description: "Simple tool for creating blog thumbnails. No graphic software needed! Created in vanilla JS & Skeleton CSS",
      link: "#",
    },
    {
      id: "1",
      title: "This Website",
      description: "This website design was prototyped in Adobe Xd and created and developed using React and Gatsby.",
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
        <Button href="https://github.com/dembicki" className="mx-auto test" style={{width:`300px`}}>all the projects on github</Button>
      </Row>
    </Layout>
  )
}

export default Portfolio
