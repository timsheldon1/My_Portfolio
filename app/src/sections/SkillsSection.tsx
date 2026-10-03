import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Layers, 
  Plug, 
  Wrench, 
  Server 
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useScrollFade } from '@/hooks/useScrollFade';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Frameworks',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    icon: Palette,
    title: 'UI / Styling',
    skills: ['Tailwind CSS', 'Bootstrap', 'CSS-in-JS', 'Responsive Design', 'Mobile-First Development'],
  },
  {
    icon: Layers,
    title: 'Component Libraries',
    skills: ['Design System Development', 'Reusable UI Components', 'Component-Driven Architecture'],
  },
  {
    icon: Plug,
    title: 'API Integration',
    skills: ['REST APIs', 'Backend Integration', 'Third-Party Service Integration'],
  },
  {
    icon: Wrench,
    title: 'Development Tools',
    skills: ['Git/GitHub', 'NPM', 'Visual Studio Code', 'Docker', 'Agile/Scrum'],
  },
  {
    icon: Server,
    title: 'Backend Knowledge',
    skills: ['Node.js', 'Express.js', 'Django', 'Python', 'PHP', 'PostgreSQL', 'MySQL', 'NoSQL'],
  },
];

export function SkillsSection() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-36 bg-dark-secondary"
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
            My Expertise
          </p>
          <motion.h2 ref={headingRef} style={{ opacity: headingOpacity }} className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
            Technical Skills
          </motion.h2>
          <div className="w-16 h-px bg-dark-tertiary" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-tertiary/50"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-secondary p-8 group hover:bg-dark-primary/50 transition-colors"
            >
              {/* Icon */}
              <category.icon className="w-5 h-5 text-accent-warm mb-6" />

              {/* Title */}
              <h3 className="text-lg font-semibold text-text-primary mb-5 tracking-tight">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-xs text-text-secondary border border-dark-tertiary bg-dark-primary/50 font-medium tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
