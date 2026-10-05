import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code, Database, Layout, Users, Cloud, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useScrollFade } from '@/hooks/useScrollFade';

const coursework = [
  { name: 'Web Development', icon: Code },
  { name: 'Software Engineering', icon: BookOpen },
  { name: 'Database Systems', icon: Database },
  { name: 'UI/UX Design', icon: Layout },
  { name: 'Agile Methodologies', icon: Users },
];

const certifications = [
  { name: 'AWS Cloud Practitioner Essentials', icon: Cloud },
  { name: 'Agile/Scrum Methodologies', icon: Award },
];

export function EducationSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });
  const { ref: headingRef, opacity: headingOpacity } = useScrollFade<HTMLHeadingElement>({ startOpacity: 0.08 });

  return (
    <section
      id="education"
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
            Academic Background
          </p>
          <motion.h2 ref={headingRef} style={{ opacity: headingOpacity }} className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary">
            Education
          </motion.h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="border-t-2 border-accent-warm pt-10">
            {/* Icon & Degree */}
            <div className="flex items-start gap-6 mb-10">
              <div className="w-14 h-14 border border-dark-tertiary flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-accent-warm" />
              </div>

              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-text-primary mb-2">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-accent-warm font-medium text-lg">
                  Multimedia University of Kenya
                </p>
                <p className="text-text-tertiary text-sm mt-1">
                  Graduated 2023
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-dark-tertiary/50 mb-8" />

            {/* Coursework */}
            <div>
              <p className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-5">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                    className="flex items-center gap-2 px-4 py-2 border border-dark-tertiary bg-dark-primary/50 text-text-secondary hover:border-accent-warm/40 hover:text-text-primary transition-colors"
                  >
                    <course.icon className="w-4 h-4 text-accent-warm" />
                    <span className="text-sm">{course.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Professional development */}
            <div className="mt-10">
              <p className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-5">
                Professional Development
              </p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-2 px-4 py-2 border border-dark-tertiary bg-dark-primary/50 text-text-secondary"
                  >
                    <cert.icon className="w-4 h-4 text-accent-warm" />
                    <span className="text-sm">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
