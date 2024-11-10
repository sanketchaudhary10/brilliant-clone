# brilliant-clone

## Project Overview
This project is an educational platform, developed with a focus on frontend and authentication features. It includes functionalities such as Firebase authentication, a course dashboard with filtering options, and more.

## Table of Contents
- Project Overview
- Features Implemented
- Technical Decisions and Trade-offs
- Known Limitations
- Setup Instructions
- Local Development Instructions
- Time Spent


**Features Implemented**: 

- User Authentication:
- - Login and signup functionality using Firebase Authentication.
- - Google sign-in integration for a seamless login experience.

Course Dashboard:
- Course listing with categories and new-course filters.
- Search functionality to find courses by title.

Responsive Design:
- Built with responsive styling to provide a consistent experience across devices.
- Navigation and Footer:
- Structured navigation bar and footer components for consistent UI.

## Technical Decisions and Trade-offs
- Firebase Authentication: Chose Firebase for quick and reliable user authentication. It offers robust security and scalability, but it also introduces a dependency on an external service, which may not be ideal for all use cases.

- Vite: Selected Vite as the build tool due to its fast development server and optimized bundling. It’s especially beneficial for development speed but may require specific configuration for certain plugins.

- Environment Variables: Used environment variables to securely manage sensitive Firebase configuration. This setup helps protect credentials but requires careful handling during deployment to ensure all necessary environment variables are set.

## Known Limitations
- Limited Backend Functionality: This project focuses on frontend features and Firebase authentication, so there is no custom backend for more advanced functionalities.

- Static Course Data: Course data is currently hardcoded. This limits the ability to add, remove, or update courses dynamically. A future enhancement could involve integrating a database for dynamic course content.

- Basic Error Handling: Error handling is minimal in the current setup, especially in authentication. Improvements could be made to handle specific errors more gracefully.

### Setup Instructions

## Clone the Repository:
```bash
git clone https://github.com/sanketchaudhary10/brilliant-clone.git
cd rufus-ai-tool
```

## Install Dependencies:
```bash
npm install
```

## Configure Environment Variables: Create a .env file in the project root and add the following variables:
```python
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
VITE_FIREBASE_MEASUREMENT_ID=xxx
```

## Start the Development Server:
```bash
npm run dev
```

### Time Spent
- Initial Setup and Authentication: ~3 hours
- Course Dashboard and Filtering: ~4 hours
- UI Design and Styling: ~2 hours
- Documentation and README: ~1 hour

## Future Improvements
- Backend Integration: Adding a backend for dynamic course management and data persistence.
- Improved Error Handling: Improving error messages and handling across components.
- Pagination and Loading States: Adding pagination for the course dashboard and loading states to improve user experience.