import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === true) {
      event.stopPropagation();
      alert("Message Sent!");
      window.location.reload(false);
    }
    setValidated(true);
  };



  return (
    <Form className='py-4 pb-5' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-4" controlId="first_name">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" required />
            <Form.Control.Feedback type="invalid">Please enter a message</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-4" controlId="last_name">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" required />
            <Form.Control.Feedback type="invalid">Please enter a message</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-4" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="yourname@email.com" required />
        <Form.Control.Feedback type="invalid">Please enter a message</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Send me a message and I'll reply you as soon as possible..." required />
        <Form.Control.Feedback type="invalid">Please enter a message</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="checkbox_terms">
        <Form.Check type="checkbox" label="You agree to providing your data to dyCodes who may contact you." required />
      </Form.Group>

      <Button variant="primary" id='btn__submit' className='w-100' type="submit">
        Send message
      </Button>
    </Form>
  )
}

export default ContactForm