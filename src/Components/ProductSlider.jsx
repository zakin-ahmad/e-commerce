import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductSlider = ({
  subTitle = "Today's",
  mainTitle = "Flash Sales",
}) => {
  const productsData = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", image: "/gamepad.png", discount: 40, currentPrice: 120, oldPrice: 160, rating: 5, reviews: 88 },
    { id: 2, name: "AK-900 Wired Keyboard", image: "/keyboard.png", discount: 35, currentPrice: 960, oldPrice: 1160, rating: 4, reviews: 75 },
    { id: 3, name: "IPS LCD Gaming Monitor", image: "/monitor.png", discount: 30, currentPrice: 370, oldPrice: 400, rating: 5, reviews: 99 },
    { id: 4, name: "S-Series Comfort Chair", image: "/chair.png", discount: 25, currentPrice: 375, oldPrice: 400, rating: 4.5, reviews: 99 },
    { id: 5, name: "Wired Gaming Mouse", image: "/mouse.png", discount: 20, currentPrice: 45, oldPrice: 60, rating: 4, reviews: 45 },
    { id: 6, name: "RGB Cooling Fan", image: "/fan.png", discount: 15, currentPrice: 25, oldPrice: 35, rating: 4.5, reviews: 30 },
    { id: 7, name: "Extra Product", image: "/mouse.png", discount: 10, currentPrice: 55, oldPrice: 70, rating: 4, reviews: 20 },
    { id: 8, name: "Another Product", image: "/fan.png", discount: 12, currentPrice: 30, oldPrice: 45, rating: 4.2, reviews: 18 },
    { id: 9, name: "More Product", image: "/keyboard.png", discount: 18, currentPrice: 80, oldPrice: 100, rating: 4.1, reviews: 22 },
    { id: 10, name: "More Product", image: "/keyboard.png", discount: 18, currentPrice: 80, oldPrice: 100, rating: 4.1, reviews: 22 },
    { id: 11, name: "More Product", image: "/keyboard.png", discount: 18, currentPrice: 80, oldPrice: 100, rating: 4.1, reviews: 22 },
    { id: 12, name: "More Product", image: "/keyboard.png", discount: 18, currentPrice: 80, oldPrice: 100, rating: 4.1, reviews: 22 },
    { id: 13, name: "More Product", image: "/keyboard.png", discount: 18, currentPrice: 80, oldPrice: 100, rating: 4.1, reviews: 22 },
    { id: 14, name: "More Product", image: "/keyboard.png", discount: 18, currentPrice: 80, oldPrice: 100, rating: 4.1, reviews: 22 },
    { id: 15, name: "More Product", image: "/keyboard.png", discount: 18, currentPrice: 80, oldPrice: 100, rating: 4.1, reviews: 22 },
  
  ];

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const BASE_URL = "http://localhost:5000/product";

   useEffect(() => {
    fetch(`${BASE_URL}`) // your GET products route
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => setError(err.message));
  }, []);

  console.log(BASE_URL)

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setItemsToShow(1);
      else if (width < 768) setItemsToShow(2);
      else if (width < 1024) setItemsToShow(3);
      else setItemsToShow(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = productsData.length;

  // ✅ Correct disable logic
  const maxIndex = Math.min(
    totalItems - itemsToShow,
    itemsToShow
  );

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section className="py-10 max-w-[1255px] mx-auto overflow-hidden">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[#DB4444] font-semibold">{subTitle}</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider">
            {mainTitle}
          </h2>
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full bg-gray-100 disabled:opacity-40"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="w-10 h-10 rounded-full bg-gray-100 disabled:opacity-40"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (105.5 / itemsToShow)}%)`,
          }}
        >
          {products.slice(0, 10).map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
