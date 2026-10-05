import { motion } from 'framer-motion';
import { Code2, Palette, Gauge, Smartphone, Globe, Blocks } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useScrollFade } from '@/hooks/useScrollFade';

const services = [
  {
    icon: Code2,
    title: 'Front-End Development',
    description:
      'Building modern, interactive web applications with React, TypeScript, and Tailwind CSS, with clean component architecture, reusable design systems, and pixel-perfect execution.',
  },
  {
    icon: Palette,
    title: 'UI/UX & Frontend Design',
    description:
      'Translating designs into polished interfaces with strong attention to layout, typography, spacing, and micro-interactions that elevate user experience.',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description:
      'Improving Core Web Vitals through code splitting, lazy loading, image optimization, caching strategies, and efficient state management for blazing-fast load times.',
  },
  {
    icon: Smartphone,
    title: 'Responsive & Mobile-First',
    description:
      'Crafting layouts that look and feel great on every screen, from mobile phones to ultra-wide monitors, using modern CSS and adaptive design patterns.',
  },
  {
    icon: Globe,
    title: 'API Integration',
    description:
      'Connecting front-end applications to REST and third-party APIs, handling authentication, data fetching, error states, and real-time updates seamlessly.',
  },
  {
    icon: Blocks,
    title: 'Static Sites & Brochure Websites',
    description:
      'Delivering lightweight, zero-dependency static sites and brand websites, optimized for speed, SEO, and instant deployment on Vercel, Netlify, or GitHub Pages.',
  },
];

export function ExperienceSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: headingRef, opacity: headingOpacity } = useScrollFade<HTMLHeadingElement>({ startOpacity: 0.08 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-36 bg-dark-primary"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent-warm text-xs uppercase tracking-[0.3em] font-medium mb-6">
            Services & Expertise
          </p>
          <motion.h2 ref={headingRef} style={{ opacity: headingOpacity }} className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
            What I Do
          </motion.h2>
          <p className="text-text-secondary max-w-xl text-[15px]">
            Specializing in building fast, beautiful, and user-friendly web experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-tertiary/50"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-primary p-8 md:p-10 group hover:bg-dark-secondary/30 transition-colors"
            >
              {/* Number + Icon */}
              <div className="flex items-center justify-between mb-6">
                <service.icon className="w-5 h-5 text-accent-warm" />
                <span className="text-dark-tertiary text-xs font-mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-text-primary mb-3 tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-tertiary leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
