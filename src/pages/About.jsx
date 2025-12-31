const About = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className="text-lg">
                        I am a dedicated web developer with a passion for building user-centric applications.
                        With a strong foundation in modern web technologies, I love solving complex problems
                        and learning new tools to improve my craft.
                    </p>

                    <div className="divider"></div>

                    <h3 className="text-xl font-semibold">My Journey</h3>
                    <p>
                        I started my coding journey exploring the basics of the web. Over time, I have honed my skills
                        in the React ecosystem, working on various projects from simple landing pages to complex
                        full-stack applications like the Blood Donation App.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default About;
