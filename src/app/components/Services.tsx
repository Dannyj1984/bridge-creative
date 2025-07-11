const services = [
  {
    title: 'Logo Design',
    description: 'Your logo is often the first thing people see, so it needs to make a strong impression. We design logos that are memorable, meaningful, and built to last—perfectly tailored to reflect your brand’s personality',
    icon: '🎨'
  },
  {
    title: 'Digital Design',
    description: 'Need visuals for your website, social media, or email campaigns? We create clean, eye-catching designs that look great on any screen and help you connect with your audience online.',
    icon: '💻'
  },
  {
    title: 'Print Design',
    description: `From flyers and posters to brochures and business cards, we design printed materials that grab attention and deliver your message with style. Whether it's for events, marketing, or everyday use, we’ve got you covered.`,
    icon: '📄'
  },
  {
    title: 'Branding',
    description: 'More than just a logo, your brand is how people feel when they think of you. We help you create a cohesive identity',
    icon: '✨'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
        <h3 className="text-lg font-semibold mb-8 text-center">At The Bridge Creative, we offer a range of design services to help your brand stand out and speak clearly—whether you're starting fresh or giving things a much-needed refresh. Here's what we do best:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-6 bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-sm hover:shadow-2xl hover:cursor-pointer hover:scale-130 hover:z-10 transition-all duration-300 border border-gray-100 relative
                ${index % 4 === 0 ? 'hover:translate-x-[25%]' : ''}
                ${index % 4 === 3 ? 'hover:translate-x-[-25%]' : ''}
                ${index % 4 === 1 ? 'hover:translate-x-[12%]' : ''}
                ${index % 4 === 2 ? 'hover:translate-x-[-12%]' : ''}`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <h3 className="text-lg font-semibold mb-8 text-center mt-6">No matter the project, we’re here to bring your ideas to life with creativity, care, and a bit of northern charm.</h3>
      </div>
    </section>
  );
}
