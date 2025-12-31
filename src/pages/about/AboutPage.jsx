import { motion } from 'framer-motion';

const AboutPage = () => {
    const stats = [
        { label: 'Years Experience', value: '6 Months' },
        { label: 'Projects Completed', value: '15+' },
        { label: 'Technologies', value: '10+' },
        { label: 'Coffees Drank', value: '∞' }
    ];

    const timeline = [
        {
            year: '2024',
            title: 'Full Stack Development',
            description: 'Building complex applications with MERN stack and Next.js.'
        },
        {
            year: '2023',
            title: 'Frontend Specialization',
            description: 'Mastered React, Tailwind CSS, and Framer Motion for interactive UIs.'
        },
        {
            year: '2022',
            title: 'Started Coding Journey',
            description: 'Dived into HTML, CSS, and JavaScript fundamentals.'
        }
    ];

    const skills = {
        Frontend: ['React', 'Next.js', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
        Backend: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'PostgreSQL'],
        Tools: ['Git', 'VS Code', 'Figma', 'Vercel', 'Postman']
    };

    return (
        <div className="max-w-4xl mx-auto pt-12 pb-20">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-12 items-center mb-20"
            >
                {/* Profile Image with Glow */}
                <div className="relative group shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                        <img
                            src="/images/profile.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Me</span>
                    </h2>

                    <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                        <p>
                            Hi, I'm <span className="text-white font-medium">Jahan Ebna Delower</span>. I don't just write code; I craft digital experiences.
                        </p>
                        <p>
                            My journey began with a curiosity for how things work on the web, which quickly evolved into a passion for building performant, scalable, and visually stunning applications.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical <span className="text-cyan-400">Arbiternal</span></h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                            <h4 className="text-lg font-semibold text-white mb-4 text-center border-b border-white/10 pb-2">{category}</h4>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {items.map((skill) => (
                                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* My Journey Section - Custom Timeline */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <h3 className="text-2xl font-bold text-white mb-10 text-center">My <span className="text-indigo-400">Journey</span></h3>
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                    {timeline.map((item, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            {/* Icon/Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                                <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                    <h4 className="font-bold text-white text-lg">{item.title}</h4>
                                    <span className="text-sm text-cyan-400 font-mono bg-cyan-900/20 px-2 py-0.5 rounded">{item.year}</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Do you have questions? */}
            <div className="text-center">
                <p className="text-slate-400 mb-6">Have more questions or want to collaborate?</p>
                <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20">
                    Let's Talk
                </a>
            </div>
        </div>
    );
};

export default AboutPage;
