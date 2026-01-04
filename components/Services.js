'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'

export default function Services() {
    const services = [
        {
            title: 'Full-Stack Web Apps (MERN)',
            desc: 'End-to-end development with MongoDB, Express, React, and Node.js. High focus on security and scalability.',
            projects: 3
        },
        {
            title: 'Frontend UI (React / Next.js)',
            desc: 'Building modern, reactive user interfaces with React 19 and Next.js 15. Clean, accessible, and high-performance.',
            projects: 2
        },
        {
            title: 'Backend APIs (Node / Express)',
            desc: 'Restful API design with robust authentication (JWT) and database integration. Optimized for speed and reliability.',
            projects: 3
        }
    ]

    return (
        <section id="services" className="py-24 border-t border-white/5">
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl"
            >
                {/* Section Label */}
                <motion.div variants={fadeUp} className="section-label">
                    <i className="fa fa-server"></i> SERVICES
                </motion.div>

                {/* Headline */}
                <motion.h2
                    variants={fadeUp}
                    className="text-4xl md:text-5xl font-black mb-16 leading-tight tracking-tighter text-white uppercase"
                >
                    My <span className="text-primary">Specializations</span>
                </motion.h2>

                {/* Service Cards */}
                <motion.div variants={fadeUp} className="space-y-6">
                    {services.map((service, i) => (
                        <div key={i} className="group p-10 rounded-3xl border border-white/5 hover:border-primary transition-all duration-500 bg-base-200/50">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-white/50 max-w-lg leading-relaxed">{service.desc}</p>
                                </div>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">{service.projects} Projects</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </motion.div>
        </section>
    )
}
