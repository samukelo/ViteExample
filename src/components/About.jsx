import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import pic1 from 'C:/Users/Samukaay/ViteExample/public/antonio-garcia-ndz_u1_tFZo-unsplash.jpg'


function About() {
    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <h2>Our Mission</h2>
                    <p className="lead">"Committed to clean, affordable energy solutions through blockchain technology."</p>

                    <h3 className="mt-4">Our Story</h3>
                    <p>Founded in 2023, GreenChain Consultants was born from a passion for combining cutting-edge technology with environmental sustainability.</p>
                </Col>
                <Col md={6}>
                    <Image src={pic1} fluid rounded />
                </Col>
            </Row>

            <Row className="mt-5">
                <h3>Our Team</h3>
                {/* Team members cards would go here */}
            </Row>
        </Container>
    );
}

export default About;