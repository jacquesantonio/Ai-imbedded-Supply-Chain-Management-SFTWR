import { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const demandData = [
  { date: '2023-11-01', actual: 4000, forecast: 4400, stock: 6000 },
  { date: '2023-11-02', actual: 3000, forecast: 3200, stock: 5500 },
  { date: '2023-11-03', actual: 2000, forecast: 2400, stock: 5000 },
  { date: '2023-11-04', actual: 2780, forecast: 2900, stock: 4800 },
  { date: '2023-11-05', actual: 1890, forecast: 2100, stock: 4200 },
  { date: '2023-11-06', actual: 2390, forecast: 2500, stock: 4000 },
  { date: '2023-11-07', actual: 3490, forecast: 3200, stock: 3800 },
];

const metrics = [
  {
    id: 1,
    name: 'Total Orders',
    value: '2,345',
    change: '+12.3%',
    changeType: 'increase',
    description: 'Total orders processed this month'
  },
  {
    id: 2,
    name: 'Inventory Value',
    value: '$1.2M',
    change: '-3.2%',
    changeType: 'decrease',
    description: 'Current total inventory value'
  },
  {
    id: 3,
    name: 'On-Time Delivery',
    value: '94.5%',
    change: '+2.4%',
    changeType: 'increase',
    description: 'Orders delivered on schedule'
  },
  {
    id: 4,
    name: 'Stock Turnover',
    value: '5.2x',
    change: '+0.8x',
    changeType: 'increase',
    description: 'Inventory turnover rate'
  }
];

const alerts = [
  {
    id: 1,
    type: 'warning',
    message: 'Low stock alert: Product A (SKU: 12345)',
    timestamp: '10 minutes ago'
  },
  {
    id: 2,
    type: 'success',
    message: 'Order #1234 delivered successfully',
    timestamp: '25 minutes ago'
  },
  {
    id: 3,
    type: 'error',
    message: 'Supplier delay: Shipment #5678',
    timestamp: '1 hour ago'
  }
];

const insights = [
  {
    id: 1,
    title: 'Demand Trend',
    description: 'Increasing demand pattern detected for Category A products',
    impact: 'high',
    action: 'Consider increasing safety stock levels'
  },
  {
    id: 2,
    title: 'Cost Optimization',
    description: 'Potential savings identified in shipping routes',
    impact: 'medium',
    action: 'Review shipping carrier contracts'
  },
  {
    id: 3,
    title: 'Supplier Performance',
    description: 'Supplier X showing improved delivery times',
    impact: 'positive',
    action: 'Consider increasing order volumes'
  }
];

export default function Overview() {
  const [timeRange, setTimeRange] = useState('week');

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Supply Chain Overview</h1>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="ml-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="day">Last 24 Hours</option>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {metrics.map((metric) => (
          <div key={metric.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">{metric.name}</h3>
              <div className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium ${
                metric.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {metric.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 mr-1" />
                )}
                {metric.change}
              </div>
            </div>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{metric.value}</p>
            <p className="mt-1 text-sm text-gray-500">{metric.description}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Demand vs Forecast</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={demandData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="actual" stroke="#4F46E5" name="Actual Demand" />
                <Line type="monotone" dataKey="forecast" stroke="#10B981" name="Forecast" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Inventory Levels</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={demandData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="stock" fill="#93C5FD" stroke="#2563EB" name="Stock Level" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Alerts and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-lg ${
                  alert.type === 'warning' ? 'bg-yellow-50' :
                  alert.type === 'success' ? 'bg-green-50' :
                  'bg-red-50'
                }`}
              >
                <div className="flex justify-between">
                  <p className={`text-sm font-medium ${
                    alert.type === 'warning' ? 'text-yellow-800' :
                    alert.type === 'success' ? 'text-green-800' :
                    'text-red-800'
                  }`}>
                    {alert.message}
                  </p>
                  <span className="text-xs text-gray-500">{alert.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">AI Insights</h2>
          <div className="space-y-4">
            {insights.map((insight) => (
              <div key={insight.id} className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                <h3 className="text-sm font-semibold text-blue-900">{insight.title}</h3>
                <p className="mt-1 text-sm text-blue-800">{insight.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    insight.impact === 'high' ? 'bg-red-100 text-red-800' :
                    insight.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {insight.impact.toUpperCase()}
                  </span>
                  <span className="text-sm text-blue-700">{insight.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}