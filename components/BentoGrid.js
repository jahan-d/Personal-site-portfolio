'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/motion-variants'
import StatCard from './StatCard'
import TechBadge from './TechBadge'

export default function BentoGrid() {
    const techStack = [
        { name: 'React 19', colorClass: 'badge-primary', level: 'Expert', projects: ['AssetVerse', 'Dragon News'] },
        { name: 'Next.js 15', colorClass: 'badge-secondary', level: 'Expert', projects: ['AssetVerse', 'Portfolio'] },
        { name: 'Node.js', colorClass: 'badge-accent', level: 'Advanced', projects: ['Blood Donation', 'AssetVerse'] },
        { name: 'MongoDB', colorClass: 'badge-info', level: 'Advanced', projects: ['AssetVerse', 'Blood Donation'] },
        { name: 'Tailwind CSS', colorClass: 'badge-primary', level: 'Expert', projects: ['All Projects'] },
        { name: 'Express.js', colorClass: 'badge-secondary', level: 'Advanced', projects: ['AssetVerse', 'Blood Donation'] },
        { name: 'Firebase', colorClass: 'badge-accent', level: 'Advanced', projects: ['AssetVerse', 'Blood Donation'] },
        { name: 'TanStack Query', colorClass: 'badge-info', level: 'Expert', projects: ['AssetVerse', 'Dragon News'] },
    ]

    return (
        <section className="py-20 px-4 md:px-8 bg-base-100">
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-6xl mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* Tech Stack Card */}
                    <motion.div
                        variants={fadeUp}
                        className="md:col-span-2 card bg-base-200 border border-white/5 shadow-xl p-8"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-black uppercase tracking-widest text-primary">Tech Arsenal</h2>
                            <span className="text-[10px] font-bold text-white/20 animate-pulse">HOVER TO EXPLORE</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {techStack.map((tech) => (
                                <TechBadge key={tech.name} tech={tech} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Availability Card */}
                    <motion.div
                        variants={fadeUp}
                        className="md:col-span-2 card bg-primary/10 border border-primary/20 shadow-xl p-8 flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                            </span>
                            <h2 className="text-xl font-black uppercase tracking-widest text-primary">Available for Hire</h2>
                        </div>
                        <p className="text-white/70 leading-relaxed font-medium">
                            Open to <span className="text-white">Full-Time</span> or <span className="text-white">Contract</span> roles in Dhaka or Remote.
                            Ready to ship production-grade code to your stack.
                        </p>
                    </motion.div>

                    {/* Stats Section */}
                    <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <StatCard value={3} label="Production Apps" suffix="+" />
                        <StatCard value={15} label="Organizations Served" prefix="" />
                        <StatCard value={1} label="Lighthouse Score" suffix=".2s" prefix="" />
                        <StatCard value={100} label="Responsive Design" suffix="%" />
                    </div>

                    {/* Current Focus Card */}
                    <motion.div
                        variants={fadeUp}
                        className="md:col-span-4 card bg-base-300 border border-white/5 shadow-xl p-8"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <h2 className="text-xl font-black uppercase tracking-widest text-secondary mb-2">Current Deep-Dive</h2>
                                <p className="text-white/60 font-medium">Mastering Next.js 15 Server Actions and React 19 Concurrent Rendering.</p>
                            </div>
                            <div className="badge badge-secondary badge-outline px-6 py-4 h-auto font-black uppercase tracking-tighter">
                                ACTIVE LEARNING
                            </div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}
