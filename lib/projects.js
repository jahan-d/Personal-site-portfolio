export const projects = [
    {
        title: 'AssetVerse',
        metric: '15+ ORGS',
        description: 'B2B SaaS platform for multi-tenant asset management and procurement workflows.',
        results: [
            'Built multi-tenant isolation with company-based MongoDB filtering',
            'Integrated Stripe subscriptions with automated webhook handlers',
            'Reduced asset request processing time from 3 days to 4 hours'
        ],
        tech: ['Next.js 15', 'MongoDB', 'Stripe API', 'Firebase Auth', 'TanStack Query'],
        githubLink: 'https://github.com/jahan-d/Asset-Verse',
        liveLink: 'https://assetverse-16573.web.app/',
        image: '/assetverse.png'
    },
    {
        title: 'Blood Donation Platform',
        metric: '82% FASTER',
        description: 'Real-time donor-recipient matching portal with geospatial search and secure health records.',
        results: [
            'Implemented MongoDB geospatial queries for <3s donor discovery',
            'Architected JWT auth system with refresh token rotation',
            'Achieved 95+ Lighthouse score through aggressive code-splitting'
        ],
        tech: ['React.js', 'Node.js', 'MongoDB Geospatial', 'JWT', 'Tailwind CSS'],
        githubLink: 'https://github.com/jahan-d/blood-donation-app-v3-client',
        liveLink: 'https://blooddonationappv3.web.app/',
        image: '/blood-donation.png'
    },
    {
        title: 'Utility Bills Management',
        metric: '100% DIGITAL',
        description: 'Modern utility bill tracking and payment platform with emerald theme and smooth animations.',
        results: [
            'Built comprehensive bill management with category filtering',
            'Implemented secure payment flow with user verification',
            'Designed premium UI with React Awesome Reveal animations'
        ],
        tech: ['React 19', 'Vite', 'Tailwind v4', 'Firebase Auth', 'jsPDF'],
        githubLink: 'https://github.com/jahan-d/utility-bills',
        liveLink: 'https://b12a10-v2.web.app',
        image: '/ubms.png'
    }
]
