import { useEffect } from 'react';

export default function ChatButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'
      Typebot.initBubble({
        typebot: "real-estate-lead-capture-2xld5zb",
        previewMessage: {
          message: "Looking for a property? I can help! 👋",
          autoShowDelay: 5000,
        },
        theme: { 
          button: { backgroundColor: "#C9A84C" },
        },
      });
    `;
    document.body.appendChild(script);
  }, []);

  return null;
}
