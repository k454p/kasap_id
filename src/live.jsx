import { useState } from "react";

export default function Live({ setPage, navigate }) {
  const go = (p) => {
    if (navigate) navigate(p);
    else if (setPage) setPage(p);
  };
  const [komen, setKomen] = useState("");
  const [chats, setChats] = useState([
    { user: "Siti Rahma", text: "Kak, bahannya tebal atau tipis?" },
    { user: "Ahmad Fauzi", text: "Warna navy ada gak kak?" },
    { user: "【entity-Dewi Lestari¦canonical_name=Dewi Lestari】", text: "Udah checkout kemejanya ya kak! 🔥" },
  ]);

  const kirim = () => {
    if (!komen.trim()) return;
    setChats([...chats, { user: "Anda", text: komen }]);
    setKomen("");
  };

  return (
    <div style={{ background: "#000", minHeight: "100vh", paddingBottom: "80px", position: "relative", maxWidth: "450px", margin: "0 auto" }}>
      
      {/* VIDEO AREA */}
      <div style={{ height: "70vh", background: "linear-gradient(to bottom, #16a34a, #000)", position: "relative", padding: "12px" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button onClick={() => go('beranda')} style={{ background: "rgba(0,0,0,0.4)", color: "white", border: "none", width: "32px", height: "32px", borderRadius: "50%", fontWeight: "bold" }}>✕</button>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(0,0,0,0.4)", borderRadius: "20px", padding: "4px 10px" }}>
              <div style={{ width: "28px", height: "28px", background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px" }}>K</div>
              <div>
                <div style={{ color: "white", fontSize: "11px", fontWeight: "bold" }}>Kasap ID Official</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "9px" }}>🔴 LIVE • 1.2k</div>
              </div>
            </div>
          </div>
          <div style={{ background: "red", color: "white", fontSize: "10px", padding: "2px 8px", borderRadius: "10px", fontWeight: "bold" }}>● LIVE</div>
        </div>

        {/* Chat */}
        <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px" }}>
          {chats.map((c, i) => (
            <div key={i} style={{ marginBottom: "6px", fontSize: "13px" }}>
              <span style={{ color: "#facc15", fontWeight: "bold", marginRight: "4px" }}>{c.user}:</span>
              <span style={{ color: "white" }}>{c.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUK CARD */}
      <div style={{ position: "absolute", bottom: "110px", left: "12px", right: "12px", background: "white", borderRadius: "16px", padding: "10px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}>
        <img src="https://via.placeholder.com/60" alt="produk" style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#eee" }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "10px", color: "#999" }}>No. 1</div>
          <div style={{ fontSize: "12px", fontWeight: "bold", color: "#111" }}>Kemeja Flanel Casual Premium</div>
          <div style={{ fontSize: "13px", fontWeight: "800", color: "#ef4444" }}>Rp 145.000</div>
        </div>
        <button onClick={() => go('produk')} style={{ background: "#16a34a", color: "white", border: "none", padding: "8px 18px", borderRadius: "12px", fontWeight: "bold", fontSize: "12px" }}>Beli</button>
      </div>

      {/* INPUT CHAT */}
      <div style={{ position: "fixed", bottom: "65px", left: "0", right: "0", maxWidth: "450px", margin: "0 auto", padding: "10px 12px", display: "flex", gap: "8px", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
        <input
          value={komen}
          onChange={(e) => setKomen(e.target.value)}
          placeholder="Kirim komentar atau tanya produk..."
          style={{ flex: 1, background: "rgba(255,255,255,0.2)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "20px", padding: "10px 16px", fontSize: "12px", outline: "none" }}
        />
        <button onClick={kirim} style={{ background: "white", color: "black", border: "none", padding: "0 16px", borderRadius: "20px", fontWeight: "bold", fontSize: "12px" }}>Kirim</button>
      </div>
    </div>
  );
}