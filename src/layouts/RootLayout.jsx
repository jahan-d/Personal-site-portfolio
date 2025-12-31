import { useEffect } from "react";
import { Outlet } from "react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import StarsCanvas from "../components/StarsCanvas";
import Lenis from 'lenis';
import CustomCursor from "../components/CustomCursor";

const RootLayout = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Initialize Lenis Smooth Scroll with "Premium" settings
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5, // Slower, smoother scroll
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen text-slate-300 font-body relative overflow-x-hidden selection:bg-cyan-500/30">

            {/* 3D Background */}
            <StarsCanvas />
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e293b] via-[#0b0f1a] to-[#000000] opacity-80"></div>

            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 origin-left z-[100]"
                style={{ scaleX }}
            />

            <CustomCursor />
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-12">
                <Outlet />
            </main>

            <footer className="footer footer-center p-4 text-slate-500 text-sm">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - Built with React & Tailwind</p>
                </aside>
            </footer>
        </div>
    );
};

export default RootLayout;
