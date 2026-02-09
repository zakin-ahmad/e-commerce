import { Smartphone } from 'lucide-react'; // Example icon

const CategoryCard = ({ name = "Phones", Icon = Smartphone, active = false }) => {
  return (
    <div
      className={`
        /* Layout: Flexbox to center content, fixed square size */
        group flex flex-col items-center justify-center gap-4 
        w-[170px] h-[145px] rounded-md border cursor-pointer transition-all duration-300
        
        /* Default State: White background, gray border */
        ${active 
          ? 'bg-[#DB4444] border-[#DB4444] text-white' 
          : 'bg-white border-black/10 text-black hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white'
        }
      `}
    >
      {/* Icon with thin stroke to match the UI */}
      <Icon 
        size={56} 
        strokeWidth={1} 
        className="transition-colors duration-300"
      />
      
      {/* Category Name */}
      <span className="text-sm font-medium tracking-wide">
        {name}
      </span>
    </div>
  );
};

export default CategoryCard;