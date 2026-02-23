import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About'; // <--- Import karein

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About /> {/* <--- Yahan add kiya */}
      </main>
    </div>
  );
}

export default App;