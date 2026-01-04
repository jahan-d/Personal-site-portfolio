'use client'

import Sidebar from '@/components/Sidebar'
import NavRail from '@/components/NavRail'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import PortfolioGrid from '@/components/PortfolioGrid'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30 selection:text-white pb-20 overflow-x-hidden">

      {/* NavRail (Moved to right as requested) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
        <NavRail />
      </div>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-[60] p-4 flex justify-between items-center bg-base-100/80 backdrop-blur-md border-b border-white/5">
        <h1 className="text-2xl font-black">Jahan<span className="text-primary">.</span></h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-primary bg-base-200"
        >
          <FaBars />
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Fixed Container */}
      <div className={`
        fixed top-0 left-0 lg:left-8 h-screen 
        z-[70] lg:z-50 p-6 lg:py-10
        transition-transform duration-500
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full">
          <Sidebar />
        </div>
      </div>

      {/* Content Area */}
      <div className="lg:pl-[480px] px-6 md:px-12 lg:pr-[120px]">
        <div className="max-w-[1000px]">
          <Intro />
          <About />
          <Resume />
          <Services />
          <Skills />
          <PortfolioGrid />
          <FAQ />
          <Contact />

          {/* Simple Footer */}
          <footer className="py-20 border-t border-white/5 text-center lg:text-left text-sm font-bold text-white/20 uppercase tracking-[0.2em]">
            © 2026 Jahan Ebna Delower. All rights reserved.
          </footer>
        </div>
      </div>

    </main>
  )
}
