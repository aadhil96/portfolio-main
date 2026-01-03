import Section from './Section';
import ArticleCard from './ArticleCard';
import articles from '../data/articles.json';
import { BookOpen } from 'lucide-react';

const Articles = () => {
    return (
        <Section id="articles" className="bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="inline-flex items-center justify-center p-2 bg-teal-50 rounded-xl mb-4">
                        <BookOpen size={24} className="text-teal-600" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Thoughts on AI, Engineering, and building software that matters.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <ArticleCard
                            key={index}
                            {...article}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Articles;
