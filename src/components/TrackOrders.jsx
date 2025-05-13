// TrackOrders.js
import React, { useState } from 'react';
import { Table, Button, Form, Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const TrackOrders = () => {
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState({ orderId: '', destination: '', inventoryLocation: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addLog = () => {
    const newBlock = {
      id: uuidv4(),
      timestamp: new Date().toLocaleString(),
      orderId: form.orderId,
      destination: form.destination,
      inventoryLocation: form.inventoryLocation,
      previousHash: logs.length > 0 ? logs[logs.length - 1].id : 'ETH',
    };
    setLogs([...logs, newBlock]);
    setForm({ orderId: '', destination: '', inventoryLocation: '' });
  };

  return (
    <div className="container mt-4">
      <h4>Order Creation / Routing (Blockchain Log)</h4>

      <Card className="mb-3">
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Order ID</Form.Label>
              <Form.Control name="orderId" value={form.orderId} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Destination</Form.Label>
              <Form.Control name="destination" value={form.destination} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Inventory Location</Form.Label>
              <Form.Control name="inventoryLocation" value={form.inventoryLocation} onChange={handleChange} />
            </Form.Group>

            <Button className="mt-3" variant="primary" onClick={addLog}>
              Log Order to Blockchain
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <h5>Blockchain Order Log</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Order ID</th>
            <th>Destination</th>
            <th>Inventory Location</th>
            <th>Block ID</th>
            <th>Previous Hash</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((block, index) => (
            <tr key={index}>
              <td>{block.timestamp}</td>
              <td>{block.orderId}</td>
              <td>{block.destination}</td>
              <td>{block.inventoryLocation}</td>
              <td>{block.id}</td>
              <td>{block.previousHash}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TrackOrders;
