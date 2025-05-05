import React, { useState } from 'react';
import { Navbar, Nav, Container, Dropdown, Modal, Button, Form, Row, Col } from 'react-bootstrap';

function CustomNavbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null); // Will hold user data when logged in

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your actual login logic here
    setUser({ name: "Demo User" }); // Simulate successful login
    setShowLogin(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your actual registration logic here
    setUser({ name: "Demo User" }); // Simulate successful registration
    setShowRegister(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky='top' expand="lg" className="px-3">
        <Container fluid>
          <Navbar.Brand href="/">Invexus-Pulse Energy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="dashboard">Dashboard</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
            
            {/* Account Section */}
            <Nav className="ms-auto">
              {user ? (
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <i className="bi bi-person-circle me-1"></i>
                    {user.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Button 
                    variant="outline-light" 
                    className="me-2"
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </Button>
                  <Button 
                    variant="success"
                    onClick={() => setShowRegister(true)}
                  >
                    Register
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
           <Row>
        <Col>Normal User
        email:sdasdsad@gmail.combining
        Pass: sadsdsadsa
        </Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
          </Container>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password"
                required
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Register Modal */}
      <Modal show={showRegister} onHide={() => setShowRegister(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Confirm password"
                required
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="success" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomNavbar;