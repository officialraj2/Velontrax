import React, { useState } from 'react';
import { ScreenType } from '../types/index.ts';

interface DocsScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenBookDemo: () => void;
  onShowToast: (message: string) => void;
}

export const DocsScreen: React.FC<DocsScreenProps> = ({
  onNavigate,
  onOpenBookDemo,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'calling' | 'crm' | 'meta' | 'quickstart'>('whatsapp');

  const INTEGRATIONS = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Business Cloud API Integration',
      badge: 'Popular',
      badgeColor: '#ffc174',
      icon: 'chat',
      summary: '24/7 autonomous lead qualification, document sharing, voice notes, and meeting booking via standard WhatsApp Business Cloud APIs.',
      setupTime: '3 Minutes',
      features: [
        'Instant sub-10 second response to every WhatsApp inquiry',
        'Natural conversational tone trained on your custom FAQs & objection handling',
        'Auto-collects buyer budget, company size, and requirements',
        'Sends calendar booking link and synced reminder sequences',
      ],
      sampleMessage: '“Hi Rahul! Thanks for inquiring about VelontraX AI Automation. I noticed you run an e-commerce brand doing 1,000+ orders/month. Would you like to see how our AI calling agent handles order inquiries 24/7?”',
    },
    {
      id: 'calling',
      name: 'Autonomous AI Voice Calling Agent',
      badge: 'High Conversion',
      badgeColor: '#ffc174',
      icon: 'call',
      summary: 'Calls web leads within 45 seconds of form fill. Converses in natural human voice with zero awkward pauses.',
      setupTime: '5 Minutes',
      features: [
        'Calls leads while they are still on your website looking at your solution',
        'Handles common objections, pricing inquiries, and qualifying criteria',
        'Live warm-transfer to your human sales reps when buyer is hot',
        'Logs call recording, audio transcription, and sentiment analysis into CRM',
      ],
      sampleMessage: '“Hello Devon, this is Sarah from VelontraX. I saw you just requested our Enterprise AI workflow blueprint. Do you have 2 minutes to hear how it plugs into your Salesforce pipeline?”',
    },
    {
      id: 'crm',
      name: 'Bi-Directional CRM & Google Sheets Sync',
      badge: 'Zero Loss',
      badgeColor: '#b4c5ff',
      icon: 'sync_alt',
      summary: 'Seamless live sync with HubSpot, Salesforce, Zoho, Pipedrive, and Google Sheets without manual data entry.',
      setupTime: '2 Minutes',
      features: [
        'Every lead, call recording, and WhatsApp chat history logged automatically',
        'Deal stage updates triggered automatically when prospects qualify',
        'Self-healing webhooks ensure zero lost leads even during server downtimes',
        'Custom fields mapped with 1-click visual drag and drop',
      ],
      sampleMessage: 'HubSpot Deal #4092 automatically updated to “Qualified Demo Scheduled” with meeting slot Friday at 3:00 PM EST.',
    },
    {
      id: 'meta',
      name: 'Meta Ads & Google Ads Lead Booster',
      badge: 'Instant Callback',
      badgeColor: '#ff9800',
      icon: 'campaign',
      summary: 'Bridge Facebook, Instagram, and Google Ads Lead Forms directly to instant AI calling and WhatsApp messaging.',
      setupTime: '4 Minutes',
      features: [
        'Eliminates the 6-hour delay between lead submission and sales team follow-up',
        'Conversion rates increase by up to 391% when contacted within the first minute',
        'Automatically filters out invalid numbers and fake emails',
        'Passes offline conversion values back to Meta Pixel for ad optimization',
      ],
      sampleMessage: 'Lead submitted Facebook Ad form at 11:42:10 AM → AI WhatsApp sent at 11:42:18 AM → Meeting confirmed at 11:43:05 AM.',
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-10 sm:py-14 text-[#dae2fd]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#222a3d]">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172238] border border-[#2d3a52] w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest text-[#ffc174] font-bold">
              Effortless Setup · Zero Coding Required
            </span>
            <span className="text-[#a08e7a] text-xs">· Turnkey Deployment</span>
          </div>
          <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Integrations & Platform Guide
          </h1>
          <p className="text-sm sm:text-base text-[#d8c3ad] max-w-3xl leading-relaxed">
            Connect VelontraX to the business tools and channels you already use every day. Setup takes under 15 minutes, or our engineers can set it up 100% for you.
          </p>
        </div>

        {/* Quick Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBookDemo}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] via-[#ffc174] to-[#f59e0b] text-[#472a00] font-['Plus_Jakarta_Sans'] text-xs font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            <span>Book Turnkey Setup Call</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-12 pt-8">
          {/* 3-Step Simple Onboarding Strip */}
          <div className="rounded-2xl bg-gradient-to-r from-[#11192b] via-[#142036] to-[#11192b] border border-[#24334f] p-6 sm:p-8 shadow-xl">
            <div className="text-xs uppercase tracking-widest text-[#ffc174] font-bold mb-2">
              Simple 3-Step Launch
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-white mb-6">
              How Your AI Business Engine Goes Live in 48 Hours
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-[#091122]/90 border border-[#222f47] flex flex-col gap-3 relative">
                <span className="w-8 h-8 rounded-full bg-[#f59e0b]/20 text-[#ffc174] border border-[#ffc174]/30 flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <h3 className="font-bold text-base text-white">Connect Your Channels</h3>
                <p className="text-xs text-[#d8c3ad] leading-relaxed">
                  Connect your WhatsApp Business Account, Meta Ads, and CRM in 1 click. VelontraX authenticates securely through standard OAuth and Meta Graph APIs.
                </p>
                <div className="text-[11px] text-[#ffc174] font-semibold flex items-center gap-1 mt-auto pt-2">
                  <span className="material-symbols-outlined text-[14px]">timer</span>
                  <span>Setup Time: 3 mins</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#091122]/90 border border-[#222f47] flex flex-col gap-3 relative">
                <span className="w-8 h-8 rounded-full bg-[#ffc174]/20 text-[#ffc174] border border-[#ffc174]/30 flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <h3 className="font-bold text-base text-white">Upload Your Business Rules</h3>
                <p className="text-xs text-[#d8c3ad] leading-relaxed">
                  Provide your website URL, PDF brochures, or pricing sheet. Your AI learns your business offerings, tone of voice, and qualification criteria.
                </p>
                <div className="text-[11px] text-[#ffc174] font-semibold flex items-center gap-1 mt-auto pt-2">
                  <span className="material-symbols-outlined text-[14px]">psychology</span>
                  <span>Self-Trained in 5 mins</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#091122]/90 border border-[#222f47] flex flex-col gap-3 relative">
                <span className="w-8 h-8 rounded-full bg-[#b4c5ff]/20 text-[#b4c5ff] border border-[#b4c5ff]/30 flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <h3 className="font-bold text-base text-white">Turn On Autonomous Pilot</h3>
                <p className="text-xs text-[#d8c3ad] leading-relaxed">
                  Every incoming lead is instantly greeted, qualified, and followed up 24/7. Your calendar fills up with pre-qualified decision makers.
                </p>
                <div className="text-[11px] text-[#b4c5ff] font-semibold flex items-center gap-1 mt-auto pt-2">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span>Ready for 24/7 Sales</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Channel Deep Dives */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                  Supported Turnkey Integrations
                </h3>
                <p className="text-xs sm:text-sm text-[#d8c3ad] mt-1">
                  Click any channel below to explore how VelontraX automates it:
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {INTEGRATIONS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border ${
                    activeTab === item.id
                      ? 'bg-[#1e2a44] border-[#ffc174]/50 text-white shadow-md'
                      : 'bg-[#11192b] border-[#222f47] text-[#d8c3ad] hover:border-[#ffc174]/30'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]" style={{ color: item.badgeColor }}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>

            {/* Active Integration Showcase */}
            {(() => {
              const active = INTEGRATIONS.find((i) => i.id === activeTab) || INTEGRATIONS[0];
              return (
                <div className="rounded-2xl bg-[#0f172a] border border-[#24334f] p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        style={{ backgroundColor: `${active.badgeColor}20`, color: active.badgeColor, border: `1px solid ${active.badgeColor}40` }}
                      >
                        {active.badge}
                      </span>
                      <span className="text-xs text-[#a08e7a]">Setup Time: {active.setupTime}</span>
                    </div>

                    <h4 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-white">
                      {active.name}
                    </h4>

                    <p className="text-sm text-[#d8c3ad] leading-relaxed">
                      {active.summary}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {active.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#dae2fd]">
                          <span className="material-symbols-outlined text-[18px] text-[#ffc174] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-3">
                      <button
                        onClick={onOpenBookDemo}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                        <span>See Live Demo on Your Use Case</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Preview Card */}
                  <div className="lg:col-span-5 rounded-xl bg-[#080e1b] border border-[#222f47] p-5 shadow-inner flex flex-col gap-3">
                    <div className="flex items-center justify-between pb-3 border-b border-[#1b263b] text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffc174]" />
                        <span className="font-bold text-white">Live AI Execution Sample</span>
                      </div>
                      <span className="text-[#a08e7a] text-[10px]">Real-Time Response</span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#141f33] border border-[#2a3854] text-xs text-[#dae2fd] leading-relaxed italic">
                      {active.sampleMessage}
                    </div>

                    <div className="flex items-center justify-between pt-2 text-[11px] text-[#a08e7a]">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-[#ffc174]">speed</span>
                        <span>Latency: 48ms</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#ffc174]">
                        <span className="material-symbols-outlined text-[14px]">lock</span>
                        <span>100% Private & Encrypted</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Bottom Trust & Done-For-You Callout */}
          <div className="rounded-2xl bg-gradient-to-r from-[#172238] via-[#1f2d4a] to-[#172238] border border-[#ffc174]/30 p-8 text-center flex flex-col items-center gap-4 shadow-2xl">
            <span className="px-3.5 py-1 rounded-full bg-[#ffc174]/15 border border-[#ffc174]/30 text-[#ffc174] text-xs font-bold uppercase tracking-wider">
              Zero Technical Work Required
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-white max-w-2xl">
              Prefer Our Certified Engineers to Build & Connect Everything For You?
            </h3>
            <p className="text-sm text-[#d8c3ad] max-w-xl leading-relaxed">
              Every business is unique. Our VIP Onboarding team will build your custom AI Chatbots, setup your WhatsApp API, train your AI voice agents, and connect your CRM with a 100% Done-For-You guarantee.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenBookDemo}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] via-[#ffc174] to-[#f59e0b] text-[#472a00] font-['Plus_Jakarta_Sans'] text-sm font-extrabold shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book Free VIP Onboarding Call</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};
