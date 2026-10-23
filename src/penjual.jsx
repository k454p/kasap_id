import React, { useState } from 'react';

// Di sini kata "default" sudah dihapus agar tidak bentrok
export function TambahProduk({ setPage }) {
  const [form, setForm] = useState({ name: '', harga: '', stok: '', kategori: '', gambar: '', deskripsi: '' });

  const handleSimpan = () => {
    if (!form.name || !form.harga) return;
    const daftar = JSON.parse(localStorage.getItem('kasap_produk')) || [];
    daftar.push({ ...form, id: Date.now() });
    localStorage.setItem('kasap_produk', JSON.stringify(daftar));
    alert('Produk berhasil ditambah!');
    setPage('penjual');
  };

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <div className="flex items-center justify-between">
        <button onClick={() => setPage('penjual')} className="text-gray-600">⬅️ Kembali</button>
        <h2 className="font-bold text-lg">Tambah Produk Baru</h2>
        <div className="w-10"></div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow space-y-3">
        <input placeholder="Nama Produk" className="w-full p-2 border rounded" onChange={(e) => setForm({...form, name: e.target.value})} />
        <input placeholder="Harga" type="number" className="w-full p-2 border rounded" onChange={(e) => setForm({...form, harga: e.target.value})} />
        <input placeholder="Stok" type="number" className="w-full p-full border rounded" onChange={(e) => setForm({...form, stok: e.target.value})} />
        <select value={form.kategori} className="w-full p-2 border rounded" onChange={(e) => setForm({...form, kategori: e.target.value})}>
          <option>Pakaian</option>
          <option>Sepatu</option>
          <option>Tas</option>
        </select>
        <input placeholder="Link Foto Produk" className="w-full p-2 border rounded" onChange={(e) => setForm({...form, gambar: e.target.value})} />
        <textarea placeholder="Deskripsi" className="w-full p-2 border rounded" onChange={(e) => setForm({...form, deskripsi: e.target.value})} />
        <button onClick={handleSimpan} className="w-full p-2 bg-green-600 text-white rounded font-bold">Simpan Produk</button>
      </div>
    </div>
  );
}

// Hanya fungsi ini yang menggunakan export default
export default function Penjual({ setPage }) {
  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <div className="flex items-center justify-between">
        <button onClick={() => setPage('beranda')} className="text-blue-600 text-sm">
          ← Beranda
        </button>
        <h2 className="font-bold text-gray-800">Toko Saya</h2>
        <div className="w-10"></div>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-lg text-white">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white text-green-600 font-bold rounded-full flex items-center justify-center text-xl">
            K
          </div>
          <div>
            <h3 className="font-bold">Kasap Toko</h3>
            <p className="text-xs text-green-100">Status: Aktif</p>
          </div>
        </div>
      </div>
    </div>
  );
}
