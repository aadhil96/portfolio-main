import { motion } from 'framer-motion';
import { Github, Twitter, MapPin, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 relative bg-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl w-full text-center"
            >
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="flex flex-col items-center space-y-6">
                        <img
                            src="/image/profile.jpg"
                            alt="Mohamed Aadhil Imam"
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
                            Mohamed Aadhil Imam
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-teal-600">
                            AI Engineer | Generative AI & MLOps Specialist
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Building production-ready AI systems with LLMs, RAG, AI Agents, and end-to-end ML pipelines.
                        </p>
                    </div>

                    <div className="flex items-center justify-center space-x-6 pt-2 pb-6">
                        <a href="https://github.com/aadhil96" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-transform hover:scale-110">
                            <Github size={28} strokeWidth={1.5} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-transform hover:scale-110">
                            <Linkedin size={28} strokeWidth={1.5} />
                        </a>
                        {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-transform hover:scale-110">
                            <i className="devicon-kaggle-plain text-2xl"></i>
                        </a> */}
                        <a href="https://x.com/AadhilImam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-transform hover:scale-110">
                            <Twitter size={28} strokeWidth={1.5} />
                        </a>
                        <Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-gray-900 transition-transform hover:scale-110 cursor-pointer">
                            <Mail size={28} strokeWidth={1.5} />
                        </Link>
                    </div>
                </div>

                <div className="mt-4 pt-8 border-t border-gray-100 max-w-2xl mx-auto">
                    <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">Core Tech Stack</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 text-3xl text-gray-400">
                        <i className="devicon-python-plain hover:text-[#3776AB] transition-colors duration-300" title="Python"></i>
                        <i className="devicon-fastapi-plain hover:text-[#009688] transition-colors duration-300" title="FastAPI"></i>
                        <i className="devicon-pytorch-original hover:text-[#EE4C2C] transition-colors duration-300" title="PyTorch"></i>
                        <i className="devicon-tensorflow-original hover:text-[#FF6F00] transition-colors duration-300" title="TensorFlow"></i>
                        <i className="devicon-docker-plain hover:text-[#2496ED] transition-colors duration-300" title="Docker"></i>
                        <i className="devicon-kubernetes-plain hover:text-[#326CE5] transition-colors duration-300" title="Kubernetes"></i>
                        <i className="devicon-amazonwebservices-plain-wordmark hover:text-[#232F3E] transition-colors duration-300" title="AWS"></i>
                        <i className="devicon-azure-plain hover:text-[#0078D4] transition-colors duration-300" title="Azure"></i>

                    </div>
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 right-10 cursor-pointer z-10"
            >
                <Link to="about" smooth={true} duration={500} offset={-70}>
                    <div className="animate-bounce text-gray-400 hover:text-teal-600 transition-colors">
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </Link>
            </motion.div>
        </section>

    );
};

export default Hero;
