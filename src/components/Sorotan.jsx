import React from "react";
import { Link } from "react-router-dom";

export default function Sorotan({ slugify }) {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Sorotan</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Link to={`/detail/${slugify("Maria Angelica")}`} className="flex items-center gap-4 mb-4">
            <img src="https://asset-2.tribunnews.com/style/foto/bank/images/Menilik-jejak-karier-Ahmad-Sahroni-dulu-cuma-tukang-cuci-kapal.jpg" alt="Sahroni" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <h4 className="font-semibold">Sahroni</h4>
              <p className="text-sm text-gray-500">Pendaki</p>
            </div>
          </Link>
          <p className="text-sm text-gray-700">
            saya yang suka jalan-jalan merasa web ini berguna banget! approved by me!
          </p>
        </div>

        <div className="md:col-span-1 rounded-2xl overflow-hidden shadow">
          <Link to={`/detail/${slugify("Cappadocia Highlights")}`} className="block">
            <img src="https://image.idntimes.com/post/20170312/padang-da8236880f6f7aef99682051be32d2b0.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75" alt="cappadocia" className="w-full h-56 object-cover" />
          </Link>
        </div>

        <div className="md:col-span-1 rounded-2xl overflow-hidden shadow">
          <Link to={`/detail/${slugify("Historic Train Stations")}`} className="block">
            <img src="https://i1.wp.com/risetcdn.jatimtimes.com/images/2023/04/10/Ilustrasi-rendang-yang-merupakan-kuliner-khas-Sumatera-Barat.-Foto-Istimejatimtimes-Pe130bf3ac1843f80.jpg?quality=50&resize=1200,675" alt="train" className="w-full h-56 object-cover" />
          </Link>
        </div>
      </div>
    </section>
  );
}