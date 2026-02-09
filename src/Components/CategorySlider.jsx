import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad2 } from 'lucide-react';
import CategoryCard from './CategoryCard';

const CategorySlider = () => {
  const categories = [
    { id: 1, name: "Phones", icon: Smartphone },
    { id: 2, name: "Computers", icon: Monitor },
    { id: 3, name: "SmartWatch", icon: Watch },
    { id: 4, name: "Camera", icon: Camera },
    { id: 5, name: "HeadPhones", icon: Headphones },
    { id: 6, name: "Gaming", icon: Gamepad2 },
    { id: 7, name: "Accessories", icon: Watch }, // Extra item to test sliding
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setItemsToShow(1);      // Very Small: 1
      else if (width < 640) setItemsToShow(2); // XS: 2
      else if (width < 768) setItemsToShow(3); // SM: 3
      else if (width < 1024) setItemsToShow(4);// MD: 4
      else setItemsToShow(6);                  // LG/Desktop: 6
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, categories.length - itemsToShow);

  return (
    <section className="h-72 max-w-[1170px] mx-auto overflow-hidden border-b border-black/10">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
            <span className="text-[#DB4444] font-semibold">Categories</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider">Browse By Category</h2>
        </div>

        {/* Navigation */}
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${currentIndex === 0 ? 'bg-gray-100 text-gray-300' : 'bg-[#F5F5F5] hover:bg-gray-200'}`}
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={() => setCurrentIndex(prev => Math.min(maxIndex, prev + 1))}
            disabled={currentIndex >= maxIndex}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${currentIndex >= maxIndex ? 'bg-gray-100 text-gray-300' : 'bg-[#F5F5F5] hover:bg-gray-200'}`}
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Slider Viewport */}
      <div className="relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              style={{ width: `${100 / itemsToShow}%` }} 
              className="flex-shrink-0"
            >
              <CategoryCard name={cat.name} Icon={cat.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;