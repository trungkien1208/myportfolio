const header = {
  logo: './logo.png',
}

const about = {
  name: 'Lưu Trung Kiên',
  role: 'Senior Software Engineer',
  tagline:
    'I build exceptional digital products — from iPad kiosks deployed in Singapore hospitals to scalable platforms serving thousands of users across Southeast Asia.',
  description: `Senior Software Engineer with 8+ years crafting production-grade web and mobile applications. I own projects end-to-end — from architecture decisions to production deployment.

Currently leading front-end teams at Taggle (Singapore), where I independently built a healthcare kiosk used daily in hospitals and architected admin portals powering real-time patient management across Singapore and the Philippines.

I care deeply about **performance**, **clean architecture**, and interfaces that genuinely delight users. My goal: grow into a **Principal Engineer** role — shaping technical direction and building products that matter.`,
  resume: './resume.pdf',
  // 3D avatar model — served from /public so the URL is stable.
  avatarModel: '/avatar.glb',
  // Optional: a portrait image for the small hero circle. Leave '' to keep the LTK monogram.
  avatarImage: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/ki%C3%AAn-l%C6%B0u-5293771a1/',
    github: 'https://github.com/trungkien1208',
  },
}

const projects = [
  {
    name: 'PSSB Hospital Kiosk',
    description:
      'Sole developer of a full-stack iPadOS kiosk deployed in Singapore hospitals — enabling touchless patient check-in, appointment booking, and integrated payment processing.',
    stack: ['React Native', 'Expo', 'Zustand', 'Redux Toolkit'],
    sourceCode: '',
    livePreview: '',
    featured: true,
    achievements: [
      'Independently selected tech stack and delivered end-to-end in production',
      'Integrated payment terminals and Epson receipt printers for live hospital use',
      'Managed full TestFlight deployment lifecycle and hardware coordination',
      'Led technical sync with backend and hardware teams as sole FE developer',
    ],
  },
  {
    name: 'NCA Admin Portal',
    description:
      'Architected a scalable React admin portal from scratch — sole developer for 2 years, then successfully onboarded a team to a codebase they could confidently own.',
    stack: ['ReactJS', 'MUI', 'ChartJS', 'Redux Toolkit'],
    sourceCode: '',
    livePreview: '',
    achievements: [
      'Designed reusable component architecture adopted across the entire platform',
      'Handled UAT and production deployments independently for the first 2 years',
      'Reduced new developer onboarding time through clear structure and patterns',
    ],
  },
  {
    name: 'Taggle Platform',
    description:
      'Built the front-end foundation of a multi-tenant healthcare platform serving clinics across Singapore and the Philippines, supporting real-time patient monitoring.',
    stack: ['ReactJS', 'MUI', 'Axios', 'Redux Toolkit'],
    sourceCode: '',
    livePreview: '',
    achievements: [
      'Designed core component patterns and project structure used by all contributors',
      'Drove continuous UX improvements based on direct client and user feedback',
      'Contributed to CI/CD and versioning across multiple production releases',
    ],
  },
  {
    name: 'XSPERA Enterprise Portal',
    description:
      'Delivered enterprise web tools for Saigon Commercial Bank, integrating deeply with Microsoft Teams, Power Apps, and SharePoint ecosystems.',
    stack: ['ReactJS', 'AngularJS', 'Kendo UI', 'SharePoint'],
    sourceCode: '',
    livePreview: '',
    achievements: [
      'Built custom Microsoft Teams Apps and Power Apps for enterprise clients',
      'Mentored a junior developer and intern as Front-End Team Lead',
      'Delivered scalable SharePoint UI workflows for cross-functional teams',
    ],
  },
  {
    name: 'Radiology Viewer (Canada)',
    description:
      'Built a high-performance web-based radiology viewer for a Canadian healthcare company, meeting strict performance and cross-browser compliance standards.',
    stack: ['JavaScript', 'SCSS', 'HTML5', 'Sencha ExtJS'],
    sourceCode: '',
    livePreview: '',
    achievements: [
      'Delivered pixel-perfect radiology UI using MVVM architecture',
      'Supported real-time data loading tightly integrated with backend systems',
      'Ensured compatibility across major browsers and legacy clinical environments',
    ],
  },
  {
    name: 'Radiology Platform (France)',
    description:
      'Contributed front-end development for a French healthcare radiology product, collaborating directly with French stakeholders to align on complex UX requirements.',
    stack: ['JavaScript', 'HTML5', 'SCSS', 'Sencha ExtJS'],
    sourceCode: '',
    livePreview: '',
    achievements: [
      'Implemented dynamic UI components tailored to radiology clinical workflows',
      'Optimised rendering performance across browsers and screen configurations',
      'Participated in daily syncs with French clients to align on UX delivery',
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

  // Forms & Validation
  { name: 'React Hook Form', level: 4, category: 'Forms' },
  { name: 'Formik', level: 4, category: 'Forms' },
  { name: 'Yup', level: 4, category: 'Forms' },

  // Networking
  { name: 'Axios', level: 5, category: 'Networking' },

  // Internationalization
  { name: 'i18next', level: 4, category: 'i18n' },

  // Testing & Quality
  { name: 'Jest', level: 3, category: 'Testing' },
  { name: 'React Testing Library', level: 4, category: 'Testing' },

  // Tools & DevOps
  { name: 'Git', level: 4, category: 'Tools' },
  { name: 'CI/CD', level: 3, category: 'DevOps' },
  { name: 'Docker', level: 3, category: 'DevOps' },
  { name: 'Webpack', level: 4, category: 'Build Tools' },

  // Backend/Platform Experience
  { name: '.NET Core', level: 2, category: 'Backend' },
  { name: 'Python', level: 2, category: 'Backend' },

  // Microsoft Ecosystem
  { name: 'SharePoint', level: 3, category: 'Enterprise' },
  { name: 'Power Apps', level: 2, category: 'Enterprise' },
  { name: 'MS Teams App', level: 2, category: 'Enterprise' },

  // Legacy
  { name: 'AngularJS', level: 3, category: 'Legacy' },
  { name: 'jQuery', level: 3, category: 'Legacy' },
]

const ALL_TECH = [
  'ReactJS',
  'TypeScript',
  'React Native',
  'Redux Toolkit',
  'MUI',
  'Zustand',
  'Axios',
  'Webpack',
  'Git',
  'CI/CD',
  'Docker',
  'Jest',
  'SCSS',
  'JavaScript',
  'HTML5',
  'Expo',
  'Formik',
  'i18next',
  'Yup',
  'Node.js',
  'REST APIs',
  'GraphQL',
  'Figma',
  'SharePoint',
  'Kendo UI',
]

const experiences = [
  {
    name: 'Taggle',
    location: 'Singapore (Remote)',
    time: 'Dec 2020 – Present',
    current: true,
    role: 'Senior Front-End Engineer',
    description: `Led front-end web and mobile teams (5 developers) across multiple simultaneous products\n
Independently built and shipped the PSSB iPad kiosk to hospitals using React Native + Expo\n
Architected and maintained admin portals using ReactJS and MUI — designed for long-term team scalability\n
Acted as Scrum Master: ran sprint planning, task management, and TestFlight release cycles\n
Conducted rigorous code reviews and established Git workflows and deployment standards\n
Collaborated daily with BAs and BE teams to define scope and drive high-quality delivery`,
  },
  {
    name: 'Xspera Vietnam',
    location: 'Ho Chi Minh City, Vietnam',
    time: 'Dec 2019 – Oct 2020',
    role: 'Front-End Developer & Team Lead',
    description: `Developed enterprise-grade solutions using AngularJS, ReactJS, SharePoint, and Kendo UI\n
Built Microsoft Teams Apps and Power Apps components integrated with enterprise workflows\n
Mentored a junior developer and intern — introduced code standards and development best practices\n
Designed and documented reusable UI components that improved team velocity`,
  },
  {
    name: 'Global Cybersoft',
    location: 'Ho Chi Minh City, Vietnam',
    time: 'Mar 2018 – Dec 2019',
    role: 'Front-End Consultant',
    description: `Delivered front-end for international healthcare clients in Canada and France\n
Built production radiology web apps using Sencha ExtJS with MVVM architecture\n
Ensured strict cross-browser compatibility for clinical environments with legacy systems\n
Led requirement analysis, time estimation, and client demo delivery for two major products`,
  },
]

const contact = {
  email: 'luutrungkien120894@gmail.com',
  github: 'https://github.com/trungkien1208',
  linkedin: 'https://www.linkedin.com/in/ki%C3%AAn-l%C6%B0u-5293771a1/',
  contact: {
    Name: 'Lưu Trung Kiên',
    Location: 'Ho Chi Minh City, Vietnam',
    Phone: '(+84) 919 62 55 66',
    Email: 'luutrungkien120894@gmail.com',
  },
}

export { header, about, projects, skills, ALL_TECH, contact, experiences }
