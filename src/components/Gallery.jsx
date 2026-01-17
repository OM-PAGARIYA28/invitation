import { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    const [revealed, setRevealed] = useState(false);

    const images = [
        '/images/memories-1.jpg',
        '/images/memories-2.jpg',
        '/images/memories-3.jpg',
        '/images/memories-4.jpg',
        '/images/memories-5.jpg',
    ];

    return (
        <div className="min-h-screen bg-neutral-900 text-white py-20 px-4 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6 font-serif">
                    Inviting you to join where we all unite
                </h2>
                <p className="text-xl text-gray-400 mb-8">Remembering our old childhood days</p>

                {!revealed && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setRevealed(true)}
                        className="px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full font-bold text-lg shadow-lg hover:shadow-pink-500/50 transition-shadow"
                    >
                        Open Memories ✨
                    </motion.button>
                )}
            </motion.div>

            {revealed && (
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3
                            }
                        }
                    }}
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}
                            whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 2 : -2 }}
                            className={`rounded-xl overflow-hidden shadow-2xl ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                        >
                            <img
                                src={src}
                                alt={`Memory ${index + 1}`}
                                className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Gallery;
