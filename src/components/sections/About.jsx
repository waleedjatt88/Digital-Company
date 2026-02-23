import React from 'react';

// --- Images Import ---
import dashboardImg from '../../assets/images/about-dashboard.png';
import manImg from '../../assets/images/about-man.png';
import shapeImg from '../../assets/images/about-shape.png';
import usersImg from '../../assets/images/trustpilot-users.png';
import badgeImg from '../../assets/images/about-badge.png';
import circleImg from '../../assets/images/about-circle.png';

const About = () => {
  return (
    <section className="w-full py-14 px-6 md:px-12 bg-white overflow-hidden relative">

      {/* Background Circle — subtle decor top right */}
      <div className="absolute right-0 top-0 pointer-events-none z-0">
        <img
          src={circleImg}
          alt="Decor"
          className="w-[420px] opacity-10 animate-spin-slow"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 relative z-10">

        {/* ================= LEFT CONTENT — ~40% ================= */}
        <div className="w-full lg:w-[42%] flex flex-col gap-5 order-2 lg:order-1">

          {/* Label */}
          <div className="flex items-center gap-3 text-[#024f33] font-bold">
            <span className="w-8 h-[2px] bg-[#024f33]" />
            <span className="uppercase tracking-widest text-xs font-semibold">About Us</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1f2937] leading-tight">
            Rooted in Creativity. <br />
            Growing with Technology.
          </h2>

          {/* Paragraph */}
          <p className="text-gray-500 text-sm leading-relaxed">
            Codesinc is a creative digital studio crafting interactive and scalable
            web solutions. Inspired by nature and powered by innovation, we help
            brands stand out in the digital forest.
          </p>

          {/* Bullet Points */}
          <ul className="flex flex-col gap-3">
            {[
              'Trusted IT partner for digital transformation',
              'Experienced team with industry expertise.',
              'Scalable, secure, and high-performance solutions',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#024f33] flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA + Trustpilot */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-2">
            <button className="bg-[#024f33] text-white px-7 py-3 rounded-md font-bold uppercase text-xs tracking-wider hover:bg-green-900 transition shadow-lg">
              Contact Us
            </button>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5 font-bold text-[#1f2937] text-sm">
                <span className="text-green-600 text-base">★</span> Trustpilot
              </div>
              <div className="flex items-center gap-3">
                <img src={usersImg} alt="Users" className="h-8 object-contain" />
                <div className="flex flex-col text-xs text-gray-500">
                  <div className="flex text-yellow-400 text-sm gap-0.5">★★★★☆</div>
                  <span className="font-medium">450+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CONTENT — ~58% ================= */}
        <div className="w-full lg:w-[58%] relative h-[440px] order-1 lg:order-2">

          {/* 3D Shape top-right */}
          <div className="absolute -top-6 right-4 z-10">
            <img src={shapeImg} alt="Shape" className="w-24 object-contain" />
          </div>

          {/* Two images side-by-side like Figma */}
          <div className="relative w-full h-full flex items-start justify-center gap-3 pt-6">

            {/* LEFT image — manImg (purple/holographic person) — taller */}
            <div className="w-[48%] h-[88%] rounded-2xl overflow-hidden shadow-xl z-10">
              <img
                src={manImg}
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT image — dashboardImg (tablet/charts) — starts slightly lower, white border */}
            <div className="w-[48%] h-[88%] rounded-2xl overflow-hidden shadow-xl z-20 border-[8px] border-white mt-8">
              <img
                src={dashboardImg}
                alt="Dashboard"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 5K+ Badge — bottom center between images */}
            <div className="absolute bottom-0 left-[28%] z-30">
              <img
                src={badgeImg}
                alt="5K+ Projects"
                className="w-32 object-contain"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
