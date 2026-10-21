import React from 'react';

export default function Produk({ setPage, setCartCount }) {
    return (
        <div className="p-4 space-y-4 max-w-md mx-auto bg-white min-h-screen">
            {/* Tombol Kembali */}
            <button 
                onClick={() => setPage('beranda')}
                className="text-blue-600 font-medium text-sm flex items-center gap-1"
            >
                ← Kembali ke Beranda
            </button>

            {/* Foto Utama Produk */}
            <div className="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 font-medium border border-gray-200 shadow-inner">
                📸 Foto Produk Utama
            </div>

            {/* Informasi Produk */}
            <div>
                <span className="bg-blue-100 text-blue-600 text-xs px-2.5 py-1 rounded-full font-semibold">
                    Terlaris
                </span>
                <h2 className="text-xl font-bold text-gray-800 mt-2">Kemeja Flanel Casual Premium</h2>
                <p className="text-2xl font-extrabold text-blue-600 mt-1">Rp 145.000</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <span>⭐ 4.8 (120 Ulasan)</span>
                    <span>•</span>
                    <span>Terjual 1,2rb+</span>
                </div>
            </div>

            <hr className="border-gray-100" />

            {/* Deskripsi */}
            <div>
                <h3 className="font-bold text-gray-800 mb-1">Deskripsi Produk</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Kemeja flanel berkualitas tinggi, adem, nyaman dipakai sehari-hari untuk acara santai maupun kerja. Bahan tebal namun tetap lembut di kulit.
                </p>
            </div>

            {/* Tombol Aksi Bawah */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-3 max-w-md mx-auto shadow-lg z-50">
                <button 
                    onClick={() => {
                        setCartCount(prev => prev + 1);
                        alert('Berhasil dimasukkan ke keranjang!');
                    }}
                    className="flex-1 bg-blue-50 text-blue-600 py-3 rounded-xl font-bold text-sm border border-blue-200 hover:bg-blue-100 transition"
                >
                    + Keranjang
                </button>
                <button 
                    onClick={() => setPage('chekout')}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-md hover:bg-blue-700 transition"
                >
                    Beli Sekarang
                </button>
            </div>
        </div>
    );
}