import React from "react"

import { Card, Container } from "react-bootstrap"

const Project = ({title, description}) => (
  <Card style={{ width: "19rem",height:`13rem`, borderRadius:0, border:`1px solid #707070`}}>
    <Card.Img variant="top" src="!https://via.placeholder.com/150" />
    <Card.Body style={{border:`1px solid #707070`}}>
      <Card.Title style={{fontWeight:600}}>{title}</Card.Title>
      <Card.Text style={{fontSize:`.9rem`}}>
        {description}
      </Card.Text>
    </Card.Body>
  </Card>
)


export default Project;
