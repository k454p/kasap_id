import React, { useState } from 'react';

export default function Hubungics({ setPage }) {
    const [pesanCs, setPesanCs] = useState('');
    const [riwayatChat, setRiwayatChat] = useState([
        { id: 1, sender: 'cs', text: 'Halo kak! Selamat datang di Layanan Pelanggan Kasap ID. Ada kendala seputar pesanan atau pembayaran yang bisa kami bantu?', time: '09:00' }
    ]);

    const kirimPesanCs = (e) => {
        e.preventDefault();
        if (!pesanCs.trim()) return;

        const pesanBaru = {
            id: Date.now(),
            sender: 'user',
            text: pesanCs,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setRiwayatChat(prev => [...prev, pesanBaru]);
        setPesanCs('');

        // Simulasi balasan otomatis dari CS Kasap ID
        setTimeout(() => {
            setRiwayatChat(prev => [
                ...prev,
                {
                    id: Date.now() + 1,
                    sender: 'cs',
                    text: 'Baik kak, laporan kendala kamu sudah kami terima dan sedang dicek oleh tim support kami. Mohon ditunggu sebentar ya kak!',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
            ]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 pb-16">
            {/* Header CS */}
            <div className="flex items-center justify-between bg-white p-4 border-b border-gray-200 shadow-sm sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => setPage('beranda')}
                        className="text-blue-600 text-sm font-semibold"
                    >
                        ←
                    </button>
                    <div>
                        <h3 className="font-bold text-gray-800 text-sm">Customer Service Kasap ID</h3>
                        <p className="text-[10px] text-green-600 font-medium">● Siap Melayani 24/7</p>
                    </div>
                </div>
            </div>

            {/* Ruang Chat CS */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                <div className="text-center">
                    <span className="bg-blue-50 text-blue-700 text-[10px] px-3 py-1 rounded-full font-medium">
                        Pusat Bantuan Resmi Kasap ID
                    </span>
                </div>

                {riwayatChat.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[75%] p-3 rounded-2xl text-xs ${
                            msg.sender === 'user' 
                                ? 'bg-blue-600 text-white rounded-br-none' 
                                : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                        }`}>
                            <p>{msg.text}</p>
                            <span className={`block text-[9px] mt-1 text-right ${
                                msg.sender === 'user' ? 'text-blue-100' : 'text-gray-400'
                            }`}>
                                {msg.time}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Pesan CS */}
            <form onSubmit={kirimPesanCs} className="bg-white border-t border-gray-200 p-3 flex gap-2 sticky bottom-0">
                <input 
                    type="text" 
                    value={pesanCs}
                    onChange={(e) => setPesanCs(e.target.value)}
                    placeholder="Tulis kendala atau pertanyaan..." 
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