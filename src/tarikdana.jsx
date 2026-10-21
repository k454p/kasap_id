import React, { useState } from 'react';

export default function TarikDana({ setPage }) {
    const [nominal, setNominal] = useState('');
    const [bank, setBank] = useState('BCA (**** 1234)');

    const handleTarikDana = (e) => {
        e.preventDefault();
        if (!nominal || nominal <= 0) {
            alert('Masukkan nominal penarikan yang valid!');
            return;
        }
        alert(`Penarikan saldo sebesar Rp ${Number(nominal).toLocaleString('id-ID')} ke rekening ${bank} berhasil diproses!`);
        setPage('saldo');
    };

    return (
        <div className="p-4 space-y-4 max-w-md mx-auto bg-gray-50 min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <button 
                    onClick={() => setPage('saldo')}
                    className="text-blue-600 text-sm font-semibold"
                >
                    ← Kembali
                </button>
                <h2 className="font-bold text-gray-800 text-base">Tarik Saldo</h2>
                <div className="w-10"></div>
            </div>

            {/* Info Saldo Tersedia */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-1">
                <p className="text-xs text-gray-400">Saldo yang dapat ditarik</p>
                <h3 className="text-xl font-extrabold text-blue-600">Rp 1.250.000</h3>
            </div>

            {/* Form Tarik Dana */}
            <form onSubmit={handleTarikDana} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Pilih Rekening Tujuan</label>
                    <select 
                        value={bank}
                        onChange={(e) => setBank(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-500 font-medium text-gray-800"
                    >
                        <option value="BCA (**** 1234)">BCA - Budi Santoso (**** 1234)</option>
                        <option value="Mandiri (**** 5678)">Mandiri - Budi Santoso (**** 5678)</option>
                        <option value="GoPay (081234567890)">GoPay - 081234567890</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Nominal Penarikan (Rp)</label>
                    <input 
                        type="number" 
                        value={nominal}
                        onChange={(e) => setNominal(e.target.value)}
                        placeholder="Contoh: 100000" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-500 font-medium text-gray-800"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-md hover:bg-blue-700 transition"
                >
                    Konfirmasi Tarik Saldo
                </button>
            </form>
        </div>
    );
}