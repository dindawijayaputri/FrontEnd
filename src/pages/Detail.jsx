import React from "react";
import { useParams } from "react-router-dom";

// Data artikel yang sama dengan yang ada di Home.jsx (pastikan slug sama)
const blogPosts = [
{
    id: 1,
    title: "Menyelami Keunikan Seni Budaya Sumatera yang Kaya Etnis Dan Sejarah.",
    slug: "Budaya",
    content: `
    <p>Explore Sumatera-Pulau Sumatera dengan keanekaragaman etnis dan perkembangan seni yang kaya, juga menjadi destinasi yang menarik bagi siapa pun yang ingin menjelajahi budaya daerah Indonesia.</p>
    <p>Di sini kamu bisa menemukan berbagai festival budaya, tarian tradisional, dan kerajinan tangan khas yang memukau.</p>
    `,
    image: "https://www.sardanagroup.co.id/HP/production/images/news/festival-danau-toba.jpg_1663920107.jpg",
},
{
    id: 2,
    title: "5 Gunung Berapi di Medan Sumatera Utara, Gunung Berapi Dekat Medan, ada yang bisa untuk Pendakian Hiking",
    slug: "hiking",
    content: `
    <p>Medan dan sekitarnya memiliki beberapa gunung berapi yang menarik untuk didaki, dengan pemandangan alam yang luar biasa.</p>
    <p>Beberapa gunung berapi ini juga menawarkan jalur pendakian yang menantang dan pengalaman hiking yang tak terlupakan.</p>
    `,
    image: "https://bolumenara.co.id/uploads/8/2023-09/5_gunung_di_medan.png",
},
{
    id: 3,
    title: "15 Tips Mendaki Gunung saat Musim Hujan di Medan yang Licin | Anak Gunung Sudah Tahu?",
    slug: "tips",
    content: `
    <p>Mendaki gunung saat musim hujan memerlukan persiapan ekstra agar tetap aman dan nyaman.</p>
    <p>Berikut adalah 15 tips penting yang wajib diketahui oleh para pendaki gunung di Medan.</p>
    `,
    image: "https://i0.wp.com/www.rukita.co/stories/wp-content/uploads/2023/12/2411354947.webp?resize=720%2C480&ssl=1",
},
{
    id: 4,
    title: "Mengenal Budaya Sumatera, Mulai dari Alat Musik sampai Pakaian Adat",
    slug: "mengenal-budaya-sumatera",
    content: `
    <p>Budaya Sumatera sangat kaya dengan berbagai alat musik tradisional dan pakaian adat yang unik.</p>
    <p>Pelajari lebih dalam tentang keunikan budaya ini dan bagaimana masyarakat setempat melestarikannya.</p>
    `,
    image: "https://i0.wp.com/www.rukita.co/stories/wp-content/uploads/2023/10/sumber-bliblicom.webp?w=600&ssl=1",
},
];

export default function Detail() {
const { slug } = useParams();

  // Cari artikel berdasarkan slug
const article = blogPosts.find((post) => post.slug === slug);

if (!article) {
    return (
    <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Artikel tidak ditemukan</h1>
        <p>Maaf, artikel yang Anda cari tidak tersedia.</p>
    </main>
    );
}

return (
    <main className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
    <img
        src={article.image}
        alt={article.title}
        className="w-full h-auto rounded mb-6"
    />
    <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
    />
    </main>
);
}