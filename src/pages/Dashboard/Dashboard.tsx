import React from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';
import Footer from '../../components/Footer/footer';
import { FaBolt } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="w-screen h-screen pt-16">
      <DashboardNavbar />

      <div className="p-8 bg-white text-black">
        
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          
          <section className="p-3 border rounded-lg shadow-sm bg-white flex-1 max-w-xs"> {/* Set max width to make it smaller */}
            <div className="flex items-center justify-between">
              
              <div className="flex items-center space-x-1 text-xl font-semibold">
                <span>3</span>
                <FaBolt className="text-yellow-500 text-lg" />
              </div>
              <button className="text-gray-400 text-sm">▼</button>
            </div>

            
            <p className="mt-2 text-sm font-medium">
              Solve <span className="text-black">3 problems to continue your streak</span>
            </p>

            
            <div className="flex items-center mt-3 space-x-2">
              
              {['S', 'M', 'T', 'W', 'Th', 'F', 'Sa'].map((day, index) => (
                <div key={index} className="flex flex-col items-center space-y-1">
                  {day === 'T' || day === 'M' || day === 'S' ? (
                    <FaBolt className="text-yellow-500 text-xl" />
                  ) : (
                    <FaBolt className="text-gray-300 text-xl" />
                  )}
                  <span className={day === 'T' || day === 'M' || day === 'S' ? 'font-semibold text-xs' : 'text-gray-500 text-xs'}>
                    {day}
                  </span>
                </div>
              ))}

              
              <div className="flex items-center space-x-1">
                <div className="w-5 h-3 border-2 border-yellow-500 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-1 bg-yellow-500"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Jump Back In Section */}
          <section className="p-6 border rounded-lg shadow-sm bg-white flex-1">
            <h3 className="text-xl font-semibold mb-4">Jump Back In</h3>

            {/* Card Layout */}
            <div className="relative p-6 border rounded-lg bg-gray-50 flex flex-col items-center text-center">
              {/* Placeholder Image */}
              <div className="w-full h-32 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(../assets/images/science.jpeg)' }}>
                {/* Replace with actual image path */}
              </div>

              {/* Subtitle */}
              <p className="text-yellow-600 font-semibold uppercase text-sm">Science • Level 1</p>

              {/* Title */}
              <h4 className="text-xl font-bold mt-2">Scientific Thinking</h4>

              {/* Continue Button */}
              <button className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-800">
                Continue path
              </button>
            </div>
          </section>
        </div>

        {/* Course Recommendations */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Recommended for You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard title="Data Science Basics" isNew={true} imageSrc="../assets/images/ds.jpeg" />
            <CourseCard title="Introduction to Algorithms" isNew={false} imageSrc="path/to/algorithms-image.png" />
            <CourseCard title="Web Development" isNew={true} imageSrc="path/to/web-development-image.png" />
            <CourseCard title="Generative AI" isNew={false} imageSrc="path/to/web-development-image.png" />
            <CourseCard title="Database Design" isNew={true} imageSrc="path/to/web-development-image.png" />
    
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
