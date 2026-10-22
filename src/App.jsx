import React, { useState, useEffect } from 'react';
import {
  Search,
  Camera,
  MessageSquare,
  ShoppingBag,
  Wallet,
  QrCode,
  PlusCircle,
  ShieldCheck,
  Percent,
  Zap,
  Grid,
  Flame,
  Watch,
  Headphones,
  Glasses,
  Briefcase,
  Gem,
  Star,
  Plus,
  Home,
  Compass,
  Video,
  Bell,
  User,
  Sparkle,
  TicketPercent,
  Crown,
  ArrowLeft,
  Layers
} from 'lucide-react';

// ====================================================================
// 1. IMPORT SEMUA FILE KOMPONEN KAMU
// ====================================================================
import AkunSaya from './akunsaya';
import Alamat from './alamat';
import BankEwallet from './bankewallet';
import BelumDibayar from './belumdibayar';
import BeriNilai from './berinilai';
import Chat from './chat';
import Chekout from './chekout';
import Dikemas from './dikemas';
import Dikirim from './dikirim';
import Email from './email';
import HubungiCS from './hubungics';
import Keranjang from './keranjang';
import Laporan from './laporan';
import Live from './live';
import MasukKeranjang from './masukkeranjang';
import Nama from './nama';
import NomerHp from './nomerhp';
import Produk from './produk';
import Saldo from './saldo';
import TarikDana from './tarikdana';
import TambahProduk from './tambahproduk';
import Selesai from './selesai';
import HalamanPembeli from './HALAMAN UNTUK pembeli';
import HalamanPenjual from './HALAMAN UNTUK penjual';

