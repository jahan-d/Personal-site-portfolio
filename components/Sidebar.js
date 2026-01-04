'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

export default function Sidebar() {
    const socials = [
        { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/jahandelower' },
        { icon: <FaGithub />, href: 'https://github.com/jahan-d' },
    ]

    return (
        <aside className="bg-[#1f1f1f] border border-white/10 p-6 lg:p-7 rounded-[35px] flex flex-col h-fit shadow-2xl relative">

            {/* Header: Logo & Role */}
            <div className="flex justify-between items-start mb-6 shrink-0">
                <div className="flex flex-col text-left">
                    <div className="flex items-center gap-2">
                        <h1 className="text-[28px] font-bold text-white leading-none tracking-tight">Jahan</h1>
                        <span className="w-[16px] h-[16px] flex items-center justify-center rounded-full border border-white/40 text-[7px] font-bold text-white/60 translate-y-[-1px]">D</span>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-[11px] font-medium text-white/90 leading-tight block uppercase tracking-tighter">Junior Frontend <br /> Developer</span>
                </div>
            </div>

            {/* Profile Photo */}
            <div className="relative w-full aspect-square mb-6 rounded-[25px] overflow-hidden grayscale group hover:grayscale-0 transition-all duration-1000 shrink-0">
                <Image
                    src="/images/profile.jpg"
                    alt="Jahan"
                    fill
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                {/* Status Dot */}
                <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#28e98c] rounded-full shadow-[0_0_15px_#28e98c] animate-pulse z-10" />
            </div>

            {/* Main Info */}
            <div className="text-center mb-5 shrink-0 flex flex-col gap-1">
                <h2 className="text-[19px] font-medium text-white tracking-tight break-all">jahanebnadelower@gmail.com</h2>
                <p className="text-[20px] font-medium text-white tracking-tight">Dhaka, Bangladesh</p>
            </div>

            {/* Copyright */}
            <div className="text-center mb-6 shrink-0">
                <p className="text-[12px] text-white/30 font-medium whitespace-nowrap">© 2026 Jahan. All Rights Reserved</p>
            </div>

            {/* Social Icons Row */}
            <div className="flex justify-center gap-2.5 mb-6 shrink-0">
                {socials.map((item, i) => (
                    <a key={i} href={item.href} target="_blank" className="w-[44px] h-[44px] flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:border-primary hover:text-primary transition-all text-base bg-transparent">
                        {item.icon}
                    </a>
                ))}
            </div>

            {/* Hire Me Pill Button */}
            <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="btn h-[52px] bg-[#28e98c] hover:bg-[#20c977] text-black border-none rounded-full font-bold text-[12px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 shrink-0 active:scale-95 w-full min-h-[52px] cursor-pointer"
            >
                <FaEnvelope size={14} />
                HIRE ME!
            </ScrollLink>
        </aside>
    )
}
