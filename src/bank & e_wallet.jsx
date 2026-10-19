import React, { useState } from 'react';
import './PembayaranBankEwallet.css'; // Opsional: untuk file styling terpisah

export default function PembayaranBankEwallet() {
  const [selectedCategory, setSelectedCategory] = useState('bank'); // 'bank' atau 'ewallet'
  const [selectedMethod, setSelectedMethod] = useState('bca');
  const [isCopied, setIsCopied] = useState(false);

  // Contoh data transaksi
  const subtotal = 2100000;
  const ongkir = 50000;
  const biayaPlatform = subtotal * 0.05; // 5% dari subtotal

  // Menentukan biaya admin berdasarkan metode yang dipilih
  let biayaAdmin = 0;
  let detailAkun = '';

  if (selectedCategory === 'bank') {
    biayaAdmin = 4000;
    if (selectedMethod === 'bca') detailAkun = '1234567890 (a.n. PT E-Commerce Indonesia - BCA)';
    else if (selectedMethod === 'mandiri') detailAkun = '0987654321 (a.n. PT E-Commerce Indonesia - Mandiri)';
    else if (selectedMethod === 'bni') detailAkun = '1122334455 (a.n. PT E-Commerce Indonesia - BNI)';
  } else {
    biayaAdmin = 1500; // Contoh biaya admin e-wallet
    if (selectedMethod === 'gopay') detailAkun = '081234567890 (a.n. Toko Online Official)';
    else if (selectedMethod === 'ovo') detailAkun = '081234567890 (a.n. Toko Online Official)';
    else if (selectedMethod === 'dana') detailAkun = '081234567890 (a.n. Toko Online Official)';
    else if (selectedMethod === 'qris') detailAkun = 'Scan QR Code nasional untuk semua aplikasi pembayaran';
  }

  const totalPembayaran = subtotal + ongkir + biayaPlatform + biayaAdmin;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleBayarSekarang = () => {
    alert(`Memproses pembayaran via ${selectedMethod.toUpperCase()} sebesar Rp ${totalPembayaran.toLocaleString('id-ID')}`);
  };

  return (
    <div className="pembayaran-container">
      <h2>Pilih Metode Pembayaran</h2>
      <p className="subtitle">Silakan pilih metode Transfer Bank atau E-Wallet yang Anda inginkan.</p>

      <div className="pembayaran-grid">
        {/* Kolom Pilihan Metode */}
        <div className="pembayaran-card">
          {/* Tab Kategori */}
          <div className="tab-category">
            <button 
              className={`tab-btn ${selectedCategory === 'bank' ? 'active' : ''}`}
              onClick={() => { setSelectedCategory('bank'); setSelectedMethod('bca'); }}
            >
              🏦 Transfer Bank
            </button>
            <button 
              className={`tab-btn ${selectedCategory === 'ewallet' ? 'active' : ''}`}
              onClick={() => { setSelectedCategory('ewallet'); setSelectedMethod('gopay'); }}
            >
              📱 E-Wallet / QRIS
            </button>
          </div>

          {/* Opsi Bank */}
          {selectedCategory === 'bank' && (
            <div className="options-list">
              <label className={`option-item ${selectedMethod === 'bca' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="bank" 
                  value="bca" 
                  checked={selectedMethod === 'bca'} 
                  onChange={(e) => setSelectedMethod(e.target.value)} 
                />
                <div>
                  <strong>Transfer BCA</strong>
                  <span className="fee-text">Biaya admin: Rp 4.000</span>
                </div>
              </label>

              <label className={`option-item ${selectedMethod === 'mandiri' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="bank" 
                  value="mandiri" 
                  checked={selectedMethod === 'mandiri'} 
                  onChange={(e) => setSelectedMethod(e.target.value)} 
                />
                <div>
                  <strong>Transfer Mandiri</strong>
                  <span className="fee-text">Biaya admin: Rp 4.000</span>
                </div>
              </label>

              <label className={`option-item ${selectedMethod === 'bni' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="bank" 
                  value="bni" 
                  checked={selectedMethod === 'bni'} 
                  onChange={(e) => setSelectedMethod(e.target.value)} 
                />
                <div>
                  <strong>Transfer BNI</strong>
                  <span className="fee-text">Biaya admin: Rp 4.000</span>
                </div>
              </label>
            </div>
          )}

          {/* Opsi E-Wallet */}
          {selectedCategory === 'ewallet' && (
            <div className="options-list">
              <label className={`option-item ${selectedMethod === 'gopay' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="ewallet" 
                  value="gopay" 
                  checked={selectedMethod === 'gopay'} 
                  onChange={(e) => setSelectedMethod(e.target.value)} 
                />
                <div>
                  <strong>GoPay</strong>
                  <span className="fee-text">Biaya admin: Rp 1.500</span>
                </div>
              </label>

              <label className={`option-item ${selectedMethod === 'ovo' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="ewallet" 
                  value="ovo" 
                  checked={selectedMethod === 'ovo'} 
                  onChange={(e) => setSelectedMethod(e.target.value)} 
                />
                <div>
                  <strong>OVO</strong>
                  <span className="fee-text">Biaya admin: Rp 1.500</span>
                </div>
              </label>

              <label className={`option-item ${selectedMethod === 'dana' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="ewallet" 
                  value="dana" 
                  checked={selectedMethod === 'dana'} 
                  onChange={(e) => setSelectedMethod(e.target.value)} 
                />
                <div>
                  <strong>DANA</strong>
                  <span className="fee-text">Biaya admin: Rp 1.500</span>
                </div>
              </label>

              <label className={`option-item ${selectedMethod === 'qris' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="ewallet" 
                  value="qris" 
                  checked={selectedMethod === 'qris'} 
                  onChange={(e) => setSelectedMethod(e.target.value)} 
                />
                <div>
                  <strong>QRIS (All Payment)</strong>
                  <span className="fee-text">Biaya admin: Rp 1.500</span>
                </div>
              </label>
            </div>
          )}

          {/* Detail Rekening / Tujuan Bayar */}
          <div className="target-account-box">
            <span className="label">Informasi Tujuan ({selectedMethod.toUpperCase()}):</span>
            <div className="account-row">
              <span className="account-text"><strong>{detailAkun}</strong></span>
              <button className="btn-copy" onClick={() => handleCopy(detailAkun)}>
                {isCopied ? 'Tersalin!' : 'Salin'}
              </button>
            </div>
          </div>
        </div>

        {/* Kolom Ringkasan Transparansi Biaya */}
        <div className="pembayaran-card summary-card">
          <h3>Ringkasan Pembayaran</h3>

          <div className="summary-row">
            <span>Subtotal Produk</span>
            <span>Rp {subtotal.toLocaleString('id-ID')}</span>
          </div>
          <div className="summary-row">
            <span>Biaya Pengiriman (Ongkir)</span>
            <span>Rp {ongkir.toLocaleString('id-ID')}</span>
          </div>
          <div className="summary-row">
            <span>Biaya Layanan Platform (5%)</span>
            <span>Rp {biayaPlatform.toLocaleString('id-ID')}</span>
          </div>
          <div className="summary-row">
            <span>Biaya Admin ({selectedMethod.toUpperCase()})</span>
            <span>Rp {biayaAdmin.toLocaleString('id-ID')}</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total Tagihan</span>
            <span>Rp {totalPembayaran.toLocaleString('id-ID')}</span>
          </div>

          <button className="btn-pay" onClick={handleBayarSekarang}>
            Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}