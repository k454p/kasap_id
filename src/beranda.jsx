import React from 'react';

export default function Beranda({ setPage }) {
    const daftarProduk = [
        { id: 1, nama: 'Kemeja Flanel Casual', harga: 'Rp 145.000', terjual: '1,2rb', rating: 4.8 },
        { id: 2, nama: 'Celana Chinos Panjang', harga: 'Rp 175.000', terjual: '950', rating: 4.7 },
        { id: 3, nama: 'Sepatu Sneakers Pria', harga: 'Rp 299.000', terjual: '3,4rb', rating: 4.9 },
        { id: 4, nama: 'Tas Ransel Laptop', harga: 'Rp 210.000', terjual: '820', rating: 4.6 }
    ];

    return (
        <div className="p-4 space-y-4">
            {/* Banner Promo */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-5 text-white shadow-md">
                <h2 className="text-xl font-bold mb-1">🔥 Promo Spesial Hari Ini!</h2>
                <p className="text-sm text-blue-100 mb-3">Diskon hingga 50% untuk produk pilihan terbaik.</p>
                <button 
                    onClick={() => setPage('produk')}
                    className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold shadow hover:bg-blue-50 transition"
                >
                    Belanja Sekarang
                </button>
            </div>

            {/* Kategori Pilihan */}
            <div>
                <h3 className="font-bold text-gray-800 mb-3">Kategori Pilihan</h3>
                <div className="grid grid-cols-4 gap-2 text-center">
                    <div onClick={() => setPage('produk')} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:border-blue-500">
                        <span className="text-2xl">👕</span>
                        <p className="text-xs mt-1 text-gray-700">Pakaian</p>
                    </div>
                    <div onClick={() => setPage('produk')} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:border-blue-500">
                        <span className="text-2xl">👟</span>
                        <p className="text-xs mt-1 text-gray-700">Sepatu</p>
                    </div>
                    <div onClick={() => setPage('produk')} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:border-blue-500">
                        <span className="text-2xl">🎒</span>
                        <p className="text-xs mt-1 text-gray-700">Tas</p>
                    </div>
                    <div onClick={() => setPage('hubungics')} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:border-blue-500">
                        <span className="text-2xl">💬</span>
                        <p className="text-xs mt-1 text-gray-700">Bantuan</p>
                    </div>
                </div>
            </div>

            {/* Daftar Produk Rekomendasi */}
            <div>
                <h3 className="font-bold text-gray-800 mb-3">Rekomendasi Untukmu</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', width: '100%', boxSizing: 'border-box' }}>
        {daftarProduk.map((item) => (
          <div
            key={item.id}
            onClick={() => setPage('produk')}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition w-full"
          >
            <div className="h-36 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              Foto Produk
            </div>
            <div className="p-3">
              <h4 className="font-medium text-sm text-gray-800 line-clamp-2">{item.nama}</h4>
              <p className="text-orange-500 font-bold text-sm mt-1">{item.harga}</p>
              <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                <span>⭐ {item.rating}</span>
                <span>Terjual {item.terjual}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

            </div>
        </div>
    );
}