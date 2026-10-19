import React, { useState } from 'react';
import './Checkout.css'; // Opsional: untuk file styling terpisah

export default function Checkout() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    alamat: '',
    kota: '',
    kodepos: '',
    metodePembayaran: 'transfer_bank'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Data contoh produk yang dibeli
  const cartItems = [
    { id: 1, name: 'Kursi Kantor Ergonomis', price: 1250000, quantity: 1 },
    { id: 2, name: 'Meja Kerja Minimalis', price: 850000, quantity: 1 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const ongkir = 50000;
  const total = subtotal + ongkir;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="checkout-success">
        <div className="success-card">
          <h2>🎉 Pesanan Berhasil Dibuat!</h2>
          <p>Terima kasih, <strong>{formData.namaLengkap}</strong>. Pesanan Anda sedang diproses.</p>
          <p>Konfirmasi pembayaran telah dikirim ke: <strong>{formData.email}</strong></p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout Pesanan</h2>
      
      <div className="checkout-grid">
        {/* Formulir Pengiriman & Pembayaran */}
        <form onSubmit={handleSubmit} className="checkout-form">
          <fieldset>
            <legend>Informasi Pengiriman</legend>
            
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input 
                type="text" 
                name="namaLengkap" 
                value={formData.namaLengkap} 
                onChange={handleChange} 
                required 
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="nama@email.com"
              />
            </div>

            <div className="form-group">
              <label>Alamat Lengkap</label>
              <textarea 
                name="alamat" 
                value={formData.alamat} 
                onChange={handleChange} 
                required 
                placeholder="Jalan, Nomor Rumah, RT/RW"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Kota</label>
                <input 
                  type="text" 
                  name="kota" 
                  value={formData.kota} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Kode Pos</label>
                <input 
                  type="text" 
                  name="kodepos" 
                  value={formData.kodepos} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Metode Pembayaran</legend>
            <div className="radio-group">
              <label>
                <input 
                  type="radio" 
                  name="metodePembayaran" 
                  value="transfer_bank" 
                  checked={formData.metodePembayaran === 'transfer_bank'} 
                  onChange={handleChange} 
                />
                Transfer Bank (BCA/Mandiri/BNI)
              </label>
              <label>
                <input 
                  type="radio" 
                  name="metodePembayaran" 
                  value="e_wallet" 
                  checked={formData.metodePembayaran === 'e_wallet'} 
                  onChange={handleChange} 
                />
                E-Wallet (GoPay/OVO/Dana)
              </label>
              <label>
                <input 
                  type="radio" 
                  name="metodePembayaran" 
                  value="cod" 
                  checked={formData.metodePembayaran === 'cod'} 
                  onChange={handleChange} 
                />
                Bayar di Tempat (COD)
              </label>
            </div>
          </fieldset>

          <button type="submit" className="btn-submit">Bayar Sekarang</button>
        </form>

        {/* Ringkasan Belanja */}
        <div className="checkout-summary">
          <h3>Ringkasan Belanja</h3>
          <div className="summary-items">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <span>{item.name} (x{item.quantity})</span>
                <span>Rp {item.price.toLocaleString('id-ID')}</span>
              </div>
            ))}
          </div>
          <hr />
          <div className="summary-row">
            <span>Subtotal</span>
            <span>Rp {subtotal.toLocaleString('id-ID')}</span>
          </div>
          <div className="summary-row">
            <span>Biaya Pengiriman</span>
            <span>Rp {ongkir.toLocaleString('id-ID')}</span>
          </div>
          <hr />
          <div className="summary-row total">
            <span>Total Pembayaran</span>
            <span>Rp {total.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}