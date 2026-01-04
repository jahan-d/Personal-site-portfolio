'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'
import { FaUser } from 'react-icons/fa'

export default function About() {
    return (
        <section id="about" className="py-24 border-t border-white/5">
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl"
            >
                {/* Section Label */}
                <motion.div variants={fadeUp} className="section-label mb-10">
                    <FaUser className="text-sm" /> ABOUT
                </motion.div>

                {/* Headline */}
                <motion.h2
                    variants={fadeUp}
                    className="text-[40px] md:text-[50px] font-light mb-10 leading-[1.2] tracking-tight text-white uppercase italic"
                >
                    Turning ideas into <span className="text-primary font-bold not-italic">high-performance digital products</span>
                </motion.h2>

                {/* Bio text */}
                <motion.p
                    variants={fadeUp}
                    className="text-[18px] text-white/60 mb-10 leading-relaxed font-medium"
                >
                    I am Jahan, a Junior Frontend Developer who thrives at the intersection of robust architecture and
                    exceptional user experiences. My focus is on writing clean, maintainable code using the MERN
                    stack to build applications that are not just functional, but optimized for scale and security.
                </motion.p>

                {/* Highlights */}
                <motion.div variants={fadeUp} className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                        <p className="text-white/80 font-bold">JWT authentication + role-based dashboards</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                        <p className="text-white/80 font-bold">Payments/subscriptions with Stripe integration</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                        <p className="text-white/80 font-bold">Responsive UI with React/Next.js + Tailwind CSS</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
