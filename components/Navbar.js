'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 border-b border-white/5"
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link href="/" className="text-xl font-black tracking-tighter hover:text-primary transition-colors">
                    JAHAN.DEV
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="hover:text-primary transition-colors hover:bg-transparent"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <Link
                    href="#contact"
                    className="btn btn-primary btn-sm md:btn-md rounded-full px-6 font-bold hover:scale-105 transition-transform"
                >
                    Hire Me
                </Link>
            </div>
        </motion.div>
    )
}
