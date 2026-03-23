const projects = [
  {
    slug: 'geoquiz',
    title: 'GeoQuiz — Geography Trivia & Flag Game',
    year: '2026',
    badge: 'Game',
    thumbStyle: {
      backgroundImage: 'linear-gradient(180deg,rgba(76,141,255,.15),transparent), url(/assets/images/geoquiz/thumb.jpg)',
      backgroundSize: 'cover, contain',
      backgroundPosition: 'center, center',
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundColor: '#ffffff',
    },
    description: 'Interactive geography trivia — survival mode flag guessing with 3 lives. How many countries can you identify?',
  },
  {
    slug: 'seeksupply',
    title: 'SeekSupply — Local Supplier Marketplace for SMEs & Events',
    year: '2024',
    badge: 'Design',
    thumbSrc: '/assets/images/seeksupply/screen-01.png',
    thumbStyle: {
      backgroundImage: 'linear-gradient(180deg,rgba(76,141,255,.35),transparent), url(/assets/images/seeksupply/screen-01.png)',
      backgroundPosition: 'top center, top center',
      backgroundSize: 'cover, cover',
      backgroundRepeat: 'no-repeat, no-repeat',
    },
    description: 'A design-first e-commerce platform connecting small/medium businesses and event organizers with transparent, nearby suppliers.',
  },
  {
    slug: 'nontonnyaman',
    title: 'NontonNyaman – Accessibility-Focused Navigation App',
    year: '2024',
    badge: 'Web App',
    thumbStyle: {
      backgroundImage: 'linear-gradient(180deg,rgba(76,141,255,.35),transparent), url(/assets/images/IMG_5523.png)',
    },
    description: 'Mobile app to improve navigation for users with mobility impairments. Managed backend services using Django and PostgreSQL.',
  },
  {
    slug: 'menuscanorder',
    title: 'MenuScanOrder — QR Based Restaurant Ordering System',
    year: '2024',
    badge: 'Web',
    thumbStyle: {
      backgroundImage: "linear-gradient(180deg,rgba(76,141,255,.35),transparent), url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1470&auto=format&fit=crop')",
    },
    description: 'PHP + PostgreSQL platform with admin dashboards and real‑time order flow for small restaurants.',
  },
  {
    slug: 'isaveit',
    title: 'iSaveIt — Personal Finance Management App',
    year: '2022',
    badge: 'Web App',
    thumbStyle: {
      backgroundImage: 'linear-gradient(180deg,rgba(76,141,255,.35),transparent), url(/assets/images/iSaveIt/full%20logo-1.png)',
      backgroundSize: 'cover, contain',
      backgroundPosition: 'center, center',
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundColor: 'var(--elev-1)',
    },
    description: 'Django + PostgreSQL app for budgets and expenses with CI/CD and a focus on data privacy.',
  },
]

export default projects
