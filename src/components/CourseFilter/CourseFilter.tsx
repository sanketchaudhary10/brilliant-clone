import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface CourseFilterProps {
  onSearchChange: (searchTerm: string) => void;
  onFilterChange: (filter: string) => void;
}

const CourseFilter: React.FC<CourseFilterProps> = ({ onSearchChange, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('New courses');

  const filters = ['New courses', 'Math', 'Data', 'Computer Science', 'Science'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value); 
  };

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4">Browse all 70+ courses</h3>

      {/* Search Bar */}
      <div className="relative mb-4">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border rounded-full text-gray-700 focus:outline-none bg-white"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`px-4 py-2 rounded-full ${
              selectedFilter === filter
                ? 'bg-green-600 text-white border border-black'
                : 'bg-gray-100 text-gray-700 border border-gray-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseFilter;
