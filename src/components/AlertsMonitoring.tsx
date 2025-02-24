import React from 'react';
import { AlertTriangle, CheckCircle, Truck } from 'lucide-react';

interface Alert {
  id: string;
  severity: 'high' | 'medium' | 'low';
  message: string;
}

interface Shipment {
  id: string;
  carrier: string;
  trackingNumber: string;
  eta: string;
  status: string;
}

const alerts: Alert[] = [
  {
    id: '1',
    severity: 'high',
    message: 'Inventory low for ABC-123-XYZ'
  },
  {
    id: '2',
    severity: 'medium',
    message: 'Delay in DEF-456-WXY shipment'
  },
  {
    id: '3',
    severity: 'low',
    message: 'New supplier onboarding completed for GHI-789-UVW'
  }
];

const shipments: Shipment[] = [
  {
    id: 'SHP001',
    carrier: 'DHL',
    trackingNumber: '123456789',
    eta: '2023-10-10',
    status: 'In Transit'
  },
  {
    id: 'SHP002',
    carrier: 'FedEx',
    trackingNumber: '987654321',
    eta: '2023-10-12',
    status: 'Pending Pickup'
  },
  {
    id: 'SHP003',
    carrier: 'UPS',
    trackingNumber: '456789123',
    eta: '2023-10-15',
    status: 'Delivered'
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function AlertsMonitoring() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <AlertTriangle className="w-6 h-6 mr-2 text-red-500" />
          Alerts
        </h2>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg ${getSeverityColor(alert.severity)}`}
            >
              {alert.message}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
          Supplier Communication
        </h2>
        <p className="text-gray-600">
          Last report sent to suppliers on October 1, 2023
        </p>
        <p className="text-gray-600 mt-2">
          Next scheduled report: October 15, 2023
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Truck className="w-6 h-6 mr-2 text-blue-500" />
          Transportation Monitoring
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shipment ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carrier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tracking Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETA</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {shipments.map((shipment) => (
                <tr key={shipment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{shipment.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.carrier}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.trackingNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.eta}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shipment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}