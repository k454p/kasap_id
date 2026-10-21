import React from 'react';

export default function Dikirim({ setPage }) {
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
                <h2 className="font-bold text-gray-800 text-base">Pesanan Sedang Dikirim</h2>
                <div className="w-10"></div>
            </div>

            {/* Status Card */}
            <div className="bg-green-50 border border-green-200 p-4 rounded-2xl flex items-center justify-between">
                <div>
                    <p className="text-xs font-bold text-green-800">Dalam Perjalanan</p>
                    <p className="text-[11px] text-green-600 mt-0.5">Kurir sedang mengantar paket ke alamat tujuan.</p>
                </div>
                <span className="text-xl">🚚</span>
            </div>

            {/* List Pesanan Dikirim */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <div className="flex justify-between items-center text-xs text-gray-400 border-b pb-2">
                    <span>Resi: JNT-882194012</span>
                    <span className="text-green-600 font-semibold">Dikirim</span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-xs shrink-0">
                        Foto
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-xs text-gray-800">Kemeja Flanel Casual Premium</h4>
                        <p className="text-[11px] text-gray-500 mt-0.5">1 Barang x Rp 145.000</p>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t text-xs">
                    <span className="text-gray-500">Estimasi Tiba: Besok</span>
                    <button 
                        onClick={() => alert('[Tracking] Paket berada di Hub Transit Jakarta Pusat.')}
                        className="bg-blue-600 text-white px-3 py-1.5 rounded-xl font-bold hover:bg-blue-700 transition"
                    >
                        Lacak Paket
                    </button>
                </div>
            </div>
        </div>
    );
}