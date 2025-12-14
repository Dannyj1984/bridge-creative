'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';

const services = [
  {
    title: 'Logo Design',
    description: 'Your logo is often the first thing people see, so it needs to make a strong impression. We design logos that are memorable, meaningful, and built to last—perfectly tailored to reflect your brand’s personality.',
    link: '/services/logo-design',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <path d="M8.8 20v-2.1a2 2 0 0 1 1-2h2.4a2 2 0 0 1 2 2v2.1" />
        <path d="M7 19a2 2 0 0 1 2-12.8" />
        <path d="M17 19a2 2 0 0 0-2-12.8" />
      </svg>
    ) // Palette-ish icon
  },
  {
    title: 'Digital Design',
    description: 'Need visuals for your website, social media, or email campaigns? We create clean, eye-catching designs that look great on any screen and help you connect with your audience online.',
    link: '/services/digital-design',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ) // Monitor
  },
  {
    title: 'Print Design',
    description: `From flyers and posters to brochures and business cards, we design printed materials that grab attention and deliver your message with style. Whether it's for events, marketing, or everyday use, we've got you covered.`,
    link: '/services/print-design',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <line x1="10" x2="8" y1="9" y2="9" />
      </svg>
    ) // File Text
  },
  {
    title: 'Branding',
    description: 'More than just a logo, your brand is how people feel when they think of you. We help you create a cohesive identity that tells your story and connects with your customers.',
    link: '/services/branding',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      </svg>
    ) // Sparkles
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

import { usePathname } from 'next/navigation';

export default function Services() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const containerProps = isHomePage
    ? { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-100px" } }
    : { initial: "hidden", animate: "show" };

  const headerProps = isHomePage
    ? { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="services" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            {...headerProps}
            className="font-display text-4xl md:text-5xl text-gray-800 mb-6"
          >
            Services
          </motion.h2>
          <motion.p
            {...headerProps}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            At The Bridge Creative, we offer a range of design services to help your brand stand out and speak clearly—whether you&apos;re starting fresh or giving things a much-needed refresh.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          {...containerProps}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Link href={service.link} className="block h-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-xl hover:border-gray-200 transition-shadow duration-300">
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          {...(isHomePage ? { whileInView: { opacity: 1 }, viewport: { once: true } } : { animate: { opacity: 1 } })}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 text-gray-600 font-display text-3xl"
        >
          No matter the project, we&apos;re here to bring your ideas to life.
        </motion.p>
      </div>
    </section>
  );
}
