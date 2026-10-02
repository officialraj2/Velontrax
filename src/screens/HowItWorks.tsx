import React, { useState, useEffect } from 'react';
import { ScreenType } from '../types/index.ts';

interface HowItWorksProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenBookDemo: () => void;
  onShowToast: (message: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onNavigate,
  onOpenBookDemo,
  onShowToast,
}) => {
  // Live AI Flow Animation step state
  const [activeFlowStep, setActiveFlowStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through the 7 AI Flow nodes
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveFlowStep((prev) => (prev + 1) % 7);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Active Journey Step focus
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  // FAQ Accordion State (first open by default)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does VelontraX software work?',
      a: 'VelontraX connects your entire sales, marketing, and operations pipeline into one unified autonomous AI system. The instant a prospect interacts with your Meta Ads, Google Ads, website forms, or WhatsApp channel, VelontraX auto-greets them in under 45 seconds, qualifies their requirements via intelligent conversational AI, creates pipeline deals in your CRM, and autonomously coordinates meeting bookings or payment links.',
    },
    {
      q: 'What facilities and core features are included in the platform?',
      a: 'VelontraX provides an all-in-one ecosystem with 94+ built-in features, including Official Meta Cloud WhatsApp API CRM, Autonomous AI Voice Calling Agents, Sub-45s Inbound Ad Lead Sync, 24/7 Smart Multi-Channel Chatbots, Automated Follow-up Cadences, GST-Compliant Invoicing & Quotations, UPI & Payment Gateway Integration, Multi-Role Team Permissions, and Real-Time Revenue Analytics.',
    },
    {
      q: 'How does VelontraX achieve full end-to-end business automation?',
      a: 'VelontraX eliminates repetitive manual data entry and pipeline delays entirely. From initial lead capture and instant WhatsApp outreach, to customer qualification, automated brochure delivery, demo appointment calendar scheduling, payment reminders, and GST invoice generation — every phase runs 24/7 on self-executing workflows so your team only closes warm, qualified deals.',
    },
    {
      q: 'Does using VelontraX require coding or technical knowledge?',
      a: 'Not at all. VelontraX is a 100% No-Code, visual platform designed for business owners and sales teams. Our dedicated solutions team provides complete Done-For-You onboarding — configuring your official WhatsApp API, CRM pipelines, and custom automation workflows so you can start operating from day one without writing a single line of code.',
    },
    {
      q: 'Is there any risk of WhatsApp account ban or compliance issues?',
      a: 'Zero ban risk. VelontraX integrates directly with the official Meta Cloud API as an authorized partner. Unlike unofficial third-party scrapers or bulk-messaging hacks, your business operates with verified business profile credentials, approved message templates, and official green-tick compliance standards.',
    },
    {
      q: 'What sales conversion increase and response speed can we expect?',
      a: 'Over 78% of B2B and high-ticket clients purchase from the vendor that responds first. By reducing inbound lead response times to under 45 seconds and executing persistent multi-touch follow-ups, VelontraX reduces lead drop-off by up to 80% and typically delivers a 3.2x increase in overall sales conversions.',
    },
    {
      q: 'Which industries and business models benefit most from VelontraX?',
      a: 'VelontraX is specifically tailored for Digital Marketing Agencies, Real Estate Developers & Brokerages, E-commerce & D2C Brands, Coaching & EdTech Institutes, Healthcare Clinics, and high-growth B2B Service Providers seeking to automate client acquisition and retention.',
    },
    {
      q: 'Can we import our existing customer database and leads?',
      a: 'Yes, absolutely. You can seamlessly import your existing contact lists, customer records, and historical leads via 1-click CSV or Excel file upload. Our technical onboarding specialists also assist with free, secure database migration.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pb-12 pt-8 sm:pt-14">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[360px] bg-gradient-to-b from-[#ffc174]/15 via-[#0053db]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-[-10%] w-[420px] h-[360px] bg-[#f59e0b]/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-6 relative z-10">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#222a3d]/80 border border-[#2d3449] backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-ping" />
            <span className="text-[11px] uppercase tracking-widest text-[#ffc174] font-bold">
              HOW IT WORKS
            </span>
            <span className="text-[#a08e7a]">/</span>
            <span className="text-[11px] text-[#dae2fd]">CONTINUOUS GROWTH ENGINE</span>
          </div>

          {/* Master Headline */}
          <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-5xl lg:text-6xl text-[#dae2fd] font-extrabold tracking-tight max-w-5xl leading-tight">
            FROM BUSINESS CHALLENGES TO{' '}
            <span className="block sm:inline bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#b4c5ff] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,193,116,0.35)]">
              AI-POWERED GROWTH.
            </span>
          </h1>

          {/* Punchy Tagline */}
          <div className="text-lg sm:text-2xl text-[#ffddb8] font-bold tracking-tight max-w-3xl">
            Set it up once. Let VelontraX work continuously.
          </div>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg text-[#d8c3ad] max-w-3xl leading-relaxed font-normal">
            VelontraX connects your leads, conversations, marketing, sales and business workflows into one intelligent ecosystem — so your team can spend less time managing tasks and more time growing the business.
          </p>

          {/* 4 Proof Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-2">
            <div className="bg-[#171f33]/70 border border-[#2d3449] backdrop-blur-md p-3.5 rounded-xl flex items-center gap-3 shadow-md text-left">
              <div className="w-9 h-9 rounded-lg bg-[#ffc174]/15 text-[#ffc174] flex items-center justify-center border border-[#ffc174]/30 shrink-0">
                <span className="material-symbols-outlined text-[20px]">bolt</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Set It Up Once</span>
                <span className="text-[11px] text-[#a08e7a]">&lt; 15 min onboarding</span>
              </div>
            </div>

            <div className="bg-[#171f33]/70 border border-[#2d3449] backdrop-blur-md p-3.5 rounded-xl flex items-center gap-3 shadow-md text-left">
              <div className="w-9 h-9 rounded-lg bg-[#ffc174]/15 text-[#ffc174] flex items-center justify-center border border-[#ffc174]/30 shrink-0">
                <span className="material-symbols-outlined text-[20px]">sync</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">24/7 Autopilot</span>
                <span className="text-[11px] text-[#a08e7a]">Continuous execution</span>
              </div>
            </div>

            <div className="bg-[#171f33]/70 border border-[#2d3449] backdrop-blur-md p-3.5 rounded-xl flex items-center gap-3 shadow-md text-left">
              <div className="w-9 h-9 rounded-lg bg-[#b4c5ff]/15 text-[#b4c5ff] flex items-center justify-center border border-[#b4c5ff]/30 shrink-0">
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Zero Repetitive Chats</span>
                <span className="text-[11px] text-[#a08e7a]">Intelligent responses</span>
              </div>
            </div>

            <div className="bg-[#171f33]/70 border border-[#2d3449] backdrop-blur-md p-3.5 rounded-xl flex items-center gap-3 shadow-md text-left">
              <div className="w-9 h-9 rounded-lg bg-[#ffddb8]/15 text-[#ffddb8] flex items-center justify-center border border-[#ffddb8]/30 shrink-0">
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">One Connected OS</span>
                <span className="text-[11px] text-[#a08e7a]">Unified business engine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1. VISUAL AI FLOW ANIMATION: Lead → Chatbot → Calling → Automation → CRM → Sales → Analytics */}
      {/* ========================================================================= */}
      <section className="w-full py-12 bg-gradient-to-b from-[#0b1329] via-[#10172a] to-[#0b1329] border-y border-[#222a3d]/80 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col gap-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc174]/10 border border-[#ffc174]/30 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-ping" />
                <span className="text-[11px] font-bold text-[#ffc174] uppercase tracking-wider font-mono">
                  LIVE AI FLOW ANIMATION
                </span>
              </div>
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-white font-bold tracking-tight">
                Autonomous Business Telemetry Stream
              </h2>
              <p className="text-sm text-[#d8c3ad] max-w-2xl mt-1">
                Watch how an inbound prospect signal flows automatically through your entire company stack in seconds:
              </p>
            </div>

            {/* Animation Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="px-3 py-1.5 rounded-lg bg-[#171f33] border border-[#2d3449] text-xs font-semibold text-[#d8c3ad] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px] text-[#ffc174]">
                  {isPaused ? 'play_arrow' : 'pause'}
                </span>
                <span>{isPaused ? 'Resume Stream' : 'Pause Flow'}</span>
              </button>
              <span className="text-[11px] font-mono text-[#a08e7a] px-2.5 py-1 rounded bg-[#060e20] border border-[#222a3d]">
                NODE {activeFlowStep + 1} OF 7
              </span>
            </div>
          </div>

          {/* Flow Track */}
          <div className="relative rounded-2xl bg-[#060e20]/90 border border-[#222a3d] p-4 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            {/* The 7 Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
              {[
                { id: 'lead', title: 'Lead', icon: 'radar', color: '#ffc174', tag: '01' },
                { id: 'chatbot', title: 'AI Chatbot', icon: 'chat', color: '#b4c5ff', tag: '02' },
                { id: 'calling', title: 'AI Calling', icon: 'call', color: '#f59e0b', tag: '03' },
                { id: 'automation', title: 'Automation', icon: 'bolt', color: '#ffddb8', tag: '04' },
                { id: 'crm', title: 'CRM', icon: 'hub', color: '#e2cc73', tag: '05' },
                { id: 'sales', title: 'Sales', icon: 'trending_up', color: '#ff7b72', tag: '06' },
                { id: 'analytics', title: 'Analytics', icon: 'insights', color: '#b4c5ff', tag: '07' },
              ].map((node, idx) => {
                const isActive = activeFlowStep === idx;
                return (
                  <div
                    key={node.id}
                    onClick={() => {
                      setActiveFlowStep(idx);
                      setIsPaused(true);
                    }}
                    className={`relative rounded-xl p-3 sm:p-4 border transition-all duration-300 flex flex-col items-center text-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-b from-[#1c263d] to-[#121a2c] border-[#ffc174] shadow-[0_0_30px_rgba(255,193,116,0.3)] scale-105 z-20'
                        : 'bg-[#0f172a]/60 border-[#222a3d] hover:border-[#2d3449] hover:bg-[#141d33]'
                    }`}
                  >
                    {/* Node Tag */}
                    <div className="flex items-center justify-between w-full text-[10px] font-mono text-[#a08e7a]">
                      <span>{node.tag}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-ping" />
                      )}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform ${
                        isActive ? 'scale-110' : ''
                      }`}
                      style={{
                        backgroundColor: `${node.color}15`,
                        border: `1px solid ${node.color}40`,
                        color: node.color,
                      }}
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {node.icon}
                      </span>
                    </div>

                    {/* Title */}
                    <span className={`text-xs font-bold font-['Plus_Jakarta_Sans'] ${
                      isActive ? 'text-white' : 'text-[#d8c3ad]'
                    }`}>
                      {node.title}
                    </span>

                    {/* Active Underline Pill */}
                    {isActive && (
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#ffc174]/20 text-[#ffc174] border border-[#ffc174]/30">
                        ACTIVE STEP
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Active Node Detail Card Inspector */}
            <div className="mt-5 pt-4 border-t border-[#222a3d]/80 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#ffc174]/10 border border-[#ffc174]/30 flex items-center justify-center text-[#ffc174] shrink-0">
                  <span className="material-symbols-outlined text-[22px]">smart_toy</span>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#a08e7a] font-mono">
                    Currently Executing Stage
                  </div>
                  <div className="text-sm font-bold text-white">
                    {[
                      'Lead Capture & Inbound Signal Detection',
                      'AI Chatbot Multi-turn Ingestion',
                      'Autonomous AI Voice Calling Agent',
                      '24/7 Event-Driven Workflow Automation',
                      'Smart CRM Synchronizer & Profile Enrichment',
                      'Predictive Sales Pipeline & Account Hand-off',
                      'Full-Funnel Analytics & Continuous Optimization',
                    ][activeFlowStep]}
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#d8c3ad] leading-relaxed">
                {[
                  'Captures prospects across web forms, WhatsApp, Google Ads, and inbound webhooks in sub-20ms.',
                  'Gives instant, personalized multi-lingual answers, capturing intent without repetitive canned scripts.',
                  'Dials hot prospects autonomously with human-grade latency to qualify budget, timeline, and need.',
                  'Automatically enqueues calendar invites, task assignments, and multi-channel follow-up cadences.',
                  'Zero data entry. Logs interaction transcripts, lead scores, and customer context directly into CRM.',
                  'Alerts executives with full deal briefing dossier and calculated 90%+ close probability forecasts.',
                  'Feeds closed deal outcomes back into the neural pipeline, scaling what delivers actual revenue.',
                ][activeFlowStep]}
              </div>

              <div className="flex items-center justify-end gap-3 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-[#141b2d] border border-[#2d3449] text-[#ffc174] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc174] animate-pulse" />
                  LATENCY: {18 + activeFlowStep * 14}ms
                </span>
                <button
                  onClick={onOpenBookDemo}
                  className="px-4 py-1.5 rounded-lg bg-[#ffc174] hover:bg-[#ffb86c] text-[#060e20] font-bold font-['Plus_Jakarta_Sans'] transition-all cursor-pointer shadow-[0_0_15px_rgba(255,193,116,0.3)]"
                >
                  Test In Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. HORIZONTAL 4-STEP JOURNEY: CONNECT → CREATE AI → AUTOMATE → GROW */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-[#060e20] relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col gap-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc174]/10 border border-[#ffc174]/30">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffc174]">
                THE 4-STEP BLUEPRINT
              </span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tight">
              CONNECT → CREATE AI → AUTOMATE → GROW
            </h2>
            <p className="text-sm sm:text-base text-[#d8c3ad] leading-relaxed">
              From business challenges to an autonomous operating system. Explore each step of the journey:
            </p>
          </div>

          {/* 4 Horizontal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* STEP 01: CONNECT YOUR BUSINESS */}
            <div
              onClick={() => setActiveJourneyStep(0)}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                activeJourneyStep === 0
                  ? 'bg-gradient-to-b from-[#182238] to-[#0f172a] border-[#ffc174] shadow-[0_15px_40px_rgba(255,193,116,0.15)] ring-1 ring-[#ffc174]/40'
                  : 'bg-[#10172a]/70 border-[#222a3d] hover:border-[#ffc174]/40 hover:bg-[#141e33]'
              }`}
            >
              <div className="flex flex-col gap-4 relative z-10">
                {/* Step Tag & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest font-mono font-bold text-[#ffc174]">
                    01 — CONNECT
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#ffc174]/15 border border-[#ffc174]/30 flex items-center justify-center text-[#ffc174]">
                    <span className="material-symbols-outlined text-[24px]">hub</span>
                  </div>
                </div>

                {/* Subtitle & Title */}
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#ffddb8] mb-1">
                    BRING EVERYTHING TOGETHER.
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl font-bold text-white leading-tight">
                    CONNECT YOUR BUSINESS
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#d8c3ad] leading-relaxed">
                  Connect the tools, channels and business processes you already use.
                </p>

                {/* Channel Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#222a3d]/80">
                  {['CRM', 'WhatsApp', 'Leads', 'Funnels', 'Marketing', 'Sales', 'Customer Comm'].map((channel) => (
                    <span
                      key={channel}
                      className="px-2 py-0.5 rounded-md bg-[#060e20] text-[#a08e7a] text-[10px] font-mono border border-[#222a3d]"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Takeaway */}
              <div className="mt-6 pt-3 border-t border-[#222a3d]/80 text-[11px] text-[#ffddb8] font-medium flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#ffc174]">check_circle</span>
                <span>One unified business data platform.</span>
              </div>
            </div>

            {/* STEP 02: BUILD YOUR AI */}
            <div
              onClick={() => setActiveJourneyStep(1)}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                activeJourneyStep === 1
                  ? 'bg-gradient-to-b from-[#182238] to-[#0f172a] border-[#b4c5ff] shadow-[0_15px_40px_rgba(180,197,255,0.15)] ring-1 ring-[#b4c5ff]/40'
                  : 'bg-[#10172a]/70 border-[#222a3d] hover:border-[#b4c5ff]/40 hover:bg-[#141e33]'
              }`}
            >
              <div className="flex flex-col gap-4 relative z-10">
                {/* Step Tag & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest font-mono font-bold text-[#b4c5ff]">
                    02 — CREATE AI
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#b4c5ff]/15 border border-[#b4c5ff]/30 flex items-center justify-center text-[#b4c5ff]">
                    <span className="material-symbols-outlined text-[24px]">psychology</span>
                  </div>
                </div>

                {/* Subtitle & Title */}
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#b4c5ff] mb-1">
                    CREATE AI THAT WORKS FOR YOU.
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl font-bold text-white leading-tight">
                    BUILD YOUR AI
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#d8c3ad] leading-relaxed">
                  Build intelligent AI Chatbots, AI Calling Agents and automated workflows designed around your business.
                </p>

                {/* Teach Your AI List */}
                <div className="flex flex-col gap-1.5 pt-2 border-t border-[#222a3d]/80 text-xs text-[#a08e7a]">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#dae2fd] font-semibold">
                    Teach your AI:
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="text-[#ffc174]">✓</span>
                    <span>What to say & how to respond.</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="text-[#ffc174]">✓</span>
                    <span>What action to take.</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="text-[#ffc174]">✓</span>
                    <span>When to follow up & hand over.</span>
                  </div>
                </div>
              </div>

              {/* Bottom Takeaway */}
              <div className="mt-6 pt-3 border-t border-[#222a3d]/80 text-[11px] text-[#b4c5ff] font-medium flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#ffc174]">check_circle</span>
                <span>No repetitive chats. Zero missed leads.</span>
              </div>
            </div>

            {/* STEP 03: AUTOMATE YOUR WORK */}
            <div
              onClick={() => setActiveJourneyStep(2)}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                activeJourneyStep === 2
                  ? 'bg-gradient-to-b from-[#182238] to-[#0f172a] border-[#ffc174] shadow-[0_15px_40px_rgba(255,193,116,0.15)] ring-1 ring-[#ffc174]/40'
                  : 'bg-[#10172a]/70 border-[#222a3d] hover:border-[#ffc174]/40 hover:bg-[#141e33]'
              }`}
            >
              <div className="flex flex-col gap-4 relative z-10">
                {/* Step Tag & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest font-mono font-bold text-[#ffc174]">
                    03 — AUTOMATE
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#ffc174]/15 border border-[#ffc174]/30 flex items-center justify-center text-[#ffc174]">
                    <span className="material-symbols-outlined text-[24px]">bolt</span>
                  </div>
                </div>

                {/* Subtitle & Title */}
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#ffc174] mb-1">
                    LET AI HANDLE THE REPETITIVE.
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl font-bold text-white leading-tight">
                    AUTOMATE YOUR WORK
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#d8c3ad] leading-relaxed">
                  Once your workflows are connected, VelontraX automates the processes consuming your team's time.
                </p>

                {/* Pipeline Flow Strip */}
                <div className="pt-2 border-t border-[#222a3d]/80">
                  <div className="p-2.5 rounded-lg bg-[#060e20] border border-[#222a3d] text-[10px] font-mono text-[#dae2fd] space-y-1">
                    <div className="flex items-center justify-between text-[#ffc174] font-bold">
                      <span>New Lead</span>
                      <span>→ Instant Response</span>
                    </div>
                    <div className="flex items-center justify-between text-[#ffc174]">
                      <span>AI Conversation</span>
                      <span>→ Qualification</span>
                    </div>
                    <div className="flex items-center justify-between text-[#b4c5ff]">
                      <span>Follow-Up</span>
                      <span>→ Sales → Won</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Takeaway */}
              <div className="mt-6 pt-3 border-t border-[#222a3d]/80 text-[11px] text-[#ffc174] font-medium flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#ffc174]">check_circle</span>
                <span>Moves forward even when team is busy.</span>
              </div>
            </div>

            {/* STEP 04: TRACK. OPTIMIZE. GROW. */}
            <div
              onClick={() => setActiveJourneyStep(3)}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                activeJourneyStep === 3
                  ? 'bg-gradient-to-b from-[#182238] to-[#0f172a] border-[#ff7b72] shadow-[0_15px_40px_rgba(255,123,114,0.15)] ring-1 ring-[#ff7b72]/40'
                  : 'bg-[#10172a]/70 border-[#222a3d] hover:border-[#ff7b72]/40 hover:bg-[#141e33]'
              }`}
            >
              <div className="flex flex-col gap-4 relative z-10">
                {/* Step Tag & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest font-mono font-bold text-[#ff7b72]">
                    04 — GROW
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#ff7b72]/15 border border-[#ff7b72]/30 flex items-center justify-center text-[#ff7b72]">
                    <span className="material-symbols-outlined text-[24px]">trending_up</span>
                  </div>
                </div>

                {/* Subtitle & Title */}
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#ff7b72] mb-1">
                    TURN EVERY INTERACTION INTO INSIGHT.
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl font-bold text-white leading-tight">
                    TRACK. OPTIMIZE. GROW.
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#d8c3ad] leading-relaxed">
                  Monitor leads, conversations, campaigns, sales and automation from one dashboard.
                </p>

                {/* Action Points */}
                <div className="flex flex-col gap-1 pt-2 border-t border-[#222a3d]/80 text-xs text-[#a08e7a]">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="text-[#ffc174]">✓</span>
                    <span>See what's working.</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="text-[#ffc174]">✓</span>
                    <span>Find what needs attention.</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="text-[#ffc174]">✓</span>
                    <span>Optimize your workflows.</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="text-[#ffc174]">✓</span>
                    <span>Scale what delivers results.</span>
                  </div>
                </div>
              </div>

              {/* Bottom Takeaway */}
              <div className="mt-6 pt-3 border-t border-[#222a3d]/80 text-[11px] text-[#ff7b72] font-medium flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#ffc174]">check_circle</span>
                <span>Continuous data-driven growth.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE VELONTRAX LOOP (Autonomous Continuous Growth Engine) */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-gradient-to-b from-[#060e20] via-[#10172a] to-[#060e20] border-t border-[#222a3d]/70 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-[#ffc174]/5 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="rounded-3xl bg-gradient-to-b from-[#131b2e]/95 to-[#0b1329]/95 border border-[#ffc174]/30 p-6 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.7)] flex flex-col items-center text-center gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffc174]/10 border border-[#ffc174]/30">
              <span className="material-symbols-outlined text-[16px] text-[#ffc174]">all_inclusive</span>
              <span className="text-xs uppercase font-bold tracking-widest text-[#ffc174]">
                THE VELONTRAX LOOP
              </span>
            </div>

            {/* Loop Sequence Strip */}
            <div className="w-full max-w-4xl py-3 px-4 rounded-2xl bg-[#060e20]/90 border border-[#222a3d] flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs sm:text-sm font-bold">
              <span className="text-white hover:text-[#ffc174] transition-colors">CONNECT</span>
              <span className="text-[#ffc174]">→</span>
              <span className="text-white hover:text-[#b4c5ff] transition-colors">CREATE</span>
              <span className="text-[#ffc174]">→</span>
              <span className="text-white hover:text-[#ffc174] transition-colors">AUTOMATE</span>
              <span className="text-[#ffc174]">→</span>
              <span className="text-white hover:text-[#ffddb8] transition-colors">OPTIMIZE</span>
              <span className="text-[#ffc174]">→</span>
              <span className="text-[#ffc174] font-black">GROW</span>
            </div>

            {/* 5-Step Vertical Connector Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 w-full max-w-3xl text-center">
              <div className="p-3 rounded-xl bg-[#141b2d] border border-[#222a3d] text-xs font-semibold text-[#dae2fd]">
                1. Connect your business
              </div>
              <div className="p-3 rounded-xl bg-[#141b2d] border border-[#222a3d] text-xs font-semibold text-[#dae2fd]">
                2. Create your AI
              </div>
              <div className="p-3 rounded-xl bg-[#141b2d] border border-[#222a3d] text-xs font-semibold text-[#dae2fd]">
                3. Automate workflows
              </div>
              <div className="p-3 rounded-xl bg-[#141b2d] border border-[#222a3d] text-xs font-semibold text-[#dae2fd]">
                4. Optimize with data
              </div>
              <div className="p-3 rounded-xl bg-[#141b2d] border border-[#ffc174]/40 text-xs font-bold text-[#ffc174]">
                5. Scale your growth
              </div>
            </div>

            {/* And The Loop Keeps Working Box */}
            <div className="max-w-3xl flex flex-col gap-4 pt-4 border-t border-[#222a3d]/80">
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                AND THE LOOP KEEPS WORKING.
              </h3>
              <div className="text-base sm:text-lg font-bold text-[#ffddb8]">
                YOUR BUSINESS DOESN'T STOP WHEN YOU LOG OUT.
              </div>

              {/* 4 Continuously Moving Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060e20]/80 border border-[#222a3d]">
                  <span className="material-symbols-outlined text-[18px] text-[#ffc174]">check_circle</span>
                  <span className="text-xs sm:text-sm text-[#d8c3ad]">Your AI can keep conversations moving.</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060e20]/80 border border-[#222a3d]">
                  <span className="material-symbols-outlined text-[18px] text-[#ffc174]">check_circle</span>
                  <span className="text-xs sm:text-sm text-[#d8c3ad]">Your workflows can keep leads flowing.</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060e20]/80 border border-[#222a3d]">
                  <span className="material-symbols-outlined text-[18px] text-[#ffc174]">check_circle</span>
                  <span className="text-xs sm:text-sm text-[#d8c3ad]">Your automation can keep tasks moving.</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060e20]/80 border border-[#222a3d]">
                  <span className="material-symbols-outlined text-[18px] text-[#ffc174]">check_circle</span>
                  <span className="text-xs sm:text-sm text-[#d8c3ad]">Your team can focus on what matters most.</span>
                </div>
              </div>

              {/* Core Manifesto */}
              <div className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-black text-white pt-4 tracking-tight">
                ONE PLATFORM. ONE INTELLIGENT BUSINESS ENGINE.
              </div>

              {/* Big CTA Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenBookDemo}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#ffc174] via-[#ffb86c] to-[#ffddb8] text-[#060e20] font-extrabold text-base hover:brightness-110 transition-all shadow-[0_0_35px_rgba(255,193,116,0.4)] flex items-center gap-2.5 mx-auto cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                  <span>START BUILDING YOUR AI BUSINESS</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Frequently Asked Questions */}
      <section className="w-full py-16 bg-[#131b2e]/40 border-t border-[#222a3d]/50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col gap-10">
          <div className="flex flex-col items-center text-center gap-1 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#172238] border border-[#2d3a52] text-[#ffc174] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-pulse" />
              <span>Platform Guidance & Automation Details</span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl lg:text-4xl text-[#dae2fd] font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#d8c3ad]">
              Everything you need to know about how VelontraX operates, its core facilities, and full business automation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto w-full flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#171f33]/70 border border-[#2d3449] rounded-xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-[#dae2fd] font-['Plus_Jakarta_Sans'] text-sm font-bold hover:text-[#ffc174] transition-colors cursor-pointer"
                    type="button"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`material-symbols-outlined text-[#a08e7a] transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#ffc174]' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-[#d8c3ad] leading-relaxed border-t border-[#222a3d]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready For Automation Banner */}
      <section className="w-full py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#172238] via-[#10172a] to-[#172238] border border-[#ffc174]/30 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="flex flex-col gap-1 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#ffc174] font-bold">
                Ready For Business Automation
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-white font-bold">
                Automate Your Entire Sales & Operations Today
              </h2>
              <p className="text-sm text-[#d8c3ad]">
                Book a 1-on-1 personalized live demo and start your 15-day free trial. Our specialists will configure your WhatsApp API, CRM, and automated lead workflows.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenBookDemo}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] font-['Plus_Jakarta_Sans'] text-sm font-extrabold shadow-[0_0_24px_rgba(245,158,11,0.45)] hover:shadow-[0_0_36px_rgba(245,158,11,0.7)] hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                Book Free Live Demo
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="px-6 py-3 rounded-xl bg-[#1e293b] hover:bg-[#283548] text-[#dae2fd] font-['Plus_Jakarta_Sans'] text-sm font-semibold transition-all cursor-pointer whitespace-nowrap border border-[#334155]"
              >
                View Plans &amp; Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
