import React from 'react';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import ReferralSection from './components/ReferralSection';
import InfoSection from './components/InfoSection';

function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="lg:col-span-1">
            <Calculator />
          </div>
          <div className="lg:col-span-1 mt-12 lg:mt-0 space-y-8">
            <ReferralSection />
            <InfoSection />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>Made with ❤️ by Kharek</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;