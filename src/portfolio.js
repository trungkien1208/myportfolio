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
  subtext: `Senior front-end engineer, ${yearsShipping}+ years. Hospital kiosks by day, my own apps by night. Sleep is a side quest.`,
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
  'Two iOS apps on the App Store',
  '~900 visa cases a month through my platform',
  `${yearsShipping}+ years of shipping`,
  'Fluent in React, Swift and sarcasm',
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
      'Expo staff app, Lark and Zalo bots, 1,000+ commits with Claude Code',
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
        width: 1200,
        height: 613,
      },
    ],
    url: 'tabinochan.hientrangvisa.vn',
    crop: {
      src: asset('quests/tabi/crop-ai.webp'),
      alt: 'AI document extraction panel from Tabi no Chan',
      width: 1200,
      height: 357,
    },
  },
]

// Smaller side quests: one card each, one screenshot, one line of why
const miniQuests = [
  {
    id: 'memodory',
    name: 'Memodory',
    tone: 'sky',
    logo: asset('quests/memodory/logo.webp'),
    badge: 'New on the App Store',
    title: 'One line, nothing forgotten.',
    description:
      'An iOS notebook for forgetful people, kept by Mo the fish. Type “dentist tomorrow 3pm” or “coffee $4” and it lands on your day as a reminder or a spend.',
    stack: ['SwiftUI', 'WidgetKit', 'ActivityKit', 'iCloud'],
    core: ['SwiftUI'],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/app/id6834480345',
        icon: 'appstore',
      },
    ],
    thumb: {
      src: asset('quests/memodory/home.webp'),
      alt: 'Memodory home: Mo the fish, the day’s spending and a timeline of reminders',
      width: 660,
      height: 1434,
      phone: true,
    },
    // Hero sticker
    mascot: {
      src: asset('quests/memodory/mo-writing.webp'),
      alt: 'Mo, the Memodory fish, writing on a notepad',
      says: 'Noted!',
    },
  },
  {
    id: 'orcha',
    name: 'orcha + Orcherd',
    tone: 'mint',
    logo: asset('quests/orcha/logo.webp'),
    badge: 'Open source',
    title: 'Every agent, one calm cockpit.',
    description:
      'orcha is a Rust TUI for running Claude Code, Codex and Cursor side by side, with live status and plan-limit gauges per account. Orcherd brings the same cockpit to the Herdr desktop app as a plugin.',
    stack: ['Rust', 'ratatui', 'JavaScript', 'Python'],
    core: ['Rust'],
    links: [
      {
        label: 'orcha',
        href: 'https://trungkien1208.github.io/orcha/',
        icon: 'globe',
      },
      {
        label: 'orcha on GitHub',
        href: 'https://github.com/trungkien1208/orcha',
        icon: 'github',
      },
      {
        label: 'Orcherd',
        href: 'https://github.com/trungkien1208/orcherd',
        icon: 'github',
      },
    ],
    thumb: {
      src: asset('quests/orcha/orcherd-cockpit.webp'),
      alt: 'Orcherd in the Herdr app: projects and agents on the left, two agents side by side, fuel and git on the right',
      width: 1200,
      height: 753,
    },
    // The hero sticker still uses the whale
    mascot: {
      src: asset('quests/orcha/whale.svg'),
      alt: 'The orcha whale, sitting in a bowl of matcha',
      says: 'Me too, in Rust!',
    },
  },
  {
    id: 'envelo',
    name: 'Envelo',
    tone: 'peach',
    logo: asset('quests/envelo/logo.webp'),
    title: 'Wedding invites guests actually open.',
    description:
      'Interactive invitations for Vietnamese weddings. Each guest gets an envelope with their own name to open, then RSVPs and leaves a wish. A couple makes one in about 15 minutes.',
    stack: ['Next.js', 'GSAP', 'Firebase', 'Claude API'],
    core: ['Next.js'],
    thumb: {
      src: asset('quests/envelo/landing.webp'),
      alt: 'Envelo landing page with a sealed envelope addressed to a guest on a phone',
      width: 1200,
      height: 750,
    },
  },
  {
    id: 'token-station',
    name: 'Token Station',
    tone: 'lilac',
    logo: asset('quests/token-station/logo.webp'),
    badge: 'Personal tool',
    title: 'My Claude accounts, charging all my machines.',
    description:
      'A small hub on my Mac that keeps Claude setup-tokens encrypted and relays Claude Code for my other Macs and PCs over the LAN. Machines never see a token.',
    stack: ['Python', 'TLS', 'Vanilla JS'],
    core: ['Python'],
    thumb: {
      src: asset('quests/token-station/station.webp'),
      alt: 'Token Station: each Claude account is a charger kiosk, with a Mac mini and a PC plugged in',
      width: 1200,
      height: 848,
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
      '12+ monthly releases since the Sep 2025 go-live, from build to App Store review',
    ],
  },
  {
    name: 'Taggle Portal',
    client: 'Taggle',
    icon: 'admin',
    tone: 'mint',
    description:
      'Multi-tenant healthcare web platform I built from zero in 2021 and ran solo for two years. Now 60+ modules: roles, appointments, video consults and real-time vitals.',
    stack: ['React', 'MUI', 'Redux Toolkit', 'Zustand', 'Vitest'],
    core: ['React', 'MUI', 'Redux Toolkit'],
  },
  {
    name: 'NCA Portal',
    client: 'National Healthcare Group, with Taggle Singapore',
    icon: 'heart',
    tone: 'peach',
    description:
      'Intranet portal for National Healthcare Group. Built it from zero, ran it solo for two years, then handed over a codebase the team could own without calling me.',
    stack: ['ReactJS', 'MUI', 'Redux Toolkit', 'Zustand'],
    core: ['ReactJS', 'MUI'],
  },
  {
    name: 'Taggle Platform',
    client: 'Taggle, SG and PH',
    icon: 'platform',
    tone: 'primary',
    description:
      'Front-end foundation for a multi-tenant platform for clinics in Singapore and the Philippines. Piloting with its first 4 to 5 clinic tenants.',
    stack: ['ReactJS', 'TypeScript', 'MUI', 'Redux Toolkit'],
    core: ['ReactJS', 'TypeScript'],
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
      'Lead the front-end team (2 web, 3 mobile); mentored a fresher to junior within a year',
      'Built the PSSB kiosk and NCA portal for National Healthcare Group with the Singapore onshore team',
      'Built Taggle Portal from zero in 2021; now building the multi-tenant Taggle Platform',
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
      'XSPERA enterprise portal for Saigon Commercial Bank: AngularJS, React, SharePoint, Kendo UI',
      'Microsoft Teams Apps and Power Apps wired into enterprise workflows',
    ],
  },
  {
    company: 'Global Cybersoft',
    location: 'Ho Chi Minh City',
    time: 'Mar 2018 - Dec 2019',
    role: 'Front-End Developer and Consultant',
    quip: 'Made radiology apps work in legacy browsers. Still recovering.',
    points: [
      'Radiology viewers for Ramsoft (Canada) and a French customer, in Sencha ExtJS',
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
      'i18next',
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
      'Next.js',
      'Firebase',
      'Go',
      'FastAPI',
      'Rust',
      'Python',
      'GSAP',
      'Cloud Run',
      'Claude API',
      'Claude Code',
    ],
  },
  {
    title: 'Keeping it honest',
    note: 'Tests, pipelines and the old stuff I still remember.',
    core: ['Git', 'CI/CD'],
    tone: 'mint',
    size: 'full',
    items: [
      'Jest',
      'Vitest',
      'React Testing Library',
      'Maestro',
      'Vite',
      'Git',
      'CI/CD',
      'Azure DevOps',
      'TestFlight',
      'Docker',
      'AngularJS',
      'Sencha ExtJS',
      'SharePoint',
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

export {
  about,
  facts,
  sideQuests,
  miniQuests,
  projects,
  experiences,
  toolbox,
  contact,
}
