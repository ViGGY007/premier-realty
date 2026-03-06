import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function ChatButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [typebotReady, setTypebotReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'
      Typebot.initBubble({
        typebot: "real-estate-lead-capture-2xld5zb",
        theme: { 
          button: { backgroundColor: "#C9A84C" },
        },
      });
      window.typebotReady = true;
    `;
    document.body.appendChild(script);

    // Wait for Typebot to load then hide its bubble
    const interval = setInterval(() => {
      const tb = document.querySelector('typebot-bubble');
      if (tb) {
        (tb as HTMLElement).style.cssText = 'position:fixed !important; bottom:-100px !important; opacity:0 !important; pointer-events:none !important;';
        setTypebotReady(true);
        clearInterval(interval);
      }
    }, 500);

    setTimeout(() => setIsVisible(true), 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    // Find and click Typebot's actual button inside the bubble
    const tb = document.querySelector('typebot-bubble');
    if (tb) {
      // Temporarily show it, click it, hide it again
      (tb as HTMLElement).style.cssText = 'position:fixed !important; bottom:-100px !important; opacity:0 !important;';
      const btn = tb.shadowRoot?.querySelector('button');
      if (btn) btn.click();
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
