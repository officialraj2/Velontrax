import React, { useState, useRef, useEffect } from 'react';
import { CopilotMessage } from '../types/index.ts';

interface CopilotWidgetProps {
  onShowToast: (message: string) => void;
  onOpenBookDemo?: () => void;
}

const BUSINESS_SALES_RESPONSES: Record<string, { text: string; actionLabel?: string; actionType?: 'demo' | 'toast' }> = {
  'roi': {
    text: 'VelontraX typically increases lead conversion by 3.2x while reducing sales operational costs by up to 70%. By answering every WhatsApp, form, and call within 60 seconds 24/7, businesses eliminate 100% of missed-lead leakages.',
    actionLabel: 'Calculate Your ROI / Book Demo',
    actionType: 'demo',
  },
  'whatsapp': {
    text: 'VelontraX integrates with the WhatsApp Business Platform via standard Meta Cloud APIs. Your AI agent chats in natural human language, qualifies buyer budget & timeline, collects documents, and instantly books confirmed calendar slots.',
    actionLabel: 'See Live WhatsApp Demo',
    actionType: 'demo',
  },
  'calling': {
    text: 'Our AI Calling Agent calls inbound leads in under 45 seconds with ultra-realistic human voices in multiple languages. It handles objections, answers FAQs from your knowledge base, and live-transfers hot leads to your sales reps.',
    actionLabel: 'Listen to AI Voice Samples / Book Demo',
    actionType: 'demo',
  },
  'integration': {
    text: 'VelontraX natively integrates in 1-click with WhatsApp, Meta Ads, Google Ads, HubSpot, Salesforce, Zoho, Google Sheets, Zapier, and custom Webhooks. No technical coding required.',
    actionLabel: 'Check Your Integrations',
    actionType: 'demo',
  },
  'pricing': {
    text: 'We offer straightforward pricing with zero per-seat penalties. Every plan includes autonomous AI chat, workflow automations, and CRM sync. We also offer 100% Done-For-You enterprise onboarding!',
    actionLabel: 'View Pricing & Book Consultation',
    actionType: 'demo',
  },
};

