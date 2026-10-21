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
  Crown
} from 'lucide-react';

export default function App() {
  const [cartCount, setCartCount] = useState(2);
  const [activeTab, setActiveTab] = useState('rekomendasi');

  // Timer Flash Sale (Hitung Mundur)
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 15 * 60 + 42);

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

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="bg-neutral-100 min-h-screen text-slate-800 antialiased selection:bg-amber-500 selection:text-white font-sans">
      {/* CONTAINER UTAMA (Mobile-first app container) */}
      <main className="max-w-md mx-auto bg-white min-h-screen relative shadow-2xl pb-24 border-x border-slate-200">
        
        {/* 1. STICKY TOP HEADER */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3 shadow-sm">
          <div className="flex items-center gap-3">
            {/* Input Pencarian */}
            <div className="flex-1 flex items-center bg-slate-100 rounded-2xl px-3 py-2 border border-slate-200 focus-within:border-amber-600 focus-within:bg-white transition-all">
              <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Cari koleksi Kasap.id..."
                className="w-full bg-transparent text-xs focus:outline-none placeholder-slate-400 font-medium text-slate-700"
              />
              <button type="button" className="text-slate-400 hover:text-slate-600 ml-1">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Tombol Pesan */}
            <button type="button" className="relative p-2 text-slate-700 hover:text-amber-600 transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
            </button>

            {/* Tombol Keranjang */}
            <button type="button" className="relative p-2 text-slate-700 hover:text-amber-600 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0.5 right-0.5 bg-amber-600 text-[10px] text-white font-extrabold px-1.5 py-0.2 rounded-full ring-2 ring-white">
                {cartCount}
              </span>
            </button>
          </div>
        </header>

        {/* 2. STORY HIGHLIGHTS / KASAP LIVE */}
        <section className="py-3 px-4 border-b border-slate-100 overflow-x-auto flex items-center gap-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
            <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 to-rose-500">
              <div className="w-full h-full bg-white rounded-full p-[2px] flex items-center justify-center">
                <span className="text-xs font-black text-amber-600">LIVE</span>
              </div>
            </div>
            <span className="text-[10px] font-semibold text-slate-700 truncate w-14 text-center">Live Kasap</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
            <div className="w-14 h-14 rounded-full p-[2px] bg-slate-200">
              <div className="w-full h-full bg-white rounded-full p-[2px] flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-600" />
              </div>
            </div>
            <span className="text-[10px] font-semibold text-slate-700 truncate w-14 text-center">Brand VIP</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
            <div className="w-14 h-14 rounded-full p-[2px] bg-slate-200">
              <div className="w-full h-full bg-white rounded-full p-[2px] flex items-center justify-center">
                <TicketPercent className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <span className="text-[10px] font-semibold text-slate-700 truncate w-14 text-center">Voucher</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer shrink-0">
            <div className="w-14 h-14 rounded-full p-[2px] bg-slate-200">
              <div className="w-full h-full bg-white rounded-full p-[2px] flex items-center justify-center">
                <Sparkle className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
            <span className="text-[10px] font-semibold text-slate-700 truncate w-14 text-center">Terbaru</span>
          </div>
        </section>

        {/* 3. HERO PROMO BANNER (LUXURY GOLD THEME) */}
        <section className="p-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-amber-950 p-6 text-white shadow-xl">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold rounded-full uppercase tracking-wider mb-2">
              <Sparkle className="w-3 h-3" /> Kasap Privilege
            </span>
            <h2 className="text-xl font-extrabold tracking-tight">Koleksi Eksklusif</h2>
            <p className="text-xs text-slate-300 mt-1 mb-4 leading-relaxed">Cashback 50% & Gratis Pengiriman Prioritas Se-Indonesia.</p>
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all">
              Buka Katalog
            </button>
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        </section>

        {/* 4. KASAP WALLET / DOMPET DIGITAL BAR */}
        <section className="px-4 mb-4">
          <div className="bg-slate-900 text-white rounded-2xl p-3.5 flex items-center justify-between shadow-md border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">KasapPay Saldo</p>
                <p className="text-sm font-extrabold text-amber-400">Rp 2.850.000</p>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-slate-800"></div>
            <div className="flex items-center gap-3">
              <button type="button" className="flex flex-col items-center gap-1 text-[10px] text-slate-300 hover:text-white transition-colors">
                <QrCode className="w-4 h-4 text-amber-400" />
                <span>Bayar</span>
              </button>
              <button type="button" className="flex flex-col items-center gap-1 text-[10px] text-slate-300 hover:text-white transition-colors">
                <PlusCircle className="w-4 h-4 text-amber-400" />
                <span>Top Up</span>
              </button>
            </div>
          </div>
        </section>

        {/* 5. QUICK CATEGORY GRID */}
        <section className="px-4 mb-5">
          <div className="grid grid-cols-4 gap-3">
            <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-amber-100 group-hover:text-amber-700 transition-all border border-slate-200/60 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-slate-700 group-hover:text-amber-700" />
              </div>
              <span className="text-[11px] font-semibold text-slate-700 text-center">Mall Resmi</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-amber-100 group-hover:text-amber-700 transition-all border border-slate-200/60 shadow-sm">
                <Percent className="w-5 h-5 text-slate-700 group-hover:text-amber-700" />
              </div>
              <span className="text-[11px] font-semibold text-slate-700 text-center">Promo Hemat</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-amber-100 group-hover:text-amber-700 transition-all border border-slate-200/60 shadow-sm">
                <Zap className="w-5 h-5 text-slate-700 group-hover:text-amber-700" />
              </div>
              <span className="text-[11px] font-semibold text-slate-700 text-center">Flash Sale</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-amber-100 group-hover:text-amber-700 transition-all border border-slate-200/60 shadow-sm">
                <Grid className="w-5 h-5 text-slate-700 group-hover:text-amber-700" />
              </div>
              <span className="text-[11px] font-semibold text-slate-700 text-center">Semua Menu</span>
            </div>
          </div>
        </section>

        {/* 6. FLASH SALE COUNTDOWN SECTION */}
        <section className="px-4 mb-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/70 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-amber-800 uppercase tracking-wider flex items-center gap-1">
                  <Flame className="w-4 h-4 text-orange-600 fill-orange-500" /> Flash Sale
                </span>
                <div className="flex items-center gap-1 text-[10px] font-bold text-white">
                  <span className="bg-slate-900 px-1.5 py-0.5 rounded shadow">{h}</span>:
                  <span className="bg-slate-900 px-1.5 py-0.5 rounded shadow">{m}</span>:
                  <span className="bg-slate-900 px-1.5 py-0.5 rounded shadow">{s}</span>
                </div>
              </div>
              <a href="#" className="text-[11px] font-bold text-amber-700 hover:text-amber-900">Lihat Semua</a>
            </div>

            {/* Flash Sale Carousel */}
            <div className="flex gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1">
              <div className="min-w-[125px] bg-white rounded-xl p-2.5 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div className="w-full aspect-square bg-slate-100 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <Watch className="w-8 h-8 text-slate-400" />
                  <span className="absolute top-1 left-1 bg-rose-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow">-45%</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 truncate">Chronograph Gold</p>
                  <p className="text-xs font-black text-amber-600 mt-0.5">Rp 750.000</p>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full w-[80%] rounded-full"></div>
                  </div>
                  <p className="text-[9px] text-slate-400 font-semibold mt-1">Stok Sisa 4</p>
                </div>
              </div>

              <div className="min-w-[125px] bg-white rounded-xl p-2.5 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div className="w-full aspect-square bg-slate-100 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-slate-400" />
                  <span className="absolute top-1 left-1 bg-rose-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow">-30%</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 truncate">Studio Wireless</p>
                  <p className="text-xs font-black text-amber-600 mt-0.5">Rp 1.120.000</p>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full w-[55%] rounded-full"></div>
                  </div>
                  <p className="text-[9px] text-slate-400 font-semibold mt-1">Stok Sisa 14</p>
                </div>
              </div>

              <div className="min-w-[125px] bg-white rounded-xl p-2.5 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div className="w-full aspect-square bg-slate-100 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                  <Glasses className="w-8 h-8 text-slate-400" />
                  <span className="absolute top-1 left-1 bg-rose-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow">-50%</span>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 truncate">Aviator Shades</p>
                  <p className="text-xs font-black text-amber-600 mt-0.5">Rp 390.000</p>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full w-[90%] rounded-full"></div>
                  </div>
                  <p className="text-[9px] text-rose-500 font-bold mt-1">Hampir Habis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. KATALOG 2 KOLOM (PRODUK UTAMA) */}
        <section className="px-4">
          <div className="flex items-center gap-4 border-b border-slate-200 mb-4 pb-2 text-xs font-bold">
            <button
              onClick={() => setActiveTab('rekomendasi')}
              className={`pb-2 px-1 transition-all ${activeTab === 'rekomendasi' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-slate-400 hover:text-slate-700'}`}
            >
              Rekomendasi
            </button>
            <button
              onClick={() => setActiveTab('terpopuler')}
              className={`pb-2 px-1 transition-all ${activeTab === 'terpopuler' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-slate-400 hover:text-slate-700'}`}
            >
              Terpopuler
            </button>
            <button
              onClick={() => setActiveTab('terbaru')}
              className={`pb-2 px-1 transition-all ${activeTab === 'terbaru' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-slate-400 hover:text-slate-700'}`}
            >
              Terbaru
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Card Produk 1 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-square bg-slate-100 flex items-center justify-center">
                  <Briefcase className="w-10 h-10 text-slate-300" />
                  <span className="absolute top-2 left-2 bg-slate-900 text-amber-400 text-[9px] font-black px-1.5 py-0.5 rounded shadow">OFFICIAL</span>
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-semibold text-slate-800 line-clamp-2 leading-relaxed">Kasap Formal Leather Bag Premium</h3>
                  <p className="text-sm font-black text-slate-900 mt-2">Rp 899.000</p>
                  <div className="flex items-center gap-1 mt-1.5 text-[10px] text-slate-500">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-slate-700">4.9</span>
                    <span>• Terjual 1.4rb</span>
                  </div>
                </div>
              </div>
              <div className="p-3 pt-0 flex items-center justify-between">
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">Gratis Ongkir</span>
                <button onClick={handleAddToCart} className="p-1.5 bg-slate-100 hover:bg-amber-600 hover:text-white rounded-xl transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>

            {/* Card Produk 2 */}
            <article className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-square bg-slate-100 flex items-center justify-center">
                  <Gem className="w-10 h-10 text-slate-300" />
                  <span className="absolute top-2 left-2 bg-rose-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow">HEMAT 25%</span>
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-semibold text-slate-800 line-clamp-2 leading-relaxed">Kasap Diamond Pendant Necklace 18K</h3>
                  <p className="text-sm font-black text-slate-900 mt-2">Rp 1.450.000</p>
                  <p className="text-[10px] text-slate-400 line-through">Rp 1.950.000</p>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-slate-500">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-slate-700">5.0</span>
                    <span>• Terjual 520</span>
                  </div>
                </div>
              </div>
              <div className="p-3 pt-0 flex items-center justify-between">
                <span className="text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">Cashback 5%</span>
                <button onClick={handleAddToCart} className="p-1.5 bg-slate-100 hover:bg-amber-600 hover:text-white rounded-xl transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* 8. FLOATING BOTTOM NAVIGATION BAR */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-slate-200 px-6 py-2.5 flex justify-between items-center shadow-lg">
          <a href="#" className="flex flex-col items-center gap-1 text-amber-600">
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold">Beranda</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-800 transition-colors">
            <Compass className="w-5 h-5" />
            <span className="text-[10px] font-medium">Eksplor</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-800 transition-colors">
            <Video className="w-5 h-5" />
            <span className="text-[10px] font-medium">Live</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-800 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="text-[10px] font-medium">Notifikasi</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-800 transition-colors">
            <User className="w-5 h-5" />
            <span className="text-[10px] font-medium">Saya</span>
          </a>
        </nav>
      </main>
    </div>
  );
}