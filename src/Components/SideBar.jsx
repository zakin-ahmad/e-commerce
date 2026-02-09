import React from 'react';
import { ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const categories = [
    { name: "Woman's Fashion", hasSub: true },
    { name: "Men's Fashion", hasSub: true },
    { name: "Electronics", hasSub: false },
    { name: "Home & Lifestyle", hasSub: false },
    { name: "Medicine", hasSub: false },
    { name: "Sports & Outdoor", hasSub: false },
    { name: "Baby's & Toys", hasSub: false },
    { name: "Groceries & Pets", hasSub: false },
    { name: "Health & Beauty", hasSub: false },
  ];

  return (
    <aside className="w-[250px] lg:border-r border-black/10 pr-4">
      <ul className="space-y-4">
        {categories.map((cat, index) => (
          <li 
            key={index} 
            className="group flex items-center justify-between cursor-pointer hover:text-[#DB4444] transition-colors"
          >
            <span className="text-base font-normal">{cat.name}</span>
            {cat.hasSub && (
              <ChevronRight 
                size={18} 
                className="text-black group-hover:text-[#DB4444]" 
              />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;