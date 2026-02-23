import React from 'react';

// --- Images Import (Ye images folder mein hain) ---
import meetingImg from '../../assets/images/feature-meeting.png';
import womanImg from '../../assets/images/feature-woman.png';

// --- Icons Import (Ye icons folder mein hain) ---
import centerIcon from '../../assets/icons/icon-center.png'; 
import wheelIcon from '../../assets/icons/icon-wheel.png';   
import commentIcon from '../../assets/icons/icon-chat.png'; 
import likeIcon from '../../assets/icons/icon-like.png';

const Features = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white overflow-hidden">
      
      {/* --- Header Section --- */}
      <div className="max-w-7xl mx-auto mb-10">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-lg">
               <div className="flex items-center gap-3 text-primary font-bold mb-3">
                  <span className="w-8 h-[2px] bg-primary"></span>
                  <span className="uppercase tracking-widest text-xs font-semibold">Featured</span>
               </div>
               <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2937] leading-tight">
                 What Makes Us Different
               </h2>
            </div>
            <p className="text-gray-500 max-w-md text-sm leading-relaxed md:text-right">
              We design immersive digital platforms powered by creativity, technology, and sustainable thinking.
            </p>
         </div>
      </div>

      {/* --- Main Grid Content --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- Left Side: Features List --- */}
        <div className="flex flex-col gap-8 relative pl-2">
            {/* Dotted Vertical Line */}
            <div className="absolute left-[19px] top-6 bottom-10 w-[2px] border-l-2 border-dotted border-green-200 -z-10"></div>

            {/* Feature 1 */}
            <div className="flex gap-5 group cursor-pointer">
                <div className="w-10 h-10 bg-[#024f33] rounded-full flex items-center justify-center shrink-0 shadow-lg border-2 border-white group-hover:scale-110 transition duration-300 z-10">
                    <span className="text-white text-sm font-bold">$</span>
                </div>
                <div>
                    <h3 className="text-base font-bold text-[#1f2937] mb-1 group-hover:text-primary transition">Immersive Design</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Interactive visuals, smooth animations, and storytelling-driven layouts.</p>
                </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5 group cursor-pointer">
                <div className="w-10 h-10 bg-[#024f33] rounded-full flex items-center justify-center shrink-0 shadow-lg border-2 border-white group-hover:scale-110 transition duration-300 z-10">
                     <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                </div>
                <div>
                    <h3 className="text-base font-bold text-[#1f2937] mb-1 group-hover:text-primary transition">Smart & Scalable</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Easy-to-manage content with a powerful admin dashboard.</p>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-5 group cursor-pointer">
                <div className="w-10 h-10 bg-[#024f33] rounded-full flex items-center justify-center shrink-0 shadow-lg border-2 border-white group-hover:scale-110 transition duration-300 z-10">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                    <h3 className="text-base font-bold text-[#1f2937] mb-1 group-hover:text-primary transition">Sensory Experience</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Ambient sound, motion, and effects that leave a lasting impression.</p>
                </div>
            </div>
        </div>


        {/* --- Right Side: Image Composition --- */}
        <div className="relative h-[500px] w-full mt-12 lg:mt-0 flex justify-center items-center">
            
            {/* 1. Orange Wheel Icon */}
            <div className="absolute -top-10 -right-4 z-0">
                 <img src={wheelIcon} alt="Decor" className="w-24 h-24 object-contain animate-spin-slow opacity-80" />
            </div>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center gap-4">
                
                {/* 2. Left Image (Meeting) */}
                <div className="w-[48%] h-[80%] relative z-10 group rounded-2xl">
                     <div className="w-full h-full overflow-hidden rounded-2xl" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
                        <img src={meetingImg} alt="Team" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                     </div>
                     {/* Comment Icon (Top Left) */}
                     <div className="absolute -top-4 -left-4 z-20">
                         <img src={commentIcon} alt="Comment" className="w-10 h-10 object-contain drop-shadow-lg" />
                     </div>
                </div>

                {/* 3. Right Image (Woman) */}
                <div className="w-[48%] h-[80%] relative z-10 group rounded-2xl">
                    <div className="w-full h-full overflow-hidden rounded-2xl" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 20%)' }}>
                        <img src={womanImg} alt="Client" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    </div>
                    {/* Like Icon (Bottom Right) */}
                    <div className="absolute -bottom-4 -right-4 z-20">
                         <img src={likeIcon} alt="Like" className="w-10 h-10 object-contain drop-shadow-lg" />
                    </div>
                </div>

                {/* 4. Center Hexagon Logo */}
                <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                         <img src={centerIcon} alt="Center Logo" className="w-full h-full object-contain p-1" />
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Features;