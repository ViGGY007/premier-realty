import { Home, Key, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();
  const services = [
    {
      icon: Home,
      title: 'Buy a Property',
      description: 'Discover your perfect home from our extensive portfolio of premium properties across prime locations.',
      link: '#',
    },
    {
      icon: Key,
      title: 'Rent a Property',
      description: 'Find flexible rental options that suit your lifestyle with our curated selection of quality rentals.',
      link: '#',
    },
    {
      icon: TrendingUp,
      title: 'Investment Properties',
      description: 'Build wealth with strategic property investments. Our experts guide you to high-yield opportunities.',
      link: '#',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1628] mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're buying, renting, or investing, we provide comprehensive real estate solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/40 backdrop-blur-lg rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="bg-[#C9A84C] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1628] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-[#C9A84C] font-semibold hover:text-[#B89840] transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
