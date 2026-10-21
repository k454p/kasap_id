export default function Penjual(){return null}
import React from 'react';

export default function Penjual({ setPage }) {
    return (
        <div className="p-4 space-y-4 max-w-md mx-auto bg-gray-50 min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <button 
                    onClick={() => setPage('beranda')}
                    className="text-blue-600 text-sm font-semibold"
                >
                    ← Beranda
                </button>
                <h2 className="font-bold text-gray-800 text-base">Dasbor Penjual</h2>
                <div className="w-10"></div>
            </div>

            {/* Info Toko */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl text-white shadow-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                        K
                    </div>
                    <div>
                        <h3 className="font-bold text-sm">Kasap ID Store</h3>
                        <p className="text-xs text-blue-100">Toko Utama • Verified</p>
                    </div>
                </div>
                <button 
                    onClick={() => setPage('live')}
                    className="bg-red-500 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow animate-pulse"
                >
                    🔴 Live
                </button>
            </div>

            {/* Statistik Toko */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-[10px] text-gray-400 font-medium">Pendapatan Bulan Ini</p>
                    <h3 className="text-base font-extrabold text-gray-800 mt-1">Rp 4.850.000</h3>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-[10px] text-gray-400 font-medium">Total Produk Terjual</p>
                    <h3 className="text-base font-extrabold text-blue-600 mt-1">32 Barang</h3>
                </div>
            </div>

            {/* Status Pesanan Masuk */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <h3 className="font-bold text-gray-800 text-sm">Kelola Pesanan Masuk</h3>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                    <button onClick={() => setPage('dikemas')} className="p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition">
                        <span className="text-xl block mb-1">📦</span>
                        <span className="text-[10px] text-blue-800 font-bold">Perlu Dikemas</span>
                    </button>
                    <button onClick={() => setPage('dikirim')} className="p-3 bg-green-50 rounded-xl hover:bg-green-100 transition">
                        <span className="text-xl block mb-1">🚚</span>
                        <span className="text-[10px] text-green-800 font-bold">Dikirim</span>
                    </button>
                    <button onClick={() => setPage('selesai')} className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                        <span className="text-xl block mb-1">✅</span>
                        <span className="text-[10px] text-gray-700 font-bold">Selesai</span>
                    </button>
                </div>
            </div>

            {/* Menu Navigasi Penjual */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 space-y-1">
                <button 
                    onClick={() => setPage('chat')}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl text-xs font-semibold text-gray-700 transition"
                >
                    <span>💬 Chat Pembeli</span>
                    <span>→</span>
                </button>
                <button 
                    onClick={() => setPage('saldo')}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl text-xs font-semibold text-gray-700 transition"
                >
                    <span>💳 Saldo & Penarikan Dana</span>
                    <span>→</span>
                </button>
                <button 
                    onClick={() => setPage('laporan')}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl text-xs font-semibold text-gray-700 transition"
                >
                    <span>📊 Laporan Penjualan</span>
                    <span>→</span>
                </button>
            </div>
        </div>
    );
}