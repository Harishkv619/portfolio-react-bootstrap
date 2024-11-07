import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-dark text-white py-5">
      <Container>
        <h2 className="text-center mb-4">Get in Touch</h2>
        <Form>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default ContactForm;