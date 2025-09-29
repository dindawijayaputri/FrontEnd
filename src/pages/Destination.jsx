import { useState } from 'react';

const Destination = () => {
  const destinasiList = [
    {
      id: 1,
      title: "Bukit Lawang Jungle",
      category: "gunung",
      description: "Bukit Lawang menjadi gerbang utama menuju petualangan tak terlupakan di Taman Nasional Gunung Leuser. Terletak di tepi Sungai Bahorok, destinasi ini menawarkan pengalaman unik melihat orangutan Sumatera secara langsung di habitat aslinya. Jelajahi hutan tropis dengan trekking yang mendebarkan, nikmati sensasi arung jeram atau tubing di sungai, dan temukan keindahan Gua Kelelawar. Rasakan kedamaian alam yang menenangkan dan berinteraksi dengan penduduk lokal yang ramah.",
      image: "https://museumofwander.com/wp-content/uploads/2022/08/DSC0183-1536x1024.jpg",
      openingHours: "06:00 - 16:00",
      ticketPrice: "Rp 6000",
      travelTime: "94 km dari Medan"
    },
    {
      id: 2,
      title: "Rumah Gadang",
      category: "budaya",
      description: "Rumah Gadang merupakan rumah adat milik suku Minangkabau asal Sumatera Barat. Rumah ini mempunyai atap yang curam dan dinding yang dihiasi ukiran khas. Kawasan Seribu Rumah Gadang adalah objek wisata budaya di Nagari Koto Baru, Kecamatan Sungai Pagu, Kabupaten Solok Selatan, Sumatera Barat, Indonesia. Di sini terdapat banyak rumah gadang, rumah tradisional Minangkabau, dalam berbagai bentuk dan ukuran. Pada tahun 2017, kawasan ini dinobatkan sebagai Kampung Adat Terpopuler di Indonesia.",
      image: "https://gardencenter.co.id/wp-content/uploads/2020/08/Rumah-adat-gadang-padang.jpg",
      openingHours: "07:00 - 19:00",
      ticketPrice: "Gratis",
      travelTime: "150 menit dari Kota Padang"
    },
    {
      id: 3,
      title: "Taman Nasional Kerinci Seblat",
      category: "gunung",
      description: "Taman Nasional Kerinci Seblat (disngkat TNKS) adalah taman nasional terbesar di Sumatra yang memiliki luas wilayah sebesar 13,750 km². Taman nasional ini juga memiliki beragam flora dan fauna. Sekitar 4.000 spesies tumbuhan tumbuh di wilayah taman nasional termasuk bunga terbesar di dunia Rafflesia arnoldi, dan bunga tertinggi di dunia, Amorphophallus titanum.[4] Fauna di wilayah taman nasional terdiri antara lain harimau sumatra, badak sumatra, gajah sumatra, macan dahan, tapir melayu, beruang madu, dan sekitar 370 spesies burung",
      image: "https://assets-static.traxonsky.com/wp-content/uploads/2022/09/raflesia-arnoldi.jpg",
      openingHours: "06:00 - 17:00",
      ticketPrice: "Rp 150.000",
      travelTime: "±390 km, ±9 jam Dari Padang"
    },
    {
      id: 4,
      title: "Air Terjun Lembah Anai",
      category: "air",
      description: "Lokasinya yang berada di batas barat Cagar Alam Lembah Anai menjadikan suasana di sekitarnya masih sangat alami, dikelilingi hutan lebat dan pepohonan rindang. Di sekitar air terjun, pengunjung juga dapat melihat monyet-monyet yang berkeliaran. Saat musim liburan, tempat ini ramai dikunjungi oleh ratusan wisatawan. Keindahan Air Terjun Lembah Anai menjadikannya sebagai salah satu ikon pariwisata di Provinsi Sumatera Barat. Aliran air yang jernih mengalir dari perbukitan menuju lereng, terus melewati hutan di Gunung Singgalang sebelum jatuh ke tebing yang curam. Dari tebing tersebut, air terjun mengalir ke dasar lembah Anai dan membentuk kolam yang menampung air. Kabut air yang dihasilkan menciptakan pemandangan yang menakjubkan, terutama saat terkena sinar matahari yang membuatnya berkilau dengan warna-warni.",
      image: "https://cdn.minangtourism.com/2024/08/01202934/Air-Terjun-Lembah-Anai.jpg",
      openingHours: "24 jam",
      ticketPrice: "Gratis",
      travelTime: "5 jam dari Padang"
    },
    {
      id: 5,
      title: "Pulau Kemaro",
      category: "air",
      description: "Pulau Kemaro, merupakan sebuah delta kecil di Sungai Musi, terletak sekitar 6 km dari Jembatan Ampera. Pulau Kemaro terletak di daerah industri, yaitu di antara Pabrik Pupuk Sriwijaya dan Pertamina Plaju dan Sungai Gerong. Posisi Pulau Kemaro adalah agak ke timur dari pusat Kota Palembang.",
      image: "https://enimekspres.bacakoran.co/upload/9e0365e5ddacc477e49ede2456513651.jpg",
      openingHours: "24 jam",
      ticketPrice: "Rp 100.000",
      travelTime: "6 km dari jembatan Ampera"
    },
    {
      id: 6,
      title: "Asia Heritage",
      category: "budaya",
      description: "Asia Heritage adalah sebuah kawasan wisata bertema di Pekanbaru, Riau, yang menyajikan replika suasana dan budaya dari berbagai negara di Asia. Di sini, pengunjung bisa merasakan sensasi keliling Asia dalam satu lokasi.",
      image: "https://parboaboa.com/data/foto_berita/asia-heritage-pkb.webp",
      openingHours: "08.00–18.00 WIB.",
      ticketPrice: "Rp30.000",
      travelTime: "Jl. Yos Sudarso No. KM. 12, Muara Fajar, Kecamatan Rumbai, Kota Pekanbaru."
    },
    {
      id: 7,
      title: "Ya'ahowu Nias Festival",
      category: "budaya",
      description: "Festival Ya’ahowu adalah salah satu perayaan budaya terbesar di Pulau Nias, Sumatera Utara. Diselenggarakan setiap tahun, festival ini merayakan tradisi, kepercayaan, dan kekayaan budaya masyarakat Nias. Festival ini tidak hanya menjadi ajang perayaan tetapi juga kesempatan untuk melestarikan warisan budaya yang telah ada sejak lama. Festival ini biasanya dilaksanakan dalam rangkaian acara yang penuh warna dan kegembiraan. Masyarakat Nias akan mengenakan pakaian tradisional, menari tarian adat, dan memainkan musik tradisional yang khas. Ya’ahowu sendiri berasal dari bahasa Nias yang berarti “Selamat datang” atau “Selamat datang kembali”. Festival ini merupakan ungkapan rasa syukur dan penghormatan kepada leluhur serta dewa-dewa yang diyakini menjaga tanah dan masyarakat Nias.",
      image: "https://penelitianpariwisata.id/wp-content/uploads/2024/08/image5.jpg",
      openingHours: "06:00 - 16:00",
      ticketPrice: "Rp 6000",
      travelTime: "94 km dari Medan"
    },
    {
      id: 8,
      title: "Air Terjun Situmurun Uluan Block Geosite",
      category: "air",
      description: "Air Terjun Situmurun, yang juga dikenal dengan nama Binangalom, merupakan bagian dari Geosite Blok Uluan di Kaldera Toba UNESCO Global Geopark. Keunikan utama dari air terjun ini adalah aliran airnya yang langsung jatuh ke Danau Toba, menjadikannya pemandangan yang istimewa.",
      image: "https://calderatobageopark.org/wp-content/uploads/2025/06/DJI_0538-scaled.jpg#9087",
      openingHours: "07:00 - 19:00",
      ticketPrice: "Gratis",
      travelTime: "1,5 jam menyebrangi Danu Toba."
    },
    {
      id: 9,
      title: "Gunung Sinabung",
      category: "gunung",
      description: "Gunung Sinabung adalah gunung berapi aktif tipe stratovolcano yang terletak di Dataran Tinggi Karo, Kabupaten Karo, Sumatra Utara. Gunung ini sempat tidak aktif selama berabad-abad sebelum kembali meletus pada tahun 2010 dan terus menunjukkan aktivitas vulkanik sejak saat itu.",
      image: "https://cdngnfi2.sgp1.cdn.digitaloceanspaces.com/gnfi/uploads/images/2023/01/3023312023-Sinabung.jpg",
      openingHours: "06:00 - 17:00",
      ticketPrice: "Rp 150.000",
      travelTime: "40 kilometer barat laut Kota Medan"
    },
    {
      id: 10,
      title: "Festival Siti Nurbaya",
      category: "budaya",
      description: "Acara ini menjadi kesempatan sempurna bagi para pecinta sepeda untuk menjelajahi keindahan Kota Padang sambil bersepeda. Dengan rute yang menantang namun menawarkan pemandangan yang memukau, para peserta akan melalui berbagai lanskap menarik mulai dari kota, pantai, hingga pegunungan. Tidak hanya sekadar bersepeda, acara ini juga menjadi ajang untuk menjalin silaturahmi antar pesepeda dari berbagai daerah. Bagi kamu yang mencari pengalaman bersepeda yang berbeda dan seru, jangan lewatkan Gowes Siti Nurbaya Adventure VII",
      image: "https://westsumatra360.com/wp-content/uploads/2024/06/Festival-Siti-Nurbaya-Photo-legas-Net.jpg",
      openingHours: "24 jam",
      ticketPrice: "Gratis",
      travelTime: "5 jam dari Padang"
    },
  ];

  const [selectedDestinasi, setSelectedDestinasi] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const openDetail = (id) => {
    setSelectedDestinasi(id);
  };

  const closeDetail = () => {
    setSelectedDestinasi(null);
  };

  const destinasi = destinasiList.find(d => d.id === selectedDestinasi);

  // Filter destinasi berdasarkan kategori yang dipilih
  const filteredDestinasiList = selectedCategory === "all"
    ? destinasiList
    : destinasiList.filter(d => d.category === selectedCategory);

  return (
    <div className="mt-4 min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Destinasi Wisata</h1>

        {/* Filter Kategori */}
        <div className="flex justify-center space-x-4 mb-8">
          {["all", "air", "gunung", "budaya"].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded ${
                selectedCategory === cat ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid Destinasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinasiList.map(destinasi => (
            <div
              key={destinasi.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => openDetail(destinasi.id)}
            >
              <img
                src={destinasi.image}
                alt={destinasi.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{destinasi.title}</h2>
                <p className="mt-2 text-gray-600 line-clamp-3">{destinasi.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        {selectedDestinasi !== null && destinasi && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-lg relative">
              <button
                onClick={closeDetail}
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-3xl font-bold"
                aria-label="Close detail"
              >
                &times;
              </button>
              <img
                src={destinasi.image}
                alt={destinasi.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {destinasi.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {destinasi.description}
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li><strong>Waktu Buka:</strong> {destinasi.openingHours}</li>
                  <li><strong>Harga Tiket Masuk:</strong> {destinasi.ticketPrice}</li>
                  <li><strong>Rute Perjalanan:</strong> {destinasi.travelTime}</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destination;