"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, TrendingUp, Target, BarChart3 } from "lucide-react";

interface HeroSectionProps {
  serviceName?: string;
  bgAltImage?: string;
}

const TAGS = ["SEO", "PPC", "Social", "Content", "Email", "Analytics"] as const;

const HIGHLIGHTS = [
  { icon: TrendingUp, title: "Performance-first", desc: "Full-funnel tracking & weekly insights." },
  { icon: Target, title: "Precision targeting", desc: "Audience cohorts & lookalikes that convert." },
  { icon: BarChart3, title: "Transparent reports", desc: "GA4 dashboards with channel-level ROI." },
] as const;

export default function HeroSection({
  serviceName = "Digital Marketing",
  bgAltImage = "/images/DigiMarket.png",
}: HeroSectionProps) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % TAGS.length), 2200);
    return () => clearInterval(t);
  }, []);

  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMx((e.clientX - (r.left + r.width / 2)) * 0.1);
    setMy((e.clientY - (r.top + r.height / 2)) * 0.1);
  };
  const resetMagnet = () => { setMx(0); setMy(0); };

  return (
    <section className="section-spacing section-spacing--loose hero-mobile-fold hero-md-compact hero-overrides relative">
      <div className="container container-gutters">
        <div className="mx-auto w-full max-w-[1280px] lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* TEXT — fills first fold on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="hero-first-screen text-center lg:text-left"
          >
            {/* Badge */}
            <div className="flex justify-center lg:justify-start mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm text-gray-300">Data • Targeting • Conversion</span>
              </span>
            </div>

            <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gradient-neon leading-tight">
              {serviceName}
            </h1>
            <h2 className="mt-2 text-[18px] sm:text-xl md:text-3xl lg:text-4xl text-white font-semibold">
              Modern Campaigns that Convert and Scale
            </h2>

            <p className="mt-4 text-[15px] sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-[34ch] sm:max-w-[48ch] md:max-w-3xl mx-auto lg:mx-0">
              Grow visibility, leads, and revenue with data-driven campaigns across search, social,
              and content—optimized for measurable ROAS and clean analytics.
            </p>
            <p className="mt-2 text-[15px] sm:text-base md:text-lg text-white/80 leading-relaxed max-w-[34ch] sm:max-w-[48ch] md:max-w-3xl mx-auto lg:mx-0">
              We handle strategy, tracking, and execution with weekly insights so you know exactly
              what’s working—and why.
            </p>

            {/* Rolling line */}
            <div className="mt-4 h-6 sm:h-8 md:h-10 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="inline-block text-sm sm:text-lg md:text-2xl font-semibold text-gradient-neonsubtle"
                >
                  Campaigns that perform in {TAGS[i]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA — tighter on md+ */}
            <div className="mt-6 md:mt-3 lg:mt-3 flex justify-center lg:justify-start">
              <a
                href="/contact"
                onMouseMove={handleMouseMove}
                onMouseLeave={resetMagnet}
                style={{ transform: `translate(${mx}px, ${my}px)` }}
                className="btn btn--pill"
                aria-label="Get a Free Consult"
              >
                Get a Free Consult
              </a>
            </div>

            {/* Mobile-only compact highlights (unchanged) */}
            <div className="mt-5 grid grid-cols-2 gap-3 md:hidden">
              {[HIGHLIGHTS[0], HIGHLIGHTS[1]].map(({ icon: Icon, title }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-left">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-cyan-300" />
                    <span className="text-sm font-semibold">{title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop highlights (md+) */}
            <div className="mt-6 hidden md:grid grid-cols-1 sm:grid-cols-3 gap-4">
              {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass-card p-4 border border-white/10 rounded-xl">
                  <div className="flex items-start gap-2">
                    <Icon className="w-4 h-4 text-cyan-300 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold">{title}</div>
                      <div className="mt-1 text-xs text-white/70">{desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE — second screen on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-10 lg:mt-0 flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[540px]"
            >
              <Image
                src={bgAltImage}
                alt="Digital Marketing Illustration"
                width={760}
                height={520}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 540px"
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl object-contain"
                priority
              />
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-cyan-500/15 to-purple-500/15 blur-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
