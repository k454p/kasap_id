import React from 'react';

export default function Beranda({ menu, navigate }) {
  const produkRekomendasi = [
    { id: 1, nama: "Cak Udin", harga: "145.000", rating: "4.8", terjual: "1,2rb", gambar: "👑" },
    { id: 2, nama: "Cak Wafa", harga: "175.000", rating: "4.7", terjual: "950", gambar: "🧢" },
    { id: 3, nama: "Cak Icong Lee", harga: "299.000", rating: "4.9", terjual: "3,4rb", gambar: "🎩" },
    { id: 4, nama: "Isol", harga: "210.000", rating: "4.6", terjual: "820", gambar: "🎓" }
  ];

  // Render halaman placeholder jika menu navigasi bawah diklik
  if (menu === 'live') {
    return <div className="placeholder-page">🎥 Halaman Live Streaming Kasap.id</div>;
  }
  if (menu === 'tokosaya') {
    return <div className="placeholder-page">🏪 Halaman Manajemen Toko Saya</div>;
  }
  if (menu === 'laporan') {
    return <div className="placeholder-page">📊 Halaman Laporan Penjualan & Keuangan</div>;
  }

  // Tampilan Utama Beranda Belanja
  return (
    <>
      {/* HEADER SHOPPING BAR */}
      <div className="shopee-header">
        <span className="brand-title" onClick={() => navigate('beranda')}>Kasap.id</span>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Cari produk tradisional di sini..." />
        </div>
        <div className="header-icons">
          <button className="icon-btn">🛒<span className="badge">3</span></button>
          <button className="icon-btn">💬<span className="badge">1</span></button>
        </div>
      </div>

      {/* DASHBOARD SALDO KASAPPAY & PESANAN */}
      <div className="balance-card-container">
        <div className="balance-card">
          <div className="balance-item">
            <h4>💳 KasapPay</h4>
            <p>Rp 250.000</p>
          </div>
          <div className="balance-item">
            <h4>📦 Pesanan Saya</h4>
            <p>2 Menunggu</p>
          </div>
        </div>
      </div>

      {/* KATEGORI PILIHAN */}
      <div className="category-section">
        <h3 className="section-title">🗂️ Kategori Pilihan</h3>
        <div className="category-list">
          <div className="category-item"><span>👕 Pakaian</span></div>
          <div className="category-item"><span>👟 Sepatu</span></div>
          <div className="category-item"><span>🎒 Tas</span></div>
          <div className="category-item"><span>💬 Bantuan</span></div>
        </div>
      </div>

      {/* REKOMENDASI PRODUK GRID */}
      <div className="product-section">
        <h3 className="section-title">Rekomendasi Untukmu</h3>
        <div className="product-grid">
          {produkRekomendasi.map((item) => (
            <div 
              key={item.id} 
              className="product-card" 
              onClick={() => navigate('detail', { state: { produk: item } })}
            >
              <div className="product-image">{item.gambar}</div>
              <div className="product-info-container">
                <h4 className="product-name">{item.nama}</h4>
                <p className="product-price">Rp {item.harga}</p>
                <div className="product-meta">
                  <span className="star-icon">⭐ {item.rating}</span>
                  <span className="sold-text">Terjual {item.terjual}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
