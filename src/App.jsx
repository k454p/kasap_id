import React, { useState } from 'react';
import './App.css';

import Akunsaya from './akunsaya';
import Alamat from './alamat';
import Bankewallet from './bankewallet';
import Belumdibayar from './belumdibayar';
import Beranda from './beranda';
import Berinilai from './berinilai';
import Chat from './chat';
import Chekout from './chekout';
import Dikemas from './dikemas';
import Dikirim from './dikirim';
import Hubungics from './hubungics';
import Keranjang from './keranjang';
import Laporan from './laporan';
import Live from './live';
import Masukkeranjang from './masukkeranjang';
import Produk from './produk';
import Tarikdana from './tarikdana';

export default function App() {
  const [activeTab, setActiveTab] = useState('beranda');

  const renderComponent = () => {
    switch (activeTab) {
      case 'akunsaya': return <Akunsaya />;
      case 'alamat': return <Alamat />;
      case 'bankewallet': return <Bankewallet />;
      case 'belumdibayar': return <Belumdibayar />;
      case 'beranda': return <Beranda />;
      case 'berinilai': return <Berinilai />;
      case 'chat': return <Chat />;
      case 'chekout': return <Chekout />;
      case 'dikemas': return <Dikemas />;
      case 'dikirim': return <Dikirim />;
      case 'hubungics': return <Hubungics />;
      case 'keranjang': return <Keranjang />;
      case 'laporan': return <Laporan />;
      case 'live': return <Live />;
      case 'masukkeranjang': return <Masukkeranjang />;
      case 'produk': return <Produk />;
      case 'tarikdana': return <Tarikdana />;
      default: return <Beranda />;
    }
  };

  const navList = [
    'beranda', 'produk', 'keranjang', 'masukkeranjang', 'chekout', 
    'belumdibayar', 'dikemas', 'dikirim', 'berinilai', 'chat', 
    'akunsaya', 'alamat', 'bankewallet', 'tarikdana', 'laporan', 
    'live', 'hubungics'
  ];

  return (
    <div className="App">
      <nav>
        {navList.map((tab) => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor: activeTab === tab ? '#007bff' : '#f8f9fa',
              color: activeTab === tab ? '#fff' : '#495057',
              borderColor: activeTab === tab ? '#007bff' : '#ced4da'
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </nav>

      <main>
        {renderComponent()}
      </main>
    </div>
  );
}