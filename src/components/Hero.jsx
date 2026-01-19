import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ isLocked }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer1 = setTimeout(() => setStep(1), 3000);
        const timer2 = setTimeout(() => setStep(2), 6000);
        const timer3 = setTimeout(() => setStep(3), 9000); // 3 seconds per text

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    const variants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
    };

    return (
        <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white p-4 text-center overflow-hidden">
            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.h1
                        key="step1"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 font-sans"
                    >
                        Jai Jinendra
                    </motion.h1>
                )}

                {step === 1 && (
                    <motion.h1
                        key="step2"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-5xl font-bold font-serif"
                    >
                        Pagariya Family welcomes you
                    </motion.h1>
                )}

                {step === 2 && (
                    <motion.h1
                        key="step3"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-5xl font-bold text-pink-500"
                    >
                        but wait what coming now !!
                    </motion.h1>
                )}
            </AnimatePresence>

            {/* Down arrow indicator appearing after sequence */}
            {/* Scroll indicator */}
            {step === 3 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <p className="text-gray-400 text-sm uppercase tracking-[0.2em] animate-pulse">Scroll to Enter</p>
                    <div className="animate-bounce text-3xl text-yellow-400">↓</div>
                </motion.div>
            )}
        </div>
    );
};

export default Hero;
