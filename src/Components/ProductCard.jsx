import { Heart, Eye, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative max-w-52 sm:max-w-56 md:max-w-60 lg:max-w-72 cursor-pointer">
      {/* Upper Section: Image & Actions */}
      <div className="relative h-[200px] md:h-[250px] w-full overflow-hidden rounded-sm bg-[#F5F5F5] flex items-center justify-center transition-shadow duration-300 group-hover:shadow-lg">
        
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute left-3 top-3 rounded bg-[#DB4444] px-3 py-1 text-xs font-medium text-white">
            -{product.discount}%
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors hover:bg-[#DB4444] hover:text-white">
            <Heart size={18} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors hover:bg-[#DB4444] hover:text-white">
            <Eye size={18} />
          </button>
        </div>

        {/* Product Image */}
        <img 
          src={`http://localhost:5000/${product.image}`}
          alt={product.productName} 
          className="h-auto w-auto max-h-[180px] object-contain transition-transform duration-300 group-hover:scale-110"
        />

        {/* Add to Cart Button (Slide-up on Hover) */}
        <button className="absolute bottom-0 w-full translate-y-full bg-black py-3 text-center text-sm font-medium text-white transition-all duration-300 group-hover:translate-y-0">
          Add To Cart
        </button>
      </div>

      {/* Lower Section: Info */}
      <div className="mt-4 space-y-2">
        <h3 className="text-sm md:text-base font-semibold text-black truncate">{product.productName}</h3>
        
        <div className="flex items-center gap-3">
          <span className="font-medium text-[#DB4444]">${product.currentPrice}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex text-[#FFAD33]">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill={i < Math.floor(product.rating) ? "#FFAD33" : "none"} 
                stroke={i < Math.floor(product.rating) ? "none" : "#D1D5DB"}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-gray-400">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;