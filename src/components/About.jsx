import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


function About() {
    return (
        <Container className="my-5">
            <Row>
                <h3>Our Story</h3>
                    <p className="lead">Invexus-PulseEnergy is a company specializing in integrating blockchain technology with green energy solutions to enhance transparency, efficiency, and sustainability in supply chain and logistics operations. 
Our platform tracks and verifies the use of renewable energy sources—such as solar throughout the supply chain, enabling businesses to monitor energy consumption, reduce carbon footprints, and achieve sustainability goals. Additionally, Invexus-PulseEnergy offers smart contract capabilities for seamless energy transactions, optimizing logistics operations and fostering trust among stakeholders.</p>
                <Col md={6}>
                    <h2>Our Mission</h2>
                    <p className="lead">
To revolutionize supply chain and logistics operations by integrating blockchain technology with green energy solutions, fostering transparency, efficiency, and sustainability throughout the entire supply chain.</p>
<p><h2>Our Vision</h2>
                    <p className="lead">
To create a future where every product's journey is traceable and powered by renewable energy, leading to a global supply chain that is both environmentally responsible and technologically advanced, contributing to a sustainable and equitable world.</p></p>
                </Col>
                <Col md={6}>
                    <img src="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg" style={{width: '100%'}} rounded />
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
