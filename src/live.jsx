import { useState } from "react";

export default function Live({ setPage }) {
  const [komen, setKomen] = useState("");
  const [chats, setChats] = useState([
    { user: "Siti Rahma", text: "Kak, bahannya tebal atau tipis?" },
    { user: "Ahmad Fauzi", text: "Warna navy ada gak kak?" },
    { user: "【entity-Dewi Lestari¦canonical_name=Dewi Lestari】", text: "Udah check out kemejanya ya kak! 🔥" },
  ]);

  const kirimChat = () => {
    if (!komen) return;
    setChats([...chats, { user: "Anda (Pembeli)", text: komen }]);
    setKomen("");
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-black min-h-screen pb-24 overflow-hidden">
      {/* Video Area */}
      <div className="relative w-full h-[75vh] bg-gradient-to-b from-green-600 to-black flex-col">
        {/* Header Live */}
        <div className="p-3 flex justify-between items-start">
          <div className="flex items-center gap-2">
            <button onClick={() => setPage('beranda')} className="bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center">✕</button>
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-sm">K</div>
              <div>
                <p className="text-white text-xs font-bold">Kasap ID Official</p>
                <p className="text-white/70 text-[10px]">🔴 LIVE • 1.2k penonton</p>
              </div>
            </div>
          </div>
          <div className="bg-red-500 text-white text-[10px] px-2 py-1 rounded-full font-bold animate-pulse">● LIVE</div>
        </div>

        {/* Chat Overlay */}
        <div className="mt-auto p-3 space-y-2 max-h-[40%] overflow-y-auto">
          {chats.map((c, i) => (
            <div key={i} className="flex gap-1">
              <span className="text-yellow-400 text-xs font-bold">{c.user}:</span>
              <span className="text-white text-xs">{c.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Card Floating */}
      <div className="absolute bottom-20 left-3 right-3 bg-white rounded-2xl p-3 flex items-center gap-3 shadow-xl">
        <img src="https://via.placeholder.com/60" alt="produk" className="w-14 h-14 rounded-xl object-cover bg-gray-100" />
        <div className="flex-1">
          <p className="text-[10px] text-gray-400">No. 1</p>
          <p className="text-xs font-bold text-gray-800 line-clamp-1">Kemeja Flanel Casual Premium</p>
          <p className="text-sm font-extrabold text-red-500">Rp 145.000</p>
        </div>
        <button onClick={() => setPage('produk')} className="bg-green-600 text-white px-5 py-2 rounded-xl text-xs font-bold">Beli</button>
      </div>

      {/* Input Chat */}
      <div className="fixed bottom-[65px] left-0 right-0 max-w-md mx-auto p-3 flex gap-2 bg-gradient-to-t from-black/80 to-transparent">
        <input
          value={komen}
          onChange={(e) => setKomen(e.target.value)}
          placeholder="Kirim komentar atau tanya produk..."
          className="flex-1 bg-white/20 backdrop-blur text-white placeholder-white/60 text-xs px-4 py-2.5 rounded-full border border-white/20 focus:outline-none"
        />
        <button onClick={kirimChat} className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold">Kirim</button>
      </div>

      {/* Bottom Nav tetap dari App.jsx, jadi jangan ditambah lagi */}
    </div>
  );
}