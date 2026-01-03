import Section from './Section';
import experienceData from '../data/experience.json';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    return (
        <Section id="experience" className="bg-white">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-sm font-semibold tracking-wider text-teal-600 uppercase mb-3">Career Path</h3>
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Work Experience</h2>

                <div className="relative border-l border-gray-200 ml-3 md:ml-6 space-y-12">
                    {experienceData.map((job) => (
                        <div key={job.id} className="mb-10 ml-6 relative group">
                            {/* Dot on the timeline */}
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-100 rounded-full -left-3 md:-left-9 ring-8 ring-white group-hover:bg-teal-200 transition-colors">
                                <Briefcase size={14} className="text-teal-600" />
                            </span>

                            {/* Content Card */}
                            <div className="bg-gray-50/50 p-6 rounded-2xl hover:bg-teal-50/30 transition-colors border border-transparent hover:border-teal-100">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="flex items-center text-xl font-bold text-gray-900">
                                            {job.role}
                                        </h3>
                                        <p className="text-teal-700 font-medium">{job.company}</p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end mt-2 md:mt-0 text-sm text-gray-500">
                                        <span className="flex items-center mb-1">
                                            <Calendar size={14} className="mr-1.5" />
                                            {job.period}
                                        </span>
                                        <span className="flex items-center">
                                            <MapPin size={14} className="mr-1.5" />
                                            {job.location}
                                        </span>
                                    </div>
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600">
                                    {job.description.map((point, index) => (
                                        <li key={index} className="leading-relaxed pl-1">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
