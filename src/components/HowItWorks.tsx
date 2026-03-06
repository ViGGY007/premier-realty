import { Search, MessageCircle, Home } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      icon: Search,
      title: 'Browse Listings',
      description: 'Explore our handpicked collection of premium properties that match your criteria and budget.',
    },
    {
      icon: MessageCircle,
      title: 'Chat With Our Team',
      description: 'Connect with our experienced agents who understand your needs and provide expert guidance.',
    },
    {
      icon: Home,
      title: 'Move Into Your New Home',
      description: 'Complete the process smoothly with our support every step of the way to your dream property.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1628] mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes finding and securing your perfect property simple and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 bg-[#C9A84C] rounded-full p-6 w-24 h-24 flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="h-12 w-12 text-white" />
                  <div className="absolute -top-3 -right-3 bg-[#0A1628] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0A1628] mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
