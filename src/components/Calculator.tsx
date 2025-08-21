import React, { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon, ChevronDown, ChevronUp } from 'lucide-react';
import ResultsCard from './ResultsCard';

interface CalculatorData {
  amountInvested: number;
  totalPoints: number;
  tgeDate: string;
  fdv: number;
  airdropPercentage: number;
}

interface CalculationResults {
  yourPoints: number;
  yourAirdrop: number;
  apy: number;
  investmentAmount: number;
}

const Calculator: React.FC = () => {
  const [data, setData] = useState<CalculatorData>({
    amountInvested: 1000,
    totalPoints: 50000000000, // 50B
    tgeDate: '2025-10-31',
    fdv: 100000000, // $100M
    airdropPercentage: 10,
  });

  const [daysToTge, setDaysToTge] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  // Calculate days to TGE
  useEffect(() => {
    const calculateDaysToTge = () => {
      const today = new Date();
      const tgeDate = new Date(data.tgeDate);
      const diffTime = tgeDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysToTge(Math.max(0, diffDays));
    };

    calculateDaysToTge();
  }, [data.tgeDate]);

  const formatNumberWithCommas = (num: number): string => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const parseNumberFromString = (str: string): number => {
    const cleanedStr = str.replace(/,/g, '');
    return parseFloat(cleanedStr) || 0;
  };

  const handleNumberInputChange = (field: keyof CalculatorData, value: string) => {
    const numericValue = parseNumberFromString(value);
    setData(prev => ({
      ...prev,
      [field]: numericValue
    }));
  };

  const handleInputChange = (field: keyof CalculatorData, value: string | number) => {
    setData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateAirdrop = () => {
    const yourPoints = daysToTge * data.amountInvested * 5;
    const yourAirdrop = (data.fdv * (data.airdropPercentage / 100)) * (yourPoints / data.totalPoints);
    const apy = (yourAirdrop / data.amountInvested) * (365 / daysToTge) * 100;
    
    setResults({
      yourPoints,
      yourAirdrop,
      apy,
      investmentAmount: data.amountInvested
    });
    setShowResults(true);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1e9) {
      return `${(num / 1e9).toFixed(1)}B`;
    } else if (num >= 1e6) {
      return `${(num / 1e6).toFixed(1)}M`;
    } else if (num >= 1e3) {
      return `${(num / 1e3).toFixed(1)}K`;
    }
    return num.toString();
  };

  const tvl = 110000000; // $110M
  const fdvTvlRatio = (data.fdv / tvl).toFixed(2);

  return (
    <div className="w-full">
      <div className="bg-[#f4f4f4] rounded-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Calculate your Airdrop from vyUSD</h1>
          <p className="text-gray-600">Enter your details to estimate your potential airdrop rewards</p>
        </div>

        <div className="space-y-6">
          {/* Amount Invested */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount Invested
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={formatNumberWithCommas(data.amountInvested)}
                onChange={(e) => handleNumberInputChange('amountInvested', e.target.value)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 outline-none"
                placeholder="1,000"
              />
            </div>
          </div>

          {/* FDV */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              FDV (Fully Diluted Valuation)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={formatNumberWithCommas(data.fdv)}
                onChange={(e) => handleNumberInputChange('fdv', e.target.value)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 outline-none"
                placeholder="100,000,000"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              FDV: {formatNumber(data.fdv)} | TVL: {formatNumber(tvl)} | FDV:TVL = {fdvTvlRatio}x
            </p>
          </div>

          {/* Advanced Calculation Toggle */}
          <div>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center justify-between w-full p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <span className="text-sm font-medium text-gray-700">Advanced Calculation</span>
              {showAdvanced ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>
          </div>

          {/* Advanced Fields */}
          {showAdvanced && (
            <div className="space-y-6 animate-slideIn">
              {/* Airdrop % */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Airdrop Percentage
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={data.airdropPercentage}
                    onChange={(e) => handleInputChange('airdropPercentage', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="10"
                    step="0.1"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                </div>
              </div>

              {/* Estimated Date of TGE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Date of TGE
                </label>
                <input
                  type="date"
                  value={data.tgeDate}
                  onChange={(e) => handleInputChange('tgeDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 outline-none"
                />
                <p className="text-sm text-accent mt-1 font-medium">{daysToTge} days to TGE</p>
              </div>

              {/* Total Points at TGE */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Points at TGE
                </label>
                <input
                  type="text"
                  value={formatNumberWithCommas(data.totalPoints)}
                  onChange={(e) => handleNumberInputChange('totalPoints', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="50,000,000,000"
                />
                <p className="text-sm text-gray-500 mt-1">{formatNumber(data.totalPoints)} points</p>
              </div>
            </div>
          )}

          {/* Calculate Button */}
          <button
            onClick={calculateAirdrop}
            className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
          >
            <CalculatorIcon className="h-5 w-5" />
            <span>Calculate Airdrop</span>
          </button>
        </div>
      </div>

      {/* Results Card */}
      {showResults && results && (
        <ResultsCard 
          results={results} 
          onClose={() => setShowResults(false)}
        />
      )}
    </div>
  );
};

export default Calculator;