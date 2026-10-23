import React from 'react';
import AkunSaya from './akunsaya';
import DetailProduk from './detail'; // Memastikan import halaman detail benar

export default function Beranda({ menu, navigate }) {
  // 1. DATA PRODUK ASLI BAWAH APLIKASI
  const produkRekomendasi = [
    { id: 1, nama: "Cak Udin", harga: "145.000", rating: "4.8", terjual: "1,2rb", gambar: "📦" },
    { id: 2, nama: "Cak Wafa", harga: "175.000", rating: "4.7", terjual: "950", gambar: "📦" },
    { id: 3, nama: "Cak Icong Lee", harga: "299.000", rating: "4.9", terjual: "3,4rb", gambar: "📦" },
    { id: 4, nama: "Isol", harga: "210.000", rating: "4.6", terjual: "820", gambar: "📦" }
  ];

  // 2. LOGIKA PERPINDAHAN KONTEN (NAVIGASI)
  const renderContent = () => {
    switch (menu) {
      case 'akunsaya':
        return <AkunSaya navigate={navigate} />;
      case 'detail':
        return <DetailProduk navigate={navigate} />;
      case 'live':
        return <div style={{ padding: '20px', textAlign: 'center' }}>🎥 Halaman Live Streaming Kasap.id</div>;
      case 'tokosaya':
        return <div style={{ padding: '20px', textAlign: 'center' }}>🏪 Halaman Toko Saya</div>;
      case 'laporan':
        return <div style={{ padding: '20px', textAlign: 'center' }}>📊 Halaman Laporan Keuangan</div>;
      default:
        // Tampilan Beranda Utama (Menu rekomendasi produk dll)
        return (
          <>
            {/* KARTU SALDO & PESANAN */}
            <div className="balance-card-container">
              <div className="balance-card">
                <div className="balance-item">
                  <div className="balance-info">
                    <h4>💳 KasapPay</h4>
                    <p>Rp 250.000</p>
                  </div>
                </div>
                <div className="balance-item">
                  <div className="balance-info">
                    <h4>📦 Pesanan Saya</h4>
                    <p>2 Menunggu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BANNER PROMO SPESIAL */}
            <div className="promo-section">
              <h3 className="promo-title">🔥 Diskon Spesial Hari Ini!</h3>
              <p className="promo-desc">Dapatkan potongan harga produk tradisional pilihan.</p>
            </div>

            {/* KATEGORI PILIHAN */}
            <h3 className="section-title">🗂️ Kategori Pilihan</h3>
            <div className="category-list">
              <div className="category-item"><span>👕 Pakaian</span></div>
              <div className="category-item"><span>👟 Sepatu</span></div>
              <div className="category-item"><span>🎒 Tas</span></div>
              <div className="category-item"><span>💬 Bantuan</span></div>
            </div>

            {/* REKOMENDASI UNTUKMU (GRID PRODUK) */}
            <h3 className="section-title">Rekomendasi Untukmu</h3>
            <div className="product-grid">
              {produkRekomendasi.map((item) => (
                <div 
                  key={item.id} 
                  className="product-card" 
                  onClick={() => navigate('detail', { state: { produk: item } })}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="product-img-container">
                    <div className="product-image">{item.gambar}</div>
                  </div>
                  <div className="product-info-container">
                    <h4 className="product-name">{item.nama}</h4>
                    <p className="product-price">Rp {item.harga}</p>
                    <div className="product-meta">
                      <span className="star-icon">⭐ {item.rating}</span>
                      <span>|</span>
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

  // 3. LAYOUT UTAMA VIEWPORT
  return (
    <div className="app-viewport">
      
      {/* HEADER UTAMA KASAP.ID (Hanya tampil di menu beranda) */}
      {menu === 'beranda' && (
        <div className="shopee-header">
          <span className="brand-title" onClick={() => navigate('beranda')}>
            Kasap.id
          </span>
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Diskon s/d 80% di Ka..." />
          </div>
          <div className="header-icons">
            <button className="icon-btn" onClick={() => navigate('keranjang')}>
              🛒<span className="badge">3</span>
            </button>
            <button className="icon-btn" onClick={() => navigate('chat')}>
              💬<span className="badge">1</span>
            </button>
          </div>
        </div>
      )}

      {/* AREA UTAMA KONTEN JALUR DINAMIS */}
      <div style={{ flex: 1, width: '100%' }}>
        {renderContent()}
      </div>

      {/* NAVIGASI NAVBAR BAWAH (Selalu Tampil di Menu Utama) */}
      {(menu === 'beranda' || menu === 'live' || menu === 'tokosaya' || menu === 'laporan' || menu === 'akunsaya') && (
        <div className="navbar-bottom">
          <button onClick={() => navigate('beranda')} className={menu === 'beranda' ? 'active' : ''}>
            <span>🏠</span><span>Beranda</span>
          </button>
          <button onClick={() => navigate('live')} className={menu === 'live' ? 'active' : ''}>
            <span>📺</span><span>Live</span>
          </button>
          <button onClick={() => navigate('tokosaya')} className={menu === 'tokosaya' ? 'active' : ''}>
            <span>🏪</span><span>Toko Saya</span>
          </button>
          <button onClick={() => navigate('laporan')} className={menu === 'laporan' ? 'active' : ''}>
            <span>📊</span><span>Laporan</span>
          </button>
          <button onClick={() => navigate('akunsaya')} className={menu === 'akunsaya' ? 'active' : ''}>
            <span>👤</span><span>Saya</span>
          </button>
        </div>
      )}

    </div>
  );
}
