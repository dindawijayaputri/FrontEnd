import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  const slugify = (str) =>
    str
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const slides = [
    {
      title: "Danau Toba, Sumatera Utara",
      subtitle: "Pesona alam dan budaya Batak yang memikat wisatawan dunia",
      image: "https://cdn.timesmedia.co.id/images/2018/06/30/Danau-toba.jpg",
    },
    {
      title: "Taman Nasional Gunung Leuser, Sumatera Utara",
      subtitle:
        "Salah satu kekayaan alam Indonesia yang menjadi rumah bagi flora dan fauna langka.",
      image:
        "https://indomgb.s3.amazonaws.com/wp-content/uploads/2023/03/22014458/Harimau-sumatera.jpeg",
    },
    {
      title: "Lembah Harau, Sumatera Barat",
      subtitle:
        "Terdapat air terjun dan keberadaan rumah tradisional Minangkabau menambah keunikan pemandangan",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fe/Lembah_harau_50_kota.jpg",
    },
    {
      title: "Sipiso-Piso, Sumatera Utara",
      subtitle:
        "Air Terjun Sipiso Piso yang merupakan salah satu air terjun tertinggi di Indonesia.",
      image: "https://galeriwisata.wordpress.com/wp-content/uploads/2010/01/sipiso-piso1.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  const goPrev = () => setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
  const goNext = () => setCurrentSlide((s) => (s + 1) % slides.length);
  const goTo = (i) => setCurrentSlide(i);

  return (
    <section className="relative w-full h-[780px] overflow-hidden">
      {slides.map((slide, i) => (
        <Link
          key={i}
          to={`/destinations/${slugify(slide.title)}`}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">{slide.title}</h1>
            <p className="mt-3 text-md md:text-lg text-gray-200 max-w-3xl">{slide.subtitle}</p>
          </div>
        </Link>
      ))}

      {/* Controls */}
      <button
        onClick={goPrev}
        aria-label="prev"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        aria-label="next"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full ${idx === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`slide-${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
