import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function SuperAdmin() {
  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <h2>Invexus Admin Dashboard</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Card onClick={() => navigate('/users')} style={{ cursor: 'pointer' }}>
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>124</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card onClick={() => navigate('/subscriptions')} style={{ cursor: 'pointer' }}>
            <Card.Body>
              <Card.Title>Active Subscriptions</Card.Title>
              <Card.Text>85</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card onClick={() => navigate('/wallet')} style={{ cursor: 'pointer' }}>
            <Card.Body>
              <Card.Title>Wallet Balance</Card.Title>
              <Card.Text>0.00 ETH</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  </div>
  )
}

export default SuperAdmin