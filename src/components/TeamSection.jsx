import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './TeamSection.css'; // We'll add styles here

const teamMembers = [
  {
    name: 'Jane Doe',
    title: 'Marketing Lead',
    image: 'https://www.bigfootdigital.co.uk/wp-content/uploads/2024/08/mark-600x600.jpg',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'John Smith',
    title: 'Product Manager',
    image: 'https://www.bigfootdigital.co.uk/wp-content/uploads/2019/04/bigfoot_digital_1.jpg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
];

function TeamSection() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Our Team</h2>
      <Row>
        {teamMembers.map((member, idx) => (
          <Col key={idx} md={4} className="mb-4">
            <Card className="team-card">
              <div className="image-container">
                <Card.Img variant="top" src={member.image} />
                <div className="overlay">
                  <a href={member.socials.facebook}><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href={member.socials.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href={member.socials.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
              </div>
              <Card.Body className="text-center">
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TeamSection;
