const header = {
  logo: './logo.png',
}

const about = {
  name: 'Lưu Trung Kiên',
  role: 'Senior Front-End Engineer',
  description: `I'm a Senior Front-End Engineer with 8+ years of experience crafting high-performance web and mobile applications. My expertise in JavaScript, TypeScript, and ReactJS has helped deliver scalable solutions that serve millions of users across healthcare and enterprise platforms.\n
I specialize in building intuitive user interfaces and architecting robust front-end systems. My recent work includes developing a healthcare kiosk system that improved patient wait times by 40% and a multi-tenant platform serving 50+ clinics.\n
As a technical lead, I've successfully mentored 10+ developers and implemented best practices that reduced bug rates by 30%. I'm passionate about creating maintainable codebases and optimizing user experiences through performance tuning and responsive design.\n
My goal is to continue growing as a Principal Front-End Engineer, focusing on emerging technologies like WebAssembly and Edge Computing to push the boundaries of web application performance.`,
  resume: './resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/luutrungkien',
    github: 'https://github.com/trungkien1208',
  },
}

const projects = [
  {
    name: 'PSSB Kiosk App',
    description:
      'Developed an iPadOS-based kiosk application that streamlined patient check-in, appointment booking, and payment processing in hospitals. Fully responsible for tech stack selection, implementation, and printer/payment terminal integration.',
    stack: ['React Native', 'Expo', 'Zustand', 'Redux Toolkit'],
    sourceCode: '',
    livePreview: '',
    achievements: [
      'Independently selected and implemented the framework and libraries',
      'Successfully integrated payment terminals and Epson printers for production use',
      'Managed entire development and TestFlight deployment lifecycle',
      'Led coordination with backend and hardware teams as the sole developer',
    ],
  },
  {
    name: 'NCA Admin Portal',
    description:
      'Built a robust web portal for managing patient records, doctor scheduling, and rehab programs. Supported internal and external environments with secure data handling.',
    stack: ['ReactJS', 'MUI', 'ChartJS', 'Redux Toolkit'],
    sourceCode: '',
    livePreview: '',
    achievements: [
      'Sole developer during initial phase; designed scalable structure for team adoption',
      'Established reusable component architecture used across the entire portal',
      'Handled UAT and production deployments independently for the first 2 years',
      'Reduced onboarding time for new team members through clear structure and patterns',
    ],
  },
  {
    name: 'Taggle Platform',
    description:
      'Developed a multi-tenant platform serving healthcare clinics and public communities across Singapore and the Philippines, supporting patient monitoring and real-time data sync.',
    stack: ['ReactJS', 'MUI', 'Axios', 'Redux Toolkit'],
    sourceCode: '',
    livePreview: '',
    achievements: [
      'Designed and implemented project structure as sole front-end developer in early phase',
      'Built core features and component patterns used by all later contributors',
      'Continuously improved UX based on real user and client feedback',
      'Contributed to CI/CD and versioning processes across multiple releases',
    ],
  },
]

const skills = [
  // Frontend Core
  { name: 'HTML5', level: 5, category: 'Frontend Core' },
  { name: 'CSS3 / SCSS', level: 5, category: 'Frontend Core' },
  { name: 'JavaScript (ES6+)', level: 5, category: 'Frontend Core' },
  { name: 'TypeScript', level: 5, category: 'Frontend Core' },

  // Frameworks & Libraries
  { name: 'ReactJS', level: 5, category: 'Frameworks' },
  { name: 'React Native', level: 4, category: 'Frameworks' },
  { name: 'Redux Toolkit', level: 4, category: 'State Management' },
  { name: 'Zustand', level: 3, category: 'State Management' },
  { name: 'Material-UI (MUI)', level: 5, category: 'UI Libraries' },
  { name: 'Kendo UI', level: 3, category: 'UI Libraries' },
  { name: 'Sencha ExtJS', level: 3, category: 'UI Libraries' },
  { name: 'TamagoUI', level: 3, category: 'UI Libraries' }, // if used in kiosk project

  // Forms & Validation
  { name: 'React Hook Form', level: 4, category: 'Forms' },
  { name: 'Formik', level: 4, category: 'Forms' },
  { name: 'Yup', level: 4, category: 'Forms' },

  // Networking
  { name: 'Axios', level: 5, category: 'Networking' },

  // Internationalization
  { name: 'i18next', level: 4, category: 'Internationalization' },

  // Testing & Quality
  { name: 'Jest', level: 3, category: 'Testing' },
  { name: 'React Testing Library', level: 4, category: 'Testing' },

  // Tools & DevOps
  { name: 'Git', level: 4, category: 'Tools' },
  { name: 'CI/CD', level: 3, category: 'DevOps' },
  { name: 'Docker', level: 3, category: 'DevOps' },
  { name: 'Webpack', level: 4, category: 'Build Tools' },

  // Backend/Platform Experience (Basic)
  { name: '.NET Core', level: 2, category: 'Backend' },
  { name: 'Python', level: 2, category: 'Backend' },

  // Microsoft Ecosystem
  { name: 'SharePoint', level: 3, category: 'Enterprise' },
  { name: 'Power Apps', level: 2, category: 'Enterprise' },
  { name: 'Microsoft Teams App', level: 2, category: 'Enterprise' },

  // Legacy
  { name: 'AngularJS', level: 3, category: 'Legacy' },
  { name: 'jQuery', level: 3, category: 'Legacy' },
]

const experiences = [
  {
    name: 'Taggle',
    location: 'Singapore (Remote)',
    time: 'Dec 2020 – Present',
    current: true,
    role: 'Senior Front-End Engineer',
    description: `Led both Web and Mobile front-end teams (5 developers total)\n
Independently built iPad Kiosk app using React Native and Expo\n
Architected and maintained the admin portal using ReactJS and MUI\n
Collaborated with BAs and BE teams to define requirements and delivery scope\n
Acted as Scrum Master: managed sprints, tasks, and TestFlight releases\n
Conducted code reviews, managed Git workflows, and ensured consistent deployments`,
  },
  {
    name: 'Xspera Vietnam',
    location: 'Ho Chi Minh City, Vietnam',
    time: 'Dec 2019 – Oct 2020',
    role: 'Front-End Developer / Team Lead',
    description: `Developed enterprise solutions using AngularJS, ReactJS, SharePoint, and Kendo UI\n
Built Microsoft Teams Apps and Power Apps components for internal tools\n
Mentored a junior developer and an intern in front-end development practices\n
Designed reusable UI components and contributed to team development standards`,
  },
  {
    name: 'Global Cybersoft',
    location: 'Ho Chi Minh City, Vietnam',
    time: 'Mar 2018 – Dec 2019',
    role: 'Front-End Consultant',
    description: `Delivered front-end solutions for international healthcare clients (Canada, France)\n
Developed radiology web apps using Sencha ExtJS and Kendo UI\n
Applied MVVM architecture patterns to ensure scalable, maintainable UIs\n
Supported requirement analysis, estimation, and client demo delivery`,
  },
]

const contact = {
  email: 'luutrungkien120894@gmail.com',
  github: 'https://github.com/trungkien1208', // Replace
  linkedin: 'https://www.linkedin.com/in/kiên-lưu-5293771a1', // Replace
  contact: {
    Name: 'Lưu Trung Kiên',
    Birthday: '12 August',
    Phone: '(+84) 919 62 55 66',
    Address: 'Ho Chi Minh City, Vietnam',
    Email: 'luutrungkien120894@gmail.com',
  },
}

export { header, about, projects, skills, contact, experiences }
