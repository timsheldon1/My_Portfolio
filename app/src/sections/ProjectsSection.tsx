import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ShoppingCart, BarChart3, Globe, Heart, Github, Activity, Leaf, ExternalLink, Waves } from 'lucide-react';

const projects = [
  {
    title: 'Travel & Hospitality Booking Platform',
    description: 'A full-featured travel and hospitality platform for The Bush Collection an African safari company spanning Kenya and Tanzania.',
    icon: Globe,
    link: 'https://thebushcollection.africa/',
    metrics: [
      { label: 'Happy Travelers', value: '1,000+' },
      { label: 'Average Rating', value: '4.8★' },
    ],
    technologies: ['React', 'Tailwind CSS', 'Cloudinary', 'REST APIs', 'Booking Engine'],
    achievements: [
      'Developed end-to-end booking flow with safari package selection, property browsing, and reservation management',
      'Integrated Cloudinary-powered media center for high-performance image delivery across destinations',
      'Built responsive, mobile-first UI showcasing 3+ destinations with immersive visuals and interactive maps',
    ],
  },
  {
    title: 'Mbuyu Watatu — Beach Retreat Landing Page',
    description: 'An intimate beach sanctuary on the Kenyan coast, where ancient baobabs meet the Indian Ocean. Part of The Bush Collection family of private retreats.',
    icon: Waves,
    link: 'https://mbuyumarine.com/',
    metrics: [
      { label: 'Accommodation Types', value: '4' },
      { label: 'Part of', value: 'Bush Collection' },
    ],
    technologies: ['React', 'Tailwind CSS', 'Cloudinary', 'Framer Motion', 'REST APIs'],
    achievements: [
      'Crafted an editorial luxury landing page for a coastal retreat in Shimoni, Kwale, with immersive hero, scroll animations, and cinematic imagery',
      'Built accommodation showcase with room-type cards, live pricing, and a register-interest booking flow for Studio, 2-Bed, 3-Bed, and Safari Tent units',
      'Implemented experiences section, photo gallery with Cloudinary-optimised assets, and a multi-channel contact form tied to The Bush Collection reservations team',
    ],
  },
  {
    title: 'Charity Donor Dashboard',
    description: 'A modern, responsive donor dashboard for charity organizations to track donations, manage donors, and monitor campaigns.',
    icon: Heart,
    link: 'https://charity-donor-dashborad.netlify.app/',
    github: 'https://github.com/iou123456/charity-donor-dashboard',
    metrics: [
      { label: 'Total Donations Tracked', value: '$24K+' },
      { label: 'Active Donors', value: '1,248' },
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'Font Awesome'],
    achievements: [
      'Built interactive dashboard with Chart.js data visualization for donation trends and source analytics',
      'Implemented responsive design with mobile sidebar toggle for seamless cross-device experience',
      'Created campaign management interface with real-time statistics and donation status tracking',
    ],
  },
  {
    title: 'Patient Data Dashboard',
    description: 'A responsive single-page patient dashboard that dynamically renders healthcare data via the Coalition Technologies Patient Data API.',
    icon: Activity,
    link: 'https://patientdatadashboard.netlify.app/',
    github: 'https://github.com/iou123456/HTML-with-API-Integration',
    metrics: [
      { label: 'API-Driven Views', value: '5+' },
      { label: 'Vital Signs Tracked', value: '3' },
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'REST APIs'],
    achievements: [
      'Integrated Coalition Technologies Patient Data API for dynamic patient record rendering',
      'Implemented interactive blood pressure trend charts using Chart.js with historical data visualization',
      'Built responsive medical dashboard UI tracking heart rate, respiratory rate, and temperature vitals',
    ],
  },
  {
    title: "Meemo's Naturals — Brand Website",
    description: 'A luxury editorial brochure website for Meemo\'s Naturals, a natural wellness food brand. Built as a fully static single-page site with zero dependencies.',
    icon: Leaf,
    link: 'https://meemo-s-naturals.vercel.app/',
    github: 'https://github.com/iou123456/Meemo-s-Naturals',
    metrics: [
      { label: 'Static Pages', value: 'Zero deps' },
      { label: 'Hosting Ready', value: 'Vercel / Netlify' },
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    achievements: [
      'Built a fully static, dependency-free single-page brochure site optimized for performance and accessibility',
      'Implemented inquiry-driven UX: pre-filled WhatsApp inquiry links and floating WhatsApp CTA for instant contact',
      'Designed editorial layout with serif typography, architectural grids, animated ticker, scroll reveal and sticky navigation',
    ],
  },
  
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const index = Math.min(
      Math.floor(latest * projects.length),
      projects.length - 1
    );
    setActiveIndex(index);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#1a1714]"
      style={{ height: `${projects.length * 100}vh` }}
    >
      {/* Sticky full-screen container — one seamless dark background */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Split layout — left number fixed, right content transitions */}
        <div className="h-full flex flex-col md:flex-row">

          {/* ─── LEFT SIDE — giant number, completely static ─── */}
          <div className="hidden md:flex md:w-[40%] lg:w-[38%] h-full items-center justify-center pl-8 lg:pl-16">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="font-serif text-[clamp(10rem,18vw,20rem)] leading-none select-none"
                style={{
                  color: 'rgba(160, 137, 122, 0.12)',
                  WebkitTextStroke: '1.5px rgba(160, 137, 122, 0.35)',
                }}
              >
                {String(activeIndex + 1).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* ─── RIGHT SIDE — scrolling project content ─── */}
          <div className="flex-1 md:w-[60%] lg:w-[62%] h-full flex flex-col">
            {/* Top bar — tech tags + category badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`top-${activeIndex}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex-shrink-0 flex items-center justify-between px-6 lg:px-10 pt-8 pb-4"
              >
                {/* Subtitle / category */}
                <p className="text-[#a09890] text-xs sm:text-sm tracking-wide">
                  {activeProject.description.split('.')[0]}.
                </p>
                {/* Tech tags inline */}
                <div className="hidden lg:flex items-center gap-2">
                  {activeProject.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-[#7a716a] tracking-wide"
                    >
                      {i > 0 && <span className="mr-2 text-[#3d3530]">|</span>}
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Main content area — title + project details */}
            <div className="flex-1 flex flex-col px-6 lg:px-10 min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${activeIndex}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="flex-1 flex flex-col"
                >
                  {/* Mobile number */}
                  <span
                    className="md:hidden font-serif text-7xl text-transparent block mb-2"
                    style={{
                      color: 'rgba(160, 137, 122, 0.12)',
                      WebkitTextStroke: '1px rgba(160, 137, 122, 0.35)',
                    }}
                  >
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>

                  {/* Project title + action links */}
                  <div className="flex items-start justify-between gap-6 mb-8">
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#f5f0e8] leading-[1.1] max-w-2xl">
                      {activeProject.title}
                    </h3>
                    <div className="flex items-center gap-4 flex-shrink-0 mt-2 sm:mt-3">
                      {'github' in activeProject && activeProject.github && (
                        <a
                          href={activeProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#7a716a] hover:text-[#f5f0e8] transition-colors group"
                          aria-label="View source on GitHub"
                        >
                          <Github className="w-5 h-5" />
                          <span className="hidden sm:inline text-[11px] font-mono uppercase tracking-wider group-hover:text-[#f5f0e8]">Code</span>
                        </a>
                      )}
                      {'link' in activeProject && activeProject.link && (
                        <a
                          href={activeProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[#a0897a] hover:text-[#f5f0e8] transition-colors group"
                          aria-label="View live site"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span className="hidden sm:inline text-[11px] font-mono uppercase tracking-wider group-hover:text-[#f5f0e8]">Live</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap items-center gap-x-10 gap-y-3 mb-8">
                    {activeProject.metrics.map((metric, i) => (
                      <div key={i}>
                        <span className="block text-2xl font-serif text-[#a0897a]">
                          {metric.value}
                        </span>
                        <span className="text-[#7a716a] text-[10px] uppercase tracking-widest font-mono">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-8 max-w-xl">
                    {activeProject.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#a09890] text-sm leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-[#a0897a] mt-[7px] flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile tech tags */}
                  <div className="lg:hidden flex flex-wrap gap-2 mb-6">
                    {activeProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#7a716a] border border-[#3d3530] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom progress indicator */}
            <div className="flex-shrink-0 px-6 lg:px-10 pb-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                {projects.map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-8 h-1 bg-[#a0897a]'
                        : 'w-2 h-1 bg-[#3d3530]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[#7a716a] text-[11px] font-mono">
                {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
