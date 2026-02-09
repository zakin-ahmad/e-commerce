import React from 'react';
import ProductCard from './ProductCard';

const BestSelling = () => {
  // Data limited to the top 4 products as shown in the UI
  const products = [
    { id: 101, name: "The north coat", image: "/coat.png", currentPrice: 260, oldPrice: 360, rating: 5, reviews: 65 },
    { id: 102, name: "Gucci duffle bag", image: "/bag.png", currentPrice: 960, oldPrice: 1160, rating: 4.5, reviews: 65 },
    { id: 103, name: "RGB liquid CPU Cooler", image: "/cooler.png", currentPrice: 160, oldPrice: 170, rating: 4.5, reviews: 65 },
    { id: 104, name: "Small BookSelf", image: "/shelf.png", currentPrice: 360, oldPrice: null, rating: 5, reviews: 65 },
    { id: 102, name: "Gucci duffle bag", image: "/bag.png", currentPrice: 960, oldPrice: 1160, rating: 4.5, reviews: 65 },
    { id: 103, name: "RGB liquid CPU Cooler", image: "/cooler.png", currentPrice: 160, oldPrice: 170, rating: 4.5, reviews: 65 },
    { id: 104, name: "Small BookSelf", image: "/shelf.png", currentPrice: 360, oldPrice: null, rating: 5, reviews: 65 }

  ];

  return (
    <section className="py-16 max-w-[1170px] mx-auto">
      {/* Header Section */}
      <div className="flex items-end justify-between mb-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
            <span className="text-[#DB4444] font-semibold">This Month</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider">Best Selling Products</h2>
        </div>
        <button className="bg-[#DB4444] text-white px-10 py-3 rounded-sm font-medium hover:bg-[#c33a3a] transition-colors">
          View All
        </button>
      </div>

      {/* Flexbox Container */}
      <div className="grid grid-cols-2 md:grid-cols-4 flex-wrap lg:flex-nowrap gap-12 justify-center lg:justify-between">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;