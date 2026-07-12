
const projectImageModules = import.meta.glob('../assets/projectImages/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

function getProjectImage(filename) {
  const match = Object.entries(projectImageModules).find(([path]) => path.endsWith('/' + filename))
  return match ? match[1] : null
}

export const profile = {
  name: 'Yogesh Kumar',
  headlines: [
    'MERN Stack Developer',
    'Full Stack Developer',
    'Frontend Engineer',
    'JavaScript Developer',
    'Problem Solver',
  ],
  location: 'Lucknow, Uttar Pradesh, India',
  yearsExperience: '1+',
  currentRole: 'MERN Stack Developer — open to work',
  availability: 'Open to work',
  email: 'Yogeshkumar12112003@gmail.com',
  phone: '+91-9648634638',
  github: 'https://github.com/Yogesh-kumar-uvi/',
  linkedin: 'https://www.linkedin.com/in/yogeshkumaryuvi/',
  instagram: 'https://www.instagram.com/yogeshkumaruvi/',
  twitter: 'https://x.com/YogeshKumaruvi',
  resumeUrl: '/resume.pdf',
  summary:
    "I'm a MERN Stack Developer from Lucknow, India, working in web development. I enjoy turning complex problems into simple, beautiful, and intuitive solutions through seamless design and efficient code.",
  bio:
    'My job is to build websites that are functional and user-friendly but at the same time attractive. I add a personal touch to every product to make sure it is eye-catching and easy to use — bringing across your message and identity in the most creative way.',
}

// Skills grouped by category. No proficiency percentage — just what's used.
export const skills = {
  Frontend: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Redux'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Socket.io'],
  Databases: ['MongoDB', 'Mongoose', 'MongoDB Atlas'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render', 'IntelliJ IDEA'],
  'AI Platforms': ['Claude', 'ChatGPT', 'GitHub Copilot', 'Google Gemini', 'Google Antigravity', 'Perplexity AI'],
}

export const education = [
  {
    institution: 'Dr. A.P.J. Abdul Kalam Technical University, Lucknow',
    duration: '2020 — 2024',
    description:
      "Bachelor's degree in Information Technology. Gained expertise in programming, software development, and problem-solving while working on web development and data structures projects.",
  },
  {
    institution: 'Krishak Samaj Inter College, Gola',
    duration: '2019 — 2020',
    description: 'Intermediate education with a focus on Physics, Mathematics, and Chemistry.',
  },
  {
    institution: 'Sardar Patel Smarak Inter College, Gola',
    duration: '2016 — 2017',
    description: 'High school education, building a strong academic foundation.',
  },
]

export const experience = [
  {
    company: 'Robust Results Pvt. Ltd., Gurugram',
    position: 'Full Stack Web Developer Intern',
    duration: 'July 2023 — November 2023',
    responsibilities: [
      'Built and deployed dynamic, responsive web apps using the MERN stack',
      'Developed RESTful APIs and implemented database solutions',
      'Collaborated with a team to deliver multiple client projects within tight deadlines',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    company: 'Striver Infobyte, Noida',
    position: 'Web Developer Intern',
    duration: 'July 2022 — October 2022',
    responsibilities: [
      'Designed and developed responsive websites using HTML, CSS, and JavaScript',
      'Improved user experience and troubleshot technical issues',
      'Strengthened problem-solving skills through real-world development practices',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
]

export const projects = [
  {
    id: 'hcms',
    name: 'Healthcare Management System',
    description:'A feature-rich MERN healthcare platform with real-time chat, video consultations, and online payments.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'WebRTC', 'Razorpay'],
    features: [
      'Real-time chat between doctors and patients (Socket.io)',
      'WebRTC video/audio consultations',
      'Razorpay payment integration',
      'PDF prescription generation',
    ],
    challenges: 'Handled state persistence across refresh using Redux Persist and fixed race conditions in appointment booking.',
    image: getProjectImage('HCMS.png'),
    live: 'https://healthcare-management-system-fjlj.vercel.app/',
    repo: 'https://github.com/Yogesh-kumar-uvi/Healthcare-Management-System',
  },
  {
    id: 'amrit-hospital',
    name: 'Amrit Hospital',
    description: 'A complete hospital website with doctor/patient authentication and appointment booking, built with a Navy/Teal/Gold design system.',
    stack: ['ReactJs', 'ExpressJs', 'MongoDB', 'NodeJs','Tailwindcss','JWT','Rozerpay'],
    features: [
      'Doctor and patient authentication',
      'Appointment booking flow',
      'Razorpay payment integration',
      'Admin dashboard for managing appointments and patients',
      'Responsive for all Devices'
    ],
    challenges: 'Simulated full MERN-style functionality on the frontend, structuring components to make a future real backend easy to plug in.',
    image: getProjectImage('amrit-hospital.png'),  
    live: 'https://amrit-hospital-tau.vercel.app/',
    repo: 'https://github.com/Yogesh-kumar-uvi/amrit-hospital', 
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    description: 'A full-featured shopping platform with cart, checkout, and secure payments.',
    stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    features: ['Product catalog & cart', 'Checkout flow', 'Order tracking'],
    challenges: 'Synced cart state between client and server for consistency across sessions.',
    image: getProjectImage('Ecommerce.png'),
    live: 'https://ecommerce-frontend-one-cyan.vercel.app/',
    repo: 'https://github.com/Yogesh-kumar-uvi/Ecommerce',
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    description: 'A clean, responsive weather lookup app with live data.',
    stack: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    features: ['Live weather lookup by city', 'Responsive layout'],
    challenges: 'Handled API rate limits and inconsistent data gracefully.',
    image: getProjectImage('Weather.png'),
    live: 'https://weather-7unq8ms13-yogesh-kumars-projects-portfolio.vercel.app/',
    repo: 'https://github.com/Yogesh-kumar-uvi/weather-app',
  },
  {
    id: 'shopping-cart',
    name: 'Shopping Cart',
    description: 'A responsive multi-vendor marketplace where sellers can manage their own products and buyers can browse, purchase, and track orders through a secure authentication system.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Bootstrap'],
    features: [
      'Separate Seller & Buyer Registration/Login',
      'Seller Product Management (Add, Edit & Delete)',
      'Responsive User Interface',
      'Secure Authentication & Authorization',
      'Role-Based Access Control'
    ],
    challenges:
      'Implemented role-based authentication to ensure sellers can manage only their own products while providing buyers with a seamless and secure shopping experience.',
    image: getProjectImage('Shopping-cart.png'),
    live: 'https://e-commerce-u7fn.onrender.com/',
    repo: 'https://github.com/Yogesh-kumar-uvi/E-Commerce',
  },
  {
    id: 'amazon-clone',
    name: 'Amazon Clone',
    description: 'A frontend clone of Amazon focused on layout and interaction fidelity.',
    stack: ['React', 'JavaScript', 'CSS'],
    features: ['Product listing UI', 'Cart interactions', 'Responsive design'],
    challenges: 'Matched complex real-world layout across breakpoints.',
    image: getProjectImage('Amazon-clone.png'),
    live: 'https://amazon-clone-57wtkl8tj-yogesh-kumars-projects-portfolio.vercel.app/',
    repo: 'https://github.com/Yogesh-kumar-uvi/amazon-clone-',
  },
  {
    id: 'portfolio',
    name: 'Developer Portfolio',
    description: 'This portfolio website itself — built to showcase projects, skills, and experience.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    features: ['Dark/light theme with memory', 'Animated skill badges', 'Real email contact form'],
    challenges: 'Structured all content into a single data file so future updates need no code changes.',
    image: getProjectImage('Portfolio.png'),
    live: '#', // paste your live link here
    repo: 'https://github.com/Yogesh-kumar-uvi/portfolio01',
  },
  {
    id: 'travel-website',
    name: 'Travel & Tourism Website',
    description: 'A full-stack travel booking web application with destination browsing, booking management, and dynamic data integration.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Destination listing with dynamic data from MySQL',
      'Online tour booking system',
      'Frontend-to-backend data fetching using PHP',
      'Responsive design for mobile, tablet, and desktop',
      'Booking details stored securely in MySQL database'
    ],
    challenges: 'Implemented seamless frontend-backend communication with PHP and MySQL while ensuring responsive layouts across all devices.',
    image: getProjectImage('travel.png'),
    live: 'https://travel-boking.netlify.app/',
    repo: 'https://github.com/Yogesh-kumar-uvi/my_portfolio', 
  },
]

export const services = [
  'Frontend Development',
  'Backend Development',
  'Full Stack Development',
  'Mobile Apps',
  'API Integration',
  'Bug Fixing',
  'UI/UX Improvements',
  'Performance Optimization',
]

export const testimonials = [
  {
    name: 'Arjun Mehta',
    company: 'E-commerce client',
    rating: 5,
    review:
      'Yogesh was hired to develop an e-commerce platform for our business in India. His expertise and commitment to understanding our requirements were exceptional, and he delivered a robust, tailored solution.',
  },
  {
    name: 'Shruti Patel',
    company: 'Startup founder',
    rating: 5,
    review:
      'I worked with Yogesh to create a mobile app for my startup. His attention to detail and commitment to timelines were commendable, and our app received fantastic feedback from users.',
  },
  {
    name: 'Rohan Gupta',
    company: 'Local business',
    rating: 5,
    review:
      'Yogesh helped us design a website for our local business. His creative ideas and technical skills made our site stand out, delivered on time and incredibly user-friendly.',
  },
  {
    name: 'Anil Verma',
    company: 'Business owner',
    rating: 5,
    review:
      'Yogesh transformed our outdated website into a modern, visually appealing, and highly functional platform, aligned with our brand and goals throughout.',
  },
]