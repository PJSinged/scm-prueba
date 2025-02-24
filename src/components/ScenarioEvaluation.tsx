import React, { useState } from 'react';

interface RiskAssessment {
  level: 'Low' | 'Medium' | 'High';
  details: string;
  color: string;
}

export default function ScenarioEvaluation() {
  const [productionChange, setProductionChange] = useState<string>('');
  const [assessment, setAssessment] = useState<RiskAssessment | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const change = parseFloat(productionChange);
    
    let assessment: RiskAssessment;
    if (change < 10) {
      assessment = {
        level: 'Low',
        details: 'Minimal impact on supply chain. Current inventory levels can handle the change.',
        color: 'text-green-600'
      };
    } else if (change < 20) {
      assessment = {
        level: 'Medium',
        details: 'Some parts may face shortages. Consider increasing safety stock levels.',
        color: 'text-yellow-600'
      };
    } else {
      assessment = {
        level: 'High',
        details: 'Significant risk of disruption. Immediate action required to secure additional supply.',
        color: 'text-red-600'
      };
    }
    
    setAssessment(assessment);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Scenario Evaluation & Supply Risk Assessment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
        <div>
          <label htmlFor="productionChange" className="block text-sm font-medium text-gray-700">
            Production Change (%)
          </label>
          <div className="mt-1">
            <input
              type="number"
              id="productionChange"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              value={productionChange}
              onChange={(e) => setProductionChange(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Evaluate
        </button>
      </form>

      {assessment && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Scenario Results</h3>
          <div className="space-y-2">
            <p>
              Risk Level: <span className={`font-semibold ${assessment.color}`}>{assessment.level}</span>
            </p>
            <p className="text-gray-600">{assessment.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}