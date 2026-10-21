import React from 'react';
// Import gambar kamu
import heroImage from './hero-kasap.png'; 

export default function Beranda({ setPage }) {
    const daftarProduk = [
        { id: 1, nama: 'Kemeja Casual Pria', harga: 'Rp 150.000', rating: 4.8 },
        { id: 2, nama: 'Celana Chinos Polos', harga: 'Rp 175.000', rating: 4.7 },
        { id: 3, nama: 'Sepatu Sneakers Full White', harga: 'Rp 299.000', rating: 4.9 },
        { id: 4, nama: 'Tas Ransel Laptop Black', harga: 'Rp 210.000', rating: 4.6 }
    ];

    return (
        <div className="p-4 space-y-4">
            {/* 1. Header & Gambar Utama (Hero Section) */}
            <div className="flex flex-col items-center p-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-3xl text-white shadow-xl">
                <h2 className="text-2xl font-extrabold mb-1">Kasap ID</h2>
                <p className="text-sm text-blue-100 mb-5">Temukan gaya terbaikmu hari ini.</p>
                {/* Menampilkan gambar kamu */}
                <img 
                    src={heroImage} 
                    alt="Promo Kasap ID" 
                    className="w-full max-w-sm rounded-2xl shadow-lg border-2 border-white/50" 
                />
            </div>

            {/* 2. Kategori Pilihan */}
            <div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg">Kategori Pilihan</h3>
                <div className="grid grid-cols-4 gap-3 text-center">
                    {[
                        { icon: '👕', name: 'Pakaian' },
                        { icon: '👟', name: 'Sepatu' },
                        { icon: '🎒', name: 'Tas' },
                        { icon: '💬', name: 'Bantuan' }
                    ].map((cat, index) => (
                        <div key={index} onClick={() => setPage('produk')} className="bg-white p-4 rounded-2xl shadow border border-gray-100 cursor-pointer hover:border-blue-500 hover:-translate-y-1 transition-all">
                            <span className="text-3xl">{cat.icon}</span>
                            <p className="text-xs mt-2 text-gray-700 font-medium">{cat.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Rekomendasi Produk */}
            <div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg">Rekomendasi Untukmu</h3>
                <div className="grid grid-cols-2 gap-4">
                    {daftarProduk.map((item) => (
                        <div 
                            key={item.id} 
                            onClick={() => setPage('produk')}
                            className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400 text-sm font-medium border-b">
                                Foto Produk
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-sm text-gray-800 line-clamp-2">{item.nama}</h4>
                                <p className="text-blue-600 font-extrabold text-lg mt-1">{item.harga}</p>
                                <div className="flex justify-between items-center text-xs text-gray-500 mt-3">
                                    <span>⭐ {item.rating}</span>
                                    <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold">Beli</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}