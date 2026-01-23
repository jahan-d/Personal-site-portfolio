'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'
import Image from 'next/image'

export default function Portfolio() {
    const projects = [
        {
            title: 'Blood Donation Platform',
            tags: ['React', 'Firebase', 'Express', 'JWT'],
            desc: 'Secure management system with specialized Donor, Admin, and Volunteer dashboards and real-time requests.',
            live: 'https://blooddonationappv3.web.app/',
            githubClient: 'https://github.com/jahan-d/blood-donation-app-v3-client',
            githubServer: 'https://github.com/jahan-d/blood-donation-app-v3-server',
            preview: '/blood-donation.png'
        },
        {
            title: 'Utility Bill System',
            tags: ['MERN', 'Chart.js', 'Stripe'],
            desc: 'Visualized analytics for consumption and billing with integrated simulated automated payment processing.',
            live: 'https://b12a10-v2.web.app/',
            githubClient: 'https://github.com/jahan-d/Utility_Bill_Management_System/tree/main',
            githubServer: 'https://github.com/jahan-d/Utility_Bill_Management_System_server',
            preview: '/ubms.png'
        },
        {
            title: 'AssetVerse — HR Platform',
            tags: ['Next.js 15', 'Stripe', 'PDF-Lib', 'RBAC'],
            desc: 'Multi-tenant B2B platform for team asset tracking with subscription tiers and automated PDF reporting.',
            live: 'https://assetverse-16573.web.app/',
            github: 'https://github.com/jahan-d/Asset-Verse',
            preview: '/assetverse.png'
        }
    ]

    return (
        <section id="portfolio" className="py-24 border-t border-white/5">
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl"
            >
                {/* Section Label */}
                <motion.div variants={fadeUp} className="section-label">
                    <i className="fa fa-briefcase"></i> PORTFOLIO
                </motion.div>

                {/* Headline */}
                <motion.h2
                    variants={fadeUp}
                    className="text-[40px] md:text-[50px] font-medium mb-16 leading-tight tracking-tighter text-white uppercase"
                >
                    Featured <span className="text-primary italic">Projects</span>
                </motion.h2>

                {/* Project List */}
                <motion.div variants={fadeUp} className="space-y-24">
                    {projects.map((project, i) => (
                        <div key={i} className="group relative">
                            {/* Project Overlay (Hover) Tags */}
                            <div className="absolute top-8 left-8 z-30 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 bg-white text-black rounded-full transition-all group-hover:bg-primary">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="relative aspect-video rounded-[30px] lg:rounded-[50px] overflow-hidden mb-10 border border-white/5 group-hover:border-primary/50 transition-all duration-700 bg-[#1a1a1a]">
                                <img
                                    src={project.preview}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-10"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all z-20" />
                                <div className="w-full h-full flex items-center justify-center text-white/5 text-4xl font-black uppercase tracking-widest select-none">
                                    {project.title.split(' ')[0]}
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-4xl font-light text-white mb-4 group-hover:text-primary transition-colors tracking-tight uppercase">
                                        {project.title}
                                    </h3>
                                    <p className="text-lg text-white/40 max-w-2xl font-medium leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-2">
                                    <a href={project.live} target="_blank" className="h-12 px-8 flex items-center justify-center rounded-full border border-primary text-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
                                        Live Demo
                                    </a>

                                    {/* Interactive GitHub Button */}
                                    <div className="relative group/gh">
                                        <button className="h-12 px-8 flex items-center justify-center rounded-full border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest group-hover/gh:text-white group-hover/gh:border-white transition-all">
                                            GitHub
                                        </button>

                                        {/* Dropdown/revealer logic for dual repos */}
                                        <div className="absolute bottom-full left-0 mb-2 invisible group-hover/gh:visible opacity-0 group-hover/gh:opacity-100 transition-all duration-300 translate-y-2 group-hover/gh:translate-y-0 flex gap-2">
                                            {project.githubClient ? (
                                                <>
                                                    <a href={project.githubClient} target="_blank" className="h-10 px-5 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-primary text-primary text-[9px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all whitespace-nowrap whitespace-nowrap">
                                                        Client Repo
                                                    </a>
                                                    <a href={project.githubServer} target="_blank" className="h-10 px-5 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-primary text-primary text-[9px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all whitespace-nowrap whitespace-nowrap">
                                                        Server Repo
                                                    </a>
                                                </>
                                            ) : (
                                                <a href={project.github} target="_blank" className="h-10 px-5 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-primary text-primary text-[9px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all whitespace-nowrap">
                                                    Source Code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </motion.div>
        </section>
    )
}
