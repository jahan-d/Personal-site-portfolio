'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'
import { FaArrowDown, FaHome } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

export default function Intro() {
    return (
        <section id="home" className="pt-12 pb-24">
            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="max-w-3xl"
            >
                {/* Section Label */}
                <motion.div variants={fadeUp} className="section-label border-white/10 px-5 py-2 rounded-full inline-flex items-center gap-2 mb-10">
                    <FaHome size={12} className="text-white" />
                    <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">Introduce</span>
                </motion.div>

                {/* Massive Headline */}
                <motion.h1
                    variants={fadeUp}
                    className="text-[48px] md:text-[80px] font-light leading-[1.1] tracking-tight mb-8"
                >
                    I'm <span className="text-primary italic">Jahan</span>,<br />
                    Junior Frontend Developer
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    variants={fadeUp}
                    className="text-lg md:text-xl text-white/40 mb-20 leading-relaxed max-w-lg font-medium"
                >
                    I build scalable, responsive web apps with the MERN stack.
                    Focused on clean UI, secure auth, and production-ready features.
                </motion.p>

                {/* Rotating Scroll Circle (Bottom Right of section) */}
                <div className="flex justify-end pr-10 lg:pr-32 relative">
                    <motion.div
                        variants={fadeUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <ScrollLink
                            to="portfolio"
                            smooth={true}
                            duration={500}
                            className="group relative w-44 h-44 flex items-center justify-center border border-white/10 rounded-full hover:border-primary transition-all duration-500 cursor-pointer"
                        >
                            <div className="absolute inset-0 flex items-center justify-center animate-[spin_15s_linear_infinite] px-4 pointer-events-none">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                                    <text className="text-[9px] font-bold uppercase tracking-[0.3em] fill-white/20 group-hover:fill-primary/40 transition-all">
                                        <textPath xlinkHref="#circlePath">My Projects - My Projects - My Projects -</textPath>
                                    </text>
                                </svg>
                            </div>
                            <FaArrowDown className="text-2xl text-white group-hover:text-primary transition-all group-hover:translate-y-2" />
                        </ScrollLink>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col gap-2">
                        <span className="text-6xl font-black text-primary leading-none">6+</span>
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Months Experience</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-6xl font-black text-primary leading-none">3</span>
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Featured Projects</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-6xl font-black text-primary leading-none">95+</span>
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Performance Score</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
