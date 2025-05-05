import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <h2>Contact Us</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Your email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>

                        <Button variant="success" type="submit">Send Message</Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <h3>Our Office</h3>
                    <p>
                        <i className="bi bi-envelope"></i> info@greenchain.com<br />
                        <i className="bi bi-telephone"></i> +1 (555) 123-4567
                    </p>
                    {/* Map integration would go here */}
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;