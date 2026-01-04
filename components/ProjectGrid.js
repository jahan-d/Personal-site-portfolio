'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/motion-variants'
import ProjectCard from './ProjectCard'

const projects = [
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
        liveLink: 'https://assetverse-16573.web.app/'
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
        liveLink: 'https://blooddonationappv3.web.app/'
    },
    {
        title: 'Dragon News Portal',
        metric: '25% COMPRESSION',
        description: 'High-performance news application showcasing modern rendering and data-fetching patterns.',
        results: [
            'Implemented React 19 concurrent features for smooth transitions',
            'Optimized initial bundle size by 25% through dynamic imports',
            'Built responsive layout scoring 98 on Lighthouse accessibility'
        ],
        tech: ['React 19', 'Next.js', 'TanStack Query', 'Tailwind v4', 'Vite'],
        githubLink: 'https://github.com/jahan-d/dragon-news',
        liveLink: 'https://dragon-news-d.web.app'
    }
]

export default function ProjectGrid() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </motion.div>
    )
}
