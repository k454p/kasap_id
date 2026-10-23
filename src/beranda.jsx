import React from 'react';
import AkunSaya from './akunsaya';

export default function Beranda({ menu, navigate, goBack }) {
  
  const renderContent = () => {
    switch (menu) {
      case 'akunsaya':
        return <AkunSaya navigate={navigate} goBack={goBack} />;
      default:
        return (
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Selamat Datang di Kasap.id</h3>
            <p className="text-gray-600 text-sm">Silakan pilih menu di bawah.</p>
          </div>
        );
    }
  };

  return (
    <div className="app-viewport">
      {renderContent()}
    </div>
  );
}
