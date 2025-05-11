
import React from "react";
import { motion } from "framer-motion";
import { 
  Camera, 
  Users, 
  MessageCircle, 
  Presentation, 
  Network, 
  Image,
  GalleryHorizontal
} from "lucide-react";

interface GalleryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'discussion':
    case 'panel':
      return <MessageCircle size={18} />;
    case 'workshop':
    case 'collaboration':
      return <Users size={18} />;
    case 'keynote':
      return <Presentation size={18} />;
    case 'networking':
      return <Network size={18} />;
    case 'community':
    case 'leaders':
    case 'youth':
      return <Users size={18} />;
    case 'audience':
      return <GalleryHorizontal size={18} />;
    case 'media':
      return <Camera size={18} />;
    default:
      return <Image size={18} />;
  }
};

const getCategoryLabel = (category: string) => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

const GalleryFilter: React.FC<GalleryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="mb-8 overflow-x-auto pb-2">
      <motion.div 
        className="flex space-x-2 min-w-max"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all 
            ${selectedCategory === 'all' 
              ? 'bg-api-terracotta text-white shadow-md' 
              : 'bg-white text-api-midnight border border-gray-200 hover:bg-gray-50'
            }`}
          onClick={() => onSelectCategory('all')}
        >
          <GalleryHorizontal size={18} />
          <span>All Photos</span>
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all
              ${selectedCategory === category 
                ? 'bg-api-terracotta text-white shadow-md' 
                : 'bg-white text-api-midnight border border-gray-200 hover:bg-gray-50'
              }`}
            onClick={() => onSelectCategory(category)}
          >
            {getCategoryIcon(category)}
            <span>{getCategoryLabel(category)}</span>
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default GalleryFilter;
