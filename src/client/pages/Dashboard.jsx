import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Overview from '../components/Overview';
import Analytics from '../components/Analytics';
import Inventory from '../components/Inventory';
import Suppliers from '../components/Suppliers';
import Reports from '../components/Reports';
import Orders from '../components/Orders';
import Pricing from './Pricing';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="pl-64">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/orders/*" element={<Orders />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </div>
  );
}