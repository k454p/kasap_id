import React, { useState } from 'react';
import './LiveStreaming.css'; // Opsional: untuk file styling terpisah

export default function LiveStreaming() {
  const [chatList, setChatList] = useState([
    { id: 1, user: 'Budi Santoso', message: 'Halo admin, suaranya jelas banget!' },
    { id: 2, user: 'Siti Rahma', message: 'Keren materinya, lanjut terus!' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setChatList([
      ...chatList,
      { id: Date.now(), user: 'Anda', message: newMessage }
    ]);
    setNewMessage('');
  };

  return (
    <div className="live-container">
      {/* Bagian Utama (Video & Informasi Stream) */}
      <div className="live-main-content">
        <div className="video-player-wrapper">
          {/* Placeholder Video Player (Bisa diganti dengan Video.js, Iframe YouTube, dll) */}
          <div className="video-placeholder">
            <div className="live-badge">LIVE</div>
            <p>🔴 Pemutar Video Streaming Sedang Berlangsung</p>
          </div>
        </div>

        <div className="stream-info">
          <h1>Judul Siaran Langsung: Belajar ReactJS dari Nol</h1>
          <div className="stream-meta">
            <span className="channel-name">Channel Developer Indonesia</span>
            <span className="viewer-count">👁️ 1.240 Menonton</span>
          </div>
          <p className="stream-description">
            Selamat datang di live streaming hari ini! Kita akan membahas cara membangun aplikasi interaktif menggunakan React dan menghubungkannya dengan API.
          </p>
        </div>
      </div>

      {/* Bagian Live Chat */}
      <div className="live-chat-sidebar">
        <h3>Live Chat</h3>
        <div className="chat-messages">
          {chatList.map((chat) => (
            <div key={chat.id} className="chat-item">
              <span className="chat-user">{chat.user}:</span>
              <span className="chat-text">{chat.message}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="chat-input-form">
          <input
            type="text"
            placeholder="Kirim pesan..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">Kirim</button>
        </form>
      </div>
    </div>
  );
}