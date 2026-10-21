export default function Pembeli(){return null}
import React from 'react';

export default function Pembeli({ setPage }) {
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
                <h2 className="font-bold text-gray-800 text-base">Menu Pembeli</h2>
                <div className="w-10"></div>
            </div>

            {/* Profil Singkat Pembeli */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl text-white shadow-md flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                    BS
                </div>
                <div>
                    <h3 className="font-bold text-sm">Budi Santoso</h3>
                    <p className="text-xs text-blue-100">0812-3456-7890</p>
                </div>
            </div>

            {/* Status Transaksi / Pesanan */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <h3 className="font-bold text-gray-800 text-sm">Status Belanja Kamu</h3>
                
                <div className="grid grid-cols-4 gap-2 text-center">
                    <button onClick={() => setPage('belumdibayar')} className="p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                        <span className="text-xl block mb-1">⏳</span>
                        <span className="text-[10px] text-gray-600 font-medium">Belum Bayar</span>
                    </button>
                    <button onClick={() => setPage('dikemas')} className="p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                        <span className="text-xl block mb-1">📦</span>
                        <span className="text-[10px] text-gray-600 font-medium">Dikemas</span>
                    </button>
                    <button onClick={() => setPage('dikirim')} className="p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                        <span className="text-xl block mb-1">🚚</span>
                        <span className="text-[10px] text-gray-600 font-medium">Dikirim</span>
                    </button>
                    <button onClick={() => setPage('selesai')} className="p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                        <span className="text-xl block mb-1">✅</span>
                        <span className="text-[10px] text-gray-600 font-medium">Selesai</span>
                    </button>
                </div>
            </div>

            {/* Menu Navigasi Tambahan Pembeli */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 space-y-1">
                <button 
                    onClick={() => setPage('chat')}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl text-xs font-semibold text-gray-700 transition"
                >
                    <span>💬 Chat dengan Penjual</span>
                    <span>→</span>
                </button>
                <button 
                    onClick={() => setPage('saldo')}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl text-xs font-semibold text-gray-700 transition"
                >
                    <span>💳 Saldo Kasap Pay</span>
                    <span>→</span>
                </button>
                <button 
                    onClick={() => setPage('akunsaya')}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl text-xs font-semibold text-gray-700 transition"
                >
                    <span>⚙️ Pengaturan Akun</span>
                    <span>→</span>
                </button>
            </div>
        </div>
    );
}