'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import { fadeUp } from '@/lib/motion-variants'

export default function StatCard({ value, label, prefix = '', suffix = '' }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))

    useEffect(() => {
        const controls = animate(count, value, { duration: 2, ease: "easeOut" })
        return controls.stop
    }, [value, count])

    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="card bg-base-200 border border-white/5 shadow-xl p-6 flex flex-col items-center justify-center text-center"
        >
            <div className="text-4xl md:text-5xl font-black text-primary flex items-baseline">
                <span>{prefix}</span>
                <motion.span>{rounded}</motion.span>
                <span>{suffix}</span>
            </div>
            <div className="text-xs uppercase tracking-widest font-bold text-white/40 mt-2">
                {label}
            </div>
        </motion.div>
    )
}
