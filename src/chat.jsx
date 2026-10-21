import React, { useState } from 'react';

export default function Chat({ setPage }) {
    const [pesanList, setPesanList] = useState([
        { id: 1, sender: 'penjual', text: 'Halo kak! Ada yang bisa dibantu mengenai produk Kemeja Flanel Casual-nya?', time: '10:00' },
        { id: 2, sender: 'pembeli', text: 'Halo kak, untuk ukuran L lingkar dadanya berapa ya?', time: '10:05' }
    ]);
    const [inputPesan, setInputPesan] = useState('');

    const kirimPesan = (e) => {
        e.preventDefault();
        if (!inputPesan.trim()) return;

        const pesanBaru = {
            id: Date.now(),
            sender: 'pembeli',
            text: inputPesan,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setPesanList([...pesanList, pesanBaru]);
        setInputPesan('');

        // Simulasi balasan otomatis dari penjual setelah 1 detik
        setTimeout(() => {
            setPesanList(prev => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: 'penjual',
                    text: 'Baik kak, untuk ukuran L lingkar dadanya sekitar 108 cm. Dijamin pas dan nyaman dipakai!',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
            ]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 pb-16">
            {/* Header Chat */}
            <div className="flex items-center justify-between bg-white p-4 border-b border-gray-200 shadow-sm sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => setPage('beranda')}
                        className="text-blue-600 text-sm font-semibold"
                    >
                        ←
                    </button>
                    <div>
                        <h3 className="font-bold text-gray-800 text-sm">Kasap ID Store (Admin)</h3>
                        <p className="text-[10px] text-green-600 font-medium">● Online</p>
                    </div>
                </div>
            </div>

            {/* Ruang Obrolan / Pesan */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                <div className="text-center">
                    <span className="bg-gray-200 text-gray-600 text-[10px] px-3 py-1 rounded-full">Hari Ini</span>
                </div>

                {pesanList.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`flex ${msg.sender === 'pembeli' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[75%] p-3 rounded-2xl text-xs ${
                            msg.sender === 'pembeli' 
                                ? 'bg-blue-600 text-white rounded-br-none' 
                                : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                        }`}>
                            <p>{msg.text}</p>
                            <span className={`block text-[9px] mt-1 text-right ${
                                msg.sender === 'pembeli' ? 'text-blue-100' : 'text-gray-400'
                            }`}>
                                {msg.time}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Pesan Bawah */}
            <form onSubmit={kirimPesan} className="bg-white border-t border-gray-200 p-3 flex gap-2 sticky bottom-0">
                <input 
                    type="text" 
                    value={inputPesan}
                    onChange={(e) => setInputPesan(e.target.value)}
                    placeholder="Tulis pesan ke penjual..." 
                    className="flex-1 bg-gray-100 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500"
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