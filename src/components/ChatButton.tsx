import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function ChatButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);

    const typebotInitScript = document.createElement("script");
    typebotInitScript.type = "module";
    typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'

Typebot.initBubble({
  typebot: "real-estate-lead-capture-2xld5zb",
  theme: { 
    button: { backgroundColor: "#C9A84C" },
  },
  previewMessage: {
    message: "Looking for a property? I can help! 👋",
    autoShowDelay: 5000,
  },
});

setTimeout(() => {
  const typebotButton = document.querySelector('button[aria-label="Open chat"]') as HTMLButtonElement;
  if (typebotButton) {
    typebotButton.style.display = 'none';
  }
}, 2000);
`;
    document.body.append(typebotInitScript);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes gentle-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .pulse-animation {
        animation: gentle-pulse 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const scripts = document.querySelectorAll('script[type="module"]');
      scripts.forEach(script => {
        if (script.innerHTML.includes('Typebot')) {
          script.remove();
        }
      });
    };
  }, []);

  const handleClick = () => {
    const typebotButton = document.querySelector('button[aria-label="Open chat"]') as HTMLButtonElement;
    if (typebotButton) {
      typebotButton.click();
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-[#C9A84C] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#B89840] transition-all flex items-center space-x-3 group pulse-animation"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-semibold hidden sm:inline">Chat With Us</span>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
    </button>
  );
}
