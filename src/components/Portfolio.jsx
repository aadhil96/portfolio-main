import Section from './Section';
import ProjectCard from './ProjectCard';

import projects from '../data/projects.json';

const Portfolio = () => {
    return (
        <Section id="portfolio" className="bg-gray-50/50">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-sm font-semibold tracking-wider text-teal-600 uppercase mb-3">My Work</h3>
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>

                <div className="flex flex-col gap-0">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/aadhil96?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline"
                    >
                        View all repositories on GitHub &rarr;
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Portfolio;