export default function App() {
  // Status halaman aktif & riwayat navigasi (History)
  const [currentPage, setCurrentPage] = useState('beranda');
  const [history, setHistory] = useState(['beranda']);
  
  // Fitur Keranjang & Tab
  const [cartCount, setCartCount] = useState(2);
  const [activeTab, setActiveTab] = useState('rekomendasi');

  // Popup Daftar Semua File (untuk mempermudah testing semua komponen)
  const [showQuickMenu, setShowQuickMenu] = useState(false);

  // Timer Flash Sale (Hitung Mundur)
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 4 * 60 + 31);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  // FUNGSI NAVIGASI PINDAH HALAMAN
  const navigate = (pageName) => {
    setHistory((prev) => [...prev, pageName]);
    setCurrentPage(pageName);
    setShowQuickMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // FUNGSI TOMBOL KEMBALI (BACK)
  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentPage(newHistory[newHistory.length - 1]);
    } else {
      setCurrentPage('beranda');
    }
  };

  const commonProps = { navigate, goBack, cartCount, setCartCount };

  // ====================================================================
  // 2. LOGIKA GANTI HALAMAN
  // ====================================================================
  const renderPage = () => {
    switch (currentPage) {
      case 'produk': return <Produk {...commonProps} />;
      case 'keranjang': return <Keranjang {...commonProps} />;
      case 'masukkeranjang': return <MasukKeranjang {...commonProps} />;
      case 'chekout': return <Chekout {...commonProps} />;
      case 'akunsaya': return <AkunSaya {...commonProps} />;
      case 'saldo': return <Saldo {...commonProps} />;
      case 'tarikdana': return <TarikDana {...commonProps} />;
      case 'bankewallet': return <BankEwallet {...commonProps} />;
      case 'live': return <Live {...commonProps} />;
      case 'chat': return <Chat {...commonProps} />;
      case 'pembeli': return <HalamanPembeli {...commonProps} />;
      case 'penjual': return <HalamanPenjual {...commonProps} />;
      case 'tambahproduk': return <TambahProduk {...commonProps} />;
      case 'laporan': return <Laporan {...commonProps} />;
      case 'alamat': return <Alamat {...commonProps} />;
      case 'nama': return <Nama {...commonProps} />;
      case 'email': return <Email {...commonProps} />;
      case 'nomerhp': return <NomerHp {...commonProps} />;
      case 'belumdibayar': return <BelumDibayar {...commonProps} />;
      case 'dikemas': return <Dikemas {...commonProps} />;
      case 'dikirim': return <Dikirim {...commonProps} />;
      case 'selesai': return <Selesai {...commonProps} />;
      case 'berinilai': return <BeriNilai {...commonProps} />;
      case 'hubungics': return <HubungiCS {...commonProps} />;
      default: return renderBeranda();
    }
  };

  // ====================================================================
  // 3. TAMPILAN BERANDA (PERSIS DENGAN FOTO KAMU)
  // ====================================================================
  const renderBeranda = () => (
    <div className="pb-8">
      {/* HEADER ATAS */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center bg-slate-100 rounded-2xl px-3 py-2 border border-slate-200">
            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Cari produk mewah di Kasap.id..."
              className="w-full bg-transparent text-xs focus:outline-none placeholder-slate-400 font-medium text-slate-700"
            />
            <button type="button" onClick={() => navigate('produk')} className="text-slate-400 hover:text-slate-600 ml-1">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {/* Tombol Chat */}
          <button onClick={() => navigate('chat')} className="relative p-2 text-slate-700 hover:text-amber-600 transition">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
          </button>

          {/* Tombol Keranjang */}
          <button onClick={() => navigate('keranjang')} className="relative p-2 text-slate-700 hover:text-amber-600 transition">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-0.5 right-0.5 bg-amber-600 text-[10px] text-white font-extrabold px-1.5 rounded-full ring-2 ring-white">
              {cartCount}
            </span>
          </button>
        </div>
      </header>

      {/* HIGHLIGHT STORIES */}
      <section className="py-3 px-4 border-b border-slate-100 overflow-x-auto flex items-center gap-3 [scrollbar-width:none]">
        <div onClick={() => navigate('live')} className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
          <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 to-rose-500">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <span className="text-xs font-black text-amber-600">LIVE</span>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-slate-700">Live Kasap</span>
        </div>

        <div onClick={() => navigate('produk')} className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
          <div className="w-14 h-14 rounded-full p-[2px] bg-slate-200">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <Crown className="w-5 h-5 text-amber-600" />
            </div>
          </div>
          <span className="text-[10px] font-semibold text-slate-700">Brand VIP</span>
        </div>

        <div onClick={() => navigate('produk')} className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
          <div className="w-14 h-14 rounded-full p-[2px] bg-slate-200">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <TicketPercent className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <span className="text-[10px] font-semibold text-slate-700">Voucher</span>
        </div>

        <div onClick={() => navigate('produk')} className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
          <div className="w-14 h-14 rounded-full p-[2px] bg-slate-200">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <Sparkle className="w-5 h-5 text-indigo-600" />
            </div>
          </div>
          <span className="text-[10px] font-semibold text-slate-700">Terbaru</span>
        </div>
      </section>

      {/* HERO PROMO BANNER 2026 */}
      <section className="p-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-amber-950 p-6 text-white shadow-xl">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold rounded-full mb-2">
            <Sparkle className="w-3 h-3" /> KASAP PRIVILEGE
          </span>
          <h2 className="text-xl font-extrabold">Koleksi Eksklusif 2026</h2>
          <p className="text-xs text-slate-300 mt-1 mb-4 leading-relaxed">Dapatkan Cashback 50% & Fasilitas Gratis Pengiriman Instan.</p>
          <button 
            onClick={() => navigate('produk')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition"
          >
            Belanja Sekarang
          </button>
        </div>
      </section>

      {/* KASAPPAY SALDO */}
      <section className="px-4 mb-4">
        <div className="bg-slate-900 text-white rounded-2xl p-3.5 flex items-center justify-between shadow-md">
          <div onClick={() => navigate('saldo')} className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400">KasapPay Saldo</p>
              <p className="text-sm font-extrabold text-amber-400">Rp 2.850.000</p>
            </div>
          </div>
          <div className="h-8 w-[1px] bg-slate-800"></div>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('saldo')} className="flex flex-col items-center gap-1 text-[10px] text-slate-300 hover:text-white">
              <QrCode className="w-4 h-4 text-amber-400" />
              <span>Bayar</span>
            </button>
            <button onClick={() => navigate('saldo')} className="flex flex-col items-center gap-1 text-[10px] text-slate-300 hover:text-white">
              <PlusCircle className="w-4 h-4 text-amber-400" />
              <span>Top Up</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 MENU KATEGORI */}
      <section className="px-4 mb-5">
        <div className="grid grid-cols-4 gap-3">
          <div onClick={() => navigate('produk')} className="flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center hover:bg-amber-100 transition border border-slate-200">
              <ShieldCheck className="w-5 h-5 text-slate-700" />
            </div>
            <span className="text-[11px] font-semibold text-slate-700">Mall Resmi</span>
          </div>

          <div onClick={() => navigate('produk')} className="flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center hover:bg-amber-100 transition border border-slate-200">
              <Percent className="w-5 h-5 text-slate-700" />
            </div>
            <span className="text-[11px] font-semibold text-slate-700">Promo Hemat</span>
          </div>

          <div onClick={() => navigate('produk')} className="flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center hover:bg-amber-100 transition border border-slate-200">
              <Zap className="w-5 h-5 text-slate-700" />
            </div>
            <span className="text-[11px] font-semibold text-slate-700">Flash Sale</span>
          </div>

          <div onClick={() => setShowQuickMenu(true)} className="flex flex-col items-center gap-1.5 cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition shadow">
              <Grid className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-amber-700">Semua Menu</span>
          </div>
        </div>
      </section>

      {/* FLASH SALE COUNTDOWN */}
      <section className="px-4 mb-6">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/70 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-amber-800 flex items-center gap-1">
                <Flame className="w-4 h-4 text-orange-600 fill-orange-500" /> FLASH SALE
              </span>
              <div className="flex items-center gap-1 text-[10px] font-bold text-white">
                <span className="bg-slate-900 px-1.5 py-0.5 rounded">{h}</span>:
                <span className="bg-slate-900 px-1.5 py-0.5 rounded">{m}</span>:
                <span className="bg-slate-900 px-1.5 py-0.5 rounded">{s}</span>
              </div>
            </div>
            <button onClick={() => navigate('produk')} className="text-[11px] font-bold text-amber-700 hover:text-amber-900">
              Lihat Semua
            </button>
          </div>

          {/* Carousel Produk Flash Sale */}
          <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none]">
            <div onClick={() => navigate('produk')} className="min-w-[125px] bg-white rounded-xl p-2.5 shadow-sm border border-slate-100 cursor-pointer">
              <div className="w-full aspect-square bg-slate-100 rounded-lg mb-2 flex items-center justify-center relative">
                <Watch className="w-8 h-8 text-slate-400" />
                <span className="absolute top-1 left-1 bg-rose-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded">-45%</span>
              </div>
              <p className="text-[11px] font-bold text-slate-800 truncate">Chronograph Gold</p>
              <p className="text-xs font-black text-amber-600">Rp 750.000</p>
            </div>

            <div onClick={() => navigate('produk')} className="min-w-[125px] bg-white rounded-xl p-2.5 shadow-sm border border-slate-100 cursor-pointer">
              <div className="w-full aspect-square bg-slate-100 rounded-lg mb-2 flex items-center justify-center relative">
                <Headphones className="w-8 h-8 text-slate-400" />
                <span className="absolute top-1 left-1 bg-rose-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded">-30%</span>
              </div>
              <p className="text-[11px] font-bold text-slate-800 truncate">Studio Wireless</p>
              <p className="text-xs font-black text-amber-600">Rp 1.120.000</p>
            </div>

            <div onClick={() => navigate('produk')} className="min-w-[125px] bg-white rounded-xl p-2.5 shadow-sm border border-slate-100 cursor-pointer">
              <div className="w-full aspect-square bg-slate-100 rounded-lg mb-2 flex items-center justify-center relative">
                <Glasses className="w-8 h-8 text-slate-400" />
                <span className="absolute top-1 left-1 bg-rose-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded">-50%</span>
              </div>
              <p className="text-[11px] font-bold text-slate-800 truncate">Aviator Shades</p>
              <p className="text-xs font-black text-amber-600">Rp 390.000</p>
            </div>
          </div>
        </div>
      </section>

      {/* KATALOG PRODUK REKOMENDASI */}
      <section className="px-4">
        <div className="grid grid-cols-2 gap-3">
          <article onClick={() => navigate('produk')} className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm cursor-pointer">
            <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center mb-2">
              <Briefcase className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xs font-semibold text-slate-800 line-clamp-2">Kasap Formal Leather Bag</h3>
            <p className="text-sm font-black text-slate-900 mt-2">Rp 899.000</p>
          </article>

          <article onClick={() => navigate('produk')} className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm cursor-pointer">
            <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center mb-2">
              <Gem className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xs font-semibold text-slate-800 line-clamp-2">Kasap Diamond Pendant 18K</h3>
            <p className="text-sm font-black text-slate-900 mt-2">Rp 1.450.000</p>
          </article>
        </div>
      </section>
    </div>
  );

  return (
    <div className="bg-neutral-100 min-h-screen text-slate-800 font-sans antialiased">
      <main className="max-w-md mx-auto bg-white min-h-screen relative shadow-2xl pb-24 border-x border-slate-200">
        
        {/* HEADER TOMBOL BACK KETIKA PINDAH DARI BERANDA */}
        {currentPage !== 'beranda' && (
          <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3 flex items-center gap-3">
            <button onClick={goBack} className="p-1 rounded-full hover:bg-slate-100 text-slate-700">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold uppercase text-slate-600">
              {currentPage.replace(/([A-Z])/g, ' $1')}
            </span>
          </div>
        )}

        {/* TAMPILAN HALAMAN YANG DIPILIH */}
        {renderPage()}

        {/* BOTTOM NAVIGATION BAR */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-slate-200 px-6 py-2.5 flex justify-between items-center shadow-lg">
          <button 
            onClick={() => navigate('beranda')} 
            className={`flex flex-col items-center gap-1 ${currentPage === 'beranda' ? 'text-amber-600 font-bold' : 'text-slate-400'}`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px]">Beranda</span>
          </button>

          <button 
            onClick={() => navigate('produk')} 
            className={`flex flex-col items-center gap-1 ${currentPage === 'produk' ? 'text-amber-600 font-bold' : 'text-slate-400'}`}
          >
            <Compass className="w-5 h-5" />
            <span className="text-[10px]">Eksplor</span>
          </button>

          <button 
            onClick={() => navigate('live')} 
            className={`flex flex-col items-center gap-1 ${currentPage === 'live' ? 'text-amber-600 font-bold' : 'text-slate-400'}`}
          >
            <Video className="w-5 h-5" />
            <span className="text-[10px]">Live</span>
          </button>

          <button 
            onClick={() => navigate('chat')} 
            className={`flex flex-col items-center gap-1 ${currentPage === 'chat' ? 'text-amber-600 font-bold' : 'text-slate-400'}`}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-[10px]">Chat</span>
          </button>

          <button 
            onClick={() => navigate('akunsaya')} 
            className={`flex flex-col items-center gap-1 ${currentPage === 'akunsaya' ? 'text-amber-600 font-bold' : 'text-slate-400'}`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px]">Saya</span>
          </button>
        </nav>

        {/* POPUP DAFTAR SEMUA HALAMAN (MUNCUL JIKA KLIK "SEMUA MENU") */}
        {showQuickMenu && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex justify-end">
            <div className="w-4/5 max-w-xs bg-white h-full p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4 pb-2 border-b">
                <h3 className="font-bold text-sm text-slate-800 flex items-center gap-1">
                  <Layers className="w-4 h-4 text-amber-600" /> Semua Menu File
                </h3>
                <button onClick={() => setShowQuickMenu(false)} className="text-slate-400 font-bold">✕</button>
              </div>

              <div className="space-y-4 text-xs font-medium">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase">Produk & Pembelian</p>
                  <div className="flex flex-col gap-1">
                    <button onClick={() => navigate('produk')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Produk Detail</button>
                    <button onClick={() => navigate('masukkeranjang')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Masuk Keranjang</button>
                    <button onClick={() => navigate('keranjang')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Keranjang</button>
                    <button onClick={() => navigate('chekout')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Checkout</button>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase">Status Pesanan</p>
                  <div className="flex flex-col gap-1">
                    <button onClick={() => navigate('belumdibayar')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Belum Dibayar</button>
                    <button onClick={() => navigate('dikemas')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Dikemas</button>
                    <button onClick={() => navigate('dikirim')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Dikirim</button>
                    <button onClick={() => navigate('selesai')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Selesai</button>
                    <button onClick={() => navigate('berinilai')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Beri Nilai</button>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase">Keuangan & Profil</p>
                  <div className="flex flex-col gap-1">
                    <button onClick={() => navigate('saldo')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Saldo Dompet</button>
                    <button onClick={() => navigate('tarikdana')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Tarik Dana</button>
                    <button onClick={() => navigate('bankewallet')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Bank & E-Wallet</button>
                    <button onClick={() => navigate('akunsaya')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Akun Saya</button>
                    <button onClick={() => navigate('alamat')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Alamat</button>
                    <button onClick={() => navigate('nama')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Ubah Nama</button>
                    <button onClick={() => navigate('email')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Ubah Email</button>
                    <button onClick={() => navigate('nomerhp')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Ubah Nomor HP</button>
                    <button onClick={() => navigate('hubungics')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Hubungi CS</button>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase">Toko & Penjual</p>
                  <div className="flex flex-col gap-1">
                    <button onClick={() => navigate('penjual')} className="p-2 bg-amber-500 text-white rounded text-left font-bold">Halaman Penjual</button>
                    <button onClick={() => navigate('pembeli')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Halaman Pembeli</button>
                    <button onClick={() => navigate('tambahproduk')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Tambah Produk</button>
                    <button onClick={() => navigate('laporan')} className="p-2 bg-slate-50 hover:bg-amber-50 rounded text-left">Laporan Toko</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}