import React from "react";

export default function ContactForm() {
  return (
    <div className="rounded-lg p-6 flex flex-col">
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center md:text-left">
        Hubungi Kami
      </h2>
      <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
        <label className="flex flex-col">
          <span className="mb-1 font-semibold text-green-900">Nama</span>
          <input
            type="text"
            name="nama"
            placeholder="Masukkan nama Anda"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 font-semibold text-green-900">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Masukkan email Anda"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 font-semibold text-green-900">Ulasan</span>
          <textarea
            name="ulasan"
            rows={5}
            placeholder="Tulis ulasan Anda di sini"
            className="border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-green-700 text-white font-semibold py-3 rounded-md shadow hover:bg-green-600 transition"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}