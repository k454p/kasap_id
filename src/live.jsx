import React, { useState } from 'react';

export default function Live({ setPage }) {
    const [komentarList, setKomentarList] = useState([
        { id: 1, user: 'Siti Rahma', text: 'Kak, bahannya tebal atau tipis?' },
        { id: 2, user: 'Ahmad Fauzi', text: 'Warna navy ada gak kak?' },
        { id: 3, user: 'Dewi Lestari', text: 'Udah check out kemejanya ya kak! 🔥' }
    ]);
    const [inputKomentar, setInputKomentar] = useState('');

    const kirimKomentar = (e) => {
        e.preventDefault();
        if (!inputKomentar.trim()) return;

        setKomentarList([
            ...komentarList,
            { id: Date.now(), user: 'Anda (Pembeli)', text: inputKomentar }
        ]);
        setInputKomentar('');
    };

    return (
        <div className="relative h-screen max-w-md mx-auto bg-black overflow-hidden flex flex-col justify-between pb-16">
            {/* Latar Belakang / Simulasi Video Live */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-zinc-800 to-black flex items-center justify-center">
                <div className="text-center text-gray-500 space-y-2">
                    <span className="text-4xl animate-pulse">🔴</span>
                    <p className="text-xs tracking-wider uppercase font-bold text-gray-400">Live Streaming Sedang Berlangsung</p>
                </div>
            </div>

            {/* Header Live */}
            <div className="relative z-10 p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center gap-2 bg-black/40 backdrop-md px-3 py-1.5 rounded-full border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                        K
                    </div>
                    <div>
                        <p className="text-white text-xs font-bold">Kasap ID Official</p>
                        <p className="text-[10px] text-red-500 font-extrabold flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block"></span> LIVE
                        </p>
                    </div>
                </div>
                <button 
                    onClick={() => setPage('beranda')}
                    className="bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border border-white/10"
                >
                    ✕
                </button>
            </div>

            {/* Kotak Produk Melayang (Pinned Product) */}
            <div className="relative z-10 px-4">
                <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-[10px] shrink-0 font-medium">
                        Foto
                    </div>
                    <div className="flex-1">
                        <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">No. 1</span>
                        <h4 className="font-bold text-xs text-gray-900 truncate mt-0.5">Kemeja Flanel Casual Premium</h4>
                        <p className="text-blue-600 font-extrabold text-xs">Rp 145.000</p>
                    </div>
                    <button 
                        onClick={() => setPage('keranjang')}
                        className="bg-blue-600 text-white px-3 py-2 rounded-xl text-xs font-bold shadow hover:bg-blue-700 transition"
                    >
                        Beli
                    </button>
                </div>
            </div>

            {/* Live Chat / Komentar Berjalan */}
            <div className="relative z-10 p-4 space-y-2 max-h-48 overflow-y-auto flex flex-col justify-end">
                {komentarList.map((kom) => (
                    <div key={kom.id} className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-xl text-xs text-white max-w-[85%] border border-white/5">
                        <span className="font-bold text-blue-400 mr-2">{kom.user}:</span>
                        <span className="text-gray-200">{kom.text}</span>
                    </div>
                ))}
            </div>

            {/* Input Komentar Bawah */}
            <form onSubmit={kirimKomentar} className="relative z-10 p-3 bg-gradient-to-t from-black/90 to-transparent flex gap-2">
                <input 
                    type="text" 
                    value={inputKomentar}
                    onChange={(e) => setInputKomentar(e.target.value)}
                    placeholder="Kirim komentar atau tanya produk..." 
                    className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500"
                />
                <button 
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow hover:bg-blue-700 transition"
                >
                    Kirim
                </button>
            </form>
        </div>
    );
}