export default function Keranjang(){return null}
import React from 'react';

export default function Keranjang({ setPage, setCartCount }) {
    return (
        <div className="p-4 space-y-4 max-w-md mx-auto bg-gray-50 min-h-screen pb-24">
            {/* Header Keranjang */}
            <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-800 text-lg">Keranjang Belanja</h2>
                <button 
                    onClick={() => setPage('beranda')}
                    className="text-blue-600 text-sm font-semibold"
                >
                    + Belanja Lagi
                </button>
            </div>

            {/* Item Produk di Keranjang */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-xs font-medium shrink-0">
                    Foto
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-sm text-gray-800">Kemeja Flanel Casual Premium</h3>
                    <p className="text-blue-600 font-extrabold text-sm mt-1">Rp 145.000</p>
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-xs text-gray-500">Jumlah: 1</span>
                        <button 
                            onClick={() => {
                                setCartCount(0);
                                alert('Item dihapus dari keranjang');
                            }}
                            className="text-red-500 text-xs font-semibold hover:underline"
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            </div>

            {/* Rincian Pembayaran */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-800 text-sm mb-3">Ringkasan Belanja</h3>
                <div className="flex justify-between text-sm text-gray-600">
                    <span>Total Harga (1 Barang)</span>
                    <span>Rp 145.000</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                    <span>Biaya Pengiriman</span>
                    <span className="text-green-600 font-semibold">Gratis</span>
                </div>
                <hr className="border-gray-100 my-2" />
                <div className="flex justify-between text-base font-bold text-gray-800">
                    <span>Total Tagihan</span>
                    <span className="text-blue-600">Rp 145.000</span>
                </div>
            </div>

            {/* Tombol Lanjut Checkout Bawah */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 max-w-md mx-auto shadow-lg z-50">
                <button 
                    onClick={() => setPage('chekout')}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-md hover:bg-blue-700 transition"
                >
                    Lanjut ke Checkout
                </button>
            </div>
        </div>
    );
}