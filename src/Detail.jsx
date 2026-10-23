import React from 'react';

export default function DetailProduk({ navigate }) {
  // 1. Mengambil data produk yang dikirim dari halaman beranda saat kartu diklik
  const stateData = window.history.state?.usr;
  const produk = stateData?.produk || { nama: "Produk Kasap", harga: "0", gambar: "📦" };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'Arial, sans-serif', position: 'relative' }}>
      
      {/* HEADER DETAIL */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '15px', borderBottom: '1px solid #e0e0e0', background: '#fff', sticky: 'top' }}>
        <button onClick={() => navigate('beranda')} style={{ border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer', color: '#ff4500', marginRight: '15px' }}>
          ←
        </button>
        <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Detail Produk</span>
      </div>

      {/* AREA FOTO PRODUK */}
      <div style={{ width: '100%', aspectRatio: '1/1', background: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px' }}>
        {produk.gambar || "📦"}
      </div>

      {/* INFO NAMA & HARGA (Mirip Shopee) */}
      <div style={{ padding: '20px' }}>
        <div style={{ color: '#ff4500', fontSize: '26px', fontWeight: 'bold', marginBottom: '8px' }}>
          Rp {produk.harga}
        </div>
        <h1 style={{ fontSize: '18px', color: '#333', fontWeight: 'normal', lineHeight: '1.4', marginBottom: '15px' }}>
          {produk.nama} - Kualitas Premium Siap Pakai Kasap.id
        </h1>
        
        {/* INFO PENDUKUNG */}
        <div style={{ display: 'flex', gap: '15px', fontSize: '14px', color: '#666', borderTop: '1px solid #f0f0f0', paddingTop: '15px' }}>
          <span>⭐ {produk.rating || "4.8"}</span>
          <span>|</span>
          <span>Terjual {produk.terjual || "100+"}</span>
        </div>
      </div>

      {/* 🛍️ STICKY ACTION BAR BAWAH (PERSIS SEPERTI GAMBAR CONTOH) */}
      <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '500px', height: '60px', background: '#ffffff', display: 'flex', borderTop: '1px solid #e0e0e0', zIndex: 1000 }}>
        
        {/* 1. Tombol Chat WhatsApp */}
        <a href={`https://wa.me{encodeURIComponent(produk.nama)}`} target="_blank" rel="noreferrer" style={{ width: '15%', display: 'flex', flexHorizontal: 'column', justifyContent: 'center', alignItems: 'center', color: '#ff4500', borderRight: '1px solid #f0f0f0', textDecoration: 'none', fontSize: '22px' }}>
          💬
        </a>
        
        {/* 2. Tombol Masuk Keranjang */}
        <button onClick={() => alert(`Berhasil memasukkan ${produk.nama} ke keranjang!`)} style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ff4500', background: 'none', border: 'none', borderRight: '1px solid #f0f0f0', fontSize: '22px', cursor: 'pointer' }}>
          🛒
        </button>
        
        {/* 3. Tombol Beli / Checkout */}
        <button onClick={() => navigate('checkout', { state: { beliProduk: produk } })} style={{ width: '70%', background: '#ff4500', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
          Beli Sekarang
        </button>
      </div>

    </div>
  );
}
