import React from 'react';

export default function Beranda({ setPage }) {
    const daftarProduk = [
        { id: 1, nama: 'Kemeja Casual Pria', harga: 'Rp 150.000', rating: 4.8 },
        { id: 2, nama: 'Celana Chinos Polos', harga: 'Rp 175.000', rating: 4.7 },
        { id: 3, nama: 'Sepatu Sneakers Full White', harga: 'Rp 299.000', rating: 4.9 },
        { id: 4, nama: 'Tas Ransel Laptop Black', harga: 'Rp 210.000', rating: 4.6 }
    ];

    return (
        <div className="p-4 space-y-4">
            {/* Banner Promo Utama */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl">
                <h2 className="text-2xl font-extrabold mb-1">Kasap ID Store</h2>
                <p className="text-sm text-blue-100 mb-4">Temukan gaya terbaikmu hari ini dengan penawaran spesial.</p>
                <button 
                    onClick={() => setPage('produk')}
                    className="bg-white text-blue-600 px-4 py-2 rounded-xl text-sm font-bold shadow hover:bg-blue-50 transition"
                >
                    Belanja Sekarang
                </button>
            </div>

            {/* Kategori Pilihan */}
            <div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg">Kategori Pilihan</h3>
                <div className="grid grid-cols-4 gap-3 text-center">
                    {[
                        { icon: '👕', name: 'Pakaian' },
                        { icon: '👟', name: 'Sepatu' },
                        { icon: '🎒', name: 'Tas' },
                        { icon: '💬', name: 'Bantuan' }
                    ].map((cat, index) => (
                        <div 
                            key={index} 
                            onClick={() => setPage('produk')} 
                            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:border-blue-500 transition"
                        >
                            <span className="text-2xl">{cat.icon}</span>
                            <p className="text-xs mt-2 text-gray-700 font-medium">{cat.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rekomendasi Produk */}
            <div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg">Rekomendasi Untukmu</h3>
                <div className="grid grid-cols-2 gap-4">
                    {daftarProduk.map((item) => (
                        <div 
                            key={item.id} 
                            onClick={() => setPage('produk')}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition"
                        >
                            <div className="h-36 bg-gray-100 flex items-center justify-center text-gray-400 text-sm font-medium">
                                Foto Produk
                            </div>
                            <div className="p-3">
                                <h4 className="font-semibold text-sm text-gray-800 line-clamp-2">{item.nama}</h4>
                                <p className="text-blue-600 font-extrabold text-base mt-1">{item.harga}</p>
                                <div className="flex justify-between items-center text-xs text-gray-500 mt-3">
                                    <span>⭐ {item.rating}</span>
                                    <span className="text-blue-600 font-bold">Lihat &gt;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}