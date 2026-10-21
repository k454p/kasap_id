import { useState } from 'react'
import Beranda from './beranda.jsx'
import Keranjang from './keranjang.jsx'
import Berinilai from './berinilai.jsx'
import Belumdibayar from './belumdibayar.jsx'

export default function App() {
  const [page, setPage] = useState('beranda')

    return (
        <div className="min-h-screen bg-gray-50">
              {/* Navbar Kasap */}
                    <nav className="bg-green-600 text-white p-4 flex gap-3 sticky top-0 z-10">
                            <button onClick={() => setPage('beranda')} className="font-bold">Kasap_id</button>
                                    <button onClick={() => setPage('beranda')} className="bg-white text-green-600 px-3 py-1 rounded">Beranda</button>
                                            <button onClick={() => setPage('keranjang')} className="bg-white/20 px-3 py-1 rounded">Keranjang</button>
                                                    <button onClick={() => setPage('belumdibayar')} className="bg-white/20 px-3 py-1 rounded">Pesanan</button>
                                                            <button onClick={() => setPage('berinilai')} className="bg-white/20 px-3 py-1 rounded">Nilai</button>
                                                                  </nav>

                                                                        <div className="p-4">
                                                                                {page === 'beranda' && <Beranda />}
                                                                                        {page === 'keranjang' && <Keranjang />}
                                                                                                {page === 'berinilai' && <Berinilai />}
                                                                                                        {page === 'belumdibayar' && <Belumdibayar />}
                                                                                                              </div>
                                                                                                                  </div>
                                                                                                                    )
                                                                                                                    }