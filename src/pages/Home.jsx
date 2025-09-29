import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import DestinationCategory from "../components/DestinationCategory";
import LatestPost from "../components/LatestPost";
import Sorotan from "../components/Sorotan";
import NewsLetter from "../components/NewsLetter";
import Testimoni from "../components/Testimoni";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const slugify = (str) =>
    str
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const testimonials = [
    {
      name: "Andi",
      comment: "Sungguh pengalaman yang luar biasa saat mengunjungi Danau Toba!",
      avatar: "https://gardaindonesia.id/wp-content/uploads/2025/07/9d5ff1ea-7e6d-47d5-88a6-26f0ef891f77-1669008667945-5a0b3176167c5e57c9e1222b58bc215f-1536x1024.jpg",
    },
    {
      name: "binara",
      comment: "berkat website ini aku jadi tau deh mau kemana wkwk",
      avatar: "https://i.pinimg.com/736x/dc/d6/40/dcd640ac1a3a16302d2b0f22d3d0d115.jpg",
    },
    {
      name: "vernon",
      comment: "Budaya Sumatera begitu unik, sangat berkesan berkunjung ke sini.",
      avatar: "https://i.pinimg.com/736x/6c/29/03/6c290300e2d3a20f53f0baeed5c687fe.jpg",
    },
    {
      name: "Budi",
      comment: "Pemandangan alamnya menenangkan, wajib dikunjungi bersama keluarga.",
      avatar: "https://i.pinimg.com/736x/06/21/46/06214613ba28884a03c9a0eb6409b873.jpg",
    },
  ];

  return (
    <main 
      className=" text-gray-800 bg-center  min-h-screen"
    >
      {/* Overlay untuk seluruh main agar teks terbaca */}
      <div className="bg-black/20 min-h-screen"> {/* Opacity 20% hitam - sesuaikan jika perlu */}
        <HeroSlider />
        <WhyChooseUs />
        <DestinationCategory />
        <LatestPost slugify={slugify} />
        <Sorotan slugify={slugify} />
        <NewsLetter slugify={slugify} />
        
        <section className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <Testimoni slugify={slugify} testimonials={testimonials} />
          <ContactForm />
        </section>
      </div>
    </main>
  );
}