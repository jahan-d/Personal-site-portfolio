import { Link } from 'react-router';
import { motion } from 'framer-motion';

const HomePage = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center relative z-10">

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full -z-10 animate-pulse pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-cyan-400 font-display tracking-widest text-sm uppercase mb-4 border border-cyan-500/30 px-3 py-1 rounded-full inline-block backdrop-blur-md">
                    Open to Work • Full Stack Developer
                </h2>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Scalable</span> <br />
                    <span className="text-white">Web Applications.</span>
                </h1>

                <p className="text-slate-400 max-w-xl mx-auto text-lg mb-10 leading-relaxed">
                    Specializing in React, modern UI/UX, and robust backend systems. I transform complex requirements into elegant, high-performance digital solutions.
                </p>

                <div className="flex gap-4 justify-center">
                    <Link
                        to="/projects"
                        className="group relative px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
                    >
                        View Projects
                    </Link>

                    <Link
                        to="/contact"
                        className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all hover:border-white/40"
                    >
                        Contact Me
                    </Link>
                </div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-500 flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 24, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full mb-1"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default HomePage;
