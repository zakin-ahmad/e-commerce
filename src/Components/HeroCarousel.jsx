import React, { useState, useEffect } from 'react';
import { Apple, ArrowRight, Watch, Tablet } from 'lucide-react';

const   HeroCarousel = () => {
  // 1. Updated JSON with Icon Components
  const slideData = [
    {
      id: 1,
      subTitle: "iPhone 14 Series",
      title: "Up to 10% off Voucher",
      linkText: "Shop Now",
      image: "/appleImage.jpg", 
      Icon: Apple, 
      bgColor: "bg-black"
    },
    {
      id: 2,
      subTitle: "Apple Watch Ultra",
      title: "New Season Arrivals",
      linkText: "Shop Now",
      image: "https://v-p.com/watch.png",
      Icon: Watch, 
      bgColor: "bg-black"
    },
    {
      id: 3,
      subTitle: "iPad Pro M2",
      title: "Experience Next Level",
      linkText: "Shop Now",
      image: "https://v-p.com/ipad.png",
      Icon: Tablet,
      bgColor: "bg-black"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slideData.length]);

  return (
    <div className="hidden md:block relative md:max-w-[710px] lg:max-w-[892px] w-full bg-black text-white overflow-hidden lg:mt-0">
      <div className="md:max-w-[710px] lg:max-w-[892px] md:border mx-auto px-4">
        
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slideData.map((slide) => {
            // Destructure the Icon component from the slide object
            const { Icon } = slide; 
            
            return (
              <div 
                key={slide.id} 
                className="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-between py-8 px-8"
              >
                <div className="flex flex-col gap-4 text-center md:text-left z-10">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    {/* Render the dynamic icon here */}
                    <Icon size={44} fill="white" className="mb-1" />
                    <span className="text-sm md:text-base font-light tracking-wide">{slide.subTitle}</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tight">
                    {slide.title.split('off').map((chunk, i, arr) => (
                      <React.Fragment key={i}>
                        {chunk}{i !== arr.length - 1 ? <><br /> off</> : ''}
                      </React.Fragment>
                    ))}
                  </h1>

                  <div className="flex justify-center md:justify-start pt-8">
                    <a href="#" className="flex items-center gap-2 group border-b border-white/60 hover:border-white pb-1 font-medium transition-all">
                      {slide.linkText} 
                      <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="flex justify-center w-full md:w-1/2">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="md:w-[400px] object-contain drop-shadow-2xl" 
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bullet Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slideData.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative flex items-center justify-center transition-all duration-300 ${
                currentSlide === index ? 'w-4 h-4' : 'w-3 h-3'
              }`}
            >
              <span className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-red-500 border-2 border-white' : 'bg-gray-500'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;