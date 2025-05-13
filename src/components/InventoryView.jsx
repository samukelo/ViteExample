// InventoryView.jsx
import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';


const InventoryView = () => {
  const [inventory, setInventory] = useState([
    { id: 'SKU001', name: 'Solar Panel A', expiry: '2026-12-01' },
    { id: 'SKU002', name: 'Battery Pack B', expiry: '2025-08-15' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ id: '', name: '', expiry: '' });

  const handleShowModal = (index = null) => {
    if (index !== null) {
      setEditIndex(index);
      setFormData(inventory[index]);
    } else {
      setEditIndex(null);
      setFormData({ id: '', name: '', expiry: '' });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    const updatedInventory = [...inventory];
    if (editIndex !== null) {
      updatedInventory[editIndex] = formData;
    } else {
      updatedInventory.push(formData);
    }
    setInventory(updatedInventory);
    setShowModal(false);
    console.log('Blockchain: Inventory updated', formData);
  };

  return (
    <div className="container mt-4">
      <h3>Inventory Management</h3>
      <Button className="mb-3" onClick={() => handleShowModal()}>Add New Item</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Date of Expiry</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, idx) => (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.expiry}</td>
              <td>
                <Button variant="info" size="sm" onClick={() => handleShowModal(idx)}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? 'Edit Item' : 'Add New Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product ID</Form.Label>
              <Form.Control
                name="id"
                value={formData.id}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Expiry</Form.Label>
              <Form.Control
                type="date"
                name="expiry"
                value={formData.expiry}
                onChange={handleFormChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleFormSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InventoryView;
