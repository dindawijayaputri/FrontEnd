import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic submit pesan/saran (misal kirim email atau simpan database)
    setSubmitted(true);
  };

  return (
    <div className="mt-20 min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Kontak Kami</h1>
        <p className="text-center text-gray-600 mb-10">
          Website ini menyediakan informasi wisata di Sumatera. Jika Anda memiliki pertanyaan, saran, atau ingin berbagi pengalaman, silakan hubungi kami melalui form di bawah.
        </p>

        {/* Peta Lokasi */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Lokasi Kami</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Lokasi Kantor Explore Sumatera"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1234567890123!2d98.67890123456789!3d3.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313123456789ab%3A0x123456789abcdef!2sJl.%20Merdeka%20No.123%2C%20Medan!5e0!3m2!1sen!2sid!4v1680000000000!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* Form Kontak */}
        <section className="mb-16">
          {submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Terima kasih!</strong>
              <span className="block sm:inline"> Pesan atau saran Anda telah kami terima.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-green-700 text-center">Form Kontak</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Nama lengkap"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Pesan / Saran
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Tulis pesan atau saran Anda di sini..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-white bg-green-600 hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Jam Operasional */}
        <section className="mb-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Jam Operasional</h2>
          <ul className="text-gray-700 space-y-1">
            <li>Senin - Jumat: 08.00 - 17.00 WIB</li>
            <li>Sabtu: 09.00 - 15.00 WIB</li>
            <li>Minggu & Hari Libur: Tutup</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-16 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-green-700">Pertanyaan yang Sering Diajukan (FAQ)</h2>
          <div className="space-y-4">
            <details className="border border-gray-300 rounded-md p-4">
              <summary className="font-semibold cursor-pointer">Apakah website ini melayani pemesanan tiket?</summary>
              <p className="mt-2 text-gray-700">
                Tidak, website ini hanya menyediakan informasi terkait wisata di Sumatera tanpa layanan pemesanan tiket atau pembayaran.
              </p>
            </details>
            <details className="border border-gray-300 rounded-md p-4">
              <summary className="font-semibold cursor-pointer">Bagaimana cara mendapatkan informasi terbaru?</summary>
              <p className="mt-2 text-gray-700">
                Anda dapat mengikuti update melalui halaman blog dan berita yang kami sediakan di website ini.
              </p>
            </details>
            <details className="border border-gray-300 rounded-md p-4">
              <summary className="font-semibold cursor-pointer">Bisakah saya mengirimkan saran atau pertanyaan?</summary>
              <p className="mt-2 text-gray-700">
                Tentu, silakan gunakan form kontak di atas untuk mengirim pesan atau saran kepada kami.
              </p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;