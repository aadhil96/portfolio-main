import { motion } from 'framer-motion';

const Section = ({ id, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 lg:py-28 ${className}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
