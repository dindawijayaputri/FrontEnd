import React from "react";
import { Link } from "react-router-dom";

export default function DestinationCategory() {
  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Pilihan Kategori Destinasi</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/destination?category=air" className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition block">
            <img src="https://asset.kompas.com/crops/fyNOO8Tm7rhR1fZbGCXbTojvKBs=/0x0:2040x1360/750x500/data/photo/2021/08/06/610c8dfb18f00.jpg" alt="paket1" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg"> Wisata Air</h3>
              <p className="text-sm text-gray-600">Nikmati indahnya bawah laut yang eksotis.</p>
            </div>
          </Link>
          <Link to="/destination?category=gunung" className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition block">
            <img src="https://i0.wp.com/www.glory-travel.com/wp-content/uploads/2017/07/sibayak3.jpg" alt="paket2" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Wisata Gunung</h3>
              <p className="text-sm text-gray-600">Pendakian seru dengan pemandangan memukau.</p>
            </div>
          </Link>
          <Link to="/destination?category=budaya" className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition block">
            <img src="https://statik.tempo.co/data/2022/11/17/id_1157715/1157715_720.jpg" alt="paket3" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Wisata Budaya</h3>
              <p className="text-sm text-gray-600">Eksplorasi kebudayaan lokal dan keunikan adat.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}