import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, Twitter, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Tech Stack', to: 'skills' },
        { name: 'Portfolio', to: 'portfolio' },
        { name: 'Articles', to: 'articles' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Name */}
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link to="hero" smooth={true} duration={500} className="font-bold text-xl tracking-tight text-gray-900">
                            Aadhil Imam<span className="text-teal-600">.</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/aadhil96" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://x.com/AadhilImam" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-teal-600 focus:outline-none p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-5 pt-4 pb-6 space-y-2 mb-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-60}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex space-x-6 mt-6 px-3">
                                <a href="https://github.com/aadhil96" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                                    <Github size={22} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                                    <Linkedin size={22} />
                                </a>
                                <a href="https://x.com/AadhilImam" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                                    <Twitter size={22} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
