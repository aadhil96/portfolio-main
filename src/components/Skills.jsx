import { useState } from 'react';
import Section from './Section';
import { Star, Info, Brain, Server, Cloud, Database, Code, Users } from 'lucide-react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import skillsData from '../data/skills.json';

const categories = [
    "All",
    "Deep Learning",
    "LLMs & Agents",
    "Software Development",
    "MLOps",
    "Cloud ML",
    "Data Science",
    "Data Engineering",
    "Soft Skills"
];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = activeCategory === "All"
        ? skillsData
        : skillsData.filter(skill => skill.category === activeCategory);

    const stats = {
        technical: skillsData.filter(s => s.category !== "Soft Skills").length,
        production: skillsData.filter(s => s.rating >= 4 && s.category !== "Soft Skills").length,
        soft: skillsData.filter(s => s.category === "Soft Skills").length
    };

    return (
        <Section id="skills" className="bg-gray-50/50">
            <div className="max-w-7xl mx-auto text-center">
                <h3 className="text-sm font-semibold tracking-wider text-teal-600 uppercase mb-3">Tech Stack</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI/ML Technology Arsenal</h2>
                <p className="text-gray-500 max-w-2xl mx-auto mb-12">
                    Production ML tools and frameworks I use to build intelligent systems
                </p>

                {/* Stats Row */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-10 max-w-4xl mx-auto flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">{stats.technical}+</div>
                        <div className="text-sm text-gray-500 mt-1">Technical Skills</div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-gray-100"></div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">{stats.production}</div>
                        <div className="text-sm text-gray-500 mt-1">Production Ready</div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-gray-100"></div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">{stats.soft}</div>
                        <div className="text-sm text-gray-500 mt-1">Soft Skills</div>
                    </div>
                </div>

                {/* Legend for Ratings */}
                {/* Legend for Ratings Removed */}

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
                >
                    <AnimatePresence>
                        {filteredSkills.map((skill) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                key={skill.name}
                                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center group"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icon icon={skill.icon} />
                                </div>

                                <h4 className="text-lg font-bold text-gray-900">{skill.name}</h4>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </Section>
    );
};

export default Skills;
