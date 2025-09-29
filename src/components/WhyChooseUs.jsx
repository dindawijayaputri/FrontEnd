export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri */}
        <div>
          <h2 className="text-3xl font-bold text-green-900 mb-8">Kenapa Memilih Explore Sumatera?</h2>

          {/* Poin 1 */}
          <div className="flex items-start mb-6">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 text-green-700 rounded-lg mr-4">
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-900">PROFESIONAL & TERPERCAYA</h3>
              <p className="text-gray-600 mt-1">Lebih dari satu pekan menghadirkan layanan tour & travel secara profesional dan bertanggung jawab...</p>
            </div>
          </div>

          {/* Poin 2 */}
          <div className="flex items-start mb-6">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 text-green-700 rounded-lg mr-4">
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0l-3-3m3 3l3-3" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-900">MUDAH, CEPAT & MENYENANGKAN</h3>
              <p className="text-gray-600 mt-1">Kami hadir untuk membuat perjalanan Anda lebih praktis dan bebas ribet...</p>
            </div>
          </div>

          {/* Poin 3 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 text-green-700 rounded-lg mr-4">
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-900">FLEKSIBEL SESUAI KEBUTUHAN</h3>
              <p className="text-gray-600 mt-1">Setiap klien memiliki kebutuhan unik...</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="hidden lg:block">
          <div className="relative p-10 rounded-lg shadow-xl">
            <img src="https://cdn0-production-images-kly.akamaized.net/FvbUeuRAACw1Zt8T85NnyVP-MC4=/1280x1706/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2740710/original/039559900_1551418372-Pulau_Angso_Duo.jpg" alt="Pulau Angso Duo" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
