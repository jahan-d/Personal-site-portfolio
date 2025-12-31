import { Link, useLocation } from 'react-router';
import { motion } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();

    const links = [
        { path: '/', label: 'About' },
        { path: '/home', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="
                    flex items-center gap-1 p-1.5 rounded-full 
                    bg-white/5 backdrop-blur-xl border border-white/10 
                    shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
                "
            >
                {links.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`
                                relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10
                                ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}
                            `}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="navbar-active"
                                    className="absolute inset-0 bg-white/10 rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-20">{link.label}</span>
                        </Link>
                    )
                })}
            </motion.nav>
        </div>
    );
};

export default Navbar;
