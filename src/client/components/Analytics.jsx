import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tab } from '@headlessui/react';

const revenueData = [
  { month: 'Jan', revenue: 4000, costs: 2400, profit: 1600 },
  { month: 'Feb', revenue: 3000, costs: 1398, profit: 1602 },
  { month: 'Mar', revenue: 2000, costs: 1800, profit: 200 },
  { month: 'Apr', revenue: 2780, costs: 1908, profit: 872 },
  { month: 'May', revenue: 1890, costs: 1800, profit: 90 },
  { month: 'Jun', revenue: 2390, costs: 1800, profit: 590 },
];

const performanceData = [
  { month: 'Jan', efficiency: 85, accuracy: 90, fulfillment: 88 },
  { month: 'Feb', efficiency: 88, accuracy: 85, fulfillment: 87 },
  { month: 'Mar', efficiency: 82, accuracy: 89, fulfillment: 90 },
  { month: 'Apr', efficiency: 89, accuracy: 92, fulfillment: 85 },
  { month: 'May', efficiency: 90, accuracy: 88, fulfillment: 92 },
  { month: 'Jun', efficiency: 87, accuracy: 91, fulfillment: 89 },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Analytics Dashboard</h1>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="ml-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="day">Daily</option>
          <option value="week">Weekly</option>
          <option value="month">Monthly</option>
          <option value="year">Yearly</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900">Total Revenue</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">$16,060</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <span className="text-green-500">↑</span> 12% from previous period
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900">Total Costs</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">$26,104</p>
          <p className="text-sm text-red-600 flex items-center mt-2">
            <span className="text-red-500">↓</span> 8% from previous period
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900">Profit Margin</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">-38.4%</p>
          <p className="text-sm text-red-600 flex items-center mt-2">
            <span className="text-red-500">↓</span> 5% from previous period
          </p>
        </div>
      </div>

      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-6">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow text-blue-700'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Financial Analysis
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow text-blue-700'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Performance Metrics
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Revenue vs Costs</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#4F46E5" name="Revenue" />
                    <Bar dataKey="costs" fill="#EF4444" name="Costs" />
                    <Bar dataKey="profit" fill="#10B981" name="Profit" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Performance Trends</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="efficiency" stroke="#4F46E5" name="Efficiency" />
                    <Line type="monotone" dataKey="accuracy" stroke="#10B981" name="Accuracy" />
                    <Line type="monotone" dataKey="fulfillment" stroke="#F59E0B" name="Fulfillment" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Top Products</h2>
          <div className="space-y-4">
            {[
              { name: 'Product A', revenue: 12500, growth: 25 },
              { name: 'Product B', revenue: 8300, growth: -10 },
              { name: 'Product C', revenue: 6400, growth: 15 },
              { name: 'Product D', revenue: 4200, growth: 5 },
            ].map((product) => (
              <div key={product.name} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">${product.revenue.toLocaleString()}</p>
                </div>
                <span className={classNames(
                  'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium',
                  product.growth >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                )}>
                  {product.growth >= 0 ? '+' : ''}{product.growth}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { event: 'New order received', time: '5 minutes ago', type: 'order' },
              { event: 'Inventory updated', time: '1 hour ago', type: 'inventory' },
              { event: 'Payment processed', time: '2 hours ago', type: 'payment' },
              { event: 'Shipment delivered', time: '3 hours ago', type: 'delivery' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <span className={classNames(
                    'inline-flex items-center justify-center h-8 w-8 rounded-full',
                    {
                      'bg-blue-100': activity.type === 'order',
                      'bg-green-100': activity.type === 'payment',
                      'bg-yellow-100': activity.type === 'inventory',
                      'bg-purple-100': activity.type === 'delivery',
                    }
                  )}>
                    <span className={classNames(
                      'h-5 w-5',
                      {
                        'text-blue-600': activity.type === 'order',
                        'text-green-600': activity.type === 'payment',
                        'text-yellow-600': activity.type === 'inventory',
                        'text-purple-600': activity.type === 'delivery',
                      }
                    )}>●</span>
                  </span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">{activity.event}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}