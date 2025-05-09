import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NormalUserDashboard = () => {
  return (
    <div className="container mt-4">
      <h2>Warehouse Manager Dashboard</h2>

      <h4 className="mt-4">Inventory Management</h4>
      <Card className="mb-3"><Card.Body><Button variant="success">View/Add/Update Stock</Button></Card.Body></Card>
      <Card className="mb-3"><Card.Body><Button variant="success">Track by SKU, Batch, Expiry</Button></Card.Body></Card>
      <Card className="mb-3"><Card.Body><Button variant="success">Simulated Real-time IoT/RFID Update</Button></Card.Body></Card>

      <h4 className="mt-4">Order Management</h4>
      <Card className="mb-3"><Card.Body><Button variant="primary">Create/Receive Orders</Button></Card.Body></Card>
      <Card className="mb-3"><Card.Body><Button variant="primary">Auto-Suggest Inventory Location</Button></Card.Body></Card>

      <h4 className="mt-4">Shipment & Logistics</h4>
      <Card className="mb-3"><Card.Body><Button variant="warning">Schedule Pickups</Button></Card.Body></Card>
      <Card className="mb-3"><Card.Body><Button variant="warning">Generate Packing Lists</Button></Card.Body></Card>
    </div>
  );
};

export default NormalUserDashboard;
