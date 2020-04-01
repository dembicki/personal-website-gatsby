import React from "react"

import { Card, Container } from "react-bootstrap"

const Project = ({title, description}) => (
  <Card style={{ width: "19rem"}}>
    <Card.Img variant="top" src="!https://via.placeholder.com/150" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
  </Card>
)


export default Project;
