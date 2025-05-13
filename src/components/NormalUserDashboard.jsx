import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NormalUserDashboard = () => {
   const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <h2>Warehouse Manager Dashboard</h2>

      <h4 className="mt-4">Inventory Management</h4>
      <Card onClick={() => navigate('/inventory')} style={{ cursor: 'pointer' }} className="mb-3"><Card.Body><Button onClick={() => navigate('/inventory')} style={{ cursor: 'pointer' }} variant="success">View/Add/Update Stock</Button></Card.Body></Card>
      <Card onClick={() => navigate('/tracksku')} style={{ cursor: 'pointer' }} className="mb-3"><Card.Body><Button onClick={() => navigate('/tracksku')} style={{ cursor: 'pointer' }} variant="success">Track by SKU, Batch, Expiry</Button></Card.Body></Card>

      <h4 className="mt-4">Order Management</h4>
      <Card onClick={() => navigate('/trackorders')} style={{ cursor: 'pointer' }} className="mb-3"><Card.Body><Button onClick={() => navigate('/trackorders')} style={{ cursor: 'pointer' }} variant="primary">Create/Receive Orders</Button></Card.Body></Card>
      
      <h4 className="mt-4">Shipment & Logistics</h4>
      <Card onClick={() => navigate('/shipmenttracking')} style={{ cursor: 'pointer' }} className="mb-3"><Card.Body><Button onClick={() => navigate('/shipmenttracking')} style={{ cursor: 'pointer' }} variant="warning">Schedule Pickups & Packaging Lists</Button></Card.Body></Card>
      </div>
  );
};

export default NormalUserDashboard;
