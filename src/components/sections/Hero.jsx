import React from 'react';

// --- Images Import ---
// Nayi Background Image (Iska naam folder mein check kar lein, maine screenshot se dekh kar likha hai)
import heroBg from '../../assets/images/bg with bg-white.png'; 
import clientImage from '../../assets/images/satisfied-clients.png';

// --- Icons Import ---
import lightbulbIcon from '../../assets/icons/lightbulb.png';
import targetIcon from '../../assets/icons/target.png';
import megaphoneIcon from '../../assets/icons/Bullhorn.png'; 
import alarmIcon from '../../assets/icons/alarm.png';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center pt-10 overflow-hidden">
      
      {/* --- 1. Main Background Image --- */}
      {/* Ye poore section ke background mein fit ho jayegi */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover md:object-fill" 
        />
      </div>

      {/* --- 2. Floating Icons (Cards) --- */}
      {/* z-index 10 diya hai taaki ye background ke upar dikhein */}
      
      {/* Top Left: Bulb */}
      <div className="hidden md:flex absolute top-32 left-[12%] bg-white p-4 rounded-[24px] shadow-lg animate-[bounce_3s_infinite] z-10">
        <img src={lightbulbIcon} alt="Idea" className="w-10 h-10 object-contain" />
      </div>

      {/* Top Right: Target */}
      <div className="hidden md:flex absolute top-28 right-[12%] bg-white p-4 rounded-[24px] shadow-lg animate-[bounce_4s_infinite] z-10">
        <img src={targetIcon} alt="Target" className="w-10 h-10 object-contain" />
      </div>

      {/* Bottom Left: Megaphone */}
      <div className="hidden md:flex absolute bottom-40 left-[18%] bg-white p-4 rounded-[24px] shadow-lg animate-[bounce_3.5s_infinite] z-10">
        <img src={megaphoneIcon} alt="Marketing" className="w-10 h-10 object-contain" />
      </div>

      {/* Bottom Right: Alarm */}
      <div className="hidden md:flex absolute bottom-48 right-[15%] bg-white p-4 rounded-[24px] shadow-lg animate-[bounce_4.5s_infinite] z-10">
        <img src={alarmIcon} alt="Time" className="w-10 h-10 object-contain" />
      </div>


      {/* --- 3. Center Content --- */}
      <div className="relative z-20 text-center max-w-4xl flex flex-col items-center gap-4 mt-2">
        
        {/* Client Pill */}
        <div className="flex items-center gap-3 bg-white/80 px-4 py-2 rounded-full backdrop-blur-md border border-white shadow-sm">
           <img src={clientImage} alt="Clients" className="h-8 object-contain" />
           <span className="text-sm font-bold text-gray-700">3k+ Satisfied Client</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-[3.25rem] font-bold text-text-dark leading-[1.15] tracking-tight">
          Building <span className="text-primary">Digital</span> <br /> 
          <span className="text-primary">Experiences</span> That Breathe.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          Nature-inspired, future-ready web experiences that connect brands with people beautifully and seamlessly.
        </p>

        {/* Big CTA Button */}
        <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#023b26] transition shadow-xl mt-2 hover:scale-105 active:scale-95 transform duration-200">
          Explore Our World
        </button>

      </div>

    </section>
  );
};

export default Hero;