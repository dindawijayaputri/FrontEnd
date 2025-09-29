import { useState, useEffect } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Ambil data dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:1337/api/galleries?populate=*",
          {
            headers: {
              Authorization:
                "Bearer 938efb472f70feddabbb10d4bf33e196fc0d726389ec88f7436cdcb840f17d96f1c443f7bdca3de0e58f8560c25511f934eabdfd0a8b888dffa5bee195f785383c239347a82d3d82e5de5ad47571bf57b645911031f3b36e42e866da15d058ba565992377ec6e04dd2dc1347348dd92bd618e187d167033c4082de356b4852be",
            },
          }
        );
        if (!res.ok) throw new Error("Gagal mengambil data");
        const data = await res.json();
        // Map agar struktur sama seperti data statis
        const mapped = data.data.map((item) => {
          const gambar = item.gambar?.[0] || item.attributes?.gambar?.[0];
          // Cari url image paling besar (large>medium>small>original)
          let src =
            gambar?.formats?.large?.url ||
            gambar?.formats?.medium?.url ||
            gambar?.formats?.small?.url ||
            gambar?.url;
          // Jika url dari strapi masih /uploads, prefix dengan host
          if (src && src.startsWith("/")) {
            src = `http://localhost:1337${src}`;
          }
          return {
            id: item.id,
            title: item.judul || item.attributes?.judul,
            description: item.deskripsi || item.attributes?.deskripsi,
            src,
          };
        });
        setImages(mapped);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const openModal = (id) => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;

    const currentIndex = images.findIndex((img) => img.id === selectedImage);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }

    setSelectedImage(images[newIndex].id);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Memuat data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="mt-10 min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Gallery Destinasi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jelajahi koleksi gambar destinasi wisata terbaik di Sumatera
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openModal(image.id)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.description}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Klik untuk melihat lebih detail
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white text-2xl z-10 p-2 hover:text-gray-300 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-4 rounded-full hover:bg-opacity-75 transition-all"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-4 rounded-full hover:bg-opacity-75 transition-all"
                aria-label="Next image"
              >
                ›
              </button>

              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={images.find((img) => img.id === selectedImage)?.src}
                  alt={
                    images.find((img) => img.id === selectedImage)?.description ||
                    "Galeri gambar destinasi wisata"
                  }
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {images.find((img) => img.id === selectedImage)?.title}
                  </h2>
                  <p className="text-gray-600">
                    {images.find((img) => img.id === selectedImage)?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
