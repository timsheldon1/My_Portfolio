import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';

export function HeroSection() {
  const { displayText, showCursor } = useTypewriter({
    text: 'React Developer',
    speed: 80,
    delay: 500,
  });

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2c2622]">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '24px 24px',
      }} />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="text-[#a09890] text-xs uppercase tracking-[0.3em] mb-8 font-medium"
        >
          Front-End Engineer based in Nairobi, Kenya
        </motion.p>

        {/* Serif headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f5f0e8] leading-[0.95] mb-6 tracking-tight"
        >
          Timsheldon
          <br />
          <span className="text-[#a0897a]">Oure</span>
        </motion.h1>

        {/* Divider rule */}
        <motion.div
          variants={itemVariants}
          className="w-16 h-px bg-[#a0897a] mb-8"
        />

        {/* Typewriter subtitle */}
        <motion.div
          variants={itemVariants}
          className="text-lg sm:text-xl text-[#c9c2b8] mb-4 h-8 font-light"
        >
          <span>{displayText}</span>
          <span className={`inline-block w-px h-5 bg-[#a0897a] ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-[#a09890] text-base md:text-lg max-w-xl leading-relaxed mb-12"
        >
          Building responsive, high-performance web applications
          that drive engagement and conversion.
        </motion.p>

        {/* Contact row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-12 text-sm text-[#a09890]"
        >
          <span>+254 791 058 879</span>
          <span className="hidden sm:inline text-[#5a524a]">|</span>
          <span>timsheldonoure1@gmail.com</span>
          <span className="hidden sm:inline text-[#5a524a]">|</span>
          <span>Nairobi, Kenya</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#a0897a] text-[#2c2622] px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#b09a8c] transition-colors"
          >
            Get in Touch
          </button>
          <button
            onClick={() => {
              const element = document.querySelector('#projects');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 text-[#c9c2b8] hover:text-[#f5f0e8] text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#a09890] hover:text-[#f5f0e8] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
