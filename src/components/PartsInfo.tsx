import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Part {
  id: string;
  boh: number;
  looseDays: number;
  willMakeDays: number;
  orderStatus: string;
  upcomingReceptions: string;
  eta: string;
  transitTime: string;
}

const initialParts: Part[] = [
  {
    id: 'ABC-123-XYZ',
    boh: 100,
    looseDays: 5,
    willMakeDays: 10,
    orderStatus: 'Confirmed',
    upcomingReceptions: '50 on 2023-10-15',
    eta: '2023-10-15',
    transitTime: '7 days'
  },
  {
    id: 'DEF-456-WXY',
    boh: 80,
    looseDays: 3,
    willMakeDays: 8,
    orderStatus: 'New',
    upcomingReceptions: '30 on 2023-10-20',
    eta: '2023-10-20',
    transitTime: '5 days'
  },
  {
    id: 'GHI-789-UVW',
    boh: 120,
    looseDays: 7,
    willMakeDays: 12,
    orderStatus: 'Pending',
    upcomingReceptions: '75 on 2023-10-18',
    eta: '2023-10-18',
    transitTime: '6 days'
  }
];

export default function PartsInfo() {
  const [searchTerm, setSearchTerm] = useState('');
  const [parts] = useState<Part[]>(initialParts);

  const filteredParts = parts.filter(part =>
    Object.values(part).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Parts Information Dashboard</h2>
      
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Search parts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Piece ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BOH</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loose Days</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Will Make Days</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upcoming Receptions</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETA</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transit Time</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredParts.map((part) => (
              <tr key={part.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{part.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{part.boh}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{part.looseDays}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{part.willMakeDays}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{part.orderStatus}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{part.upcomingReceptions}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{part.eta}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{part.transitTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}