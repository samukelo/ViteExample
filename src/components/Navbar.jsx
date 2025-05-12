import React, { useState } from 'react';
import { Navbar, Nav, Container, Dropdown, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Dummy users array (in production, replace with API)
const users = [
  { email: 'warehouse@gmail.com', password: '1234', role: 'normal', name: 'Warehouse Manager' },
  { email: 'admin@gmail.com', password: 'adminpass', role: 'admin', name: 'Admin User' },
  { email: 'greenhouse@gmail.com', password: 'greenpass', role: 'greenhouse', name: 'Greenhouse Manager' },
  {email: 'SuperAdmin@invexustech.co.za', password: 'SuperAdmin', role:'superadmin', name: 'Super Admin'}
];

function CustomNavbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const matchedUser = users.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );

    if (!matchedUser) {
      setLoginError('Invalid email or password');
      return;
    }

    setUser(matchedUser);
    localStorage.setItem('user', JSON.stringify(matchedUser));
    setShowLogin(false);
    navigate(`/dashboard/${matchedUser.role}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add actual registration logic here
    setUser({ name: "Demo User", role: "normal" });
    setShowRegister(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <Navbar expand="lg" className="bg-white shadow-sm" sticky='top'>
        <Container fluid>
          <Navbar.Brand href="/">
          <img
              src="/images/logo.jpeg"
              width="150"
              height="60"
              className="d-inline-block align-top"
              alt="Invexus Support"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto mt-6" gap={3}>
              <Nav.Link href="/" > <h4>Home</h4> </Nav.Link>
              <Nav.Link
              onClick={() => {
                if (user && user.role) {
                  navigate(`/dashboard/${user.role}`);
                } else {
                  setShowLogin(true); 
                }
              }}
            >
             <h4>Dashboard</h4> 
            </Nav.Link>
              <Nav.Link href="/about"><h4>About</h4></Nav.Link>
              <Nav.Link href="/contact"><h4>Contact</h4></Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              {user ? (
                <Dropdown align="end">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <i className="bi bi-person-circle me-1"></i>
                    {user.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#profile" disabled>Profile</Dropdown.Item>
                    <Dropdown.Item href="#settings" disabled>Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Button variant="danger" className="me-2" onClick={() => setShowLogin(true)}>
                    Login
                  </Button>
                  <Button variant="success" onClick={() => setShowRegister(true)}>
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
            <Col><strong>Invexus Admin:</strong><br />Email: SuperAdmin@invexustech.co.za<br />Pass: SuperAdmin</Col>
              <Col><strong>Warehouse:</strong><br />Email: warehouse@gmail.com<br />Pass: 1234</Col>
              <Col><strong>Admin:</strong><br />Email: admin@gmail.com<br />Pass: adminpass</Col>
              <Col><strong>Greenhouse:</strong><br />Email: greenhouse@gmail.com<br />Pass: greenpass</Col>
            </Row>
          </Container>

          <Form onSubmit={handleLogin} className="mt-3">
            {loginError && <div className="text-danger mb-2">{loginError}</div>}
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
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
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" required />
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
