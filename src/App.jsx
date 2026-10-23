import React, { useState } from 'react';
import './App.css';

// ==========================================
// 1. KOMPONEN HALAMAN DETAIL PRODUK
// ==========================================
function DetailProduk({ produk, navigate }) {
  const dataProduk = produk || { nama: "Produk Pilihan", harga: "150.000", gambar: "📦" };
  return (
    <div className="detail-container" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="detail-header" style={{ display: 'flex', alignItems: 'center', padding: '12px 15px', background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <button onClick={() => navigate('beranda')} style={{ background: 'none', border: 'none', color: '#ff4500', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}>← Kembali</button>
        <span style={{ marginLeft: '15px', fontWeight: 'bold' }}>Detail Produk</span>
      </div>
      <div className="detail-image-box" style={{ width: '100%', aspectRatio: '1/1', background: '#f3f4f6', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px' }}>
        {dataProduk.gambar}
      </div>
      <div style={{ background: '#fff', padding: '15px', marginBottom: '10px' }}>
        <div style={{ color: '#ff4500', fontSize: '24px', fontWeight: 'bold' }}>Rp {dataProduk.harga}</div>
        <h1 style={{ fontSize: '16px', fontWeight: 'normal', marginTop: '6px', lineHeight: '1.4' }}>{dataProduk.nama} - Edisi Spesial Kasap.id</h1>
      </div>
      <div style={{ background: '#fff', padding: '15px', fontSize: '13px', color: '#666' }}>
        <h3>Deskripsi Produk</h3>
        <p style={{ marginTop: '5px', lineHeight: '1.5' }}>Produk berkualitas tinggi khas Kasap.id. Dibuat rapi dan sangat nyaman digunakan untuk melengkapi kebutuhan fashion harian Anda.</p>
      </div>
      {/* 🛍️ STICKY BOTTOM ACTION BAR (ALA SHOPEE) */}
      <div className="bottom-action-bar" style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '500px', height: '60px', background: '#fff', display: 'flex', borderTop: '1px solid #e5e7eb', zIndex: 1000 }}>
        <a href={`https://wa.me{encodeURIComponent(dataProduk.nama)}`} target="_blank" rel="noreferrer" style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '22px', textDecoration: 'none', borderRight: '1px solid #eee' }}>💬</a>
        <button onClick={() => alert('Berhasil masuk keranjang!')} style={{ width: '20%', background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer', borderRight: '1px solid #eee' }}>🛒</button>
        <button onClick={() => navigate('checkout')} style={{ width: '60%', background: '#ff4500', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>Beli Sekarang</button>
      </div>
    </div>
  );
}

// ==========================================
// 2. KOMPONEN HALAMAN AKUN SAYA
// ==========================================
function AkunSaya({ navigate }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ background: '#ff4500', padding: '25px 15px', color: 'white', borderRadius: '8px', marginBottom: '20px' }}>
        <h3 style={{ margin: 0 }}>👤 Pengguna Kasap.id</h3>
        <p style={{ margin: '5px 0 0 0', fontSize: '13px', opacity: 0.9 }}>Member Setia</p>
      </div>
      <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
        <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px' }}>Menu Akun</h4>
        <div style={{ padding: '10px 0', cursor: 'pointer' }} onClick={() => navigate('beranda')}>🏠 Kembali ke Beranda</div>
        <div style={{ padding: '10px 0', cursor: 'pointer', color: 'red' }} onClick={() => alert('Keluar aplikasi')}>🚪 Keluar Akun</div>
      </div>
    </div>
  );
}

// ==========================================
// 3. KOMPONEN UTAMA BERANDA & STRUKTUR APLIKASI
// ==========================================
function App() {
  const [menu, setMenu] = useState('beranda');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const produkRekomendasi = [
    { id: 1, nama: "Cak Udin", harga: "145.000", rating: "4.8", terjual: "1,2rb", gambar: "👑" },
    { id: 2, nama: "Cak Wafa", harga: "175.000", rating: "4.7", terjual: "950", gambar: "🧢" },
    { id: 3, nama: "Cak Icong Lee", harga: "299.000", rating: "4.9", terjual: "3,4rb", gambar: "🎩" },
    { id: 4, nama: "Isol", harga: "210.000", rating: "4.6", terjual: "820", gambar: "🎓" }
  ];

  const navigate = (halamanBaru, opsi = null) => {
    if (opsi && opsi.state && opsi.state.produk) {
      setSelectedProduct(opsi.state.produk);
    }
    setMenu(halamanBaru);
  };

  // Logika Render Konten Utama
  const renderContent = () => {
    switch (menu) {
      case 'detail':
        return <DetailProduk produk={selectedProduct} navigate={navigate} />;
      case 'akunsaya':
        return <AkunSaya navigate={navigate} />;
      case 'live':
        return <div style={{ padding: '40px 20px', textAlign: 'center' }}>🎥 Halaman Live Streaming Kasap.id</div>;
      case 'tokosaya':
        return <div style={{ padding: '40px 20px', textAlign: 'center' }}>🏪 Halaman Manajemen Toko Saya</div>;
      case 'laporan':
        return <div style={{ padding: '40px 20px', textAlign: 'center' }}>📊 Halaman Laporan Keuangan</div>;
      case 'checkout':
        return (
          <div style={{ padding: '30px 20px', textAlign: 'center', fontFamily: 'Arial' }}>
            <h2>🛒 Proses Pembayaran</h2>
            <p style={{ margin: '10px 0' }}>Anda membeli: <b>{selectedProduct?.nama}</b></p>
            <button onClick={() => navigate('beranda')} style={{ padding: '8px 20px', background: '#ff4500', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Selesai & Kembali</button>
          </div>
        );
      default:
        return (
          <>
            {/* SHOPPING HEADER */}
            <div className="shopee-header">
              <span className="brand-title" onClick={() => navigate('beranda')}>Kasap.id</span>
              <div className="search-container">
                <input type="text" className="search-input" placeholder="Diskon s/d 80% di Kasap..." />
              </div>
              <div className="header-icons" style={{ color: '#fff', fontSize: '18px' }}>🛒 💬</div>
            </div>

            {/* KASAPPAY & INFO CARD */}
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

            {/* KATEGORI */}
            <div className="category-list">
              <div className="category-item"><span>👕 Pakaian</span></div>
              <div className="category-item"><span>👟 Sepatu</span></div>
              <div className="category-item"><span>🎒 Tas</span></div>
              <div className="category-item"><span>💬 Bantuan</span></div>
            </div>

            {/* GRID REKOMENDASI PRODUK */}
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
                      <span>⭐ {item.rating}</span>
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
      <div className="main-content-area">
        {renderContent()}
      </div>

      {/* NAVBAR BAWAH */}
      {(menu === 'beranda' || menu === 'live' || menu === 'tokosaya' || menu === 'laporan' || menu === 'akunsaya') && (
        <div className="navbar-bottom">
          <button onClick={() => navigate('beranda')} className={menu === 'beranda' ? 'active' : ''}>
            <span className="nav-icon">🏠</span><span className="nav-text">Beranda</span>
          </button>
          <button onClick={() => navigate('live')} className={menu === 'live' ? 'active' : ''}>
            <span className="nav-icon">📺</span><span className="nav-text">Live</span>
          </button>
          <button onClick={() => navigate('tokosaya')} className={menu === 'tokosaya' ? 'active' : ''}>
            <span className="nav-icon">🏪</span><span className="nav-text">Toko</span>
          </button>
          <button onClick={() => navigate('laporan')} className={menu === 'laporan' ? 'active' : ''}>
            <span className="nav-icon">📊</span><span className="nav-text">Laporan</span>
          </button>
          <button onClick={() => navigate('akunsaya')} className={menu === 'akunsaya' ? 'active' : ''}>
            <span className="nav-icon">👤</span><span className="nav-text">Saya</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
