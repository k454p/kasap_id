import React, { useState } from "react";

export default function Chekout() {
  // Contoh data pesanan & biaya
  const [shippingMethod, setShippingMethod] = useState("regular");
  
  const productPrice = 150000; // Harga produk
  const shippingCost = shippingMethod === "express" ? 25000 : 15000; // Ongkir
  const bankFee = 2500; // Biaya bank / admin
  const serviceFee = 1000; // Biaya layanan

  const totalPayment = productPrice + shippingCost + bankFee + serviceFee;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Checkout Pembayaran</h2>

      {/* Rincian Produk */}
      <div style={styles.section}>
        <h3>Ringkasan Produk</h3>
        <div style={styles.row}>
          <span>Kemeja Casual Pria (x1)</span>
          <span>Rp {productPrice.toLocaleString("id-ID")}</span>
        </div>
      </div>

      {/* Pilihan Pengiriman */}
      <div style={styles.section}>
        <h3>Pilih Pengiriman</h3>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="shipping"
            value="regular"
            checked={shippingMethod === "regular"}
            onChange={() => setShippingMethod("regular")}
          />
          Reguler (3-5 Hari) - Rp 15.000
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="shipping"
            value="express"
            checked={shippingMethod === "express"}
            onChange={() => setShippingMethod("express")}
          />
          Express (1-2 Hari) - Rp 25.000
        </label>
      </div>

      {/* Rincian Biaya */}
      <div style={styles.section}>
        <h3>Rincian Pembayaran</h3>
        <div style={styles.row}>
          <span>Subtotal Produk</span>
          <span>Rp {productPrice.toLocaleString("id-ID")}</span>
        </div>
        <div style={styles.row}>
          <span>Ongkos Kirim</span>
          <span>Rp {shippingCost.toLocaleString("id-ID")}</span>
        </div>
        <div style={styles.row}>
          <span>Biaya Bank / Admin</span>
          <span>Rp {bankFee.toLocaleString("id-ID")}</span>
        </div>
        <div style={styles.row}>
          <span>Biaya Layanan</span>
          <span>Rp {serviceFee.toLocaleString("id-ID")}</span>
        </div>
        <hr style={styles.divider} />
        <div style={styles.totalRow}>
          <span>Total Pembayaran</span>
          <span style={styles.totalPrice}>Rp {totalPayment.toLocaleString("id-ID")}</span>
        </div>
      </div>

      {/* Tombol Bayar */}
      <button style={styles.button} onClick={() => alert("Pembayaran diproses!")}>
        Bayar Sekarang
      </button>
    </div>
  );
}

// Styling sederhana menggunakan inline CSS
const styles = {
  container: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  section: {
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    color: "#555",
  },
  radioLabel: {
    display: "block",
    marginBottom: "8px",
    cursor: "pointer",
  },
  divider: {
    border: "0",
    borderTop: "1px solid #eee",
    margin: "10px 0",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#000",
  },
  totalPrice: {
    color: "#e74c3c",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#27ae60",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};