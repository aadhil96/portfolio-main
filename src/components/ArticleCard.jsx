import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ArticleCard = ({ title, description, image, link, platform, readTime }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
        >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-teal-700 shadow-sm">
                    {platform}
                </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-400 mb-3 space-x-2">
                    <span>{readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 group/link"
                    >
                        Read Article
                        <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ArticleCard;
