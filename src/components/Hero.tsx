interface HeroProps {
  onChatOpen: () => void;
}

export default function Hero({ onChatOpen }: HeroProps) {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Find Your Dream<br />
          <span className="text-[#C9A84C]">Property Today</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          We connect buyers and renters with premium properties across the US. Let our team guide you home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToServices}
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0A1628] transition-all transform hover:scale-105 w-full sm:w-auto"
          >
            Browse Properties
          </button>
          <button
            onClick={onChatOpen}
            className="px-8 py-4 bg-[#C9A84C] text-white rounded-lg font-semibold hover:bg-[#B89840] transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
          >
            Talk To Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
