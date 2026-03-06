import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function ChatButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);

    const typebotInitScript = document.createElement("script");
    typebotInitScript.type = "module";
    typebotInitScript.innerHTML = `
      import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'
      window.Typebot = Typebot;
      Typebot.initBubble({
        typebot: "real-estate-lead-capture-2xld5zb",
        theme: { 
          button: { backgroundColor: "#C9A84C" },
        },
      });
      // Hide Typebot's default bubble
      setTimeout(() => {
        const tb = document.querySelector('typebot-bubble');
        if (tb) tb.style.display = 'none';
      }, 2000);
    `;
    document.body.append(typebotInitScript);
  }, []);

  const handleClick = () => {
    if (window.Typebot) {
      window.Typebot.open();
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#C9A84C] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#B89840] transition-all flex items-center space-x-3 pulse-animation"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-semibold hidden sm:inline">Chat With Us</span>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
    </button>
  );
}
