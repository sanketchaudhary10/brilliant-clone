import React, { useState } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';
import Footer from '../../components/Footer/footer';
import CourseFilter from '../../components/CourseFilter/CourseFilter';
import courses from '../../components/Data/CourseData';

const Dashboard: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic based on selected filter and search term
  const filteredCourses = courses.filter((course) => {
    const matchesCategory = filter === '' || (filter === 'New courses' && course.isNew) || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFilterChange = (newFilter: string) => setFilter(newFilter);
  const handleSearchChange = (newSearchTerm: string) => setSearchTerm(newSearchTerm);

  return (
    <div className="w-screen h-screen pt-16">
      <DashboardNavbar />
      <div className="p-8 bg-white text-black">
        <CourseFilter onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />
        <section>
          <h3 className="text-xl font-semibold mb-4">Recommended for You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} title={course.title} isNew={course.isNew} imageSrc={course.imageSrc} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
