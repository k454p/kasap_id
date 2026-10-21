export default function Laporan(){return null}
import React from 'react';

export default function Laporan({ setPage }) {
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
                <h2 className="font-bold text-gray-800 text-base">Laporan & Notifikasi</h2>
                <div className="w-10"></div>
            </div>

            {/* Ringkasan Laporan */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl text-white shadow-md space-y-2">
                <p className="text-xs text-blue-100 font-medium">Ringkasan Bulan Ini (Oktober 2026)</p>
                <div className="flex justify-between items-end pt-2 border-t border-blue-500/30">
                    <div>
                        <p className="text-[10px] text-blue-200">Total Transaksi Selesai</p>
                        <p className="text-lg font-extrabold">32 Pesanan</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] text-blue-200">Total Pendapatan Bersih</p>
                        <p className="text-lg font-extrabold">Rp 4.850.000</p>
                    </div>
                </div>
            </div>

            {/* Daftar Notifikasi & Riwayat Aktivitas */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <h3 className="font-bold text-gray-800 text-sm mb-2">Aktivitas Terbaru</h3>

                <div className="flex items-start gap-3 py-2.5 border-b border-gray-100">
                    <span className="text-xl bg-green-50 p-2 rounded-xl">✅</span>
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-xs text-gray-800">Pesanan Selesai</h4>
                            <span className="text-[10px] text-gray-400">Hari ini</span>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5">Transaksi INV/20261021/KASAP/01 telah selesai dan dana masuk ke saldo.</p>
                    </div>
                </div>

                <div className="flex items-start gap-3 py-2.5 border-b border-gray-100">
                    <span className="text-xl bg-blue-50 p-2 rounded-xl">📦</span>
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-xs text-gray-800">Paket Dikirim</h4>
                            <span className="text-[10px] text-gray-400">Kemarin</span>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5">Kurir telah mengambil paket dengan nomor resi JNT-882194012.</p>
                    </div>
                </div>

                <div className="flex items-start gap-3 py-2.5">
                    <span className="text-xl bg-amber-50 p-2 rounded-xl">💰</span>
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-xs text-gray-800">Top Up Berhasil</h4>
                            <span className="text-[10px] text-gray-400">20 Okt</span>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5">Top Up Saldo Kasap Pay sebesar Rp 500.000 via BCA berhasil.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}