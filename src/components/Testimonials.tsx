import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Miami, FL',
      rating: 5,
      quote: 'Premier Realty made buying our first home incredibly smooth. Their team was professional, responsive, and truly cared about finding us the perfect property within our budget.',
    },
    {
      name: 'Michael Chen',
      location: 'Austin, TX',
      rating: 5,
      quote: 'After working with three other agencies, Premier Realty finally helped me find the investment property I was looking for. Their market knowledge is unmatched.',
    },
    {
      name: 'Emily Rodriguez',
      location: 'Seattle, WA',
      rating: 5,
      quote: 'From our first consultation to getting the keys, the entire process was seamless. The team went above and beyond to negotiate the best deal for us. Highly recommended!',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1628] mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real clients have to say about their experience with Premier Realty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <Quote className="h-10 w-10 text-[#C9A84C] mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#C9A84C] fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="border-t border-gray-200 pt-6">
                <div className="font-bold text-[#0A1628] text-lg">{testimonial.name}</div>
                <div className="text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
