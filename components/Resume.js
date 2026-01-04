'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'

export default function Resume() {
    const education = [
        {
            year: '2022 — Present',
            degree: 'BSc in Computer Science and Engineering',
            institution: 'Daffodil International University',
            desc: 'Focused on algorithms, database management, and web engineering principles.'
        }
    ]

    const experience = [
        {
            year: '2025 — Present',
            role: 'Full-Stack Web Developer',
            company: 'Independent Projects / Freelance',
            desc: '6 months of intensive hands-on experience building, testing, and deploying end-to-end MERN applications.'
        }
    ]

    return (
        <section id="resume" className="py-24 border-t border-white/5">
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl"
            >
                {/* Section Label */}
                <motion.div variants={fadeUp} className="section-label">
                    <i className="fa fa-briefcase"></i> RESUME
                </motion.div>

                {/* Education */}
                <motion.div variants={fadeUp} className="mb-20">
                    <h3 className="text-3xl font-black text-white mb-10 uppercase tracking-tighter">Education</h3>
                    <div className="relative border-l border-white/10 pl-10 ml-2 space-y-16">
                        {education.map((item, i) => (
                            <div key={i} className="relative group">
                                <div className="absolute -left-[50px] top-2 w-4 h-4 rounded-full bg-white/20 group-hover:bg-primary transition-colors border-4 border-base-100" />
                                <span className="text-sm font-bold text-white/40 mb-2 block">{item.year}</span>
                                <h4 className="text-xl font-bold text-white mb-2">{item.degree}</h4>
                                <p className="text-sm text-white/50">{item.institution}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience */}
                <motion.div variants={fadeUp}>
                    <h3 className="text-3xl font-black text-white mb-10 uppercase tracking-tighter">Experience</h3>
                    <div className="relative border-l border-white/10 pl-10 ml-2 space-y-16">
                        {experience.map((item, i) => (
                            <div key={i} className="relative group">
                                <div className="absolute -left-[50px] top-2 w-4 h-4 rounded-full bg-white/20 group-hover:bg-primary transition-colors border-4 border-base-100" />
                                <span className="text-sm font-bold text-white/40 mb-2 block">{item.year}</span>
                                <h4 className="text-xl font-bold text-white mb-2">{item.role}</h4>
                                <p className="text-sm text-white/50 mb-4">{item.company}</p>
                                <p className="text-sm text-white/40 max-w-xl">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </motion.div>
        </section>
    )
}
