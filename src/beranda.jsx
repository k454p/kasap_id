import React from 'react';
import AkunSaya from './akunsaya';

export default function Beranda({ menu, navigate, goBack }) {
  // 1. DATA PRODUK ASLI BAWAAN APLIKASI KAMU
  const produkRekomendasi = [
    { id: 1, nama: "Kemeja Flanel Casual", harga: "145.000", rating: "4.8", terjual: "1,2rb", gambar: "Foto Produk" },
    { id: 2, nama: "Celana Chinos Panjang", harga: "175.000", rating: "4.7", terjual: "950", gambar: "Foto Produk" },
    { id: 3, nama: "Sepatu Sneakers Pria", harga: "299.000", rating: "4.9", terjual: "3,4rb", gambar: "Foto Produk" },
    { id: 4, nama: "Tas Ransel Laptop", harga: "210.000", rating: "4.6", terjual: "820", gambar: "Foto Produk" }
  ];

  const renderContent = () => {
    switch (menu) {
      case 'akunsaya':
        return <AkunSaya navigate={navigate} goBack={goBack} />;
      default:
        return (
          <>
            {/* 2. KARTU SALDO & PESANAN */}
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

            {/* 3. BANNER PROMO SPESIAL */}
            <div className="promo-section">
              <h3 className="promo-title">🔥 Promo Spesial Hari Ini!</h3>
              <p className="promo-desc">Diskon hingga 50% untuk produk pilihan terbaik.</p>
              <button className="btn-promo-shop" onClick={() => navigate('live')}>Belanja Sekarang</button>
            </div>

            {/* 4. KATEGORI PILIHAN */}
            <h3 className="section-title">Kategori Pilihan</h3>
            <div className="category-list">
              <div className="category-item" onClick={() => navigate('kategori-pakaian')}>
                <span>👕 Pakaian</span>
              </div>
              <div className="category-item" onClick={() => navigate('kategori-sepatu')}>
                <span>👟 Sepatu</span>
              </div>
              <div className="category-item" onClick={() => navigate('kategori-tas')}>
                <span>🎒 Tas</span>
              </div>
              <div className="category-item" onClick={() => navigate('bantuan')}>
                <span>💬 Bantuan</span>
              </div>
            </div>

            {/* 5. REKOMENDASI UNTUKMU (GRID PRODUK BERJEJER RAPI KE SAMPING) */}
            <h3 className="section-title">Rekomendasi Untukmu</h3>
            <div className="product-grid">
              {produkRekomendasi.map((item) => (
                <div key={item.id} className="product-card" onClick={() => navigate(`produk-${item.id}`)}>
                  <div className="product-img-placeholder">
                    {item.gambar}
                  </div>
                  <div className="product-info">
                    <h4 className="product-name">{item.nama}</h4>
                    <p className="product-price">Rp {item.harga}</p>
                    <div className="product-meta">
                      <span className="star-icon">★</span>
                      <span>{item.rating}</span>
                      <span style={{ color: '#e5e7eb', margin: '0 4px' }}>|</span>
                      <span>Terjual {item.terjual}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className="app-viewport">
      {/* HEADER UTAMA KASAP.ID */}
      <div className="shopee-header">
        <span className="brand-title">Kasap.id</span>
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Diskon s/d 80% di Kasap..." 
      <div className="shopee-header">
        <span className="brand-title" onClick={() => navigate('beranda')} style={{ cursor: 'pointer' }}>
          Kasap.id
        </span>
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Diskon s/d 80% di Kasap..." 
          />
        </div>
        <div className="header-icons">
          <button className="icon-btn" onClick={() => navigate('keranjang')} aria-label="Keranjang">
            🛒
            <span className="badge">3</span>
          </button>
          <button className="icon-btn" onClick={() => navigate('chat')} aria-label="Chat">
            💬
            <span className="badge">1</span>
          </button>
        </div>
      </div>
          />
        </div>
      </div>

      {/* AREA UTAMA KONTEN */}
      <div style={{ flex: 1 }}>
        {renderContent()}
      </div>

      {/* NAVIGASI NAVBAR BAWAH */}
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
