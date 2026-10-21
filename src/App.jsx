import React, { useState } from 'react';
import Beranda from './beranda.jsx';
import Keranjang from './keranjang.jsx';
import Pembeli from './pembeli.jsx';
import Penjual from './penjual.jsx';
import Hubungics from './hubungics.jsx';
import Akunsaya from './akunsaya.jsx';
import Saldo from './saldo.jsx';
import TarikDana from './tarikdana.jsx';
import BeriNilai from './berinilai.jsx';
import Selesai from './selesai.jsx';
import Laporan from './laporan.jsx';
import Alamat from './alamat.jsx';
import Email from './email.jsx';
import NomerHp from './nomerhp.jsx';
import Nama from './nama.jsx';
import TambahProduk from './tambahproduk.jsx';
import Chekout from './chekout.jsx';
import Belumdibayar from './belumdibayar.jsx';
import Dikemas from './dikemas.jsx';
import Dikirim from './dikirim.jsx';
import Produk from './produk.jsx';
import Chat from './chat.jsx';
import Live from './live.jsx';

export default function App() {
    const [page, setPage] = useState('beranda');

    // Render halaman berdasarkan state 'page'
    const renderPage = () => {
        switch (page) {
            case 'beranda': return <Beranda setPage={setPage} />;
            case 'keranjang': return <Keranjang setPage={setPage} />;
            case 'pembeli': return <Pembeli setPage={setPage} />;
            case 'penjual': return <Penjual setPage={setPage} />;
            case 'hubungics': return <Hubungics setPage={setPage} />;
            case 'akunsaya': return <Akunsaya setPage={setPage} />;
            case 'saldo': return <Saldo setPage={setPage} />;
            case 'tarikdana': return <TarikDana setPage={setPage} />;
            case 'berinilai': return <BeriNilai setPage={setPage} />;
            case 'selesai': return <Selesai setPage={setPage} />;
            case 'laporan': return <Laporan setPage={setPage} />;
            case 'alamat': return <Alamat setPage={setPage} />;
            case 'email': return <Email setPage={setPage} />;
            case 'nomerhp': return <NomerHp setPage={setPage} />;
            case 'nama': return <Nama setPage={setPage} />;
            case 'tambahproduk': return <TambahProduk setPage={setPage} />;
            case 'chekout': return <Chekout setPage={setPage} />;
            case 'belumdibayar': return <Belumdibayar setPage={setPage} />;
            case 'dikemas': return <Dikemas setPage={setPage} />;
            case 'dikirim': return <Dikirim setPage={setPage} />;
            case 'produk': return <Produk setPage={setPage} />;
            case 'chat': return <Chat setPage={setPage} />;
            case 'live': return <Live setPage={setPage} />;
            default: return <Beranda setPage={setPage} />;
        }
    };

    return (
        <div className="relative min-h-screen bg-gray-100 font-sans text-gray-900 selection:bg-blue-500 selection:text-white">
            {/* Konten Utama Halaman */}
            <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl relative">
                {renderPage()}

                {/* Navigasi Bawah Ala Shopee (Fixed Footer) */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-around items-center z-50 shadow-lg">
                    <button 
                        onClick={() => setPage('beranda')}
                        className={`flex flex-col items-center transition ${page === 'beranda' ? 'text-blue-600 font-bold' : 'text-gray-500 hover:text-blue-600'}`}
                    >
                        <span className="text-xl">🏠</span>
                        <span className="text-[10px] mt-0.5">Beranda</span>
                    </button>

                    <button 
                        onClick={() => setPage('keranjang')}
                        className={`flex flex-col items-center transition ${page === 'keranjang' ? 'text-blue-600 font-bold' : 'text-gray-500 hover:text-blue-600'}`}
                    >
                        <span className="text-xl">🛒</span>
                        <span className="text-[10px] mt-0.5">Keranjang</span>
                    </button>

                    <button 
                        onClick={() => setPage('laporan')}
                        className={`flex flex-col items-center transition ${page === 'laporan' ? 'text-blue-600 font-bold' : 'text-gray-500 hover:text-blue-600'}`}
                    >
                        <span className="text-xl">🔔</span>
                        <span className="text-[10px] mt-0.5">Notifikasi</span>
                    </button>

                    <button 
                        onClick={() => setPage('akunsaya')}
                        className={`flex flex-col items-center transition ${page === 'akunsaya' ? 'text-blue-600 font-bold' : 'text-gray-500 hover:text-blue-600'}`}
                    >
                        <span className="text-xl">👤</span>
                        <span className="text-[10px] mt-0.5">Saya</span>
                    </button>
                </div>
            </div>
        </div>
    );
}