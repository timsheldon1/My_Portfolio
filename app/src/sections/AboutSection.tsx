import { motion } from 'framer-motion';
import { Code2, Briefcase, Users, Globe } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useScrollFade } from '@/hooks/useScrollFade';
import { personalNote } from '@/data/profile';

const stats = [
  { icon: Briefcase, value: 3, suffix: '+', label: 'Years Full-Time' },
  { icon: Code2, value: 15, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 4, suffix: '', label: 'Companies Worked' },
  { icon: Globe, value: 6, suffix: '', label: 'Live Sites in Portfolio' },
];

export function AboutSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });
  const { ref: headingRef, opacity: headingOpacity } = useScrollFade<HTMLHeadingElement>({ startOpacity: 0.08 });
  const { ref: bodyRef, opacity: bodyOpacity } = useScrollFade<HTMLDivElement>({ startOpacity: 0.1, offsetEnd: 0.45 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-36 bg-dark-primary"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Left Column - Text */}
          <div>
            <motion.p variants={itemVariants} className="text-accent-warm text-xs uppercase tracking-[0.3em] font-medium mb-6">
              About Me
            </motion.p>

            <motion.h2
              ref={headingRef}
              style={{ opacity: headingOpacity }}
              variants={itemVariants}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary mb-8 leading-[1.1]"
            >
              Product-minded{' '}
              <span className="text-accent-warm">Full Stack Developer</span> with a front-end focus
            </motion.h2>

            <motion.div ref={bodyRef} style={{ opacity: bodyOpacity }} variants={itemVariants} className="space-y-5 text-text-secondary leading-relaxed text-[15px]">
              <p>
                With over <span className="text-text-primary font-medium">3 years of full-time experience</span>, I specialize 
                in building responsive, high-performance web applications using modern React patterns and 
                component-driven architecture.
              </p>
              <p>
                My track record includes delivering user-centric SaaS solutions that drive engagement and 
                conversion. I have strong expertise in building reusable component libraries, optimizing UX flows, 
                and integrating REST APIs.
              </p>
              <p>
                Experienced in startup environments, I excel at shipping fast, iterating quickly, and taking 
                ownership of product development from concept to deployment.
              </p>
              {personalNote && <p>{personalNote}</p>}
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-px bg-dark-tertiary/50 border border-dark-tertiary"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-primary p-8 md:p-10 group hover:bg-dark-secondary/50 transition-colors"
              >
                <stat.icon className="w-5 h-5 text-accent-warm mb-6" />
                
                <div className="text-3xl md:text-4xl font-serif text-text-primary mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                
                <p className="text-text-tertiary text-xs uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
