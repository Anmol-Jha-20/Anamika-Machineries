import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";

const AnamikaGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Mock gallery data with placeholder images
  const galleryData = [
    {
      id: 1,
      title: "Printing machine",
      category: "Printing-machine",
      description:
        "High precision CNC machining center for complex manufacturing",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/6/316243772/IS/XR/HV/29805837/new-product-250x250.jpeg",
      tags: ["precision", "manufacturing", "cnc"],
    },
    {
      id: 2,
      title: "Perfect Binding Machine",
      category: "Perfect-Binding-Machine",
      description: "Heavy duty industrial lathe for metal working operations",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389414585/TE/QR/FD/29805837/brinder-trimmer-machine-500x500.jpeg",
      tags: ["metalworking", "industrial", "lathe"],
    },
    {
      id: 3,
      title: "Pasting Machine",
      category: "Pasting-Machine",
      description: "Professional milling machine for precision cutting",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/394181020/JN/GT/KR/29805837/4-fold-side-lock-bottom-carton-paste-machine-500x500.jpg",
      tags: ["milling", "precision", "cutting"],
    },
    {
      id: 4,
      title: "Die Cutting Machine",
      category: "Die-Cutting-Machine",
      description: "Fully automated assembly line for efficient production",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/391350744/PF/QR/NA/29805837/cross-land-dai-30-40-machine-500x500.jpeg",
      tags: ["automation", "assembly", "production"],
    },
    {
      id: 5,
      title: "Paper Cutting Machine",
      category: "Paper-Cutting-Machine",
      description: "Advanced quality control and inspection equipment",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389284558/YK/MJ/SO/29805837/rapid-prototype-machine-500x500.jpeg",
      tags: ["quality", "inspection", "control"],
    },
    {
      id: 6,
      title: "Folding Machine",
      category: "Folding-Machine",
      description: "Heavy duty hydraulic press for metal forming",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389314914/BN/RW/RS/29805837/used-polar-92-paper-cutting-machine-500x500.jpeg",
      tags: ["hydraulic", "press", "forming"],
    },
    {
      id: 7,
      title: "Trimming Machine",
      category: "Trimming-Machine",
      description: "Precision grinding machine for surface finishing",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/389324392/QR/NM/CW/29805837/offset-printing-machines-500x500.jpeg",
      tags: ["grinding", "finishing", "precision"],
    },
    {
      id: 8,
      title: "Heidelberg CD 102-6 LX Offset Printing Machine",
      category: "welding",
      description: "Professional welding equipment and setup",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/393739791/FT/GN/JG/29805837/printing-machine-500x500.jpeg",
      tags: ["welding", "fabrication", "metalwork"],
    },
    {
      id: 9,
      title: "6 Clamp Wellbound Perfect Binding Machine",
      category: "testing",
      description: "Materials testing and analysis laboratory",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/394187554/YT/HV/EG/29805837/wellbound-clamp-perfect-binder-500x500.jpg",
      tags: ["testing", "analysis", "laboratory"],
    },
  ];

  const categories = [
    { id: "all", name: "All Machines", count: galleryData.length },
    {
      id: "Printing-machine",
      name: "Printing machine",
      count: galleryData.filter((item) => item.category === "Printing-machine")
        .length,
    },
    {
      id: "Perfect-Binding-Machine",
      name: "Perfect Binding Machine",
      count: galleryData.filter(
        (item) => item.category === "Perfect-Binding-Machine"
      ).length,
    },
    {
      id: "Pasting-Machine",
      name: "Pasting Machine",
      count: galleryData.filter((item) => item.category === "Pasting-Machine")
        .length,
    },
    {
      id: "Die-Cutting-Machine",
      name: "Die Cutting Machine",
      count: galleryData.filter(
        (item) => item.category === "Die-Cutting-Machine"
      ).length,
    },
    {
      id: "Paper-Cutting-Machine",
      name: "Paper Cutting Machine",
      count: galleryData.filter(
        (item) => item.category === "Paper-Cutting-Machine"
      ).length,
    },
    {
      id: "Folding-Machine",
      name: "Folding Machine",
      count: galleryData.filter((item) => item.category === "Folding-Machine")
        .length,
    },
    {
      id: "Trimming-Machine",
      name: "Trimming Machine",
      count: galleryData.filter((item) => item.category === "Trimming-Machine")
        .length,
    },
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const filteredImages = galleryData.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % filteredImages.length
        : (currentImageIndex - 1 + filteredImages.length) %
          filteredImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const ImageCard = ({ item, index }) => (
    <div
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      onClick={() => openModal(item, index)}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
            <ZoomIn className="w-5 h-5 text-gray-700" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-white font-semibold text-lg mb-1">
            {item.title}
          </h3>
          <p className="text-white/90 text-sm line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse"
        >
          <div className="w-full h-64 bg-gray-300"></div>
          <div className="p-6">
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-3"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* SEO Meta Tags would go in document head */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        {/* Header Section */}
        <header className="bg-white shadow-sm top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Anamika</span>{" "}
                <span style={{ color: "#FF8904" }}>Machineries</span>{" "}
                <span className="text-yellow-500">Gallery</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive collection of industrial machinery and
                manufacturing equipment
              </p>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search machines, equipment..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-40 pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredImages.length} of {galleryData.length} machines
              {searchTerm && (
                <span className="ml-2 text-blue-600 font-medium">
                  for "{searchTerm}"
                </span>
              )}
            </p>
          </div>

          {/* Gallery Grid */}
          {isLoading ? (
            <LoadingSkeleton />
          ) : filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((item, index) => (
                <ImageCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No machines found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </main>

        {/* Image Modal */}
        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative max-w-5xl max-h-full bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Modal Header */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={closeModal}
                  className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage("prev")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors z-10"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                  </button>
                  <button
                    onClick={() => navigateImage("next")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors z-10"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                  </button>
                </>
              )}

              {/* Modal Content */}
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-96 lg:h-[600px] object-cover"
                  />
                </div>
                <div className="lg:w-1/3 p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedImage.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedImage.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <button
                      className="w-full py-3 px-6 text-white rounded-lg font-semibold transition-colors"
                      style={{ backgroundColor: "#FF8904" }}
                    >
                      Request Quote
                    </button>
                    <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      View Specifications
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AnamikaGallery;
