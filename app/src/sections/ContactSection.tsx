import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useScrollFade } from '@/hooks/useScrollFade';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const EMAILJS_SERVICE_ID = 'service_r4gyrx8';
const EMAILJS_TEMPLATE_CONTACT = 'template_85lj8pm';      // Template: Contact Us → you
const EMAILJS_TEMPLATE_AUTOREPLY = 'template_bxwu6kg';    // Template: Auto-Reply → visitor
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string || '';

// Initialise EmailJS once at module load
emailjs.init(EMAILJS_PUBLIC_KEY);

const contactInfo: { icon: typeof Phone; label: string; value: string; href?: string }[] = [
  { icon: Phone, label: 'Phone', value: '+254 791 058 879', href: 'tel:+254791058879' },
  { icon: Mail, label: 'Email', value: 'timsheldonoure1@gmail.com', href: 'mailto:timsheldonoure1@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/timsheldon1' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/timsheldon-oure/' },
];

export function ContactSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const { ref: headingRef, opacity: headingOpacity } = useScrollFade<HTMLHeadingElement>({ startOpacity: 0.08 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      // 1) Send the contact message to you
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CONTACT, {
        user_name: formData.get('user_name') as string,
        user_email: formData.get('user_email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      });
    } catch (err) {
      console.error('EmailJS error:', err);
      setIsSubmitting(false);
      toast.error('Something went wrong while sending your message. Please try again later.');
      return;
    }

    // The message is delivered at this point, so report success and clear the form
    // even if the auto-reply fails; otherwise the visitor might resend a duplicate.
    setIsSubmitting(false);
    toast.success('Thank you for your message! I will get back to you soon.');
    form.reset();

    // 2) Send auto-reply confirmation to the visitor
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_AUTOREPLY, {
        user_name: formData.get('user_name') as string,
        user_email: formData.get('user_email') as string,
        subject: formData.get('subject') as string,
      });
    } catch (err) {
      console.error('EmailJS auto-reply error:', err);
    }
  };

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
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-36 bg-dark-secondary"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-accent-warm text-xs uppercase tracking-[0.3em] font-medium mb-6">
              Get In Touch
            </p>
            <motion.h2 ref={headingRef} style={{ opacity: headingOpacity }} className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary">
              Let's Work Together
            </motion.h2>
          </div>
          <p className="text-text-tertiary max-w-sm text-sm leading-relaxed">
            Have a project in mind? I'm always open to discussing new ideas and opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-5 gap-12 lg:gap-16"
        >
          {/* Left Column - Contact Info (2 cols) */}
          <div className="lg:col-span-2">
            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-sm leading-relaxed mb-10"
            >
              Feel free to reach out through any of the channels below, or simply fill in the form.
            </motion.p>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-0 divide-y divide-dark-tertiary/50 border-t border-b border-dark-tertiary/50 mb-10">
              {contactInfo.map((item, index) => {
                const content = (
                  <>
                    <item.icon className="w-4 h-4 text-accent-warm flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-text-tertiary text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className={`text-text-primary text-sm ${item.href ? 'group-hover:text-accent-warm transition-colors' : ''}`}>{item.value}</p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 py-4 group"
                  >
                    {content}
                    <ArrowUpRight className="w-3 h-3 text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <div key={index} className="flex items-center gap-4 py-4">
                    {content}
                  </div>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-text-tertiary text-xs uppercase tracking-wider mb-4">Connect</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-dark-tertiary flex items-center justify-center text-text-secondary hover:text-accent-warm hover:border-accent-warm/40 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form (3 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="border border-dark-tertiary p-8 md:p-10">
              {/* Hidden field so EmailJS knows the recipient */}
              <input type="hidden" name="to_email" value="timsheldonoure1@gmail.com" />
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-text-tertiary text-xs uppercase tracking-wider mb-3">Name</label>
                    <Input
                      id="contact-name"
                      name="user_name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="bg-transparent border-dark-tertiary text-text-primary placeholder:text-text-tertiary/50 focus:border-accent-warm focus:ring-accent-warm/10 rounded-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-text-tertiary text-xs uppercase tracking-wider mb-3">Email</label>
                    <Input
                      id="contact-email"
                      name="user_email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-transparent border-dark-tertiary text-text-primary placeholder:text-text-tertiary/50 focus:border-accent-warm focus:ring-accent-warm/10 rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-text-tertiary text-xs uppercase tracking-wider mb-3">Subject</label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    required
                    className="bg-transparent border-dark-tertiary text-text-primary placeholder:text-text-tertiary/50 focus:border-accent-warm focus:ring-accent-warm/10 rounded-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-text-tertiary text-xs uppercase tracking-wider mb-3">Message</label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="bg-transparent border-dark-tertiary text-text-primary placeholder:text-text-tertiary/50 focus:border-accent-warm focus:ring-accent-warm/10 resize-none rounded-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-warm text-dark-primary py-3.5 text-sm font-medium uppercase tracking-wider hover:bg-accent-warm/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-dark-primary border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
