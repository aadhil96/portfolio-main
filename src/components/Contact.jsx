import Section from './Section';
import { Github, Twitter, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" className="bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-sm font-semibold tracking-wider text-teal-600 uppercase mb-3">Get In Touch</h3>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Work Together</h2>

                <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                    I'm currently open to collaborations and interesting projects.
                    Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
                    <a
                        href="mailto:aadhil.imam@gmail.com" // Placeholder, user didn't provide email
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 transition-colors"
                        onClick={(e) => { e.preventDefault(); console.log('Contact form/email action triggered'); alert("Thank you for your interest"); }}
                    >
                        <Mail className="w-5 h-5 mr-2" />
                        Say Hello
                    </a>
                    <a
                        href="https://github.com/aadhil96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                    </a>
                    <a
                        href="https://x.com/AadhilImam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                        <Twitter className="w-5 h-5 mr-2" />
                        X / Twitter
                    </a>
                </div>

                <div className="pt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Mohamed Aadhil Imam. All rights reserved.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
