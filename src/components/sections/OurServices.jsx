import React from 'react';
import { motion } from 'framer-motion';

import whatWeDoImg from '../../assets/our services/what we do.png';
import brandingImg  from '../../assets/our services/branding services.png';
import cyberImg     from '../../assets/our services/cybersecurity.png';
import softwareImg  from '../../assets/our services/software solutions.png';
import aiImg        from '../../assets/our services/ai automation.png';

/* ── card data ───────────────────────────────────────────────── */
const cards = [
  {
    num: '01', img: brandingImg, alt: 'Branding Services', higher: true,
    // salmon peeks left + bottom → shift accent up-right, pad left+bottom on wrapper
    accent: {
      bg: '#f4a08a',
      translate: 'translate(-10px, 10px)',
      wrapperPad: '0 0 12px 12px',
    },
  },
  {
    num: '02', img: cyberImg, alt: 'Cybersecurity Solution', higher: false,
    // teal peeks bottom-only → shift accent up, pad bottom on wrapper
    accent: {
      bg: '#4dd0c8',
      translate: 'translate(0px, 10px)',
      wrapperPad: '0 0 12px 0',
    },
  },
  {
    num: '03', img: softwareImg, alt: 'Software Solutions', higher: false,
    // green peeks bottom-only → shift accent up, pad bottom on wrapper
    accent: {
      bg: '#8bc67e',
      translate: 'translate(0px, 10px)',
      wrapperPad: '0 0 12px 0',
    },
  },
  {
    num: '04', img: aiImg, alt: 'AI Automation', higher: true,
    // purple peeks right-only → shift accent left, pad right on wrapper
    accent: {
      bg: '#b07dc8',
      translate: 'translate(10px, 0px)',
      wrapperPad: '0 12px 0 0',
    },
  },
];

/* ── SVG paths (viewBox 1000 × 340) ─────────────────────────────
 *  WHAT WE DO card base  ≈ (500, 0)
 *  horizontal beam       y = 60
 *  card x-centres        ≈ 100 | 333 | 667 | 900
 *  higher cards land     y ≈ 130   (mt-0)
 *  lower cards land      y ≈ 220   (mt-20 ≈ 80 px)
 * ─────────────────────────────────────────────────────────────── */
const r = 14; // corner radius

const paths = [
  // 01  higher  → short drop
  `M 500 0
   L 500 46 Q 500 60 486 60
   L ${100 + r} 60 Q 100 60 100 ${60 + r}
   L 100 130`,

  // 02  lower   → long drop
  `M 500 0
   L 500 46 Q 500 60 486 60
   L ${333 + r} 60 Q 333 60 333 ${60 + r}
   L 333 220`,

  // 03  lower   → long drop
  `M 500 0
   L 500 46 Q 500 60 514 60
   L ${667 - r} 60 Q 667 60 667 ${60 + r}
   L 667 220`,

  // 04  higher  → short drop
  `M 500 0
   L 500 46 Q 500 60 514 60
   L ${900 - r} 60 Q 900 60 900 ${60 + r}
   L 900 130`,
];

/* approximate path lengths so stroke-dasharray is correct */
const lengths = [330, 450, 450, 330];

/* ── animation variants ─────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay } },
});

export default function OurServices() {
  return (
    <section className="w-full bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp(0)}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#024f33]" />
            <span className="text-[#024f33] text-xs font-semibold uppercase tracking-widest">
              What We do
            </span>
            <span className="w-8 h-[2px] bg-[#024f33]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a2e] mb-3">
            Our Services
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            A simple, transparent, and effective workflow to bring your digital ideas to life
          </p>
        </motion.div>

        {/* ── Flowchart wrapper ───────────────────────────────── */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          {/* ── Center "WHAT WE DO" card ── */}
          <motion.div className="flex justify-center relative z-10 mb-0" variants={fadeUp(0.1)}>
            <div className="rounded-[18px] bg-gray-100 p-3 shadow-sm inline-block">
              <img
                src={whatWeDoImg}
                alt="What We Do"
                className="w-32 h-32 object-contain rounded-xl block"
              />
            </div>
          </motion.div>

          {/* ── SVG overlay (desktop only) ───────────────────── */}
          <div className="relative hidden lg:block" style={{ height: 0, overflow: 'visible' }}>
            <svg
              className="absolute left-0 right-0 w-full overflow-visible pointer-events-none"
              style={{ top: 0, height: 340 }}
              viewBox="0 0 1000 340"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {paths.map((d, i) => {
                const len = lengths[i];
                return (
                  <g key={i}>

                    {/* ── static base line (light gray) ── */}
                    <motion.path
                      d={d}
                      stroke="#e5e7eb"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.3 + i * 0.08 }}
                    />

                    {/* ── animated flowing dash (brand green) ── */}
                    <motion.path
                      d={d}
                      stroke="#024f33"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      strokeDasharray={`${len * 0.12} ${len * 0.88}`}
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -len }}
                      transition={{
                        duration: 2.2,
                        ease: 'linear',
                        repeat: Infinity,
                        delay: 1 + i * 0.4,
                      }}
                    />

                    {/* ── second pass dot for smoother flow ── */}
                    <motion.path
                      d={d}
                      stroke="#2BD56A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      strokeDasharray={`${len * 0.06} ${len * 0.94}`}
                      initial={{ strokeDashoffset: len * 0.3 }}
                      animate={{ strokeDashoffset: -len * 0.7 }}
                      transition={{
                        duration: 2.2,
                        ease: 'linear',
                        repeat: Infinity,
                        delay: 1 + i * 0.4,
                      }}
                    />

                  </g>
                );
              })}
            </svg>
          </div>

          {/* ── Service cards grid ──────────────────────────── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-10 lg:mt-[80px]">
            {cards.map((c, i) => (
              <motion.div
                key={c.num}
                className={`relative flex flex-col items-center group ${c.higher ? 'lg:mt-0' : 'lg:mt-20'}`}
                variants={fadeUp(0.15 + i * 0.1)}
              >
                {/* ── Number Badge — Figma style: large circle, gray gradient ── */}
                <div
                  className="w-14 h-14 mb-4 rounded-full flex items-center justify-center text-sm font-semibold text-gray-500 z-10 select-none shrink-0"
                  style={{
                    background: 'linear-gradient(145deg, #f0f0f0, #e8e8e8)',
                    boxShadow: '4px 4px 10px rgba(0,0,0,0.10), -2px -2px 6px rgba(255,255,255,0.8)',
                    border: '1px solid rgba(255,255,255,0.9)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {c.num}
                </div>

                {/* ── Card: PNG + thin colored accent strip ── */}
                <motion.div
                  className="w-full cursor-pointer relative"
                  style={{ overflow: 'visible' }}
                  whileHover={{ y: -7, scale: 1.03, transition: { duration: 0.25 } }}
                >
                  {/* Accent block — inset-0 (same size as image container), shifted to peek */}
                  <div
                    className="absolute inset-0 rounded-2xl z-0"
                    style={{
                      backgroundColor: c.accent.bg,
                      transform: c.accent.translate,
                    }}
                  />

                  {/* Main card PNG on top */}
                  <img
                    src={c.img}
                    alt={c.alt}
                    className="relative z-10 w-full h-auto object-contain rounded-2xl drop-shadow-sm"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
