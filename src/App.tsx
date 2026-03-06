import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';

function App() {
  const handleChatOpen = () => {
    const typebotButton = document.querySelector('button[aria-label="Open chat"]') as HTMLButtonElement;
    if (typebotButton) {
      typebotButton.click();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onChatOpen={handleChatOpen} />
      <Hero onChatOpen={handleChatOpen} />
      <StatsBar />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CTABanner onChatOpen={handleChatOpen} />
      <Footer />
      <ChatButton />
    </div>
  );
}

export default App;
