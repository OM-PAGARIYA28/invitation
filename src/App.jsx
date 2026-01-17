import { useState } from 'react';
import Hero from './components/Hero';
import Puzzle from './components/Puzzle';
import VideoSection from './components/VideoSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-pink-500 selection:text-white">
      <Hero isLocked={isLocked} />

      {/* Puzzle Section */}
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 border-t border-zinc-800">
        <Puzzle onComplete={() => setIsLocked(false)} />
      </div>

      {/* Content unlocked after puzzle */}
      {!isLocked && (
        <>
          <VideoSection />
          <Gallery />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
