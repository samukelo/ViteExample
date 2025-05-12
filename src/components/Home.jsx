import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import HeroSlider from './HeroSlider';

function Home() {
    return (
        <Container fluid>
            <Container fluid className="p-0">
      <HeroSlider />
      {/* Rest of your content */}
    </Container>

            {/* Services Section */}
            <Container className="my-5">
  <h2 className="text-center mb-4">Our Services</h2>
  <Row>
    {/* Solar Panels (Existing) */}
    <Col md={3} className="text-center mb-4">
      <Card className="h-100">
        <Card.Body>
          <i className="bi bi-sun fs-1 text-warning mb-3"></i>
          <Card.Title>Solar Solutions</Card.Title>
          <Card.Text>Renewable energy solutions for your warehouse operations</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Carbon Tracking */}
    <Col md={3} className="text-center mb-4">
      <Card className="h-100">
        <Card.Body>
          <i className="bi bi-cloud-fog2 fs-1 text-primary mb-3"></i>
          <Card.Title>Emission Tracking</Card.Title>
          <Card.Text>Real-time CO₂ monitoring across your supply chain</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Green Fleet */}
    <Col md={3} className="text-center mb-4">
      <Card className="h-100">
        <Card.Body>
          <i className="bi bi-truck fs-1 text-success mb-3"></i>
          <Card.Title>Green Fleet</Card.Title>
          <Card.Text>Electric and hybrid vehicle logistics solutions</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Blockchain Audit */}
    <Col md={3} className="text-center mb-4">
      <Card className="h-100">
        <Card.Body>
          <i className="bi bi-shield-check fs-1 text-info mb-3"></i>
          <Card.Title>Sustainability Audit</Card.Title>
          <Card.Text>Blockchain-verified green compliance reporting</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>

            {/* Why Us Section */}
            <Row className="bg-light py-4">
  <Container>
    <h2 className="text-center mb-4">Why Choose Us</h2>
    <ul className="list-unstyled row">
      {/* Eco-Friendly (Existing) */}
      <li className="col-md-3 text-center mb-3">
        <i className="bi bi-tree fs-3 text-success mb-2"></i>
        <h4>Eco-Friendly</h4>
        <p>Sustainable solutions with minimal environmental impact</p>
      </li>

      {/* Blockchain Transparency */}
      <li className="col-md-3 text-center mb-3">
        <i className="bi bi-shield-lock fs-3 text-primary mb-2"></i>
        <h4>End-to-End Transparency</h4>
        <p>Blockchain-verified data for complete supply chain visibility</p>
      </li>

      {/* Cost Efficiency */}
      <li className="col-md-3 text-center mb-3">
        <i className="bi bi-graph-down-arrow fs-3 text-danger mb-2"></i>
        <h4>Cost Efficiency</h4>
        <p>Reduce operational costs through optimized green logistics</p>
      </li>

      {/* Compliance Ready */}
      <li className="col-md-3 text-center mb-3">
        <i className="bi bi-file-earmark-check fs-3 text-info mb-2"></i>
        <h4>Compliance Ready</h4>
        <p>Automated reporting for environmental regulations</p>
      </li>
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