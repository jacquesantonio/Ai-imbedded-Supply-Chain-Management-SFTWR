import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', efficiency: 85, accuracy: 90, fulfillment: 88 },
  { month: 'Feb', efficiency: 88, accuracy: 85, fulfillment: 87 },
  { month: 'Mar', efficiency: 82, accuracy: 89, fulfillment: 90 },
  { month: 'Apr', efficiency: 89, accuracy: 92, fulfillment: 85 },
  { month: 'May', efficiency: 90, accuracy: 88, fulfillment: 92 },
  { month: 'Jun', efficiency: 87, accuracy: 91, fulfillment: 89 },
];

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState('performance');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Reports</h1>

      <div className="mb-6">
        <select
          value={selectedReport}
          onChange={(e) => setSelectedReport(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="performance">Performance Metrics</option>
          <option value="inventory">Inventory Report</option>
          <option value="suppliers">Supplier Analysis</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="efficiency" stroke="#4F46E5" />
              <Line type="monotone" dataKey="accuracy" stroke="#10B981" />
              <Line type="monotone" dataKey="fulfillment" stroke="#F59E0B" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Average Efficiency</h3>
            <p className="mt-1 text-2xl font-semibold">87%</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Average Accuracy</h3>
            <p className="mt-1 text-2xl font-semibold">89%</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">Average Fulfillment</h3>
            <p className="mt-1 text-2xl font-semibold">88%</p>
          </div>
        </div>
      </div>
    </div>
  );
}