import React, { useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';

const CourseCatagory: React.FC = () => {
  const [category, setCategory] = useState('All');

  const courses = [
    { title: 'Data Science Basics', isNew: true, imageSrc: '../assets/images/ds.jpeg', category: 'Data' },
    { title: 'Introduction to Algorithms', isNew: false, imageSrc: '../assets/images/dsa.png', category: 'Computer Science' },
    { title: 'Web Development', isNew: true, imageSrc: '../assets/images/webdev.jpeg', category: 'Computer Science' },
  ];

  const filteredCourses = category === 'All' ? courses : courses.filter(course => course.category === category);

  return (
    <div className="p-8">
      {/* Filter Tabs */}
      <div className="flex space-x-4 mb-6">
        {['All', 'Math', 'Data', 'Computer Science', 'Science'].map((tab) => (
          <button
            key={tab}
            onClick={() => setCategory(tab)}
            className={`px-4 py-2 rounded ${category === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} title={course.title} isNew={course.isNew} imageSrc={course.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default CourseCatagory;
