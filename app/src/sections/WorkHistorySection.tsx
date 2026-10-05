import { motion } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import { useScrollFade } from '@/hooks/useScrollFade';
import { workHistory, resumeUrl } from '@/data/profile';

export function WorkHistorySection() {
  const { ref: headingRef, opacity: headingOpacity } = useScrollFade<HTMLHeadingElement>({ startOpacity: 0.08 });

  if (workHistory.length === 0) return null;

  return (
    <section id="experience" className="py-24 md:py-36 bg-dark-primary border-b border-dark-tertiary/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-accent-warm text-xs uppercase tracking-[0.3em] font-medium mb-6">
              Career
            </p>
            <motion.h2 ref={headingRef} style={{ opacity: headingOpacity }} className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary">
              Experience
            </motion.h2>
          </div>
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-text-secondary hover:text-accent-warm text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              <FileText className="w-4 h-4" />
              View full résumé
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </motion.div>

        {/* Timeline */}
        <ol className="border-t border-dark-tertiary/60">
          {workHistory.map((job, index) => (
            <motion.li
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="grid md:grid-cols-12 gap-4 md:gap-10 py-10 border-b border-dark-tertiary/60"
            >
              <div className="md:col-span-3">
                <p className="text-text-tertiary text-xs uppercase tracking-widest font-mono">{job.period}</p>
                {job.location && <p className="text-text-tertiary/70 text-xs mt-1">{job.location}</p>}
                {job.employmentType && (
                  <span className="inline-block mt-3 px-2.5 py-1 text-[10px] uppercase tracking-widest text-accent-warm border border-accent-warm/40">
                    {job.employmentType}
                  </span>
                )}
              </div>

              <div className="md:col-span-9">
                <h3 className="text-lg font-semibold text-text-primary tracking-tight mb-1">
                  {job.role}
                  <span className="text-accent-warm"> · </span>
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-accent-warm hover:underline underline-offset-4">
                      {job.company}
                    </a>
                  ) : (
                    <span className="text-accent-warm">{job.company}</span>
                  )}
                </h3>

                <ul className="mt-4 space-y-2">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-accent-warm mt-[9px] flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {job.technologies && job.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs text-text-secondary border border-dark-tertiary bg-dark-primary/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
