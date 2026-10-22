import React, { useState } from 'react';

// === IMPORT KE-25 KOMPONEN ANDA ===
import Beranda from './beranda.jsx';
import Produk from './produk.jsx';
import MasukKeranjang from './masukkeranjang.jsx';
import Keranjang from './keranjang.jsx';
import Chekout from './chekout.jsx';

// Status Transaksi
import Belumdibayar from './belumdibayar.jsx';
import Dikemas from './dikemas.jsx';
import Dikirim from './dikirim.jsx';
import Selesai from './selesai.jsx';
import BeriNilai from './berinilai.jsx';

// Komunikasi & Live Streaming
import Chat from './chat.jsx';
import Live from './live.jsx';
import HubungiCs from './hubungics.jsx';

// Pengaturan & Biodata Akun
import AkunSaya from './akunsaya.jsx';
import Nama from './nama.jsx';
import NomerHp from './nomerhp.jsx';
import Email from './email.jsx';
import Alamat from './alamat.jsx';
import BankEwallet from './bankewallet.jsx';
import Saldo from './saldo.jsx';
import TarikDana from './tarikdana.jsx';

// Penjual, Pembeli & Merchant
import Penjual from './penjual.jsx';
import Pembeli from './pembeli.jsx';
import TambahProduk from './tambahproduk.jsx';
import Laporan from './laporan.jsx';
import TambahProduk from './tambahproduk.jsx';
export default function App() {
  // State Halaman Aktif & History Navigasi
  const [currentPage, setCurrentPage] = useState('beranda');
  const [pageHistory, setPageHistory] = useState(['beranda']);
  const [pageData, setPageData] = useState(null);

  // Fungsi Pindah Halaman
  const navigate = (pageName, data = null) => {
    setPageHistory((prev) => [...prev, pageName]);
    setCurrentPage(pageName);
    setPageData(data);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fungsi Tombol Kembali (Back)
  const goBack = () => {
    if (pageHistory.length > 1) {
      const newHistory = [...pageHistory];
      newHistory.pop();
      const prevPage = newHistory[newHistory.length - 1];
      setPageHistory(newHistory);
      setCurrentPage(prevPage);
    } else {
      setCurrentPage('beranda');
    }
  };

  const commonProps = { navigate, goBack, pageData };

  // Router Switcher
  const renderPage = () => {
    switch (currentPage) {
      case 'beranda': return <Beranda {...commonProps} />;
      case 'produk': return <Produk {...commonProps} />;
      case 'masukkeranjang': return <MasukKeranjang {...commonProps} />;
      case 'keranjang': return <Keranjang {...commonProps} />;
      case 'chekout': return <Chekout {...commonProps} />;
case 'akunsaya': return <AkunSaya {...commonProps} />;
case 'nama': return <Nama {...commonProps} />;
case 'alamat': return <Alamat {...commonProps} />;
case 'email': return <Email {...commonProps} />;
case 'nomerhp': return <NomerHp {...commonProps} />;
case 'bankewallet': return <BankEwallet {...commonProps} />;
case 'saldo': return <Saldo {...commonProps} />;
case 'tarikdana': return <TarikDana {...commonProps} />;
      case 'belumdibayar': return <Belumdibayar {...commonProps} />;
      case 'dikemas': return <Dikemas {...commonProps} />;
      case 'dikirim': return <Dikirim {...commonProps} />;
      case 'selesai': return <Selesai {...commonProps} />;
      case 'berinilai': return <BeriNilai {...commonProps} />;
      case 'chat': return <Chat {...commonProps} />;
      case 'live': return <Live {...commonProps} />;
      case 'hubungics': return <HubungiCs {...commonProps} />;
      case 'akunsaya': return <AkunSaya {...commonProps} />;
      case 'nama': return <Nama {...commonProps} />;
      case 'nomerhp': return <NomerHp {...commonProps} />;
      case 'email': return <Email {...commonProps} />;
      case 'alamat': return <Alamat {...commonProps} />;
      case 'bankewallet': return <BankEwallet {...commonProps} />;
      case 'saldo': return <Saldo {...commonProps} />;
      case 'tarikdana': return <TarikDana {...commonProps} />;
      case 'penjual': return <Penjual {...commonProps} />;
      case 'pembeli': return <Pembeli {...commonProps} />;
      case 'tambahproduk': return <TambahProduk {...commonProps} />;
      case 'laporan': return <Laporan {...commonProps} />;
      default: return <Beranda {...commonProps} />;
case 'tambahproduk': return <TambahProduk {...commonProps} />;
    }
  };

  return (
    <div className="app-viewport">
      {/* HEADER ATAS GAYA SHOPEE (HIJAU GRADASI) */}
      <header className="shopee-header">
        {currentPage !== 'beranda' ? (
          <button className="btn-icon" onClick={goBack}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        ) : (
          <div className="header-logo" onClick={() => navigate('beranda')}>
            <i className="fa-solid fa-leaf"></i>
            <span>Kasap.id</span>
          </div>
        )}

        <div className="search-bar" onClick={() => navigate('beranda')}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Diskon s/d 80% di Kasap..." readOnly />
          <i className="fa-solid fa-camera"></i>
        </div>

        <div className="header-actions">
          <button className="btn-icon" onClick={() => navigate('keranjang')} title="Keranjang">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="badge">3</span>
          </button>
          <button className="btn-icon" onClick={() => navigate('chat')} title="Pesan">
            <i className="fa-solid fa-comment-dots"></i>
            <span className="badge">1</span>
          </button>
        </div>
      </header>

      {/* QUICK STATUS BAR SHOPEE (Hanya Tampil di Beranda/Saya) */}
      {(currentPage === 'beranda' || currentPage === 'akunsaya') && (
        <div className="quick-shopee-bar">
          <div className="quick-item" onClick={() => navigate('saldo')}>
            <i className="fa-solid fa-wallet text-emerald"></i>
            <div>
              <p className="q-label">KasapPay</p>
              <p className="q-val">Rp 250.000</p>
            </div>
          </div>
          <div className="quick-divider"></div>
          <div className="quick-item" onClick={() => navigate('belumbayar')}>
            <i className="fa-solid fa-receipt text-emerald"></i>
            <div>
              <p className="q-label">Pesanan Saya</p>
              <p className="q-val">2 Menunggu</p>
            </div>
          </div>
        </div>
      )}

      {/* KONTEN AKTIF DARI SETIAP KOMPONEN JSX */}
      <main className="content-container">
        {renderPage()}
      </main>

      {/* FLOATING BOTTOM NAVIGATION (GAYA SHOPEE MODERN) */}
      <nav className="shopee-bottom-nav">
        <button 
          className={`nav-btn ${currentPage === 'beranda' ? 'active' : ''}`} 
          onClick={() => navigate('beranda')}
        >
          <i className="fa-solid fa-house"></i>
          <span>Beranda</span>
        </button>

        <button 
          className={`nav-btn ${currentPage === 'live' ? 'active' : ''}`} 
          onClick={() => navigate('live')}
        >
          <i className="fa-solid fa-video"></i>
          <span>Live</span>
        </button>

        <button 
          className={`nav-btn ${currentPage === 'penjual' ? 'active' : ''}`} 
          onClick={() => navigate('penjual')}
        >
          <i className="fa-solid fa-store"></i>
          <span>Toko Saya</span>
        </button>

        <button 
          className={`nav-btn ${currentPage === 'laporan' ? 'active' : ''}`} 
          onClick={() => navigate('laporan')}
        >
          <i className="fa-solid fa-chart-pie"></i>
          <span>Laporan</span>
        </button>

        <button 
          className={`nav-btn ${currentPage === 'akunsaya' ? 'active' : ''}`} 
          onClick={() => navigate('akunsaya')}
        >
          <i className="fa-solid fa-user"></i>
          <span>Saya</span>
        </button>
      </nav>
    </div>
  );
}
