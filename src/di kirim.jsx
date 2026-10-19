import React from 'react';
import './LaporanPengiriman.css'; // Opsional: untuk file styling terpisah

export default function LaporanPengiriman() {
  // Contoh data laporan pengiriman
  const dataPengiriman = {
    nomorPesanan: 'INV/20261020/MPL/987654321',
    kurir: 'SiCepat Express - REG',
    nomorResi: '002849102834',
    tanggalKirim: '20 Oktober 2026',
    estimasiTiba: '23 - 24 Oktober 2026',
    alamatTujuan: 'Jl. Merdeka No. 45, RT 01 / RW 05, Kel. Menteng, Kec. Menteng, Jakarta Pusat, 10350',
    items: [
      { id: 1, name: 'Kursi Kantor Ergonomis', quantity: 1 },
      { id: 2, name: 'Meja Kerja Minimalis', quantity: 1 }
    ]
  };

  const handleLacakPaket = () => {
    alert(`Mengarahkan ke sistem pelacakan resi: ${dataPengiriman.nomorResi}`);
    // Di sini Anda bisa menambahkan logika redirect ke halaman tracking kurir
  };

  return (
    <div className="laporan-container">
      {/* Header Status */}
      <div className="laporan-header-card">
        <div className="status-badge-wrapper">
          <span className="status-icon">🚚</span>
          <span className="status-title">Barang Sudah Dikirim</span>
        </div>
        <p className="status-desc">
          Pesanan Anda sedang dalam perjalanan menuju alamat tujuan.
        </p>
      </div>

      {/* Grid Informasi Detail Pengiriman */}
      <div className="laporan-grid">
        {/* Kolom Informasi Kurir & Resi */}
        <div className="laporan-card">
          <h3>Informasi Pengiriman</h3>
          <div className="info-row">
            <span className="label">Nomor Pesanan:</span>
            <span className="value">{dataPengiriman.nomorPesanan}</span>
          </div>
          <div className="info-row">
            <span className="label">Jasa Kurir:</span>
            <span className="value">{dataPengiriman.kurir}</span>
          </div>
          <div className="info-row">
            <span className="label">Nomor Resi:</span>
            <span className="value resi-code"><strong>{dataPengiriman.nomorResi}</strong></span>
          </div>
          <div className="info-row">
            <span className="label">Tanggal Pengiriman:</span>
            <span className="value">{dataPengiriman.tanggalKirim}</span>
          </div>
          <div className="info-row">
            <span className="label">Estimasi Tiba:</span>
            <span className="value highlight">{dataPengiriman.estimasiTiba}</span>
          </div>

          <button className="btn-track" onClick={handleLacakPaket}>
            Lacak Paket Sekarang
          </button>
        </div>

        {/* Kolom Alamat & Daftar Barang */}
        <div className="laporan-card">
          <h3>Tujuan & Produk</h3>
          
          <div className="alamat-section">
            <span className="label">Alamat Pengiriman:</span>
            <p className="alamat-text">{dataPengiriman.alamatTujuan}</p>
          </div>

          <hr />

          <div className="produk-section">
            <span className="label">Produk dalam Paket:</span>
            <ul className="produk-list">
              {dataPengiriman.items.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span className="qty">x{item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}