export const CopilotWidget: React.FC<CopilotWidgetProps> = ({ onShowToast, onOpenBookDemo }) => {
  // Start minimized so the visitor's screen is completely uncluttered!
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<CopilotMessage[]>([
    {
      id: '1',
      sender: 'copilot',
      text: '👋 Welcome! I am your VelontraX AI Growth Assistant. How can we help automate your leads, WhatsApp, and sales operations today?',
      timestamp: 'Just now',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const newMsg: CopilotMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputVal('');
    setIsTyping(true);

    const query = userText.toLowerCase().trim();
    let match = BUSINESS_SALES_RESPONSES['roi'];

    if (query.includes('whatsapp') || query.includes('chat') || query.includes('message')) {
      match = BUSINESS_SALES_RESPONSES['whatsapp'];
    } else if (query.includes('call') || query.includes('voice') || query.includes('phone')) {
      match = BUSINESS_SALES_RESPONSES['calling'];
    } else if (query.includes('integrat') || query.includes('crm') || query.includes('hubspot') || query.includes('sheet') || query.includes('tools')) {
      match = BUSINESS_SALES_RESPONSES['integration'];
    } else if (query.includes('price') || query.includes('cost') || query.includes('plan') || query.includes('fee')) {
      match = BUSINESS_SALES_RESPONSES['pricing'];
    } else if (query.includes('roi') || query.includes('result') || query.includes('profit') || query.includes('save')) {
      match = BUSINESS_SALES_RESPONSES['roi'];
    } else {
      match = {
        text: `Great question regarding "${userText}". VelontraX is engineered to automate your entire lead-to-conversion pipeline with zero dropped leads and 24/7 autonomous responses. Our specialists can demonstrate this live on your specific business use-case.`,
        actionLabel: 'Schedule 15-Min Live Demo',
        actionType: 'demo',
      };
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'copilot',
          text: match.text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 550);
  };

  return (
    <aside className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="pointer-events-auto w-84 sm:w-96 rounded-2xl bg-[#10172a]/95 backdrop-blur-2xl border border-[#ffc174]/30 shadow-[0_20px_60px_rgba(0,0,0,0.85)] p-4 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#222a3d]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#ffc174] flex items-center justify-center text-[#472a00] font-bold shadow-md">
                <span className="material-symbols-outlined text-[18px]">smart_toy</span>
              </div>
              <div>
                <div className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-white flex items-center gap-1.5">
                  VelontraX Sales Assistant
                  <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-pulse" />
                </div>
                <div className="text-[11px] text-[#ffc174]">Online · 24/7 AI Growth Support</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#a08e7a] hover:text-white p-1.5 rounded-lg hover:bg-[#1e2a42] transition-colors cursor-pointer"
              aria-label="Close Assistant"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <p className="text-xs text-[#d8c3ad] leading-relaxed">
            Discover how VelontraX automates leads, calls, WhatsApp, and CRM to 3x your sales.
          </p>

          {/* High-Intent Quick Chips */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => handleSend('How does WhatsApp & AI Calling automation work?')}
              className="text-[11px] text-[#dae2fd] bg-[#1a233a] hover:bg-[#222f4d] hover:text-[#ffc174] transition-all px-2.5 py-1.5 rounded-lg text-left cursor-pointer border border-[#2d3a54]"
              type="button"
            >
              📞 WhatsApp & AI Calling?
            </button>
            <button
              onClick={() => handleSend('What ROI & sales increase can we expect?')}
              className="text-[11px] text-[#dae2fd] bg-[#1a233a] hover:bg-[#222f4d] hover:text-[#ffc174] transition-all px-2.5 py-1.5 rounded-lg text-left cursor-pointer border border-[#2d3a54]"
              type="button"
            >
              📈 Expected Sales ROI?
            </button>
            <button
              onClick={() => handleSend('Which CRMs and tools do you integrate with?')}
              className="text-[11px] text-[#dae2fd] bg-[#1a233a] hover:bg-[#222f4d] hover:text-[#ffc174] transition-all px-2.5 py-1.5 rounded-lg text-left cursor-pointer border border-[#2d3a54]"
              type="button"
            >
              🛠️ Supported Integrations?
            </button>
          </div>

          {/* Messages Stream */}
          <div
            ref={scrollRef}
            className="flex flex-col gap-2.5 max-h-56 overflow-y-auto pr-1 text-xs"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`p-3 rounded-xl leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#1e2a44] text-[#ffddb8] self-end max-w-[85%] border border-[#ffc174]/25'
                    : 'bg-[#060e20]/90 text-[#dae2fd] self-start max-w-[95%] border border-[#222a3d]'
                }`}
              >
                <div className="text-[10px] text-[#a08e7a] mb-1 flex justify-between font-medium">
                  <span>{m.sender === 'copilot' ? 'VelontraX AI' : 'You'}</span>
                  <span>{m.timestamp}</span>
                </div>
                <div>{m.text}</div>
              </div>
            ))}
            {isTyping && (
              <div className="p-2.5 rounded-lg bg-[#060e20]/90 text-[#ffc174] text-xs self-start flex items-center gap-1.5 border border-[#222a3d]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffc174] animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffc174] animate-bounce [animation-delay:0.15s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffc174] animate-bounce [animation-delay:0.3s]"></span>
              </div>
            )}
          </div>

          {/* Quick 1-Click Book Demo inside Chat */}
          {onOpenBookDemo && (
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBookDemo();
              }}
              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#f59e0b] via-[#ffc174] to-[#f59e0b] text-[#472a00] font-['Plus_Jakarta_Sans'] text-xs font-bold shadow-[0_0_18px_rgba(245,158,11,0.35)] hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span>Book 1-on-1 Software Walkthrough</span>
            </button>
          )}

          {/* Input Row */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputVal);
            }}
            className="flex items-center gap-2 rounded-xl bg-[#060e20] px-3 py-2 border border-[#2d3a54] focus-within:border-[#ffc174] transition-colors"
          >
            <input
              className="w-full bg-transparent text-xs text-[#dae2fd] placeholder:text-[#a08e7a] focus:outline-none"
              placeholder="Ask about AI calling, WhatsApp, ROI..."
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button
              type="submit"
              className="material-symbols-outlined text-[#ffc174] hover:scale-110 transition-transform cursor-pointer text-[20px]"
              aria-label="Send"
            >
              send
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        aria-label="Ask AI Growth Assistant"
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-[#172238] to-[#11192b] hover:from-[#1d2a45] hover:to-[#172238] border border-[#ffc174]/50 backdrop-blur-xl text-white font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold shadow-[0_4px_30px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_36px_rgba(245,158,11,0.55)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer group"
        type="button"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc174] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ffc174]"></span>
        </span>
        <span className="material-symbols-outlined text-[#ffc174] text-[18px] group-hover:rotate-12 transition-transform">
          chat
        </span>
        <span className="font-semibold text-[#ffddb8] group-hover:text-white transition-colors">
          {isOpen ? 'Close Chat' : 'Ask AI Growth Specialist'}
        </span>
      </button>
    </aside>
  );
};

