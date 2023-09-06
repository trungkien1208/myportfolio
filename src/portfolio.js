const header = {
  // all the properties are optional - can be left empty or deleted
  
  
  logo: "./logo.png",
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Trung Kiên',
  role: 'Front End Engineer',
  description:
    `I'm a software engineer with six years of experience, specializing in React.js and the Material-UI (MUI) library for building user interfaces. My work encompasses various platforms, including web-based applications, desktop software, and web services. \n
    In the past, I've also worked with JavaScript frameworks like Sencha ExtJS and AngularJS. However, my current mainstay is React.js, and I have a deep understanding of creating stunning and responsive user interfaces using the Material-UI (MUI) library. \n
    
    One of my notable achievements is independently building a product portal from the ground up using React.js and MUI, which has enriched my skills and experience. \n
    
    Currently, I lead a front-end team with one junior member, focusing on improving my leadership skills. I've successfully navigated various software development methodologies, including Waterfall, Agile, and Scrum. Feel free to connect or reach out if you'd like to discuss anything further!`,
  resume: './resume.pdf',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  {
    name: 'HTML',
    level: 5,
  },
  {
    name: 'CSS',
    level: 5,
  },
  {
    name: 'JavaScript',
    level: 5,
  },
  {
    name: 'TypeScript',
    level: 2,
  },
  {
    name: 'ReactJS',
    level: 4,
  },
  {
    name: 'Redux',
    level: 4,
  },
  {
    name: 'SASS',
    level: 4,
  },
  {
    name: 'MUI',
    level: 5,
  },
  {
    name: 'Git',
    level: 4,
  },
  {
    name: 'CI/CD',
    level: 2,
  },
  {
    name: 'Jest',
    level: 3,
  },
  {
    name: 'AngularJS',
    level: 3,
  }
]


const experiences = [
  {
    name: 'Company A',
    time: 'Jan 2020 - Present',
    current: true,
    role: 'Front End Engineer',
    description:
      `* Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam
      \n
      * Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam
      `,
    
  },
  {
    name: 'Company B',
    time: 'Jan 2019 - Dec 2019',
    description:

      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',


  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'luutrungkien120894@mail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  contact: {
    Name: 'Lưu Trung Kiên',
    Birthday: '12 August 1994',
    Phone: '(+84) 919 62 55 66',
    Address: 'Hồ Chí Minh, Việt Nam',
    Age: '29',
    Email: 'luutrungkien120894@gmail.com',
  }

}

export { header, about, projects, skills, contact, experiences }
