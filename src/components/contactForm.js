import React from "react"
import { Container } from 'react-bootstrap'

import { Form, Button } from "react-bootstrap"
import styles from "./contactForm.module.css"

const ContactForm = () => (
  <Container className="ml-2">
    <Form>
      <Form.Group controlId="name">
        <Form.Control type="text" size="md" placeholder="name" />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Control type="text" size="md" placeholder="email" />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Control as="textarea" size="md" rows="6" placeholder="message" />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ width: `100%` }}>
        Send it!
      </Button>
    </Form>
  </Container>
)

export default ContactForm
