const header = {
  logo: "./logo.png",
}

const about = {
  name: 'Lưu Trung Kiên',
  role: 'Senior Front-End Engineer',
  description: `I’m a senior software engineer with 8+ years of experience in web and mobile development, specializing in JavaScript, TypeScript, and ReactJS. I build scalable, high-performance applications with clean architecture and a strong focus on UI/UX.\n
I’m passionate about crafting user-friendly interfaces using HTML and SCSS, and continuously explore ways to enhance user experience. I also have hands-on experience developing mobile apps with React Native.\n
Currently, I lead front-end teams across web and mobile projects—resolving technical challenges, mentoring team members, and ensuring smooth sprint delivery and collaboration.\n
My goal is to grow into a Principal Front-End Engineer, continuously sharpening my skills and exploring modern technologies to improve performance and user satisfaction.`,
  resume: './resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/luutrungkien', // Replace with your actual profile
    github: 'https://github.com/yourusername', // Replace with your actual profile
  },
}

const projects = [
  {
    name: 'PSSB Kiosk App',
    description: 'iPadOS-based kiosk application enabling patients to queue, book appointments, make payments, and print tickets.',
    stack: ['React Native', 'Expo', 'Zustand', 'Redux Toolkit'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'NCA Admin Portal',
    description: 'Web portal for managing patients, doctors, and rehab programs with admin configuration tools.',
    stack: ['ReactJS', 'MUI', 'ChartJS', 'Redux Toolkit'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Taggle Platform',
    description: 'Multi-tenant platform for clinics and public health to manage patient data and sync with mobile app.',
    stack: ['ReactJS', 'MUI', 'Axios', 'Redux Toolkit'],
    sourceCode: '',
    livePreview: '',
  },
]

const skills = [
  { name: 'HTML', level: 5 },
  { name: 'CSS/SCSS', level: 5 },
  { name: 'JavaScript', level: 5 },
  { name: 'TypeScript', level: 5 },
  { name: 'ReactJS', level: 5 },
  { name: 'React Native', level: 4 },
  { name: 'Redux Toolkit', level: 4 },
  { name: 'MUI', level: 5 },
  { name: 'Zustand', level: 3 },
  { name: 'Git', level: 4 },
  { name: 'CI/CD', level: 3 },
  { name: 'i18next', level: 4 },
  { name: 'Jest', level: 3 },
  { name: 'AngularJS', level: 3 },
  { name: 'Kendo UI', level: 3 },
  { name: 'Sencha ExtJS', level: 3 }
]

const experiences = [
  {
    name: 'Taggle',
    time: 'Dec 2020 – Present',
    current: true,
    role: 'Senior Front-End Engineer',
    description: `Led both Web and Mobile front-end teams.\n
Developed admin portal and kiosk iPad apps.\n
Collaborated with BAs and BE teams, managed sprints, code reviews, and deployments.`,
  },
  {
    name: 'Xspera Vietnam',
    time: 'Dec 2019 – Oct 2020',
    role: 'Front-End Developer',
    description: `Worked on AngularJS, ReactJS, and SharePoint.\n
Developed Microsoft Teams Apps and Power Apps components.\n
Led junior members and contributed to UI component design.`,
  },
  {
    name: 'Global Cybersoft',
    time: 'Mar 2018 – Dec 2019',
    role: 'Front-End Consultant',
    description: `Focused on Sencha ExtJS, Kendo UI, and custom healthcare solutions for Canada and France clients.\n
Worked on radiology web apps and supported scalable UI patterns using MVVM.`,
  },
]

const contact = {
  email: 'luutrungkien120894@gmail.com',
  github: 'https://github.com/trungkien1208e', // Replace
  linkedin: "https://www.linkedin.com/in/kiên-lưu-5293771a1", // Replace
  contact: {
    Name: 'Lưu Trung Kiên',
    Birthday: '12 August',
    Phone: '(+84) 919 62 55 66',
    Address: 'Ho Chi Minh City, Vietnam',
    Email: 'luutrungkien120894@gmail.com',
  }
}

export { header, about, projects, skills, contact, experiences }