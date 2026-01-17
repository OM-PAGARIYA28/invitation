import { motion } from 'framer-motion';

const VideoSection = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-[80dvh] flex flex-col items-center justify-center bg-black p-4 md:p-8"
        >
            <div className="w-full max-w-4xl aspect-video bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 flex items-center justify-center relative overflow-hidden group">
                <video
                    className="h-full w-auto object-cover -rotate-90 scale-[1.78]"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/second-video.mov" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-xl md:text-2xl text-center text-gray-300 font-light"
            >
                You might have got it till now...
            </motion.p>
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-4 text-xl text-center text-gray-400 font-light italic"
            >
                if not lets go further
            </motion.p>
        </motion.div>
    );
};

export default VideoSection;
