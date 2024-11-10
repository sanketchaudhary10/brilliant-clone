// src/components/CategoryTab.tsx
import React from 'react';
import '././CategoryTab.module.css';

interface CategoryTabProps {
  iconSrc: string;
  label: string;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ iconSrc, label }) => {
  return (
    <div className="category-tab">
      <img src={iconSrc} alt={label} className="category-icon" />
      <span>{label}</span>
    </div>
  );
};

export default CategoryTab;
