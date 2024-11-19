import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../stores/authStore';
import { 
  ChartBarIcon, 
  CubeIcon,
  ChartPieIcon,
  ClipboardDocumentListIcon,
  BuildingOfficeIcon,
  DocumentChartBarIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Overview', icon: ChartBarIcon, path: '/dashboard' },
  { name: 'Analytics', icon: ChartPieIcon, path: '/dashboard/analytics' },
  { name: 'Inventory', icon: ClipboardDocumentListIcon, path: '/dashboard/inventory' },
  { name: 'Suppliers', icon: BuildingOfficeIcon, path: '/dashboard/suppliers' },
  { name: 'Reports', icon: DocumentChartBarIcon, path: '/dashboard/reports' },
  { name: 'Orders', icon: ShoppingCartIcon, path: '/dashboard/orders' },
  { name: 'Pricing', icon: CurrencyDollarIcon, path: '/dashboard/pricing' },
];

export default function Sidebar() {
  const location = useLocation();
  const { logout, user } = useAuth();

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-blue-700 text-white">
      <div className="flex items-center justify-center h-16 border-b border-blue-600">
        <CubeIcon className="h-8 w-8" />
        <span className="ml-2 text-xl font-semibold">OptiGuide</span>
      </div>

      <div className="flex flex-col justify-between h-[calc(100%-4rem)]">
        <nav className="mt-8">
          <div className="px-4 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-4 py-2 text-sm rounded-md ${
                    isActive
                      ? 'bg-blue-800 text-white'
                      : 'text-blue-100 hover:bg-blue-600'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="p-4">
          <div className="border-t border-blue-600 pt-4">
            <div className="text-sm text-blue-200 mb-2">
              {user?.firstName} {user?.lastName}
            </div>
            <button
              onClick={logout}
              className="flex items-center px-4 py-2 text-sm text-blue-100 hover:bg-blue-600 rounded-md w-full"
            >
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3" />
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}