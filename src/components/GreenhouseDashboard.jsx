// src/pages/GreenhouseDashboard.js
import React, { useState } from 'react';
import { Card, Button, Form, Table } from 'react-bootstrap';

const GreenhouseDashboard = () => {
  const [energyUsage, setEnergyUsage] = useState({ solar: '', water: '', heating: '' });
  const [wasteData, setWasteData] = useState({ recyclable: '', nonRecyclable: '' });
  const [tradingActivity, setTradingActivity] = useState([]);
  const [blockchain, setBlockchain] = useState([]);

  const handleEnergyChange = (e) => {
    setEnergyUsage({ ...energyUsage, [e.target.name]: e.target.value });
  };

  const handleWasteChange = (e) => {
    setWasteData({ ...wasteData, [e.target.name]: e.target.value });
  };

  const handleEnergySubmit = () => {
    const entry = {
      ...energyUsage,
      type: 'Energy Usage',
      timestamp: new Date().toISOString()
    };
    setBlockchain([...blockchain, { hash: Math.random().toString(36).substring(2), data: entry }]);
    setEnergyUsage({ solar: '', water: '', heating: '' });
  };

  const handleWasteSubmit = () => {
    const entry = {
      ...wasteData,
      type: 'Waste Tracking',
      timestamp: new Date().toISOString()
    };
    setBlockchain([...blockchain, { hash: Math.random().toString(36).substring(2), data: entry }]);
    setWasteData({ recyclable: '', nonRecyclable: '' });
  };

  const handleEnergyTrade = () => {
    const entry = {
      energyType: 'Solar Surplus',
      amount: '120 kWh',
      recipient: 'Main Grid',
      timestamp: new Date().toISOString(),
      type: 'Energy Trading'
    };
    setTradingActivity([...tradingActivity, entry]);
    setBlockchain([...blockchain, { hash: Math.random().toString(36).substring(2), data: entry }]);
  };

  return (
    <div className="container mt-4">
      <h3>Greenhouse Manager</h3>

      <Card className="mb-4">
        <Card.Body>
          <h5>Energy Usage Breakdown</h5>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Solar (kWh)</Form.Label>
              <Form.Control type="number" name="solar" value={energyUsage.solar} onChange={handleEnergyChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Water (Liters)</Form.Label>
              <Form.Control type="number" name="water" value={energyUsage.water} onChange={handleEnergyChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Heating (kWh)</Form.Label>
              <Form.Control type="number" name="heating" value={energyUsage.heating} onChange={handleEnergyChange} />
            </Form.Group>
            <Button variant="success" onClick={handleEnergySubmit}>Save Energy Data</Button>
          </Form>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h5>Waste & Recycling Tracking</h5>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Recyclable (kg)</Form.Label>
              <Form.Control type="number" name="recyclable" value={wasteData.recyclable} onChange={handleWasteChange} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Non-Recyclable (kg)</Form.Label>
              <Form.Control type="number" name="nonRecyclable" value={wasteData.nonRecyclable} onChange={handleWasteChange} />
            </Form.Group>
            <Button variant="danger" onClick={handleWasteSubmit}>Save Waste Data</Button>
          </Form>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h5>Energy Trading / Grid Supplying</h5>
          <Button variant="info" onClick={handleEnergyTrade}>Simulate Energy Trade</Button>

          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Energy Type</th>
                <th>Amount</th>
                <th>Recipient</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {tradingActivity.map((trade, index) => (
                <tr key={index}>
                  <td>{trade.energyType}</td>
                  <td>{trade.amount}</td>
                  <td>{trade.recipient}</td>
                  <td>{trade.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <h5>Blockchain Ledger</h5>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Hash</th>
            <th>Type</th>
            <th>Details</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {blockchain.map((block, i) => (
            <tr key={i}>
              <td>{block.hash}</td>
              <td>{block.data.type}</td>
              <td>{JSON.stringify(block.data)}</td>
              <td>{block.data.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GreenhouseDashboard;
