export default function Email(){return null}
import React, { useState } from 'react';

export default function Email({ setPage }) {
    const [email, setEmail] = useState('budi.santoso@example.com');
    const [isSaved, setIsSaved] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            alert('Email tidak boleh kosong!');
            return;
        }
        setIsSaved(true);
        alert('Email berhasil diperbarui!');
        setTimeout(() => {
            setPage('beranda');
        }, 500);
    };

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
                <h2 className="font-bold text-gray-800 text-base">Atur Alamat Email</h2>
                <div className="w-10"></div>
            </div>

            {/* Informasi Info */}
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl">
                <p className="text-xs text-blue-800 leading-relaxed">
                    Pastikan email yang kamu gunakan aktif untuk menerima notifikasi status pesanan, resi pengiriman, dan promo menarik dari Kasap ID.
                </p>
            </div>

            {/* Form Input Email */}
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Alamat Email Kamu</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Contoh: nama@email.com" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-500 font-medium text-gray-800"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-md hover:bg-blue-700 transition"
                >
                    Simpan Email
                </button>
            </form>

            {isSaved && (
                <div className="bg-green-50 border border-green-200 p-3 rounded-xl text-center">
                    <p className="text-xs font-bold text-green-700">Email berhasil disimpan!</p>
                </div>
            )}
        </div>
    );
}