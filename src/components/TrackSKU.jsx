import React, { useState } from 'react';
import { Table, Button, Form, Card } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const TrackSKU = () => {
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState({ sku: '', batch: '', expiry: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addLog = () => {
    const newBlock = {
      id: uuidv4(),
      timestamp: new Date().toLocaleString(),
      sku: form.sku,
      batch: form.batch,
      expiry: form.expiry,
      previousHash: logs.length > 0 ? logs[logs.length - 1].id : 'ETH',
    };
    setLogs([...logs, newBlock]);
    setForm({ sku: '', batch: '', expiry: '' });
  };

  return (
    <div className="container mt-4">
      <h4>Track by SKU / Batch / Expiry (Blockchain Log)</h4>

      <Card className="mb-3">
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>SKU</Form.Label>
              <Form.Control name="sku" value={form.sku} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Batch</Form.Label>
              <Form.Control name="batch" value={form.batch} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="date" name="expiry" value={form.expiry} onChange={handleChange} />
            </Form.Group>

            <Button className="mt-3" variant="dark" onClick={addLog}>
              Add to Blockchain
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <h5>Blockchain Log</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>SKU</th>
            <th>Batch</th>
            <th>Expiry</th>
            <th>Block ID</th>
            <th>Previous Hash</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((block, index) => (
            <tr key={index}>
              <td>{block.timestamp}</td>
              <td>{block.sku}</td>
              <td>{block.batch}</td>
              <td>{block.expiry}</td>
              <td>{block.id}</td>
              <td>{block.previousHash}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TrackSKU;
