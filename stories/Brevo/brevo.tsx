import { useEffect } from 'react';

const BrevoScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(d, w, c) {
          w.BrevoConversationsID = '66723cc18548ce7c730523b4';
          w[c] = w[c] || function() {
              (w[c].q = w[c].q || []).push(arguments);
          };
          var s = d.createElement('script');
          s.async = true;
          s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
          if (d.head) d.head.appendChild(s);
      })(document, window, 'BrevoConversations');
    `;
    document.head.appendChild(script);
  }, []);

  return null;
};

export default BrevoScript;
