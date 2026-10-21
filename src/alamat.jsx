export default function Alamat(){return null}
import React, { useState } from 'react';

export default function Alamat({ setPage }) {
    const [alamatList, setAlamatList] = useState([
        { 
            id: 1, 
            namaPenerima: 'Budi Santoso', 
            noHp: '081234567890', 
            alamatLengkap: 'Jl. Merdeka No. 45, RT 01 / RW 05, Kel. Gambir, Kec. Gambir, Kota Jakarta Pusat, DKI Jakarta, 10110', 
            utama: true 
        }
    ]);
    const [tambahBaru, setTambahBaru] = useState(false);
    const [alamatBaru, setAlamatBaru] = useState({ namaPenerima: '', noHp: '', alamatLengkap: '' });

    const handleTambahAlamat = (e) => {
        e.preventDefault();
        if (!alamatBaru.namaPenerima || !alamatBaru.noHp || !alamatBaru.alamatLengkap) {
            alert('Semua kolom alamat harus diisi!');
            return;
        }

        const dataBaru = {
            id: Date.now(),
            ...alamatBaru,
            utama: alamatList.length === 0
        };

        setAlamatList([...alamatList, dataBaru]);
        setAlamatBaru({ namaPenerima: '', noHp: '', alamatLengkap: '' });
        setTambahBaru(false);
        alert('Alamat baru berhasil ditambahkan!');
    };

    return (
        <div className="p-4 space-y-4 max-w-md mx-auto bg-gray-50 min-h-screen pb-24">
            {/* Header */}
            <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <button 
                    onClick={() => setPage('akunsaya')}
                    className="text-blue-600 text-sm font-semibold"
                >
                    ← Kembali
                </button>
                <h2 className="font-bold text-gray-800 text-base">Alamat Pengiriman</h2>
                <div className="w-10"></div>
            </div>

            {/* Tombol Tambah Alamat */}
            {!tambahBaru && (
                <button 
                    onClick={() => setTambahBaru(true)}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-xs shadow hover:bg-blue-700 transition"
                >
                    + Tambah Alamat Baru
                </button>
            )}

            {/* Form Tambah Alamat */}
            {tambahBaru && (
                <form onSubmit={handleTambahAlamat} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                    <h3 className="font-bold text-xs text-gray-800 mb-1">Form Alamat Baru</h3>
                    <div>
                        <label className="block text-[10px] font-bold text-gray-700 mb-1">Nama Penerima</label>
                        <input 
                            type="text" 
                            value={alamatBaru.namaPenerima}
                            onChange={(e) => setAlamatBaru({...alamatBaru, namaPenerima: e.target.value})}
                            placeholder="Contoh: Budi Santoso"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold text-gray-700 mb-1">Nomor HP</label>
                        <input 
                            type="tel" 
                            value={alamatBaru.noHp}
                            onChange={(e) => setAlamatBaru({...alamatBaru, noHp: e.target.value})}
                            placeholder="Contoh: 081234567890"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold text-gray-700 mb-1">Alamat Lengkap & Patokan</label>
                        <textarea 
                            rows="2"
                            value={alamatBaru.alamatLengkap}
                            onChange={(e) => setAlamatBaru({...alamatBaru, alamatLengkap: e.target.value})}
                            placeholder="Jalan, No. Rumah, RT/RW, Kecamatan, Kota, Kode Pos"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-blue-500 resize-none"
                        ></textarea>
                    </div>
                    <div className="flex gap-2 pt-1">
                        <button 
                            type="submit"
                            className="flex-1 bg-blue-600 text-white py-2 rounded-xl text-xs font-bold shadow hover:bg-blue-700 transition"
                        >
                            Simpan Alamat
                        </button>
                        <button 
                            type="button"
                            onClick={() => setTambahBaru(false)}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-300 transition"
                        >
                            Batal
                        </button>
                    </div>
                </form>
            )}

            {/* Daftar Alamat */}
            <div className="space-y-3">
                {alamatList.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <h4 className="font-bold text-xs text-gray-800">{item.namaPenerima}</h4>
                                <span className="text-[10px] text-gray-400">({item.noHp})</span>
                            </div>
                            {item.utama && (
                                <span className="bg-blue-50 text-blue-700 text-[9px] font-bold px-2 py-0.5 rounded-full border border-blue-200">
                                    Utama
                                </span>
                            )}
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.alamatLengkap}</p>
                        <div className="flex justify-end gap-2 pt-2 border-t text-[11px]">
                            <button 
                                onClick={() => alert('Fitur ubah alamat.')}
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Ubah Alamat
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}