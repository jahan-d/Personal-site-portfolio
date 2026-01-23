'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaGitAlt,
    FaTools
} from 'react-icons/fa'
import {
    SiNextdotjs,
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiFirebase
} from 'react-icons/si'

export default function Skills() {
    const skills = [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
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
                <motion.div variants={fadeUp} className="section-label mb-10">
                    <FaTools className="text-sm" /> SKILLS
                </motion.div>

                {/* Headline */}
                <motion.h2
                    variants={fadeUp}
                    className="text-[45px] md:text-[60px] font-light mb-16 leading-[1.1] tracking-tight text-white italic"
                >
                    Technical <span className="text-primary font-bold not-italic">Arsenal</span>
                </motion.h2>

                {/* Skills Grid */}
                <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 group">
                            <div className="relative w-full aspect-square rounded-[30px] border border-white/5 flex flex-col items-center justify-center transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.05] overflow-hidden">
                                {/* Brand Glow (Radial Background) */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)`
                                    }}
                                />

                                {/* Icon */}
                                <div className="text-[40px] text-white/20 group-hover:text-white transition-all duration-500 group-hover:scale-110 z-10" style={{ color: skill.color }}>
                                    {skill.icon}
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
