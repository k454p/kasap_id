import React, { useState } from "react";

export default function Bankewallet() {
  // State untuk menyimpan metode pembayaran yang dipilih
  const [selectedType, setSelectedType] = useState("bank"); // "bank" atau "ewallet"
  const [selectedChannel, setSelectedChannel] = useState("BCA");

  // Data pilihan Bank
  const bankList = [
    { id: "BCA", name: "Bank BCA", adminFee: 2500, icon: "💳" },
    { id: "Mandiri", name: "Bank Mandiri", adminFee: 2500, icon: "💳" },
    { id: "BRI", name: "Bank BRI", adminFee: 2500, icon: "💳" },
    { id: "BNI", name: "Bank BNI", adminFee: 2500, icon: "💳" },
  ];

  // Data pilihan E-Wallet
  const ewalletList = [
    { id: "GoPay", name: "GoPay", adminFee: 1000, icon: "🟩" },
    { id: "OVO", name: "OVO", adminFee: 1000, icon: "🟣" },
    { id: "DANA", name: "DANA", adminFee: 1000, icon: "🔵" },
    { id: "ShopeePay", name: "ShopeePay", adminFee: 1000, icon: "🟧" },
  ];

  // Ambil data admin fee berdasarkan channel yang sedang aktif
  const currentList = selectedType === "bank" ? bankList : ewalletList;
  const activeData = currentList.find((item) => item.id === selectedChannel) || currentList[0];

  const handleSelectType = (type) => {
    setSelectedType(type);
    // Reset pilihan channel default saat berpindah tab
    if (type === "bank") {
      setSelectedChannel("BCA");
    } else {
      setSelectedChannel("GoPay");
    }
  };

  const handleConfirm = () => {
    alert(`Metode pembayaran dipilih: ${activeData.name} (Biaya Admin: Rp ${activeData.adminFee.toLocaleString("id-ID")})`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Pilih Metode Pembayaran</h2>

      {/* Tab Kategori: Bank vs E-Wallet */}
      <div style={styles.tabContainer}>
        <button
          style={{
            ...styles.tabButton,
            backgroundColor: selectedType === "bank" ? "#3498db" : "#ecf0f1",
            color: selectedType === "bank" ? "#fff" : "#333",
          }}
          onClick={() => handleSelectType("bank")}
        >
          Transfer Bank
        </button>
        <button
          style={{
            ...styles.tabButton,
            backgroundColor: selectedType === "ewallet" ? "#3498db" : "#ecf0f1",
            color: selectedType === "ewallet" ? "#fff" : "#333",
          }}
          onClick={() => handleSelectType("ewallet")}
        >
          E-Wallet
        </button>
      </div>

      {/* Daftar Pilihan */}
      <div style={styles.listContainer}>
        {currentList.map((item) => (
          <div
            key={item.id}
            style={{
              ...styles.itemCard,
              borderColor: selectedChannel === item.id ? "#3498db" : "#ddd",
              backgroundColor: selectedChannel === item.id ? "#ebf5fb" : "#fff",
            }}
            onClick={() => setSelectedChannel(item.id)}
          >
            <div style={styles.itemInfo}>
              <span style={styles.icon}>{item.icon}</span>
              <div>
                <strong style={styles.itemName}>{item.name}</strong>
                <p style={styles.itemFee}>Biaya Admin: Rp {item.adminFee.toLocaleString("id-ID")}</p>
              </div>
            </div>
            <input
              type="radio"
              name="paymentMethod"
              checked={selectedChannel === item.id}
              onChange={() => setSelectedChannel(item.id)}
            />
          </div>
        ))}
      </div>

      {/* Ringkasan & Tombol Konfirmasi */}
      <div style={styles.footer}>
        <div style={styles.summaryText}>
          Dipilih: <strong>{activeData.name}</strong> (Admin: Rp {activeData.adminFee.toLocaleString("id-ID")})
        </div>
        <button style={styles.confirmButton} onClick={handleConfirm}>
          Gunakan Metode Ini
        </button>
      </div>
    </div>
  );
}

// Styling CSS Sederhana
const styles = {
  container: {
    maxWidth: "480px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fdfdfd",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  tabContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  tabButton: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.2s",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  itemCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 15px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    cursor: "pointer",
  },
  itemInfo: {
    display: "flex",
    alignItem: "center",
    gap: "12px",
  },
  icon: {
    fontSize: "24px",
  },
  itemName: {
    fontSize: "15px",
    color: "#333",
    display: "block",
  },
  itemFee: {
    fontSize: "12px",
    color: "#7f8c8d",
    margin: "3px 0 0 0",
  },
  footer: {
    borderTop: "1px solid #eee",
    paddingTop: "15px",
  },
  summaryText: {
    fontSize: "13px",
    color: "#555",
    marginBottom: "12px",
    textAlign: "center",
  },
  confirmButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#27ae60",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};