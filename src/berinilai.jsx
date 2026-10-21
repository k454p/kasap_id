export default function Berinilai(){return null}
import React, { useState } from 'react';

export default function BeriNilai({ setPage }) {
    const [rating, setRating] = useState(5);
    const [ulasan, setUlasan] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Terima kasih! Ulasan dan rating kamu berhasil dikirim.');
        setPage('beranda');
    };

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
                <h2 className="font-bold text-gray-800 text-base">Beri Nilai Produk</h2>
                <div className="w-10"></div>
            </div>

            {/* Produk yang Dinilai */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-xs shrink-0">
                    Foto
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold text-xs text-gray-800">Kemeja Flanel Casual Premium</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Variasi: Hitam, L</p>
                </div>
            </div>

            {/* Form Penilaian Bintang */}
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-4 text-center">
                <div>
                    <p className="text-xs font-bold text-gray-700 mb-2">Bagaimana kualitas produk ini?</p>
                    <div className="flex justify-center gap-2 text-2xl">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                type="button"
                                key={star}
                                onClick={() => setRating(star)}
                                className={`transition transform hover:scale-110 ${star <= rating ? 'text-amber-400' : 'text-gray-300'}`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                    <p className="text-xs font-semibold text-amber-600 mt-1">
                        {rating === 5 ? 'Sangat Puas ⭐⭐⭐⭐⭐' : `${rating} Bintang`}
                    </p>
                </div>

                <div className="text-left">
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Tulis Ulasan Kamu</label>
                    <textarea 
                        rows="3"
                        value={ulasan}
                        onChange={(e) => setUlasan(e.target.value)}
                        placeholder="Ceritakan kualitas bahan, ukuran, dan kenyamanan produk..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-blue-500 font-medium text-gray-800 resize-none"
                    ></textarea>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-md hover:bg-blue-700 transition"
                >
                    Kirim Ulasan
                </button>
            </form>
        </div>
    );
}