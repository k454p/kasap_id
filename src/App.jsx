import React, { useState } from 'react';
import Beranda from './beranda';
import DetailProduk from './detail';
import AkunSaya from './akunsaya';
import './App.css';

function App() {
  const [menu, setMenu] = useState('beranda');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fungsi navigasi utama yang aman untuk semua komponen
  const navigate = (halamanBaru, opsi = null) => {
    if (opsi && opsi.state && opsi.state.produk) {
      setSelectedProduct(opsi.state.produk);
    }
    setMenu(halamanBaru);
  };

  // Logika untuk menampilkan halaman berdasarkan menu yang aktif
  const renderPage = () => {
    switch (menu) {
      case 'beranda':
      case 'live':
      case 'tokosaya':
      case 'laporan':
        return <Beranda menu={menu} navigate={navigate} />;
      case 'akunsaya':
        return <AkunSaya navigate={navigate} />;
      case 'detail':
        return <DetailProduk produk={selectedProduct} navigate={navigate} />;
      case 'checkout':
        return (
          <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
            <h2>🛒 Halaman Pembayaran (Checkout)</h2>
            <p>Membeli: {selectedProduct?.nama}</p>
            <button onClick={() => navigate('beranda')} style={{ marginTop: '20px', padding: '10px 20px', background: '#ff4500', color: '#fff', border: 'none', borderRadius: '5px' }}>Kembali ke Beranda</button>
          </div>
        );
      default:
        return <Beranda menu='beranda' navigate={navigate} />;
    }
  };

  return (
    <div className="app-viewport">
      {/* Konten Halaman Aktif */}
      <div className="main-content-area">
        {renderPage()}
      </div>

      {/* NAVBAR BAWAH (Hanya muncul di menu utama) */}
      {(menu === 'beranda' || menu === 'live' || menu === 'tokosaya' || menu === 'laporan' || menu === 'akunsaya') && (
        <div className="navbar-bottom">
          <button onClick={() => navigate('beranda')} className={menu === 'beranda' ? 'active' : ''}>
            <span className="nav-icon">🏠</span>
            <span className="nav-text">Beranda</span>
          </button>
          <button onClick={() => navigate('live')} className={menu === 'live' ? 'active' : ''}>
            <span className="nav-icon">📺</span>
            <span className="nav-text">Live</span>
          </button>
          <button onClick={() => navigate('tokosaya')} className={menu === 'tokosaya' ? 'active' : ''}>
            <span className="nav-icon">🏪</span>
            <span className="nav-text">Toko Saya</span>
          </button>
          <button onClick={() => navigate('laporan')} className={menu === 'laporan' ? 'active' : ''}>
            <span className="nav-icon">📊</span>
            <span className="nav-text">Laporan</span>
          </button>
          <button onClick={() => navigate('akunsaya')} className={menu === 'akunsaya' ? 'active' : ''}>
            <span className="nav-icon">👤</span>
            <span className="nav-text">Saya</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
