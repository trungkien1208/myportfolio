// All site copy lives here. Components only lay it out.
// House rule for copy: no em-dashes, keep jokes short, keep facts true.

// Public files live under the deploy base (/myportfolio/ on GitHub Pages)
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

// First front-end job: Mar 2018. Counted at runtime so "8+" never goes stale.
const CAREER_START = new Date(2018, 2, 1)
const yearsShipping = Math.floor(
  (Date.now() - CAREER_START) / (365.25 * 24 * 3600 * 1000)
)

const about = {
  name: 'Lưu Trung Kiên',
  shortName: 'Kiên',
  role: 'Senior Front-End Engineer',
  greeting: 'Xin chào, I’m Kiên',
  headline: ['I ship apps that', 'survive real users.'],
  // Word in the headline that gets the marker highlight
  highlight: 'survive',
  subtext: `Senior front-end engineer, ${yearsShipping}+ years. Hospital kiosks by day, food and visa apps by night. Sleep is a side quest.`,
  yearsShipping,
  careerStart: CAREER_START.getFullYear(),
  resume: asset('resume.pdf'),
  resumeFileName: 'Luu-Trung-Kien-CV.pdf',
  // Photo-style cutout from Kiên's IMG_5058 photo (see IMAGE_PROMPTS.md).
  avatarImage: asset('me/kien-stamp.webp'),
  monogram: 'LTK',
  social: {
    linkedin: 'https://www.linkedin.com/in/kienluudev/',
    github: 'https://github.com/trungkien1208',
  },
}

// Ticker under the hero. True facts, light seasoning.
const facts = [
  'Kiosks on ~200 iPads in Singapore hospitals',
  '2,000+ patients a day tap my buttons',
  'A food app on the App Store',
  '~900 visa cases a month through my platform',
  'Leading a front-end team of 5',
  `${yearsShipping}+ years of shipping`,
  'Fluent in React, Swift and sarcasm',
  'Reviews PRs with kindness and a magnifying glass',
]

const sideQuests = [
  {
    id: 'cogingon',
    name: 'COGINGON',
    tone: 'mint',
    logo: asset('quests/cogingon/icon.webp'),
    badge: 'Live on the App Store',
    title: 'Know what to eat, anywhere.',
    description:
      'A native iOS food guide for Vietnamese cities. Sixty-second city tours, honest dish scores, and Cogi, a dumpling who picks dinner so your group chat doesn’t have to.',
    highlights: [
      'Designed, built and shipped end to end, solo',
      'SwiftUI app, Go API, Firebase and an editor portal',
      'Vietnamese and English, iPhone and iPad',
    ],
    rating: '5.0 on the App Store. Small sample size, big energy.',
    stack: ['SwiftUI', 'Go', 'Firebase', 'MapKit'],
    core: ['SwiftUI'],
    link: {
      label: 'Get it on the App Store',
      href: 'https://apps.apple.com/vn/app/cogingon-local-food-guide/id6818789886',
      icon: 'appstore',
    },
    shots: [
      {
        src: asset('quests/cogingon/shot-01.webp'),
        alt: 'COGINGON home screen with Ca Mau city card and the Spin button',
      },
      {
        src: asset('quests/cogingon/shot-03.webp'),
        alt: 'COGINGON place details with dish photo and Cogi score',
      },
      {
        src: asset('quests/cogingon/shot-04.webp'),
        alt: 'COGINGON map with scored restaurant pins',
      },
    ],
    mascot: {
      src: asset('quests/cogingon/cogi-delicious.webp'),
      heroSrc: asset('quests/cogingon/cogi-cheerful.webp'),
      alt: 'Cogi, the COGINGON dumpling mascot',
      says: 'Hungry? I know a place.',
    },
  },
  {
    id: 'tabi',
    name: 'Tabi no Chan',
    tone: 'pink',
    logo: asset('quests/tabi/logo.webp'),
    badge: 'Solo, full stack',
    title: 'Visa paperwork, minus the paper chase.',
    description:
      'A live visa document platform for a Vietnamese consultancy. Around 900 applications a month, 5 staff in it daily and 30+ partner agents. Designed, built and run by me.',
    highlights: [
      'Next.js portal for staff and agents, with QR-verifiable receipts',
      'Claude-powered document AI plus OCR, so nobody retypes a passport',
      'Expo staff app, Lark and Zalo bots, and a consulate mailbox watcher',
      'Built with Claude Code across 1,000+ commits, with versioned releases and rollbacks',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'FastAPI',
      'Firebase',
      'Cloud Run',
      'Expo',
    ],
    core: ['Next.js', 'FastAPI'],
    link: {
      label: 'Visit the site',
      href: 'https://tabinochan.hientrangvisa.vn',
      icon: 'globe',
    },
    shots: [
      {
        src: asset('quests/tabi/dashboard.webp'),
        alt: 'Tabi no Chan dashboard with case counts and the attention queue',
      },
    ],
    crop: {
      src: asset('quests/tabi/crop-ai.webp'),
      alt: 'AI document extraction panel from Tabi no Chan',
    },
  },
]

