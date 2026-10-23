import React from 'react';

export default function DetailProduk({ produk, navigate }) {
  // Antisipasi jika produk kosong agar aplikasi tidak blank
  const dataProduk = produk || { nama: "Produk Kasap Pilihan", harga: "150.000", gambar: "📦" };

  return (
    <div className="detail-container">
      {/* NAV ANTARMUKA DETAIL */}
      <div className="detail-header">
        <button className="back-btn" onClick={() => navigate('beranda')}>← Kembali</button>
        <span className="detail-title">Detail Produk</span>
      </div>

      {/* FOTO PRODUK JUMBO */}
      <div className="detail-image-box">
        {dataProduk.gambar || "📦"}
      </div>

      {/* DETAIL INFO TEKS */}
      <div className="detail-info">
        <div className="detail-price">Rp {dataProduk.harga}</div>
        <h1 className="detail-name">{dataProduk.nama} - Edisi Premium Kasap.id</h1>
        <div className="detail-meta">
          <span>⭐ 4.8</span>
          <span>|</span>
          <span>Terjual 100+ Produk</span>
        </div>
      </div>

      {/* DESKRIPSI PRODUK */}
      <div className="detail-description">
        <h3>Deskripsi Produk</h3>
        <p>Produk tradisional eksklusif dari Kasap.id. Dibuat menggunakan bahan kain pilihan berkualitas tinggi, jahitan rapi standar distro, serta sangat nyaman digunakan untuk aktivitas formal maupun kasual sehari-hari.</p>
      </div>

      {/* STICKY BOTTOM ACTION BAR (MIRIP SHOPEE) */}
      <div className="bottom-action-bar">
        {/* Tombol Hubungi WhatsApp */}
        <a 
          href={`https://wa.me{encodeURIComponent(dataProduk.nama)}`} 
          target="_blank" 
          rel="noreferrer" 
          className="btn-icon-action"
        >
          💬<span style={{ fontSize: '9px', color: '#666' }}>Chat</span>
        </a>
        
        {/* Tombol Simpan Keranjang */}
        <button className="btn-icon-action" onClick={() => alert(`Berhasil ditambahkan ke keranjang belanja!`)}>
          🛒<span style={{ fontSize: '9px', color: '#666' }}>Keranjang</span>
        </button>
        
        {/* Tombol Lanjut Bayar */}
        <button className="btn-buy-action" onClick={() => navigate('checkout')}>
          Beli Sekarang
        </button>
      </div>
    </div>
  );
}
