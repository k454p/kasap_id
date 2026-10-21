import React from 'react';

export default function Saldo({ setPage }) {
    return (
        <div className="p-4 space-y-4 max-w-md mx-auto bg-gray-50 min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <button 
                    onClick={() => setPage('beranda')}
                    className="text-blue-600 text-sm font-semibold"
                >
                    ← Kembali
                </button>
                <h2 className="font-bold text-gray-800 text-base">Saldo Kasap Pay</h2>
                <div className="w-10"></div>
            </div>

            {/* Kartu Saldo Utama */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl text-white shadow-lg space-y-4">
                <div>
                    <p className="text-xs text-blue-100 font-medium">Total Saldo Aktif</p>
                    <h3 className="text-3xl font-extrabold mt-1">Rp 1.250.000</h3>
                </div>

                <div className="flex gap-2 pt-2">
                    <button 
                        onClick={() => alert('Fitur Top Up saldo akan segera dibuka.')}
                        className="flex-1 bg-white text-blue-600 py-2.5 rounded-xl font-bold text-xs shadow hover:bg-blue-50 transition"
                    >
                        + Top Up
                    </button>
                    <button 
                        onClick={() => alert('Fitur Tarik Dana diarahkan ke halaman pencairan.')}
                        className="flex-1 bg-blue-700 text-white py-2.5 rounded-xl font-bold text-xs shadow hover:bg-blue-800 transition border border-blue-500"
                    >
                        Tarik Dana
                    </button>
                </div>
            </div>

            {/* Riwayat Transaksi Saldo */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <h3 className="font-bold text-gray-800 text-sm mb-2">Riwayat Saldo</h3>

                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div>
                        <p className="font-semibold text-xs text-gray-800">Top Up via BCA</p>
                        <p className="text-[10px] text-gray-400">21 Okt 2026, 09:30 WIB</p>
                    </div>
                    <span className="font-bold text-xs text-green-600">+ Rp 500.000</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <div>
                        <p className="font-semibold text-xs text-gray-800">Pembayaran Pesanan</p>
                        <p className="text-[10px] text-gray-400">20 Okt 2026, 14:15 WIB</p>
                    </div>
                    <span className="font-bold text-xs text-red-600">- Rp 145.000</span>
                </div>
            </div>
        </div>
    );
}