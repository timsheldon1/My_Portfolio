import { motion } from 'framer-motion';
import { Globe, Heart, Github, Activity, Leaf, ExternalLink, Waves, GraduationCap, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  /** Screenshot in public/projects/; projects without one get a styled placeholder */
  image?: string;
  link?: string;
  github?: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  achievements: string[];
  caseStudy?: { problem: string; decisions: string[] };
}

const projects: Project[] = [
  {
    title: 'The Bush Collection: Safari Booking Platform',
    category: 'Full-stack platform',
    description: 'A booking platform for a collection of African safari lodges and beach properties. Guests browse properties, book rooms and packages, and pay online, while staff manage listings, rates and reservations from an admin dashboard.',
    icon: Globe,
    image: '/projects/bushcollection.webp',
    link: 'https://thebushcollection.vercel.app/',
    github: 'https://github.com/timsheldon1/TBCFinall-',
    metrics: [
      { label: 'Happy Travelers', value: '1,000+' },
      { label: 'Average Rating', value: '4.8★' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Pesapal'],
    achievements: [
      'Built the guest booking flow: properties and rooms with seasonal, guest-count-aware pricing, booked and paid for online via Pesapal',
      'Built the Express API on MongoDB with separate JWT-protected user and admin routes, login rate limiting, and Swagger docs',
      'Automated booking confirmations with server-generated PDF receipts sent by email',
      'Gave staff an admin dashboard for properties, rooms, packages, media and reviews, so listings change without code changes',
    ],
    caseStudy: {
      problem: 'Small hospitality groups often juggle several properties across spreadsheets, WhatsApp and manual invoicing. This platform replaces that with one system: a public site where guests book directly, and an admin side for running the properties.',
      decisions: [
        'Chose MongoDB over Postgres because a beach villa and a bush lodge rarely share the same amenity or media structure, and enforced cross-record consistency in application code instead.',
        'Kept users and admins as separate models and route sets rather than one collection with a role flag, so a user token can never reach admin-only data.',
        'Used an explicit CORS allowlist on the payments API instead of a wildcard, accepting a redeploy whenever a new frontend domain is added.',
      ],
    },
  },
  {
    title: 'Mbuyu Watatu: Beach Retreat Landing Page',
    category: 'Landing page',
    description: 'An intimate beach sanctuary on the Kenyan coast, where ancient baobabs meet the Indian Ocean. Part of The Bush Collection family of private retreats.',
    icon: Waves,
    image: '/projects/mbuyu.webp',
    link: 'https://mbuyuwatatu.co.ke/',
    metrics: [
      { label: 'Accommodation Types', value: '4' },
      { label: 'Part of', value: 'Bush Collection' },
    ],
    technologies: ['React', 'Tailwind CSS', 'Cloudinary', 'Framer Motion', 'REST APIs'],
    achievements: [
      'Crafted an editorial luxury landing page for a coastal retreat in Shimoni, Kwale, featuring an immersive hero, scroll animations, and cinematic imagery',
      'Built accommodation showcase with room-type cards, live pricing, and a register-interest booking flow for Studio, 2-Bed, 3-Bed, and Safari Tent units',
      'Implemented experiences section, photo gallery with Cloudinary-optimised assets, and a multi-channel contact form tied to The Bush Collection reservations team',
    ],
  },
  {
    title: 'FundiClass: Vocational Learning Platform',
    category: 'Product, pre-launch',
    description: "A vocational and entrepreneurial video-learning platform for Kenya's Jua Kali sector, youth and upcoming technicians, currently taking waitlist sign-ups ahead of launch.",
    icon: GraduationCap,
    link: 'https://fundi-class-luhd.vercel.app/',
    github: 'https://github.com/timsheldon1/FundiClass',
    metrics: [
      { label: 'Course Tracks', value: '3' },
      { label: 'Stage', value: 'Waitlist' },
    ],
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    achievements: [
      'Built the launch site in Next.js with a course catalogue across technical trades, agribusiness, and business & digital skills',
      'Implemented waitlist sign-up through a Next.js API route that validates Safaricom numbers and stores leads in Supabase',
      'Wrote the product story around its users: offline viewing, M-Pesa pricing, and Sheng, Kiswahili and English content',
    ],
  },
  {
    title: 'Charity Donor Dashboard',
    category: 'Dashboard',
    description: 'A modern, responsive donor dashboard for charity organizations to track donations, manage donors, and monitor campaigns.',
    icon: Heart,
    image: '/projects/charity.webp',
    link: 'https://charity-donor-dashborad.netlify.app/',
    github: 'https://github.com/timsheldon1/charity-donor-dashboard',
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
    category: 'API dashboard',
    description: 'A responsive single-page patient dashboard that dynamically renders healthcare data via the Coalition Technologies Patient Data API.',
    icon: Activity,
    link: 'https://patientdatadashboard.netlify.app/',
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
    title: "Meemo's Naturals: Brand Website",
    category: 'Brand website',
    description: 'A luxury editorial brochure website for Meemo\'s Naturals, a natural wellness food brand. Built as a fully static single-page site with zero dependencies.',
    icon: Leaf,
    image: '/projects/meemo.webp',
    link: 'https://meemo-s-naturals.vercel.app/',
    github: 'https://github.com/timsheldon1/Meemo-s-Naturals',
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

const outlineNumber = {
  color: 'rgba(160, 137, 122, 0.12)',
  WebkitTextStroke: '1px rgba(160, 137, 122, 0.45)',
};

function ProjectVisual({ project, number }: { project: Project; number: string }) {
  const inner = project.image ? (
    <img
      src={project.image}
      alt={`Screenshot of ${project.title}`}
      loading="lazy"
      width={1200}
      height={750}
      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
    />
  ) : (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:22px_22px]">
      <project.icon className="w-10 h-10 text-[#a0897a]" strokeWidth={1.25} />
      <span className="font-serif text-6xl leading-none" style={outlineNumber}>{number}</span>
      {project.link && (
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#7a716a]">
          {new URL(project.link).hostname.replace(/^www\./, '')}
        </span>
      )}
    </div>
  );

  const frame = 'block aspect-[16/10] overflow-hidden border border-[#3d3530] bg-[#221e1a] group';

  return project.link ? (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={frame} aria-label={`Open ${project.title} live site`}>
      {inner}
    </a>
  ) : (
    <div className={frame}>{inner}</div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-36 bg-[#1a1714]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24"
        >
          <div>
            <p className="text-[#a0897a] text-xs uppercase tracking-[0.3em] font-medium mb-6">
              Selected Work
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#f5f0e8]">
              Projects
            </h2>
          </div>
          <p className="text-[#7a716a] max-w-sm text-sm leading-relaxed">
            Production sites for real clients, plus the dashboards and products I build to sharpen my craft.
          </p>
        </motion.div>

        {/* Project list */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            const number = String(index + 1).padStart(2, '0');
            const flip = index % 2 === 1;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Visual */}
                <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
                  <ProjectVisual project={project} number={number} />
                </div>

                {/* Details */}
                <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-serif text-4xl leading-none" style={outlineNumber}>{number}</span>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#a0897a]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f0e8] leading-[1.15] mb-4">
                    {project.title}
                  </h3>

                  <p className="text-[#a09890] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-x-10 gap-y-3 mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <span className="block text-xl font-serif text-[#a0897a]">{metric.value}</span>
                        <span className="text-[#7a716a] text-[10px] uppercase tracking-widest font-mono">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-6">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3 text-[#a09890] text-sm leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-[#a0897a] mt-[9px] flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Case study */}
                  {project.caseStudy && (
                    <details className="group/case mb-6 border-t border-b border-[#3d3530] py-4">
                      <summary className="cursor-pointer list-none flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#c9c2b8] hover:text-[#f5f0e8]">
                        Case study: the problem &amp; key decisions
                        <span className="text-[#a0897a] transition-transform group-open/case:rotate-45 text-base leading-none">+</span>
                      </summary>
                      <div className="pt-4 space-y-4 text-sm leading-relaxed text-[#a09890]">
                        <p>
                          <span className="block text-[10px] font-mono uppercase tracking-widest text-[#7a716a] mb-1">Problem</span>
                          {project.caseStudy.problem}
                        </p>
                        <div>
                          <span className="block text-[10px] font-mono uppercase tracking-widest text-[#7a716a] mb-2">Decisions &amp; trade-offs</span>
                          <ul className="space-y-2">
                            {project.caseStudy.decisions.map((decision) => (
                              <li key={decision} className="flex items-start gap-3">
                                <span className="text-[#a0897a] flex-shrink-0">→</span>
                                <span>{decision}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>
                  )}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[#7a716a] border border-[#3d3530] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#a0897a] hover:text-[#f5f0e8] transition-colors text-[11px] font-mono uppercase tracking-wider"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live site
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#7a716a] hover:text-[#f5f0e8] transition-colors text-[11px] font-mono uppercase tracking-wider"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Archive link */}
        <div className="mt-24 pt-10 border-t border-[#3d3530] flex justify-center">
          <a
            href="https://github.com/timsheldon1?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#c9c2b8] hover:text-[#f5f0e8] text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
          >
            More projects on GitHub
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
