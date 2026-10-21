import React, { useState } from 'react';
import Beranda from './beranda.jsx';
import Keranjang from './keranjang.jsx';
import Berinilai from './berinilai.jsx';
import Belumdibayar from './belumdibayar.jsx';
import Akunsaya from './akunsaya.jsx';
import Produk from './produk.jsx';
import Chekout from './chekout.jsx';
import Hubungics from './hubungics.jsx';

export default function App() {
    const [page, setPage] = useState('beranda');
    const [cartCount, setCartCount] = useState(0);

    // Fungsi untuk merender halaman secara dinamis berdasarkan state `page`
    const renderPage = () => {
        switch (page) {
            case 'beranda':
                return <Beranda setPage={setPage} />;
            case 'keranjang':
                return <Keranjang setPage={setPage} setCartCount={setCartCount} />;
            case 'produk':
                return <Produk setPage={setPage} />;
            case 'chekout':
                return <Chekout setPage={setPage} />;
            case 'berinilai':
                return <Berinilai setPage={setPage} />;
            case 'belumdibayar':
                return <Belumdibayar setPage={setPage} />;
            case 'akunsaya':
                return <Akunsaya setPage={setPage} />;
            case 'hubungics':
                return <Hubungics setPage={setPage} />;
            default:
                return <Beranda setPage={setPage} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
            {/* Header / Navbar Atas */}
            <header className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3 flex justify-between items-center">
                <h1 
                    className="text-xl font-bold text-blue-600 cursor-pointer"
                    onClick={() => setPage('beranda')}
                >
                    Kasap ID
                </h1>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setPage('keranjang')} 
                        className="relative p-2 text-gray-700 hover:text-blue-600 font-medium text-sm flex items-center gap-1"
                    >
                        🛒 Keranjang
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <button 
                        onClick={() => setPage('akunsaya')} 
                        className="p-2 text-gray-700 hover:text-blue-600 font-medium text-sm"
                    >
                        👤 Akun
                    </button>
                </div>
            </header>

            {/* Konten Utama Halaman */}
            <main className="flex-1 pb-16">
                {renderPage()}
            </main>

            {/* Bottom Navigation / Menu Bawah ala Aplikasi Mobile */}
            <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 z-50 flex justify-around py-3 shadow-lg">
                <button 
                    onClick={() => setPage('beranda')} 
                    className={`flex flex-col items-center text-xs ${page === 'beranda' ? 'text-blue-600 font-bold' : 'text-gray-500'}`}
                >
                    🏠 Beranda
                </button>
                <button 
                    onClick={() => setPage('keranjang')} 
                    className={`flex flex-col items-center text-xs ${page === 'keranjang' ? 'text-blue-600 font-bold' : 'text-gray-500'}`}
                >
                    🛍️ Keranjang
                </button>
                <button 
                    onClick={() => setPage('belumdibayar')} 
                    className={`flex flex-col items-center text-xs ${page === 'belumdibayar' ? 'text-blue-600 font-bold' : 'text-gray-500'}`}
                >
                    📦 Pesanan
                </button>
                <button 
                    onClick={() => setPage('berinilai')} 
                    className={`flex flex-col items-center text-xs ${page === 'berinilai' ? 'text-blue-600 font-bold' : 'text-gray-500'}`}
                >
                    ⭐ Nilai
                </button>
            </nav>
        </div>
    );
}