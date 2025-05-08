
import React from "react";

interface TopicIndicatorsProps {
  totalCount: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

const TopicIndicators: React.FC<TopicIndicatorsProps> = ({
  totalCount,
  activeIndex,
  onSelect
}) => {
  return (
    <div className="flex justify-center mt-6 gap-2 flex-wrap">
      {Array.from({ length: totalCount }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={`rounded-full transition-all ${
            idx === activeIndex ? "w-10 bg-api-terracotta" : "w-3 bg-api-midnight/20 hover:bg-api-midnight/40"
          } h-3`}
          aria-label={`View topic ${idx + 1}`}
        />
      ))}
    </div>
  );
};

export default TopicIndicators;
