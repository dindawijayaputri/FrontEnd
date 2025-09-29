import React from "react";
import { Link } from "react-router-dom";

export default function LatestPost({ slugify }) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Postingan Terbaru</h2>
          <Link to="/detail" className="text-sm text-green-700 hover:underline">
            Baca Selengkapnya →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link
            to={`/detail/${slugify("Budaya")}`}
            className="rounded-2xl overflow-hidden shadow bg-white block"
          >
            <img
              src="https://www.sardanagroup.co.id/HP/production/images/news/festival-danau-toba.jpg_1663920107.jpg"
              alt="Kuliner Sumatera"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="text-xs text-gray-400 uppercase tracking-wide">Budaya</span>
              <h3 className="mt-2 text-xl font-semibold">
                Menyelami Keunikan Seni Budaya Sumatera yang Kaya Etnis Dan Sejarah.
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Explore Sumatera-Pulau Sumatera dengan keanekaragaman etnis dan perkembangan seni yang kaya, juga menjadi destinasi yang menarik bagi siapa pun yang ingin menjelajahi budaya daerah Indonesia.
              </p>
            </div>
          </Link>

          <div className="flex flex-col gap-6">
            <Link to={`/detail/${slugify("Hiking")}`} className="flex gap-4 items-start hover:underline">
              <img src="https://bolumenara.co.id/uploads/8/2023-09/5_gunung_di_medan.png" alt="pendakian" className="w-28 h-28 object-cover rounded-xl" />
              <div>
                <p className="text-xs text-gray-400 mb-1">Gunung</p>
                <h4 className="font-semibold">5 Gunung Berapi di Medan Sumatera Utara, Gunung Berapi Dekat Medan, ada yang bisa untuk Pendakian Hiking</h4>
              </div>
            </Link>

            <Link to={`/detail/${slugify("tips")}`} className="flex gap-4 items-start hover:underline">
              <img src="https://i0.wp.com/www.rukita.co/stories/wp-content/uploads/2023/12/2411354947.webp?resize=720%2C480&ssl=1" alt="nature" className="w-28 h-28 object-cover rounded-xl" />
              <div>
                <p className="text-xs text-gray-400 mb-1">Travel Tips</p>
                <h4 className="font-semibold">15 Tips Mendaki Gunung saat Musim Hujan di Medan yang Licin | Anak Gunung Sudah Tahu?</h4>
              </div>
            </Link>

            <div className="flex flex-col gap-6">
              <Link to={`/detail/${slugify("Mengenal Budaya Sumatera, Mulai dari Alat Musik sampai Pakaian Adat")}`} className="flex gap-4 items-start hover:underline">
                <img src="https://i0.wp.com/www.rukita.co/stories/wp-content/uploads/2023/10/sumber-bliblicom.webp?w=600&ssl=1" alt="alat musik" className="w-28 h-28 object-cover rounded-xl" />
                <div>
                  <p className="text-xs text-gray-400 mb-1">Musik Tradisional</p>
                  <h4 className="font-semibold">Mengenal Budaya Sumatera, Mulai dari Alat Musik sampai Pakaian Adat</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}