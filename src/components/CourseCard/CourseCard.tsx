// src/components/CourseCard.tsx
import React from 'react';

interface CourseCardProps {
  title: string;
  category: string;
  isNew: boolean;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, category, isNew, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-info">
        {isNew && <span className="new-badge">New</span>}
        <h3>{title}</h3>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default CourseCard;