const projects = [
  {
    name: 'PSSB Hospital Kiosk',
    client: 'Taggle, for National Healthcare Group',
    icon: 'kiosk',
    tone: 'sky',
    featured: true,
    description:
      'A self-service iPad kiosk running 24/7 on about 200 devices across NHG hospitals and polyclinics in Singapore, serving 2,000+ patients a day. Check in, book and pay without queuing at a counter.',
    stack: ['React Native', 'TypeScript', 'Expo', 'Zustand', 'Redux Toolkit'],
    core: ['React Native', 'TypeScript', 'Expo'],
    achievements: [
      'Wired in payment terminals and Epson printers with the hardware vendors',
      'Wrote the expo-redpark-serial and expo-pssb-keypair native modules',
      'Adapted react-native-esc-pos-printer for the Epson ePOS SDK',
      '12+ monthly releases since the Sep 2025 go-live, from build to App Store review',
      'Scrum Master duties on the side, React Testing Library coverage underneath',
    ],
  },
  {
    name: 'Taggle Portal',
    client: 'Taggle',
    icon: 'admin',
    tone: 'mint',
    description:
      'A multi-tenant healthcare web platform I have built since its start in 2021. It now has 60+ modules: role-based access for every admin level and doctors, programme setup, appointments, video consults, real-time vitals charts and reports.',
    stack: ['React', 'MUI', 'Redux Toolkit', 'Zustand', 'Vitest'],
    core: ['React', 'MUI', 'Redux Toolkit'],
  },
  {
    name: 'NCA Portal',
    client: 'National Healthcare Group, with Taggle Singapore',
    icon: 'heart',
    tone: 'peach',
    description:
      'Intranet portal for National Healthcare Group, delivered with the Taggle onshore team in Singapore. I own source control and support UAT and production releases.',
    stack: ['ReactJS', 'MUI', 'Redux Toolkit', 'Zustand'],
    core: ['ReactJS', 'MUI'],
  },
  {
    name: 'Taggle Platform',
    client: 'Taggle, SG and PH',
    icon: 'platform',
    tone: 'primary',
    description:
      'Front-end foundation for a multi-tenant healthcare platform for clinics in Singapore and the Philippines. Now piloting with its first 4 to 5 clinic tenants.',
    stack: ['ReactJS', 'TypeScript', 'MUI', 'Axios', 'Redux Toolkit'],
    core: ['ReactJS', 'TypeScript', 'Redux Toolkit'],
  },
  {
    name: 'XSPERA Enterprise Portal',
    client: 'Saigon Commercial Bank',
    icon: 'bank',
    tone: 'pink',
    description:
      'Enterprise tools woven into Microsoft Teams, Power Apps and SharePoint for one of Vietnam’s commercial banks.',
    stack: ['ReactJS', 'AngularJS', 'Kendo UI', 'SharePoint'],
    core: ['AngularJS', 'SharePoint'],
  },
  {
    name: 'Radiology Viewers',
    client: 'Ramsoft (Canada) and France',
    icon: 'scan',
    tone: 'lilac',
    description:
      'Web radiology viewers and clinical workflow UI for Ramsoft and a French radiology product. They had to behave in every browser a hospital still runs. Including the old ones.',
    stack: ['JavaScript', 'SCSS', 'HTML5', 'Sencha ExtJS'],
    core: ['JavaScript', 'Sencha ExtJS'],
  },
]

