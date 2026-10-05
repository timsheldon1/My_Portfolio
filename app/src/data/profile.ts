// Personal details that only you can supply. Every section that reads from this
// file stays hidden until its field is filled in, so nothing placeholder ever
// shows on the live site.

export interface Job {
  role: string;
  company: string;
  /** Optional link to the company's website */
  url?: string;
  /** e.g. "2023 - Present" or "Jan 2022 - Jun 2023" */
  period: string;
  /** Optional, e.g. "Nairobi" or "Remote" */
  location?: string;
  /** Optional, e.g. "Part-time" or "Internship"; omit for full-time roles */
  employmentType?: string;
  /** 2-3 short results-focused bullets */
  highlights: string[];
  technologies?: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  /** e.g. "Founder, Meemo's Naturals" */
  title: string;
}

/** Shown as a badge in the hero, e.g. "Open to full-time roles and freelance projects" */
export const availability: string | null = null;

/** Path to your CV, e.g. '/resume.pdf' after placing the file in app/public/ */
export const resumeUrl: string | null = '/Timsheldon_Oure_Full_Stack_CV.pdf';

/** One personal sentence for the About section, e.g. "Outside of code, you'll find me…" */
export const personalNote: string | null = null;

/** Most recent job first */
export const workHistory: Job[] = [
  {
    role: 'Web Developer',
    company: 'The Bush Collection',
    url: 'https://thebushcollection.africa/',
    period: 'Jan 2025 - Oct 2026',
    location: 'Nairobi, Kenya / Remote',
    highlights: [
      'Built and maintained a full-stack hospitality platform serving 1,000+ daily users, using React, Node.js and MongoDB.',
      'Developed backend APIs and MongoDB data models for bookings, payments and application workflows.',
      'Implemented authentication and role-based access control, and managed application deployment.',
      'Integrated the Anthropic API to add an AI marketing agent to the platform.',
      'Reduced page load times by 30% through code splitting, lazy loading and bundle optimization.',
      'Built reusable React components with Redux and tested across browsers to resolve usability issues.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Anthropic API'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Plus W Inc.',
    period: 'Nov 2024 - Dec 2024',
    location: 'Tokyo, Japan / Onsite',
    highlights: [
      'Developed full-stack features for international client projects, using Python and Django on the backend and React, Vue.js and TypeScript on the front end.',
      'Integrated REST APIs with asynchronous data handling and error handling; wrote Jest and React Testing Library tests, maintaining 90% code coverage.',
      'Collaborated with designers and developers across time zones through Agile sprints, code reviews and Git workflows.',
    ],
    technologies: ['Python', 'Django', 'React', 'Vue.js', 'TypeScript', 'Jest'],
  },
  {
    role: 'Web Developer / IT Support Specialist',
    company: 'National Council for Persons with Disabilities',
    period: 'Oct 2020 - Dec 2024',
    location: 'Nairobi, Kenya',
    employmentType: 'Part-time & Volunteer',
    highlights: [
      'Developed accessible knowledge management interfaces using HTML, CSS, JavaScript and jQuery; integrated REST APIs with internal services and external systems.',
      'Translated stakeholder requirements into technical specifications and maintained API and architecture documentation.',
      'Improved website load times by 30%.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'REST APIs'],
  },
  {
    role: 'Web Developer Intern',
    company: 'The Judiciary, Karatina Law Courts',
    period: 'May 2022 - Aug 2023',
    location: 'Karatina, Kenya',
    highlights: [
      'Developed responsive case management interfaces and integrated backend APIs for data retrieval and submission.',
      'Debugged front-end issues and used Git in collaborative Agile development.',
    ],
  },
];

export const testimonials: Testimonial[] = [];
