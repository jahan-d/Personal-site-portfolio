import projects from '../data/projects';

const Projects = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <div className="card-body">
                            <h2 className="card-title">{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.techStack.map((tech) => (
                                    <div key={tech} className="badge badge-outline">{tech}</div>
                                ))}
                            </div>
                            <div className="card-actions justify-end mt-4">
                                <a href={project.github} className="btn btn-sm btn-ghost">GitHub</a>
                                <a href={project.link} className="btn btn-sm btn-primary">Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
