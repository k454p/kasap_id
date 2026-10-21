import React, { useState } from 'react';

export default function TambahProduk({ setPage }) {
    const [namaProduk, setNamaProduk] = useState('');
    const [harga, setHarga] = useState('');
    const [stok, setStok] = useState('');
    const [deskripsi, setDeskripsi] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!namaProduk || !harga || !stok) {
            alert('Mohon isi nama, harga, dan stok produk!');
            return;
        }

        alert(`Produk "${namaProduk}" berhasil ditambahkan ke toko!`);
        setPage('penjual');
    };

    return (
        <div className="p-4 space-y-4 max-w-md mx-auto bg-gray-50 min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <button 
                    onClick={() => setPage('penjual')}
                    className="text-blue-600 text-sm font-semibold"
                >
                    ← Kembali
                </button>
                <h2 className="font-bold text-gray-800 text-base">Tambah Produk Baru</h2>
                <div className="w-10"></div>
            </div>

            {/* Upload Foto Produk */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center space-y-2">
                <div className="w-full h-36 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 transition">
                    <span className="text-2xl mb-1">📷</span>
                    <span className="text-xs font-semibold text-gray-600">Klik untuk upload foto produk</span>
                    <span className="text-[10px] text-gray-400">Format: JPG, PNG (Maks. 2MB)</span>
                </div>
            </div>

            {/* Form Input Detail Produk */}
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Nama Produk</label>
                    <input 
                        type="text" 
                        value={namaProduk}
                        onChange={(e) => setNamaProduk(e.target.value)}
                        placeholder="Contoh: Kemeja Flanel Premium" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-blue-500 font-medium text-gray-800"
                    />
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Harga (Rp)</label>
                        <input 
                            type="number" 
                            value={harga}
                            onChange={(e) => setHarga(e.target.value)}
                            placeholder="Contoh: 145000" 
                            required
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-blue-500 font-medium text-gray-800"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Stok Barang</label>
                        <input 
                            type="number" 
                            value={stok}
                            onChange={(e) => setStok(e.target.value)}
                            placeholder="Contoh: 50" 
                            required
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-blue-500 font-medium text-gray-800"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Deskripsi Produk</label>
                    <textarea 
                        rows="3"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        placeholder="Jelaskan bahan, ukuran, dan keunggulan produk..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-blue-500 font-medium text-gray-800 resize-none"
                    ></textarea>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-md hover:bg-blue-700 transition mt-2"
                >
                    Simpan & Publikasikan Produk
                </button>
            </form>
        </div>
    );
}