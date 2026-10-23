import React from 'react';
import AkunSaya from './akunsaya';

export default function Beranda({ menu, navigate, goBack }) {
  
  const renderContent = () => {
    switch (menu) {
      case 'akunsaya':
        return <AkunSaya navigate={navigate} goBack={goBack} />;
      default:
        return (
          <>
            {/* Bagian Kartu Saldo & Pesanan */}
            <div className="balance-card-container">
              <div className="balance-card">
                <div className="balance-item" onClick={() => navigate('saldo')}>
                  <div className="balance-info">
                    <h4>💳 KasapPay</h4>
                    <p>Rp 250.000</p>
                  </div>
                </div>
                <div className="balance-item" onClick={() => navigate('pesanan')}>
                  <div className="balance-info">
                    <h4>📦 Pesanan Saya</h4>
                    <p>2 Menunggu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Konten Selamat Datang */}
            <div style={{ padding: '20px 14px', textAlign: 'center' }}>
              <h3 className="promo-title" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
                Selamat Datang di Kasap.id
              </h3>
              <p className="promo-desc">Silakan pilih menu di bawah untuk mulai menjelajah.</p>
            </div>
          </>
        );
    }
  };

  return (
    <div className="app-viewport">
      {/* Header Atas */}
      <div className="shopee-header">
        <span className="brand-title">Kasap.id</span>
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Diskon s/d 80% di Kasap..." 
          />
        </div>
      </div>

      {/* Area Konten Utama */}
      <div style={{ flex: 1 }}>
        {renderContent()}
      </div>

      {/* Navigasi Menu Bawah (Navbar Bottom) */}
      <div className="navbar-bottom">
        <button onClick={() => navigate('beranda')} className={`nav-item ${menu === 'beranda' || !menu ? 'active' : ''}`}>
          <span>🏠</span>
          <span>Beranda</span>
        </button>
        <button onClick={() => navigate('live')} className={`nav-item ${menu === 'live' ? 'active' : ''}`}>
          <span>📺</span>
          <span>Live</span>
        </button>
        <button onClick={() => navigate('toko')} className={`nav-item ${menu === 'toko' ? 'active' : ''}`}>
          <span>🏪</span>
          <span>Toko Saya</span>
        </button>
        <button onClick={() => navigate('laporan')} className={`nav-item ${menu === 'laporan' ? 'active' : ''}`}>
          <span>📊</span>
          <span>Laporan</span>
        </button>
        <button onClick={() => navigate('akunsaya')} className={`nav-item ${menu === 'akunsaya' ? 'active' : ''}`}>
          <span>👤</span>
          <span>Saya</span>
        </button>
      </div>
    </div>
  );
}