const experiences = [
  {
    company: 'Taggle',
    location: 'Singapore HQ, Ho Chi Minh City',
    time: 'Dec 2020 - Now',
    current: true,
    role: 'Senior Software Development Engineer',
    quip: 'Where I learned hospitals care a lot about receipt printers.',
    points: [
      'Lead the front-end team: 2 web and 3 mobile developers',
      'Mentored a fresher who reached junior level within a year',
      'Built the PSSB iPad kiosk solo from prototype to production: 24/7 on ~200 devices, 2,000+ patients a day',
      'Shipped 12+ monthly releases plus hotfixes since the Sep 2025 go-live',
      'Built Taggle Portal, a multi-tenant React platform with 60+ modules, from the start in 2021',
      'Deliver National Healthcare Group projects (PSSB kiosk, NCA portal) with the Singapore onshore team',
      'Designed the front-end foundation for the admin portals so new people onboard fast',
      'Building the multi-tenant Taggle Platform for clinics in Singapore and the Philippines',
      'Own code review, merges, CI/CD, UAT and production releases',
    ],
  },
  {
    company: 'Xspera Apac',
    location: 'Ho Chi Minh City',
    time: 'Dec 2019 - Dec 2020',
    role: 'Front-End Developer',
    quip: 'Taught SharePoint some manners. It mostly listened.',
    points: [
      'Enterprise solutions in AngularJS, React, SharePoint and Kendo UI',
      'Microsoft Teams Apps and Power Apps wired into enterprise workflows',
      'Mentored a fresher and an intern until they could deliver on their own',
    ],
  },
  {
    company: 'Global Cybersoft',
    location: 'Ho Chi Minh City',
    time: 'Mar 2018 - Dec 2019',
    role: 'Front-End Developer and Consultant',
    quip: 'Made radiology apps work in legacy browsers. Still recovering.',
    points: [
      'Radiology web apps for Ramsoft (Canada) and a French customer',
      'Production radiology apps in Sencha ExtJS with MVVM',
      'Requirement analysis, estimates and client demos for two products',
    ],
  },
]

// `core` items render first and highlighted: the ones I'd bet a release on
const toolbox = [
  {
    title: 'Daily drivers',
    note: 'What my hands type before my brain wakes up.',
    core: ['React', 'TypeScript', 'JavaScript', 'React Native', 'Expo'],
    tone: 'sky',
    size: 'wide',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'React Native',
      'Expo',
      'Redux Toolkit',
      'Zustand',
      'MUI',
      'React Hook Form',
      'Formik + Yup',
      'Axios',
      'i18next',
      'Tamagui',
      'HTML / CSS / SCSS',
    ],
  },
  {
    title: 'Side-quest gear',
    note: 'Learned at night, shipped anyway.',
    core: ['SwiftUI', 'Next.js', 'Firebase'],
    tone: 'primary',
    items: [
      'SwiftUI',
      'Go',
      'Next.js',
      'FastAPI',
      'Firebase',
      'Cloud Run',
      'Claude + LiteLLM',
      'Claude Code',
      'Cursor',
      'OpenAI Codex',
      'BigQuery',
    ],
  },
  {
    title: 'Keeping it honest',
    note: 'Tests, pipelines and the occasional container.',
    core: ['Git', 'CI/CD'],
    tone: 'mint',
    items: [
      'Jest',
      'Vitest',
      'React Testing Library',
      'Maestro',
      'Storybook',
      'Vite',
      'Webpack',
      'Git',
      'CI/CD',
      'Azure DevOps',
      'TestFlight',
      'Docker',
    ],
  },
  {
    title: 'Vintage collection',
    note: 'I have seen things. jQuery things.',
    core: ['AngularJS', 'Sencha ExtJS'],
    tone: 'lilac',
    size: 'wide',
    items: [
      'AngularJS',
      'jQuery',
      'Sencha ExtJS',
      'Kendo UI',
      'SharePoint',
      'Power Apps',
      'MS Teams Apps',
      '.NET Core',
    ],
  },
]

const contact = {
  email: 'luutrungkien120894@gmail.com',
  phone: {
    display: '+84 919 625 566',
    tel: '+84919625566',
    zalo: 'https://zalo.me/0919625566',
    whatsapp: 'https://wa.me/84919625566',
  },
  title: 'Say hi.',
  body: 'Got a product idea, a gnarly front-end problem or a role that isn’t boring? My inbox is open, and I reply faster than my CI pipeline.',
  linkedin: about.social.linkedin,
  github: about.social.github,
}

export { about, facts, sideQuests, projects, experiences, toolbox, contact }
