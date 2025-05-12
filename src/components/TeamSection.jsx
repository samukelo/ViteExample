import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './TeamSection.css'; // We'll add styles here

const teamMembers = [
  {
    name: 'Zakhele Shiba',
    title: 'Blockchain Developer',
    image: '/images/team1.jpeg',
    socials: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Nokuphiwo Mwelase',
    title: 'Operations Manager',
    image: '/images/team2.jpeg',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Andiswa Hlophe',
    title: 'Sustainability Analyst',
    image: '/images/team3.jpeg',
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
