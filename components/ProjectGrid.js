'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/motion-variants'
import ProjectCard from './ProjectCard'
import { projects } from '@/lib/projects'

export default function ProjectGrid() {
    return (
        <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </motion.div>
    )
}
