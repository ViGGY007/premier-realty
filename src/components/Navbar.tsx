import { useState } from 'react';
import { Menu, X, Home, Building2, Briefcase, Star, Phone } from 'lucide-react';

interface NavbarProps {
  onChatOpen: () => void;
}

export default function Navbar({ onChatOpen }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Building2 className="h-8 w-8 text-[#C9A84C]" />
            <span className="text-2xl font-bold text-[#0A1628]">Premier Realty</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="flex items-center space-x-1 text-[#0A1628] hover:text-[#C9A84C] transition-colors font-medium">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </button>
            <button onClick={() => scrollToSection('services')} className="flex items-center space-x-1 text-[#0A1628] hover:text-[#C9A84C] transition-colors font-medium">
              <Building2 className="h-4 w-4" />
              <span>Properties</span>
            </button>
            <button onClick={() => scrollToSection('services')} className="flex items-center space-x-1 text-[#0A1628] hover:text-[#C9A84C] transition-colors font-medium">
              <Briefcase className="h-4 w-4" />
              <span>Services</span>
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="flex items-center space-x-1 text-[#0A1628] hover:text-[#C9A84C] transition-colors font-medium">
              <Star className="h-4 w-4" />
              <span>Testimonials</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="flex items-center space-x-1 text-[#0A1628] hover:text-[#C9A84C] transition-colors font-medium">
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </button>
            <button
              onClick={onChatOpen}
              className="bg-[#C9A84C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B89840] transition-all transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#0A1628] hover:text-[#C9A84C] transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 text-[#0A1628] hover:text-[#C9A84C] transition-colors font-medium w-full">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </button>
            <button onClick={() => scrollToSection('services')} className="flex items-center space-x-2 text-[#0A1628] hover:text-[#C9A84C] transition-colors font-medium w-full">
              <Building2 className="h-5 w-5" />
              <span>Properties</span>
            </button>
            <button onClick={() => scrollToSection('services')} className="flex items-center space-x-2 text-[#0A1628] hover:text-[#C9A84C] transition-colors font-medium w-full">
              <Briefcase className="h-5 w-5" />
              <span>Services</span>
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="flex items-center space-x-2 text-[#0A1628] hover:text-[#C9A84C] transition-colors font-medium w-full">
              <Star className="h-5 w-5" />
              <span>Testimonials</span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="flex items-center space-x-2 text-[#0A1628] hover:text-[#C9A84C] transition-colors font-medium w-full">
              <Phone className="h-5 w-5" />
              <span>Contact</span>
            </button>
            <button
              onClick={onChatOpen}
              className="bg-[#C9A84C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B89840] transition-all w-full shadow-lg"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
