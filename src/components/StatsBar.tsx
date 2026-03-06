import { Building2, Users, Award, ThumbsUp } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { icon: Building2, value: '500+', label: 'Properties Listed' },
    { icon: Users, value: '1200+', label: 'Happy Clients' },
    { icon: Award, value: '12+', label: 'Years Experience' },
    { icon: ThumbsUp, value: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="bg-[#0A1628] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-10 w-10 text-[#C9A84C] mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
