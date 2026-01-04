'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null)

    const faqs = [
        {
            question: "What is your primary tech stack?",
            answer: "I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and modern frameworks like Next.js 15. I focus on building scalable, full-stack applications with clean architecture."
        },
        {
            question: "Are you available for full-time roles?",
            answer: "Yes, I am currently seeking full-time opportunities or long-term contract roles where I can contribute to production-grade React/Next.js and Node.js projects."
        },
        {
            question: "How do you handle project security?",
            answer: "I implement industry-standard security practices including JWT-based authentication, password hashing with bcrypt, sanitized database queries, and role-based access control (RBAC)."
        },
        {
            question: "Can you work with remote teams?",
            answer: "Absolutely. I am comfortable working in remote environments, using Git for version control, and collaborating through tools like Slack and Zoom."
        }
    ]

    return (
        <section id="faq" className="py-24 border-t border-white/5">
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl"
            >
                {/* Section Label */}
                <motion.div variants={fadeUp} className="section-label">
                    <i className="fa fa-question-circle"></i> FAQ
                </motion.div>

                {/* Headline */}
                <motion.h2
                    variants={fadeUp}
                    className="text-4xl md:text-5xl font-black mb-16 leading-tight tracking-tighter text-white uppercase"
                >
                    Frequently Asked <span className="text-primary">Questions</span>
                </motion.h2>

                {/* FAQ List */}
                <motion.div variants={fadeUp} className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="rounded-3xl border border-white/5 bg-base-200/30 overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full p-8 flex justify-between items-center text-left transition-all hover:bg-white/5"
                            >
                                <span className="text-xl font-bold text-white pr-8">{faq.question}</span>
                                <span className={`shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all ${activeIndex === i ? 'bg-primary border-primary text-black' : 'text-primary'}`}>
                                    {activeIndex === i ? <FaMinus size={12} /> : <FaPlus size={12} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="p-8 pt-0 text-white/50 leading-relaxed font-medium">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>

            </motion.div>
        </section>
    )
}
