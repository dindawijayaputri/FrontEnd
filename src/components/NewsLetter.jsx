import React from "react";

export default function NewsLetter() {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop&s=3c4c0e23e9d1b4e8a4f1e7b8e3f9e4b2')] bg-cover bg-center text-white py-16">
      <div className="max-w-3xl mx-auto text-center px-6 bg-black/30 rounded-lg py-10">
        <h3 className="text-3xl font-bold mb-3">Inspirasi Perjalanan di Kotak Masukmu</h3>
        <p className="mb-6 text-gray-200">Subscribe untuk tips, guide, dan penawaran eksklusif.</p>
        <form className="flex flex-col sm:flex-row items-center gap-3 justify-center" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Maukkan Email" className="px-4 py-3 rounded-full text-black w-full sm:w-auto" />
          <button type="submit" className="bg-green-700 hover:bg-green-600 transition text-white px-6 py-3 rounded-full font-medium">Subscribe</button>
        </form>
      </div>
    </section>
  );
}