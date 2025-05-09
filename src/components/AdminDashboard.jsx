// AdminDashboard.jsx
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container mt-4">
      <h2>App Admin Dashboard</h2>
      <ul>
        <li>User management</li>
        <li>Role/permission settings</li>
        <li>System health and diagnostics</li>
        <li>Configuration (greenhouse thresholds, inventory policies)</li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
