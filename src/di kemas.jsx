import React from 'react';
import './LaporanSedangDikemas.css'; // Opsional: untuk file styling terpisah

export default function LaporanSedangDikemas() {
  // Contoh data pesanan yang sedang dikemas
  const dataPengemasan = {
    nomorPesanan: 'INV/20261020/MPL/987654321',
    tanggalPesanan: '20 Oktober 2026, 04:30 WIB',
    estimasiKirim: 'Maksimal 1 x 24 jam',
    alamatTujuan: 'Jl. Merdeka No. 45, RT 01 / RW 05, Kel. Menteng, Kec. Menteng, Jakarta Pusat, 10350',
    subtotal: 2100000,
    ongkir: 50000,
    biayaPlatform: 105000, // 5% dari subtotal
    items: [
      { id: 1, name: 'Kursi Kantor Ergonomis', price: 1250000, quantity: 1 },
      { id: 2, name: 'Meja Kerja Minimalis', price: 850000, quantity: 1 }
    ]
  };

  const totalBelanja = dataPengemasan.subtotal + dataPengemasan.ongkir + dataPengemasan.biayaPlatform;

  const handleHubungiPenjual = () => {
    alert('Mengarahkan ke fitur chat/pesan dengan penjual.');
  };

  return (
    <div className="laporan-container">
      {/* Header Status Sedang Dikemas */}
      <div className="laporan-header-card packing">
        <div className="status-badge-wrapper">
          <span className="status-icon">📦</span>
          <span className="status-title">Pesanan Sedang Dikemas</span>
        </div>
        <p className="status-desc">
          Penjual sedang menyiapkan dan mengemas produk Anda. Paket akan segera diserahkan kepada pihak kurir.
        </p>
      </div>

      {/* Grid Informasi Proses & Rincian */}
      <div className="laporan-grid">
        {/* Kolom Detail Pengemasan & Alamat */}
        <div className="laporan-card">
          <h3>Informasi Proses</h3>
          
          <div className="info-row">
            <span className="label">Nomor Pesanan:</span>
            <span className="value"><strong>{dataPengemasan.nomorPesanan}</strong></span>
          </div>
          <div className="info-row">
            <span className="label">Waktu Pemesanan:</span>
            <span className="value">{dataPengemasan.tanggalPesanan}</span>
          </div>
          <div className="info-row">
            <span className="label">Estimasi Dikirim:</span>
            <span className="value highlight">{dataPengemasan.estimasiKirim}</span>
          </div>

          <div className="alamat-section">
            <span className="label">Alamat Tujuan Pengiriman:</span>
            <p className="alamat-text">{dataPengemasan.alamatTujuan}</p>
          </div>

          <button className="btn-chat" onClick={handleHubungiPenjual}>
            💬 Hubungi Penjual
          </button>
        </div>

        {/* Kolom Daftar Produk & Ringkasan Biaya */}
        <div className="laporan-card">
          <h3>Produk yang Dikemas</h3>
          
          <div className="produk-section">
            {dataPengemasans => dataPengemasan.items.map((item) => (
              <div key={item.id} className="summary-item">
                <span>{item.name} (x{item.quantity})</span>
                <span>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</span>
              </div>
            ))}
          </div>

          <hr />

          <div className="summary-row">
            <span>Subtotal Produk</span>
            <span>Rp {dataPengemasan.subtotal.toLocaleString('id-ID')}</span>
          </div>
          <div className="summary-row">
            <span>Biaya Pengiriman (Ongkir)</span>
            <span>Rp {dataPengemasan.ongkir.toLocaleString('id-ID')}</span>
          </div>
          <div className="summary-row">
            <span>Biaya Layanan Platform (5%)</span>
            <span>Rp {dataPengemasan.biayaPlatform.toLocaleString('id-ID')}</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total Pembayaran</span>
            <span>Rp {totalBelanja.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}