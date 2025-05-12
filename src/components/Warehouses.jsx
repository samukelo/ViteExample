import { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

const users = [
    { id: 1, name: "Alice Khumalo" },
    { id: 2, name: "Bongani Sithole" },
    { id: 3, name: "Cynthia Maseko" }
  ];
  
  const initialWarehouses = [
    { id: 1, name: "Main Warehouse", location: "Durban", managerId: 1 },
    { id: 2, name: "Secondary Warehouse", location: "Cape Town", managerId: 2 }
  ];

function Warehouses() {
     const [warehouses, setWarehouses] = useState(initialWarehouses);
  const [showModal, setShowModal] = useState(false);
  const [editingWarehouse, setEditingWarehouse] = useState(null);
  const [formData, setFormData] = useState({ name: "", location: "", managerId: "" });

  const handleShow = (warehouse = null) => {
    setEditingWarehouse(warehouse);
    setFormData(warehouse || { name: "", location: "", managerId: "" });
    setShowModal(true);
  };

  const handleSave = () => {
    if (editingWarehouse) {
      setWarehouses(
        warehouses.map(w =>
          w.id === editingWarehouse.id ? { ...editingWarehouse, ...formData } : w
        )
      );
    } else {
      setWarehouses([...warehouses, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const handleDelete = id => {
    setWarehouses(warehouses.filter(w => w.id !== id));
  };

  const getManagerName = managerId => {
    const manager = users.find(u => u.id === parseInt(managerId));
    return manager ? manager.name : "-";
  };

  return (
    <div className="container mt-4">
      <h3>Warehouse Management</h3>
      <Button variant="primary" className="mb-3" onClick={() => handleShow()}>
        Add Warehouse
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Location</th><th>Manager</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {warehouses.map((w, idx) => (
            <tr key={w.id}>
              <td>{idx + 1}</td><td>{w.name}</td><td>{w.location}</td>
              <td>{getManagerName(w.managerId)}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleShow(w)}>Edit</Button>{" "}
                <Button variant="danger" size="sm" onClick={() => handleDelete(w.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingWarehouse ? "Edit Warehouse" : "Add Warehouse"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={formData.location}
                onChange={e => setFormData({ ...formData, location: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Assign Manager</Form.Label>
              <Form.Select
                value={formData.managerId}
                onChange={e => setFormData({ ...formData, managerId: e.target.value })}
              >
                <option value="">Select a manager</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {editingWarehouse ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Warehouses