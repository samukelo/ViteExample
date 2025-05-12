// AdminDashboard.jsx
import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function AdminDashboard() {
  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <Row className="mt-4">
        <Col md={6}>
          <Card onClick={() => navigate('/usermanagement')} style={{ cursor: 'pointer' }}>
            <Card.Body>
              <Card.Title>Manage Staff / Users</Card.Title>
              <Button variant="primary" className="me-2;mt-4" onClick={() => navigate(`/usermanagement`)}>User Management</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card onClick={() => navigate('/warehouses')} style={{ cursor: 'pointer' }}>
            <Card.Body>
              <Card.Title>Warehouse Management</Card.Title>
              <Button variant="success" onClick={() => navigate(`/warehouses`)}>Manage Warehouses</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  </div>
  )
}

export default AdminDashboard

