import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Introduction = () => {
  return (
    <section id="home" className="intro text-center text-white">
      <Container>
        <Row>
          <Col md={6}>
            <h1>Hi, I'm Harish K V</h1>
            <p className="lead">A MERN Stack Developer & Mentor</p>
            <Button href="#services" variant="light" size="lg">
              Get Started
            </Button>
          </Col>
          <Col md={6}>
            <img src="profile.jpg" alt="Harish" className="img-fluid shadow-lg img-up" width="300" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Introduction;