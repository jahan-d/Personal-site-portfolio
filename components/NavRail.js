'use client'

import { Link as ScrollLink } from 'react-scroll'
import { FaHome, FaUser, FaFileAlt, FaServer, FaShapes, FaBriefcase, FaComments, FaAddressBook } from 'react-icons/fa'

export default function NavRail() {
    const navItems = [
        { name: 'Home', icon: <FaHome />, href: 'home' },
        { name: 'About', icon: <FaUser />, href: 'about' },
        { name: 'Resume', icon: <FaFileAlt />, href: 'resume' },
        { name: 'Services', icon: <FaServer />, href: 'services' },
        { name: 'Skills', icon: <FaShapes />, href: 'skills' },
        { name: 'Portfolio', icon: <FaBriefcase />, href: 'portfolio' },
        { name: 'FAQ', icon: <FaComments />, href: 'faq' },
        { name: 'Contact', icon: <FaAddressBook />, href: 'contact' },
    ]

    return (
        <div className="flex flex-col gap-6 p-4 border border-white/10 rounded-full backdrop-blur-md bg-[#1f1f1f]/80 shadow-2xl">
            {navItems.map((item) => (
                <ScrollLink
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    activeClass="!text-primary border-primary"
                    className="group relative w-5 h-5 flex items-center justify-center text-white/40 hover:text-primary transition-all cursor-pointer"
                >
                    <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>

                    {/* Tooltip (Now appearing on the left since rail is on the right) */}
                    <span className="absolute right-14 px-3 py-1 bg-[#1f1f1f] border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        {item.name}
                    </span>
                </ScrollLink>
            ))}
        </div>
    )
}
