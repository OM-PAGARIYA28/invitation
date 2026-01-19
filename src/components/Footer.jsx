import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-amber-900 text-amber-50 py-20 text-center relative overflow-hidden">
            {/* Decorative background elements could go here */}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <h3 className="text-3xl font-light mb-4">Save the Date</h3>
                <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tight text-yellow-300 drop-shadow-lg">
                    01 / 02 / 2026
                </h2>
                <p className="text-2xl mb-12 font-medium">Dhamni Yatra</p>

                <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12 rounded-full"></div>

                <motion.h1
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 pb-2"
                >
                    येळकोट येळकोट जय मल्हार!
                </motion.h1>
            </motion.div>
        </footer>
    );
};

export default Footer;
