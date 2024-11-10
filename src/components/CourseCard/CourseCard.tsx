import React from 'react';

interface CourseCardProps {
  title: string;
  isNew: boolean;
  imageSrc: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, isNew, imageSrc }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-200">
      {/* Image area */}
      <div className="w-full h-32 flex items-center justify-center bg-orange-100 rounded-t-lg">
        <img src={imageSrc} alt={`${title} icon`} className="w-12 h-12" />
      </div>

      {/* Badge for New courses */}
      {isNew && (
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          NEW
        </span>
      )}

      {/* Course Title */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default CourseCard;
