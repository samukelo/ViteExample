import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import NormalUserDashboard from './components/NormalUserDashboard';
import AdminDashboard from './components/AdminDashboard';
import GreenhouseDashboard from './components/GreenhouseDashboard';
import SuperAdmin from './components/SuperAdmin';
import Users from './components/Users'
import Subscriptions from './components/Subscriptions' 
import Wallet from './components/Wallet'
import UserManagement from './components/UserManagement'
import Warehouses from './components/Warehouses'
import InventoryView from './components/InventoryView'
import TrackSKU from './components/TrackSKU';
import TrackOrders from './components/TrackOrders'
import ShipmentLogistics from './components/ShipmentLogistics';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/normal" element={<NormalUserDashboard />} />
      <Route path="/dashboard/admin" element={<AdminDashboard />} />
      <Route path="/dashboard/greenhouse" element={<GreenhouseDashboard />} />
      <Route path="/dashboard/superadmin" element={<SuperAdmin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/inventory" element={<InventoryView />} />
        <Route path="/tracksku" element={<TrackSKU />} />
        <Route path="/trackorders" element={<TrackOrders />} />
        <Route path="/shipmenttracking" element={<ShipmentLogistics />} />
      </Routes>
    </Router>
  );
}

export default App;