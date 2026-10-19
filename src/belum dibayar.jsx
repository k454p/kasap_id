import React, { useState } from 'react';
import './LaporanBelumDibayar.css'; // Opsional: untuk file styling terpisah

export default function LaporanBelumDibayar() {
  // Contoh data pesanan yang belum dibayar
  const dataTagihan = {
    nomorPesanan: 'INV/20261020/MPL/987654321',
    batasWaktu: '21 Oktober 2026, Pukul 04:35 WIB',
    metodePembayaran: 'Transfer Bank (BCA)',
    nomorRekening: '1234567890 (a.n. PT E-Commerce Indonesia)',
    subtotal: 2100000,
    ongkir: 50000,
    biayaPlatform: 105000, // 5% dari subtotal
    biayaTransfer: 4000,
    items: [
      { id: 1, name: 'Kursi Kantor Ergonomis', price: 1250000, quantity: 1 },
      { id: 2, name: 'Meja Kerja Minimalis', price: 850000, quantity: 1 }
    ]
  };

  const totalTagihan = dataTagihan.subtotal + dataTagihan.ongkir + dataTagihan.biayaPlatform + dataTagihan.biayaTransfer;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyRekening = () => {
    navigator.clipboard.writeText(dataTagihan.nomorRekening);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleKonfirmasiBayar = () => {
    alert('Menuju halaman unggah bukti transfer/konfirmasi pembayaran.');
    // Di sini Anda bisa menambahkan navigasi ke halaman konfirmasi
  };

  return (
    <div className="laporan-container">
      {/* Header Peringatan Belum Dibayar */}
      <div className="laporan-header-card warning">
        <div className="status-badge-wrapper">
          <span className="status-icon">⏳</span>
          <span className="status-title">Menunggu Pembayaran</span>
        </div>
        <p className="status-desc">
          Selesaikan pembayaran Anda sebelum <strong>{dataTagihan.batasWaktu}</strong> agar pesanan tidak otomatis dibatalkan oleh sistem.
        </p>
      </div>

      {/* Grid Informasi Tagihan & Rincian */}
      <div className="laporan-grid">
        {/* Kolom Instruksi Pembayaran */}
        <div className="laporan-card">
          <h3>Instruksi Pembayaran</h3>
          
          <div className="info-row">
            <span className="label">Nomor Pesanan:</span>
            <span className="value"><strong>{dataTagihan.nomorPesanan}</strong></span>
          </div>
          <div className="info-row">
            <span className="label">Metode Dipilih:</span>
            <span className="value">{dataTagihan.metodePembayaran}</span>
          </div>

          <div className="rekening-box">
            <span className="label">Silakan transfer ke nomor rekening berikut:</span>
            <div className="rek-detail">
              <span className="rek-number"><strong>{dataTagihan.nomorRekening}</strong></span>
              <button className="btn-copy" onClick={handleCopyRekening}>
                {isCopied ? 'Berhasil Disalin!' : 'Salin'}
              </button>
            </div>
          </div>

          <div className="total-tagihan-box">
            <span>Total yang harus dibayar:</span>
            <span className="total-amount">Rp {totalTagihan.toLocaleString('id-ID')}</span>
          </div>

          <button className="btn-pay" onClick={handleKonfirmasiBayar}>
            Konfirmasi Pembayaran
          </button>
        </div>

        {/* Kolom Rincian Transparansi Biaya & Produk */}
        <div className="laporan-card">
          <h3>Rincian Tagihan</h3>
          
          <div className="produk-section">
            {dataTagihan.items.map((item) => (
              <div key={item.id} className="summary-item">
                <span>{item.name} (x{item.quantity})</span>
                <span>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</span>
              </div>
            ))}
          </div>

          <hr />

          <div className="summary-row">
            <span>Subtotal Produk</span>
            <span>Rp {dataTagihan.subtotal.toLocaleString('id-ID')}</span>
          </div>
          <div className="summary-row">
            <span>Biaya Pengiriman (Ongkir)</span>
            <span>Rp {dataTagihan.ongkir.toLocaleString('id-ID')}</span>
          </div>
          <div className="summary-row">
            <span>Biaya Layanan Platform (5%)</span>
            <span>Rp {dataTagihan.biayaPlatform.toLocaleString('id-ID')}</span>
          </div>
          <div className="summary-row">
            <span>Biaya Transfer Bank</span>
            <span>Rp {dataTagihan.biayaTransfer.toLocaleString('id-ID')}</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total Akhir</span>
            <span>Rp {totalTagihan.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}