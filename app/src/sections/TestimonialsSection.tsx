import { motion } from 'framer-motion';
import { testimonials } from '@/data/profile';

export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent-warm text-xs uppercase tracking-[0.3em] font-medium mb-6">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary">
            What Clients Say
          </h2>
        </motion.div>

        <div className={`grid gap-px bg-dark-tertiary/50 ${testimonials.length > 1 ? 'md:grid-cols-2' : ''}`}>
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-dark-secondary p-8 md:p-10 flex flex-col"
            >
              <span className="font-serif text-6xl leading-none text-accent-warm/40 mb-2" aria-hidden="true">“</span>
              <blockquote className="font-serif text-xl md:text-2xl text-text-primary leading-snug flex-1">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-text-primary text-sm font-medium">{testimonial.name}</p>
                <p className="text-text-tertiary text-xs uppercase tracking-wider mt-1">{testimonial.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
