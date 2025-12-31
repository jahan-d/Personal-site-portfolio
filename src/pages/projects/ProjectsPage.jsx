import { motion } from 'framer-motion';
import projects from '../../data/projects';

const ProjectsPage = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
                Featured <span className="text-cyan-400">Projects</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-500/50 transition-colors duration-300 ${index === 0 ? 'lg:col-span-2 flex flex-col md:flex-row gap-8' : 'flex flex-col'}`}
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                        <div className={`relative z-10 w-full ${index === 0 ? 'md:w-1/2' : ''}`}>
                            {project.image && (
                                <div className={`w-full ${index === 0 ? 'h-64 md:h-full' : 'h-48'} mb-4 rounded-xl overflow-hidden border border-white/10 group-hover:border-cyan-500/30 transition-colors`}>
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            )}
                        </div>

                        <div className={`relative z-10 flex flex-col h-full ${index === 0 ? 'md:w-1/2 md:justify-center' : ''}`}>
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                                {index === 0 && <span className="bg-cyan-500 text-black text-xs font-bold px-2 py-1 rounded">FEATURED</span>}
                            </div>

                            <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-cyan-200/70 border border-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mt-auto">
                                <a href={project.github} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">Client Repo</a>
                                {project.server && (
                                    <a href={project.server} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">Server Repo</a>
                                )}
                                <a href={project.link} className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                                    Live Demo <span>→</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
