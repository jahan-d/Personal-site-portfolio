'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'

export default function Skills() {
    const skills = [
        { name: 'React', percentage: 90 },
        { name: 'Next.js', percentage: 80 },
        { name: 'Node.js', percentage: 85 },
        { name: 'Express', percentage: 85 },
        { name: 'MongoDB', percentage: 85 },
        { name: 'Tailwind CSS', percentage: 90 },
        { name: 'Git', percentage: 80 },
    ]

    return (
        <section id="skills" className="py-24 border-t border-white/5">
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl"
            >
                {/* Section Label */}
                <motion.div variants={fadeUp} className="section-label">
                    <i className="fa fa-shapes"></i> SKILLS
                </motion.div>

                {/* Headline */}
                <motion.h2
                    variants={fadeUp}
                    className="text-4xl md:text-5xl font-black mb-16 leading-tight tracking-tighter text-white uppercase"
                >
                    Technical <span className="text-primary">Arsenal</span>
                </motion.h2>

                {/* Skills Grid */}
                <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {skills.map((skill, i) => (
                        <div key={i} className="flex flex-col items-center gap-6 group">
                            <div className="relative w-full aspect-square rounded-[40px] border-2 border-white/5 group-hover:border-primary transition-all duration-500 flex flex-col items-center justify-center gap-2 overflow-hidden bg-base-200/50">
                                <span className="text-3xl font-black text-white group-hover:text-primary transition-colors">{skill.percentage}%</span>
                                <div
                                    className="absolute bottom-0 left-0 w-full bg-primary/20 transition-all duration-1000 ease-out h-0 group-hover:h-full opacity-0 group-hover:opacity-100"
                                    style={{ height: `${skill.percentage}%` }}
                                />
                            </div>
                            <span className="text-xs font-black text-white/50 uppercase tracking-widest">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>

            </motion.div>
        </section>
    )
}
