interface CTABannerProps {
  onChatOpen: () => void;
}

export default function CTABanner({ onChatOpen }: CTABannerProps) {
  return (
    <section className="py-20 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#C9A84C] mb-6">
          Ready To Find Your Perfect Property?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Let's start the conversation today. Our team is ready to help you find the home of your dreams.
        </p>
        <button
          onClick={onChatOpen}
          className="px-10 py-4 bg-[#C9A84C] text-white rounded-lg font-semibold text-lg hover:bg-[#B89840] transition-all transform hover:scale-105 shadow-2xl"
        >
          Start The Conversation
        </button>
      </div>
    </section>
  );
}
