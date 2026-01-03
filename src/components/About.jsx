import Section from './Section';
import { MapPin } from 'lucide-react';

const About = () => {
    return (
        <Section id="about" className="bg-gray-50/50">
            <div className="max-w-3xl mx-auto">
                <h3 className="text-sm font-semibold tracking-wider text-teal-600 uppercase mb-3">About</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 w-fit">
                    Shipping AI That Works in Production
                    {/* Minimalist underline decoration */}
                    <div className="h-1.5 w-1/3 bg-teal-500 mt-2 rounded-full opacity-80"></div>
                </h2>

                <div className="prose prose-lg text-gray-600 leading-relaxed">
                    <p className="mb-6">
                        {/* 5+ years of experience in building data-driven AI systems, specializing in Generative AI, LLM development, AI Agents, Conversational AI, RAG systems, MLOps, Data Engineering, and Cloud Infrastructure. */}
                        Over 5 years of hands-on experience designing, building, and deploying robust, data-driven AI systems that deliver real-world impact. I specialize in Generative AI, Large Language Model (LLM) development and fine-tuning, AI Agents, Conversational AI, Retrieval-Augmented Generation (RAG) architectures, MLOps pipelines, Data Engineering, and scalable Cloud Infrastructure.
                    </p>
                    <div className="flex items-center text-gray-500 mt-8 font-medium">
                        <MapPin className="w-5 h-5 mr-2 text-teal-600" />
                        <span>Dubai, UAE</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
