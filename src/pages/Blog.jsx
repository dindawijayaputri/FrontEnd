import React, { useState } from "react";

// Contoh data artikel blog dengan properti image dan category
const blogPosts = [
  {
    id: 1,
    title: "Menjelajahi Keindahan Danau Toba",
    summary:
      "Danau Toba adalah danau vulkanik terbesar di dunia yang menawarkan pemandangan alam dan budaya Batak yang memukau.",
    date: "2024-05-10",
    link: "/blog/menjelajahi-keindahan-danau-toba",
    image:
      "https://cdn.timesmedia.co.id/images/2018/06/30/Danau-toba.jpg",
    category: "travel",
  },
  {
    id: 2,
    title: "Tips Liburan Hemat di Sumatera Barat",
    summary:
      "Panduan lengkap untuk menikmati liburan hemat namun tetap menyenangkan di Sumatera Barat.",
    date: "2024-04-22",
    link: "/blog/tips-liburan-hemat-sumatera-barat",
    image:
      "https://asset.kompas.com/crops/fyNOO8Tm7rhR1fZbGCXbTojvKBs=/0x0:2040x1360/750x500/data/photo/2021/08/06/610c8dfb18f00.jpg",
    category: "tips",
  },
  {
    id: 3,
    title: "Kuliner Khas Minangkabau yang Wajib Dicoba",
    summary:
      "Rendang, sate padang, dan masakan khas lainnya yang menggugah selera dan wajib kamu coba saat berkunjung.",
    date: "2024-03-15",
    link: "/blog/kuliner-khas-minangkabau",
    image:
      "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/08/09/Rendang-tokopedia-703822894.jpg",
    category: "kuliner",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter artikel berdasarkan kategori yang dipilih
  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <main className="mt-20 min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-green-100 px-6">
      <section className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold text-green-900 mb-12 text-center">
          Blog Kami
        </h1>

        {/* Filter Kategori */}
        <div className="flex justify-center space-x-4 mb-10">
          {["all", "travel", "tips", "kuliner"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded font-semibold ${
                selectedCategory === cat
                  ? "bg-green-700 text-white"
                  : "bg-green-200 text-green-900 hover:bg-green-300"
              } transition`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          {filteredPosts.map(({ id, title, summary, date, link, image }) => (
            <article
              key={id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer overflow-hidden flex flex-col md:flex-row"
            >
              {/* Gambar Thumbnail */}
              <a
                href={link}
                className="block md:w-1/3 h-48 md:h-auto overflow-hidden"
                aria-label={`Baca artikel: ${title}`}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </a>

              {/* Konten Teks */}
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <a href={link} className="block">
                  <h2 className="text-3xl font-semibold text-green-900 mb-3 hover:underline">
                    {title}
                  </h2>
                </a>
                <p className="text-gray-700 mb-6">{summary}</p>
                <time className="text-sm text-green-700 font-medium">
                  {new Date(date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </article>
          ))}
          {filteredPosts.length === 0 && (
            <p className="text-center text-gray-600 text-lg">
              Tidak ada artikel untuk kategori ini.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}