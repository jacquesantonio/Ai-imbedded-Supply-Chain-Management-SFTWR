export default function MetricCard({ name, value, change, changeType }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{name}</h3>
        <div className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium ${
          changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {change}
        </div>
      </div>
      <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}