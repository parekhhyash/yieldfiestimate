import React from 'react';
import { X, TrendingUp, Calendar, Coins } from 'lucide-react';

interface CalculationResults {
  yourPoints: number;
  yourAirdrop: number;
  apy: number;
  investmentAmount: number;
}

interface ResultsCardProps {
  results: CalculationResults;
  onClose: () => void;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ results, onClose }) => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US').format(Math.round(num));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-tada">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">🎉 Airdrop Estimate</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {/* Your Points */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Coins className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Your Points</p>
                  <p className="text-xl font-bold text-gray-900">{formatNumber(results.yourPoints)}</p>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 bg-white rounded-lg p-2">
                Calculation: {results.daysToTge} days × Amount Invested × 5
              </div>
            </div>

            {/* Your Airdrop */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 rounded-lg p-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Your Airdrop Value</p>
                  <p className="text-2xl font-bold text-accent">{formatCurrency(results.yourAirdrop)}</p>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 bg-white rounded-lg p-2">
                Based on FDV × Airdrop % × (Your Points ÷ Total Points)
              </div>
            </div>

            {/* APY */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Estimated APY</p>
                  <p className="text-xl font-bold text-gray-900">{results.apy.toFixed(1)}% (+15% Base APY)</p>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 bg-white rounded-lg p-2">
                APY = (Airdrop ÷ Investment) × (365 ÷ Days to TGE) × 100
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-xl">
            <p className="text-xs text-yellow-800">
              <strong>Disclaimer:</strong> This is an estimate based on the provided parameters. 
              Actual airdrop amounts may vary significantly based on project-specific criteria and market conditions.
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full mt-4 bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;