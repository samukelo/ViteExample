import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Home() {
    return (
        <Container fluid>
            {/* Hero Section */}
            <Row className="bg-success text-white py-5" style={{ backgroundImage: "url('eco-bg.jpg')", backgroundSize: 'cover' }}>
                <Col md={8} className="mx-auto text-center py-5">
                    <h1 className="display-4">Powering a Greener Future</h1>
                    <Button variant="light" size="lg" className="mt-3">Get a Free Quote</Button>
                </Col>
            </Row>

            {/* Services Section */}
            <Container className="my-5">
                <h2 className="text-center mb-4">Our Services</h2>
                <Row>
                    <Col md={4} className="text-center mb-4">
                        <Card>
                            <Card.Body>
                                <i className="bi bi-sun fs-1 text-warning"></i>
                                <Card.Title>Solar Panels</Card.Title>
                                <Card.Text>Renewable energy solutions for your operations</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Add other services similarly */}
                </Row>
            </Container>

            {/* Why Us Section */}
            <Row className="bg-light py-4">
                <Container>
                    <h2 className="text-center mb-4">Why Choose Us</h2>
                    <ul className="list-unstyled row">
                        <li className="col-md-4 text-center mb-3">
                            <i className="bi bi-tree fs-3 text-success"></i>
                            <h4>Eco-Friendly</h4>
                            <p>Sustainable solutions with minimal environmental impact</p>
                        </li>
                        {/* Add other points similarly */}
                    </ul>
                </Container>
            </Row>

            {/* CTA Section */}
            <Row className="py-5 bg-primary text-white">
                <Col md={8} className="mx-auto text-center">
                    <h2>Start Your Green Journey Today</h2>
                    <Button variant="light" size="lg" className="mt-3">Contact Us</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;