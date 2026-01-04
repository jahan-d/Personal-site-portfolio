'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion-variants'
import Link from 'next/link'

export default function ProjectCard({ project }) {
    const { title, description, results, tech, liveLink, githubLink, metric } = project

    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="card bg-base-300 border border-white/5 shadow-2xl overflow-hidden group"
        >
            <div className="relative h-48 bg-gradient-to-br from-neutral to-base-100 p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-3xl font-black text-white/10 uppercase tracking-tighter group-hover:text-primary transition-colors duration-500">
                    {title}
                </h3>

                {/* Metric Badge */}
                {metric && (
                    <div className="absolute top-4 right-4 badge badge-secondary font-black py-3 px-4 shadow-lg shadow-secondary/20">
                        {metric}
                    </div>
                )}
            </div>

            <div className="card-body p-8">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="card-title text-2xl font-black tracking-tight text-white">{title}</h2>
                    <div className="flex gap-2">
                        {githubLink && (
                            <a href={githubLink} target="_blank" className="btn btn-ghost btn-circle btn-sm hover:text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                        )}
                        {liveLink && (
                            <a href={liveLink} target="_blank" className="btn btn-primary btn-circle btn-sm shadow-md shadow-primary/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-white/60 mb-6 font-medium leading-relaxed">
                    {description}
                </p>

                <div className="space-y-3 mb-8">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-secondary">Key Results</h4>
                    <ul className="space-y-2">
                        {results.map((res, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-white/80 font-medium">
                                <span className="text-primary mt-1">▹</span>
                                {res}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-tighter text-white/40 border border-white/5 bg-white/5 py-1 px-2 rounded">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
