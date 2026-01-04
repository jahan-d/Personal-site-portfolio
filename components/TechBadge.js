'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { scaleIn } from '@/lib/motion-variants'

export default function TechBadge({ tech }) {
    const [isHovered, setIsHovered] = useState(false)
    const { name, colorClass, level, projects } = tech

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.05 }}
                className={`badge ${colorClass} badge-outline font-bold py-3 px-4 h-auto cursor-help transition-all duration-300 ${isHovered ? 'bg-white/5' : ''}`}
            >
                {name}
            </motion.div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        className="absolute z-[100] bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 p-4 bg-base-300 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl pointer-events-none"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Proficiency</span>
                            <span className={`text-[10px] font-black uppercase tracking-tight px-2 py-0.5 rounded ${colorClass} bg-opacity-10 text-opacity-100`}>
                                {level}
                            </span>
                        </div>

                        <div className="w-full bg-white/5 h-1 rounded-full mb-4 overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: level === 'Expert' ? '95%' : level === 'Advanced' ? '80%' : '60%' }}
                                className={`h-full ${colorClass.replace('badge-', 'bg-')}`}
                            />
                        </div>

                        <div className="space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-1">Applied In</span>
                            <div className="flex flex-wrap gap-1">
                                {projects?.map((proj) => (
                                    <span key={proj} className="text-[9px] font-bold text-white/80 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                                        {proj}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Pointer Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-base-300 border-r border-b border-white/10 rotate-45 -mt-1" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}
