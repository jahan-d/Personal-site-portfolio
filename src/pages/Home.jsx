import { Link } from 'react-router';

const Home = () => {
    return (
        <div className="hero min-h-[calc(100vh-200px)]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Hello there</h1>
                    <p className="py-6">I am a passionate developer specializing in React and modern web technologies. Explore my portfolio to see what I can build.</p>
                    <div className="flex justify-center gap-4">
                        <Link to="/projects" className="btn btn-primary">View Projects</Link>
                        <Link to="/contact" className="btn btn-outline">Contact Me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
