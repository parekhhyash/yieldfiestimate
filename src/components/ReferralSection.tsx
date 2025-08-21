import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

const ReferralSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = 'YA02RAGV';

  const copyReferralCode = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const openYieldFi = () => {
    window.open('https://yield.fi/mint?referral=YA02RAGV', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Referral Program</h3>
        <p className="text-gray-600 mb-6">
          Use my refferal code to support my work
        </p>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Referral Code
              </label>
              
              {/* Mobile Layout */}
              <div className="md:hidden space-y-3">
                <div className="flex items-stretch space-x-2">
                  <code className="bg-gray-100 px-3 py-2 rounded-lg font-mono text-base font-semibold text-gray-900 flex-1">
                    {referralCode}
                  </code>
                  <button
                    onClick={copyReferralCode}
                    className="flex items-center justify-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-colors duration-200 text-base font-medium"
                    disabled={copied}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span className="font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span className="font-medium">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <button
                  onClick={openYieldFi}
                  className="w-full flex items-center justify-center space-x-1 bg-accent hover:bg-accent/90 text-white px-3 py-2 rounded-lg transition-colors duration-200 text-base font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Deposit on YieldFi</span>
                </button>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-stretch space-x-2">
                <code className="bg-gray-100 px-3 py-2 rounded-lg font-mono text-lg font-semibold text-gray-900">
                  {referralCode}
                </code>
                <button
                  onClick={copyReferralCode}
                  className="flex items-center justify-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-colors duration-200 text-base font-medium h-full"
                  disabled={copied}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span className="font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span className="font-medium">Copy</span>
                    </>
                  )}
                </button>
                <button
                  onClick={openYieldFi}
                  className="flex items-center justify-center space-x-1 bg-accent hover:bg-accent/90 text-white px-3 py-2 rounded-lg transition-colors duration-200 text-base font-medium h-full"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Deposit on YieldFi</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralSection;