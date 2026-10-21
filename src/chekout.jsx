import React, { useState } from 'react';

export default function Chekout({ setPage }) {
    const [metode, setMetode] = useState('BCA');

    const handleCheckout = (e) => {
        e.preventDefault();
        alert('Pesanan berhasil dibuat! Silakan lakukan pembayaran.');
        setPage('belumdibayar'); // Mengarahkan ke halaman pesanan
    };

    return (
        <div className="p-4 space-y-4 max-w-md mx-auto bg-gray-50 min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <button 
                    onClick={() => setPage('keranjang')}
                    className="text-blue-600 text-sm font-semibold"
                >
                    ← Kembali
                </button>
                <h2 className="font-bold text-gray-800 text-base">Checkout Pesanan</h2>
                <div className="w-10"></div>
            </div>

            {/* Alamat Pengiriman */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-800 text-sm">📍 Alamat Pengiriman</h3>
                <p className="text-xs text-gray-600 font-medium">Budi Santoso (0812-3456-7890)</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                    Jl. Merdeka No. 45, RT 01 / RW 05, Kel. Menteng, Kec. Menteng, Kota Jakarta Pusat, DKI Jakarta
                </p>
            </div>

            {/* Produk Dipesan */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-xs shrink-0">
                    Foto
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold text-xs text-gray-800">Kemeja Flanel Casual Premium</h4>
                    <p className="text-xs text-gray-500 mt-0.5">1 Barang x Rp 145.000</p>
                </div>
                <span className="font-bold text-sm text-blue-600">Rp 145.000</span>
            </div>

            {/* Metode Pembayaran */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <h3 className="font-bold text-gray-800 text-sm">💳 Pilih Metode Pembayaran</h3>
                <div className="space-y-2">
                    {['BCA Transfer', 'Mandiri Transfer', 'QRIS', 'GoPay / OVO'].map((item, idx) => (
                        <label key={idx} className="flex items-center justify-between p-3 border rounded-xl cursor-pointer hover:border-blue-500 transition">
                            <span className="text-xs font-medium text-gray-700">{item}</span>
                            <input 
                                type="radio" 
                                name="pembayaran" 
                                defaultChecked={idx === 0} 
                                className="text-blue-600"
                            />
                        </label>
                    ))}
                </div>
            </div>

            {/* Rincian Biaya */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                <div className="flex justify-between text-xs text-gray-600">
                    <span>Total Harga Barang</span>
                    <span>Rp 145.000</span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                    <span>Biaya Pengiriman</span>
                    <span className="text-green-600 font-semibold">Gratis</span>
                </div>
                <hr className="border-gray-100 my-1" />
                <div className="flex justify-between text-sm font-bold text-gray-800">
                    <span>Total Pembayaran</span>
                    <span className="text-blue-600">Rp 145.000</span>
                </div>
            </div>

            {/* Tombol Buat Pesanan */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 max-w-md mx-auto shadow-lg z-50">
                <button 
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-md hover:bg-blue-700 transition"
                >
                    Buat Pesanan & Bayar
                </button>
            </div>
        </div>
    );
}