
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-20 last:mb-0"
        >
            {/* Image Column */}
            <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <h4 className="text-lg text-teal-600 font-medium mb-4">{project.subtitle}</h4>

                <div className="prose prose-sm text-gray-600 mb-6 leading-relaxed">
                    <p>{project.description}</p>
                </div>

                <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4">
                    {project.links?.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                        >
                            <Github size={16} className="mr-2" />
                            View Code
                        </a>
                    )}
                    {project.links?.demo && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                        >
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

