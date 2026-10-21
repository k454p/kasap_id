import React, { useState } from 'react';

export default function Keranjang({ setPage }) {
    const [isChecked, setIsChecked] = useState(true);
    const [qty, setQty] = useState(1);
    const hargaSatuan = 145000;

    return (
        <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 pb-24">
            {/* Header Keranjang */}
            <div className="flex items-center justify-between bg-white p-4 border-b border-gray-100 shadow-sm sticky top-0 z-10">
                <button 
                    onClick={() => setPage('beranda')}
                    className="text-blue-600 text-sm font-semibold"
                >
                    ← Beranda
                </button>
                <h2 className="font-bold text-gray-800 text-base">Keranjang Belanja</h2>
                <div className="w-10"></div>
            </div>

            {/* Daftar Produk di Keranjang */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                    <div className="flex items-center gap-2 border-b pb-2">
                        <input 
                            type="checkbox" 
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            className="w-4 h-4 accent-blue-600 rounded"
                        />
                        <span className="font-bold text-xs text-gray-800">Kasap ID Store Official</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <input 
                            type="checkbox" 
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            className="w-4 h-4 accent-blue-600 rounded"
                        />
                        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-xs shrink-0 font-medium">
                            Foto
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-xs text-gray-800 line-clamp-1">Kemeja Flanel Casual Premium</h4>
                            <p className="text-[10px] text-gray-400 mt-0.5">Variasi: Hitam, L</p>
                            <p className="text-blue-600 font-extrabold text-xs mt-1">Rp {hargaSatuan.toLocaleString('id-ID')}</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                        <span className="text-[11px] text-gray-500">Atur Jumlah</span>
                        <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-xl">
                            <button 
                                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                                className="w-5 h-5 bg-white rounded-md font-bold text-xs shadow-sm flex items-center justify-center text-gray-700"
                            >
                                -
                            </button>
                            <span className="text-xs font-bold px-1 text-gray-800">{qty}</span>
                            <button 
                                onClick={() => setQty(qty + 1)}
                                className="w-5 h-5 bg-white rounded-md font-bold text-xs shadow-sm flex items-center justify-center text-gray-700"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Checkout ala Shopee */}
            <div className="bg-white border-t border-gray-200 p-4 fixed bottom-0 left-0 right-0 max-w-md mx-auto flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        className="w-4 h-4 accent-blue-600 rounded"
                    />
                    <div>
                        <p className="text-[10px] text-gray-400">Total Pembayaran</p>
                        <p className="text-sm font-extrabold text-blue-600">
                            Rp {(isChecked ? hargaSatuan * qty : 0).toLocaleString('id-ID')}
                        </p>
                    </div>
                </div>
                <button 
                    onClick={() => {
                        if (!isChecked) {
                            alert('Pilih produk terlebih dahulu!');
                            return;
                        }
                        setPage('chekout');
                    }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md hover:bg-blue-700 transition"
                >
                    Checkout ({qty})
                </button>
            </div>
        </div>
    );
}