import React from 'react'
import { Table, Button } from 'react-bootstrap';

export default function Subscriptions() {
    const subscriptions = [
        { id: 1, user: 'John Doe', plan: 'Premium', status: 'Active', expires: '2025-06-01' },
        { id: 2, user: 'Jane Smith', plan: 'Basic', status: 'Expired', expires: '2024-12-30' },
      ];
    
      return (
        <div className="container mt-4">
          <h2>Manage Subscriptions</h2>
          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Expires</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map(sub => (
                <tr key={sub.id}>
                  <td>{sub.id}</td>
                  <td>{sub.user}</td>
                  <td>{sub.plan}</td>
                  <td>{sub.status}</td>
                  <td>{sub.expires}</td>
                  <td>
                    <Button variant="success" size="sm">Renew</Button>{' '}
                    <Button variant="danger" size="sm">Cancel</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
  )
}
