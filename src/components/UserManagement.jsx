import { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

const initialUsers = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
];

function UserManagement() {
    const [users, setUsers] = useState(initialUsers);
    const [showModal, setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  
    const handleShow = (user = null) => {
      setEditingUser(user);
      setFormData(user || { name: "", email: "", role: "" });
      setShowModal(true);
    };
  
    const handleSave = () => {
      if (editingUser) {
        setUsers(users.map(u => (u.id === editingUser.id ? { ...editingUser, ...formData } : u)));
      } else {
        setUsers([...users, { ...formData, id: Date.now() }]);
      }
      setShowModal(false);
    };
  
    const handleDelete = (id) => {
      setUsers(users.filter(u => u.id !== id));
    };
  
    return (
      <div className="container mt-4">
        <h3>User Management</h3>
        <Button variant="primary" className="mb-3" onClick={() => handleShow()}>
          Add User
        </Button>
  
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th><th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id}>
                <td>{idx + 1}</td><td>{user.name}</td><td>{user.email}</td><td>{user.role}</td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleShow(user)}>Edit</Button>{" "}
                  <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
  
        {/* Add/Edit Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{editingUser ? "Edit User" : "Add User"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Role</Form.Label>
                <Form.Select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})}>
                  <option value="">Select Role</option>
                  <option>Admin</option>
                  <option>User</option>
                  <option>Manager</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleSave}>{editingUser ? "Update" : "Add"}</Button>
          </Modal.Footer>
        </Modal>
      </div>
  )
}

export default UserManagement