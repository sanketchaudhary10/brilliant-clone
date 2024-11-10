// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-black text-white py-12 px-4">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Logo Section */}
//         <div className="text-3xl font-bold">
//           Brilliant
//         </div>
        
//         {/* Product Links */}
//         <div>
//           <h3 className="text-gray-400 uppercase text-sm mb-4">Product</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-gray-300">Courses</a></li>
//             <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
//             <li><a href="#" className="hover:text-gray-300">Testimonials</a></li>
//             <li><a href="#" className="hover:text-gray-300">Help</a></li>
//           </ul>
//         </div>

//         {/* Company Links */}
//         <div>
//           <h3 className="text-gray-400 uppercase text-sm mb-4">Company</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-gray-300">About us</a></li>
//             <li><a href="#" className="hover:text-gray-300">Careers</a></li>
//             <li><a href="#" className="hover:text-gray-300">Educators</a></li>
//           </ul>
//         </div>

//         {/* Behind the Scenes Links */}
//         <div>
//           <h3 className="text-gray-400 uppercase text-sm mb-4">Behind the scenes</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:text-gray-300">Solving Equations</a></li>
//             <li><a href="#" className="hover:text-gray-300">Thinking in Code</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Social Icons Section */}
//       <div className="max-w-6xl mx-auto flex justify-end space-x-6 mt-10">
//         <a href="#" className="text-gray-400 hover:text-gray-200">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="#" className="text-gray-400 hover:text-gray-200">
//           <i className="fab fa-instagram"></i>
//         </a>
//         <a href="#" className="text-gray-400 hover:text-gray-200">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="#" className="text-gray-400 hover:text-gray-200">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        
        {/* Logo Section */}
        <Link to="/">
            <div className="text-3xl font-bold">
                Brilliant
            </div>
        </Link>
        
        
        {/* Right Section - Curated by Mobbin */}
        <div className="flex items-center space-x-2 text-gray-400">
          <span>curated by Mobbin</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
