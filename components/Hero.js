'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20 px-4 md:px-8">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="text-center relative z-10 max-w-4xl mx-auto flex flex-col items-center"
            >
                {/* Profile Picture */}
                <motion.div
                    variants={fadeUp}
                    className="relative w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary shadow-2xl shadow-primary/20"
                >
                    <div className="w-full h-full rounded-full overflow-hidden bg-base-300 relative">
                        <Image
                            src="/images/profile.jpg"
                            alt="Jahan Ebna Delower"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-success rounded-full border-2 border-base-100 shadow-lg" title="Open to work" />
                </motion.div>

                <motion.div variants={fadeUp} className="badge badge-outline badge-primary mb-6 font-bold py-4 px-6 tracking-wide">
                    JUNIOR FRONTEND DEVELOPER
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-none"
                >
                    Building Web Experiences <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        That Scale.
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    High-performance MERN stack developer specializing in
                    <span className="text-white font-bold px-1 underline decoration-primary/50 underline-offset-4">React 19</span>
                    and <span className="text-white font-bold px-1 underline decoration-secondary/50 underline-offset-4">Next.js 15</span>.
                    Translating complex designs into reactive digital products.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                    <button className="btn btn-primary btn-lg rounded-full px-10 font-black shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                        View My Projects
                    </button>
                    <button className="btn btn-outline btn-secondary btn-lg rounded-full px-10 font-black hover:scale-105 transition-transform">
                        Download Resume
                    </button>
                </motion.div>
            </motion.div>
        </section>
    )
}
