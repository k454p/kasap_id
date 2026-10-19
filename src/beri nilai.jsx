import React, { useState } from 'react';
import './LaporanBarangSampai.css'; // Opsional: untuk file styling terpisah

export default function LaporanBarangSampai() {
  // Contoh data pesanan yang sudah diterima
  const dataPesanan = {
    nomorPesanan: 'INV/20261020/MPL/987654321',
    tanggalDiterima: '24 Oktober 2026, 14:15 WIB',
    kurir: 'SiCepat Express - REG (Resi: 002849102834)',
    penerima: 'Budi Santoso (Rumah Utama)',
    items: [
      { id: 1, name: 'Kursi Kantor Ergonomis', price: 1250000, quantity: 1 },
      { id: 2, name: 'Meja Kerja Minimalis', price: 850000, quantity: 1 }
    ]
  };

  // State untuk penilaian (rating & ulasan)
  const [rating, setRating] = useState(5);
  const [ulasan, setUlasan] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitUlasan = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="laporan-container">
      {/* Header Status Selesai / Barang Sampai */}
      <div className="laporan-header-card success">
        <div className="status-badge-wrapper">
          <span className="status-icon">✅</span>
          <span className="status-title">Pesanan Telah Diterima</span>
        </div>
        <p className="status-desc">
          Paket telah sampai di alamat tujuan pada <strong>{dataPesanan.tanggalDiterima}</strong>. Terima kasih telah berbelanja!
        </p>
      </div>

      {/* Grid Informasi & Penilaian */}
      <div className="laporan-grid">
        {/* Kolom Detail Pengiriman Selesai */}
        <div className="laporan-card">
          <h3>Detail Penerimaan</h3>
          
          <div className="info-row">
            <span className="label">Nomor Pesanan:</span>
            <span className="value"><strong>{dataPesanan.nomorPesanan}</strong></span>
          </div>
          <div className="info-row">
            <span className="label">Jasa Kurir:</span>
            <span className="value">{dataPesanan.kurir}</span>
          </div>
          <div className="info-row">
            <span className="label">Diterima Oleh:</span>
            <span className="value">{dataPesanan.penerima}</span>
          </div>

          <hr />

          <div className="produk-section">
            <span className="label">Produk Diterima:</span>
            <ul className="produk-list">
              {dataPesanan.items.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span className="qty">x{item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kolom Beri Penilaian & Ulasan */}
        <div className="laporan-card">
          <h3>Beri Penilaian Produk</h3>
          
          {isSubmitted ? (
            <div className="review-success-box">
              <p>🌟 <strong>Terima kasih atas ulasan Anda!</strong></p>
              <p>Rating: {rating} Bintang</p>
              <p className="user-review-text">"{ulasan || 'Tidak ada catatan ulasan.'}"</p>
            </div>
          ) : (
            <form onSubmit={handleSubmitUlasan} className="review-form">
              <div className="form-group">
                <label>Pilih Rating Bintang:</label>
                <div className="star-rating-select">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      className={`star-btn ${rating >= star ? 'active' : ''}`}
                      onClick={() => setRating(star)}
                    >
                      ★
                    </button>
                  ))}
                  <span className="rating-label-text">({rating}/5 Bintang)</span>
                </div>
              </div>

              <div className="form-group">
                <label>Tulis Ulasan / Testimoni:</label>
                <textarea
                  value={ulasan}
                  onChange={(e) => setUlasan(e.target.value)}
                  placeholder="Bagaimana kualitas produk dan pelayanannya? Ceritakan di sini..."
                  rows="4"
                  required
                />
              </div>

              <button type="submit" className="btn-submit-review">
                Kirim Ulasan
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}