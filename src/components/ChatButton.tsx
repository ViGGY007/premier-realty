import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

declare global {
  interface Window {
    typebotOpen?: () => void;
  }
}

export default function ChatButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'
      Typebot.initPopup({
        typebot: "real-estate-lead-capture-2xld5zb",
        autoShowDelay: 99999999,
      });
      window.typebotOpen = () => Typebot.open();
    `;
    document.body.appendChild(script);
    setTimeout(() => setIsVisible(true), 2500);
  }, []);

  const handleClick = () => {
    if (window.typebotOpen) {
      window.typebotOpen();
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#C9A84C] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#B89840] transition-all flex items-center space-x-3"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-semibold hidden sm:inline">Chat With Us</span>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
    </button>
  );
}
