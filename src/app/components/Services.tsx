const services = [
  {
    title: 'Brand Identity',
    description: 'Creating cohesive visual identities that tell your brand story',
    icon: '🎨'
  },
  {
    title: 'Digital Design',
    description: 'Crafting engaging digital experiences for web and mobile',
    icon: '💻'
  },
  {
    title: 'Print Design',
    description: 'Designing impactful print materials that leave a lasting impression',
    icon: '📄'
  },
  {
    title: 'UI/UX Design',
    description: 'Building intuitive and user-friendly interfaces',
    icon: '✨'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
