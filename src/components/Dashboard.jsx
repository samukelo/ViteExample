import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Row, Col, Card } from 'react-bootstrap';

function Dashboard() {
    const [emissions, setEmissions] = useState([]);

    // Mock data - in real app, connect to Hyperledger
    useEffect(() => {
        setEmissions([
            { id: 1, route: 'Shanghai to LA', co2: 1240, vehicle: 'Cargo Ship', date: '2023-05-15' },
            { id: 2, route: 'LA to Chicago', co2: 420, vehicle: 'Electric Truck', date: '2023-05-16' }
        ]);
    }, []);

    return (
        <Container className="my-5">
            <h1 className="mb-4">Emission Tracking Dashboard</h1>

            <Row className="mb-4">
                <Col md={4}>
                    <Card bg="success" text="white" className="mb-3">
                        <Card.Body>
                            <Card.Title>Total CO₂ Saved</Card.Title>
                            <Card.Text className="display-6">1,240 kg</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Add other metrics similarly */}
            </Row>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Route</th>
                        <th>CO₂ (kg)</th>
                        <th>Vehicle Type</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {emissions.map(item => (
                        <tr key={item.id}>
                            <td>{item.route}</td>
                            <td>{item.co2}</td>
                            <td>{item.vehicle}</td>
                            <td>{item.date}</td>
                            <td>
                                <Button variant="info" size="sm">Details</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Button variant="primary" className="mt-3">
                <i className="bi bi-plus-circle"></i> Add New Record
            </Button>
        </Container>
    );
}

export default Dashboard;