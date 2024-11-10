interface Course {
    title: string;
    isNew: boolean;
    imageSrc: string;
    category: string;
  }
  
  const courses: Course[] = [
    { title: 'Data Science Basics', isNew: true, imageSrc: '/assets/images/ds.jpeg', category: 'Data' },
    { title: 'Introduction to Algorithms', isNew: false, imageSrc: '/assets/images/dsa.png', category: 'Computer Science' },
    { title: 'Web Development', isNew: true, imageSrc: '/assets/images/webdev.jpeg', category: 'Computer Science' },
    { title: 'Generative AI', isNew: false, imageSrc: '/assets/images/generative-ai.png', category: 'Data' },
    { title: 'RAG Models', isNew: false, imageSrc: '/assets/images/generative-ai.png', category: 'Data' },
    { title: 'Database Schema', isNew: false, imageSrc: '/assets/images/generative-ai.png', category: 'Data' },
    { title: 'Database Design', isNew: true, imageSrc: '/assets/images/database-design.png', category: 'Computer Science' },
    { title: 'Calculus Basics', isNew: false, imageSrc: '/assets/images/calculus.png', category: 'Math' },
    { title: 'Physics Fundamentals', isNew: true, imageSrc: '/assets/images/physics.png', category: 'Science' },
    { title: 'Algebra', isNew: true, imageSrc: '/assets/images/physics.png', category: 'Math' },
    { title: 'Integration and Derivation', isNew: true, imageSrc: '/assets/images/physics.png', category: 'Math' },
    { title: 'Biology Fundamentals', isNew: false, imageSrc: '/assets/images/physics.png', category: 'Science' },
    { title: 'Theory of Relativity', isNew: false, imageSrc: '/assets/images/physics.png', category: 'Science' },
    // Add more courses as needed
  ];
  
  export default courses;
  export type { Course };
  
  