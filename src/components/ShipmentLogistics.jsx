import React, { useState } from 'react';
import { Card, Button, Table, Form } from 'react-bootstrap';

const ShipmentLogistics = () => {
  const [shipments, setShipments] = useState([]);
  const [shipmentDetails, setShipmentDetails] = useState({
    shipmentId: '',
    carrier: '',
    pickupDate: '',
    estimatedDelivery: '',
    deliveryStatus: ''
  });
  const [blockchain, setBlockchain] = useState([]);
  const [packingList, setPackingList] = useState([]);

  const handleChange = (e) => {
    setShipmentDetails({
      ...shipmentDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleAddShipment = () => {
    const { shipmentId, carrier, pickupDate, estimatedDelivery, deliveryStatus } = shipmentDetails;
    if (shipmentId && carrier && pickupDate && estimatedDelivery && deliveryStatus) {
      const newShipment = { ...shipmentDetails, timestamp: new Date().toISOString() };
      setShipments([...shipments, newShipment]);
      setBlockchain([...blockchain, {
        hash: Math.random().toString(36).substring(2),
        data: newShipment
      }]);
      setShipmentDetails({ shipmentId: '', carrier: '', pickupDate: '', estimatedDelivery: '', deliveryStatus: '' });
    }
  };

  const handleGeneratePackingList = () => {
    // Simulated items for packing list
    const items = [
      { sku: 'P1001', description: 'Product A', quantity: 20 },
      { sku: 'P1002', description: 'Product B', quantity: 15 },
      { sku: 'P1003', description: 'Product C', quantity: 30 },
    ];
    setPackingList(items);
  };

  return (
    <div className="container mt-4">
      <h3>Shipment & Logistics</h3>

      <Card className="mb-4">
        <Card.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Shipment ID</Form.Label>
              <Form.Control
                type="text"
                name="shipmentId"
                value={shipmentDetails.shipmentId}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Carrier</Form.Label>
              <Form.Control
                type="text"
                name="carrier"
                value={shipmentDetails.carrier}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Pickup Date</Form.Label>
              <Form.Control
                type="date"
                name="pickupDate"
                value={shipmentDetails.pickupDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Estimated Delivery</Form.Label>
              <Form.Control
                type="date"
                name="estimatedDelivery"
                value={shipmentDetails.estimatedDelivery}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Delivery Status</Form.Label>
              <Form.Control
                as="select"
                name="deliveryStatus"
                value={shipmentDetails.deliveryStatus}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="In Transit">In Transit</option>
                <option value="Delivered">Delivered</option>
              </Form.Control>
            </Form.Group>
            <Button onClick={handleAddShipment} variant="warning">Add Shipment</Button>{' '}
            <Button onClick={handleGeneratePackingList} variant="info">Generate Packing List</Button>
          </Form>
        </Card.Body>
      </Card>

      <h5>Shipments</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Shipment ID</th>
            <th>Carrier</th>
            <th>Pickup Date</th>
            <th>Estimated Delivery</th>
            <th>Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((s, i) => (
            <tr key={i}>
              <td>{s.shipmentId}</td>
              <td>{s.carrier}</td>
              <td>{s.pickupDate}</td>
              <td>{s.estimatedDelivery}</td>
              <td>{s.deliveryStatus}</td>
              <td>{s.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h5>Packing List</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Description</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {packingList.map((item, i) => (
            <tr key={i}>
              <td>{item.sku}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h5>Blockchain Ledger</h5>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Hash</th>
            <th>Shipment ID</th>
            <th>Carrier</th>
            <th>Pickup Date</th>
            <th>Estimated Delivery</th>
            <th>Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {blockchain.map((block, i) => (
            <tr key={i}>
              <td>{block.hash}</td>
              <td>{block.data.shipmentId}</td>
              <td>{block.data.carrier}</td>
              <td>{block.data.pickupDate}</td>
              <td>{block.data.estimatedDelivery}</td>
              <td>{block.data.deliveryStatus}</td>
              <td>{block.data.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ShipmentLogistics;
