import { Building2, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#0A1628] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-[#C9A84C]" />
              <span className="text-2xl font-bold">Premier Realty</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner in finding exceptional properties. We're committed to turning your real estate dreams into reality with professionalism and care.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#C9A84C] mt-1 flex-shrink-0" />
                <span className="text-gray-400">2450 Broadway Street, Suite 600<br />New York, NY 10024</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#C9A84C] flex-shrink-0" />
                <a href="tel:+12125551234" className="text-gray-400 hover:text-[#C9A84C] transition-colors">
                  (212) 555-1234
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#C9A84C] flex-shrink-0" />
                <a href="mailto:info@premierrealty.com" className="text-gray-400 hover:text-[#C9A84C] transition-colors">
                  info@premierrealty.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#C9A84C]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-[#C9A84C] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-[#C9A84C] transition-colors">
                  Properties
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-[#C9A84C] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-[#C9A84C] transition-colors">
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#C9A84C]">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Buy a Property</li>
              <li className="text-gray-400">Rent a Property</li>
              <li className="text-gray-400">Investment Properties</li>
              <li className="text-gray-400">Property Management</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Premier Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
