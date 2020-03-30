import React from "react"

import { Card, Container } from "react-bootstrap"

const Project = ({title, description}) => (
  <Card style={{ width: "19rem"}}>
    <Card.Img variant="top" src="!https://via.placeholder.com/150" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
)

export default Project;
