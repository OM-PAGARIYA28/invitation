import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const Puzzle = ({ onComplete }) => {
    const [tiles, setTiles] = useState([]);
    const [selectedTile, setSelectedTile] = useState(null);
    const [isSolved, setIsSolved] = useState(false);

    // Initialize and shuffle tiles
    useEffect(() => {
        const initialTiles = Array.from({ length: 9 }, (_, i) => i);

        // Shuffle tiles
        let shuffled = [...initialTiles];
        // Simple shuffle: slightly randomized but ensure it's not already solved
        shuffled = shuffled.sort(() => Math.random() - 0.5);

        // Ensure it doesn't start solved
        if (shuffled.every((val, index) => val === index)) {
            shuffled = [1, 0, ...shuffled.slice(2)];
        }

        setTiles(shuffled);
    }, []);

    const handleTileClick = (index) => {
        if (isSolved) return;

        if (selectedTile === null) {
            setSelectedTile(index);
        } else {
            // Swap tiles
            const newTiles = [...tiles];
            const temp = newTiles[selectedTile];
            newTiles[selectedTile] = newTiles[index];
            newTiles[index] = temp;

            setTiles(newTiles);
            setSelectedTile(null);

            // Check if solved
            const isNowSolved = newTiles.every((val, i) => val === i);
            if (isNowSolved) {
                setIsSolved(true);
                triggerCelebration();
                setTimeout(() => {
                    onComplete();
                }, 3000); // Wait longer so they can enjoy the celebration
            }
        }
    };

    const triggerCelebration = () => {
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#FFD700', '#FF4500', '#FFFFFF'] // Yellow, Orange, White
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#FFD700', '#FF4500', '#FFFFFF']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    };

    return (
        <div className={`flex flex-col items-center justify-center py-20 px-4 transition-colors duration-1000 ${isSolved ? 'bg-gradient-to-b from-yellow-900/20 to-orange-900/20' : ''}`}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-8"
            >
                <h2 className={`text-2xl md:text-4xl font-bold font-serif mb-2 ${isSolved ? 'text-yellow-400 drop-shadow-glow' : 'text-gray-200'}`}>
                    {isSolved ? "✨ Perfect! ✨" : "Arrange the pieces to enter..."}
                </h2>
            </motion.div>

            <div className={`relative w-[90vw] max-w-sm aspect-square border-4 ${isSolved ? 'border-yellow-400 shadow-[0_0_50px_rgba(255,215,0,0.5)]' : 'border-yellow-900'} rounded-lg overflow-hidden transition-all duration-1000 bg-black`}>
                <div className="grid grid-cols-3 w-full h-full">
                    {tiles.map((tilePos, index) => {
                        // Calculate row and col of the CURRENT piece piece in the original image
                        const row = Math.floor(tilePos / 3);
                        const col = tilePos % 3;

                        return (
                            <motion.div
                                key={index}
                                layout
                                onClick={() => handleTileClick(index)}
                                className={`w-full h-full border-[0.5px] border-black/30 cursor-pointer relative
                  ${selectedTile === index ? 'ring-4 ring-yellow-400 z-10' : ''}
                  ${isSolved ? 'border-none' : ''}
                `}
                                style={{
                                    backgroundImage: `url('${import.meta.env.BASE_URL}images/puzzle.jpg')`,
                                    backgroundSize: '300% 300%',
                                    backgroundPosition: `${col * 50}% ${row * 50}%`,
                                }}
                                whileHover={{ scale: isSolved ? 1 : 0.95 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        );
                    })}
                </div>

                {/* Success Overlay with Marathi Text */}
                <AnimatePresence>
                    {isSolved && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]"
                        >
                            <motion.h1
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                className="text-3xl md:text-4xl font-bold text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 drop-shadow-2xl px-4"
                            >
                                येळकोट येळकोट <br /> जय मल्हार!
                            </motion.h1>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {!isSolved && (
                <p className="text-gray-400 text-sm mt-6 italic animate-pulse">
                    Tap two pieces to swap them
                </p>
            )}
        </div>
    );
};

export default Puzzle;
