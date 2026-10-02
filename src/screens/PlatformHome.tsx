import React, { useState, useEffect } from 'react';
import { ScreenType } from '../types/index.ts';
import { AnimatedPanelStudio } from '../components/AnimatedPanelStudio.tsx';
import { VelontraXOrbitShowcase } from '../components/VelontraXOrbitShowcase.tsx';

interface PlatformHomeProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenBookDemo: () => void;
  onShowToast: (message: string) => void;
}

export const PlatformHome: React.FC<PlatformHomeProps> = ({
  onNavigate,
  onOpenBookDemo,
  onShowToast,
}) => {
  const [sandboxEmail, setSandboxEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic text-to-text animation for hero headline
  const animatedPhrases = [
    'SUPERCHARGED BY AI.',
    'POWERED BY AGENTS.',
    'SCALED AT HIGH VELOCITY.',
    'AUTONOMOUS AT 10X SPEED.',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('SUPERCHARGED BY AI.');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const targetPhrase = animatedPhrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === targetPhrase) {
      // Pause at full word for 2.2 seconds
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === '') {
      // Switch phrase and pause briefly
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % animatedPhrases.length);
      timer = setTimeout(() => {}, 250);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? targetPhrase.substring(0, currentText.length - 1)
            : targetPhrase.substring(0, currentText.length + 1)
        );
        setTypingSpeed(isDeleting ? 40 : 85);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed]);

  // View filter for Problem / Solution Matrix section
  const [matrixView, setMatrixView] = useState<'problem' | 'solution'>('problem');

  const handleSandboxSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sandboxEmail || !sandboxEmail.includes('@')) {
      onShowToast('Please enter a valid work email.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(`VIP Sandbox credentials generated and dispatched to ${sandboxEmail}`);
      setSandboxEmail('');
    }, 600);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Top Ambient Glow Aura */}
      <div className="relative w-full">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] lg:w-[1100px] h-[480px] bg-gradient-to-b from-[#ffc174]/15 via-[#0053db]/15 to-transparent blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-20 right-[-10%] w-[420px] h-[360px] bg-[#f59e0b]/10 blur-[120px] pointer-events-none rounded-full" />

        {/* Hero Header Block */}
        <section className="relative max-w-[1440px] mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-10 flex flex-col items-center text-center">
          {/* High-Tech Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#172238]/95 via-[#1f2d48]/95 to-[#172238]/95 border border-[#ffc174]/50 shadow-[0_0_30px_rgba(255,193,116,0.25)] backdrop-blur-xl mb-6 hover:border-[#ffc174] hover:shadow-[0_0_40px_rgba(255,193,116,0.4)] transition-all duration-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc174] opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f59e0b] shadow-[0_0_8px_#ffc174]" />
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#f59e0b] drop-shadow-[0_0_15px_rgba(255,193,116,0.35)]">
              AI-POWERED ALL-IN-ONE BUSINESS AUTOMATION
            </span>
            <span className="text-[#ffc174]/60 font-mono text-xs">/</span>
            <span className="text-[11px] sm:text-xs font-extrabold text-[#dae2fd] tracking-wide flex items-center gap-2">
              <span className="text-[#ffddb8]">MORE POWER &amp; SPEED</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#ffc174]/20 text-[#ffc174] border border-[#ffc174]/50 font-mono font-bold shadow-[0_0_12px_rgba(255,193,116,0.25)]">94+ MODULES LIVE</span>
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-6xl max-w-5xl tracking-tight text-[#dae2fd] font-extrabold mb-6 leading-tight">
            YOUR BUSINESS.{' '}
            <span className="block sm:inline bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#b4c5ff] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,193,116,0.35)]">
              {currentText}
              <span className="inline-block w-[3px] h-[0.8em] ml-1.5 bg-[#ffc174] animate-pulse align-middle" />
            </span>
          </h1>

          {/* Precise Subtitle */}
          <p className="text-base sm:text-lg lg:text-[19px] text-[#dae2fd]/90 max-w-3xl mb-8 leading-relaxed font-normal">
            <span className="text-white font-semibold tracking-wide">
              From first click to final conversion
            </span>{' '}
            <span className="text-[#ffc174] mx-1 font-mono font-bold">—</span>{' '}
            manage, automate and scale your entire customer journey with{' '}
            <span className="bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#ffb86c] bg-clip-text text-transparent font-bold">
              one intelligent AI platform
            </span>
            .
          </p>

          {/* Dual Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <button
              onClick={onOpenBookDemo}
              className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#f59e0b] via-[#ffc174] to-[#f59e0b] text-[#472a00] font-['Plus_Jakarta_Sans'] text-base font-extrabold shadow-[0_0_30px_rgba(245,158,11,0.45)] hover:shadow-[0_0_55px_rgba(245,158,11,0.75)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer animate-pulse-glow"
              type="button"
            >
              <span className="flex items-center gap-2">
                Start 15-Day Free Trial
                <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </span>
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-8 py-3.5 rounded-xl bg-[#172238]/80 hover:bg-[#1f2d48] border border-[#ffc174]/30 hover:border-[#ffc174]/60 backdrop-blur-xl text-[#dae2fd] hover:text-white font-['Plus_Jakarta_Sans'] text-base font-semibold transition-all duration-200 shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] flex items-center gap-2 cursor-pointer"
              type="button"
            >
              <span className="w-7 h-7 rounded-full bg-[#f59e0b]/20 border border-[#ffc174]/40 flex items-center justify-center text-[#ffc174]">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </span>
              Book 1-on-1 Architecture Demo
            </button>
          </div>

          {/* Quick Proof Indicators */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center font-medium">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1527]/90 border border-[#1e2a44] text-xs sm:text-sm text-[#dae2fd] shadow-sm hover:border-[#ffc174]/40 transition-all">
              <span className="material-symbols-outlined text-[#ffc174] text-[18px]">
                credit_card_off
              </span>
              <span className="font-semibold text-white">No Credit Card</span>
              <span className="text-[#a08e7a]">Required</span>
            </span>

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1527]/90 border border-[#1e2a44] text-xs sm:text-sm text-[#dae2fd] shadow-sm hover:border-[#ffc174]/40 transition-all">
              <span className="material-symbols-outlined text-[#ffc174] text-[18px]">
                support_agent
              </span>
              <span className="font-semibold text-white">Free Setup</span>
              <span className="text-[#a08e7a]">Support</span>
            </span>

            <span
              onClick={onOpenBookDemo}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffc174]/10 border border-[#ffc174]/40 text-xs sm:text-sm text-[#ffc174] shadow-sm hover:bg-[#ffc174]/20 transition-all cursor-pointer group"
            >
              <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-ping" />
              <span className="font-bold text-[#ffddb8] group-hover:text-white transition-colors">
                Live Demo
              </span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </span>
          </div>
        </section>
      </div>

      {/* Live Animated Panel Studio - Interactive Autonomous Workstation */}
      <AnimatedPanelStudio
        onShowToast={onShowToast}
        onOpenBookDemo={onOpenBookDemo}
      />

      {/* SEO Authority & Orbit Ecosystem Section: India's No. 1 AI Automation Software */}
      <section 
        aria-label="India's No 1 AI Automation Software Overview"
        className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 w-full"
      >
        <div className="rounded-2xl sm:rounded-3xl bg-[#0c1427] border border-[#222f47] p-3 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ffc174]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-3xl mb-6 sm:mb-8 px-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#172238]/95 via-[#1f2d48]/95 to-[#172238]/95 border border-[#ffc174]/40 shadow-[0_0_20px_rgba(255,193,116,0.2)] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc174] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b]" />
              </span>
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#f59e0b]">
                INDIA'S NO. 1 AI OPERATING SYSTEM
              </span>
              <span className="text-[#a08e7a]">/</span>
              <span className="text-[#dae2fd] font-bold">NEXT-GEN AUTOMATION</span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              VelontraX: India's No. 1 AI Automation Software &amp; Complete Business CRM
            </h2>
            <p className="text-sm sm:text-base text-[#d8c3ad] mt-3 leading-relaxed">
              Engineered by <strong className="text-white">Velontra Global</strong>, VelontraX is the all-in-one business automation platform built to help Indian digital agencies, real estate builders, e-commerce stores, and high-growth startups capture, qualify, and convert leads at 10x speed.
            </p>
          </div>

          {/* Central VelontraX Orbiting Ecosystem Showcase */}
          <div className="w-full my-6 sm:my-8">
            <VelontraXOrbitShowcase />
          </div>

          {/* 4 Core Pillars for SEO Authority */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-[#080e1c] border border-[#1b263b] hover:border-[#ffc174]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#172238] text-[#ffc174] flex items-center justify-center font-bold text-lg mb-4">
                <span className="material-symbols-outlined text-[22px]">smart_toy</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white mb-2">
                VelontraX AI Automation Software
              </h3>
              <p className="text-xs text-[#a08e7a] leading-relaxed">
                Autonomous 24/7 AI qualification agents, predictive lead scoring (1-100), personalized follow-up generators, and automated CRM deal progression.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#080e1c] border border-[#1b263b] hover:border-[#ffc174]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#172238] text-[#ffc174] flex items-center justify-center font-bold text-lg mb-4">
                <span className="material-symbols-outlined text-[22px]">forum</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white mb-2">
                India's #1 WhatsApp CRM
              </h3>
              <p className="text-xs text-[#a08e7a] leading-relaxed">
                Official Meta Cloud API integration with zero ban risk, pre-approved broadcast campaigns, interactive chatbot flows, and sub-60s ad lead sync.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#080e1c] border border-[#1b263b] hover:border-[#ffc174]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#172238] text-[#3b82f6] flex items-center justify-center font-bold text-lg mb-4">
                <span className="material-symbols-outlined text-[22px]">receipt_long</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white mb-2">
                GST Compliant Invoicing
              </h3>
              <p className="text-xs text-[#a08e7a] leading-relaxed">
                Tailored for Indian taxation laws with CGST, SGST, IGST calculations, recurring monthly retainers, instant UPI payment links, and GSTR export sheets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#080e1c] border border-[#1b263b] hover:border-[#ffc174]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#172238] text-[#f59e0b] flex items-center justify-center font-bold text-lg mb-4">
                <span className="material-symbols-outlined text-[22px]">hub</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white mb-2">
                94+ Built-In Business Features
              </h3>
              <p className="text-xs text-[#a08e7a] leading-relaxed">
                Eliminate 10+ expensive disconnected SaaS tools. Save over ₹16,000 annually with zero per-seat user fees and full team collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Showcase - The Business Operating System */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 w-full my-10">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#10172a]/95 via-[#0c1427]/95 to-[#060e20]/95 border border-[#222a3d] backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden p-4 sm:p-8 lg:p-12 transition-all">
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff7b72]/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-[-10%] w-96 h-96 bg-[#ffc174]/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#38bdf8]/10 blur-[130px] rounded-full pointer-events-none" />

          {/* View Filter: The Problem & The Solution */}
          <div className="flex items-center justify-center pb-6 mb-8 border-b border-[#222a3d]/60">
            <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-[#060e20]/90 border border-[#222a3d]/90 shadow-lg">
              <button
                onClick={() => setMatrixView('problem')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  matrixView === 'problem'
                    ? 'bg-[#ff7b72] text-[#060e20] shadow-[0_0_15px_rgba(255,123,114,0.4)]'
                    : 'text-[#d8c3ad] hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#ff7b72]" />
                The Problem
              </button>
              <button
                onClick={() => setMatrixView('solution')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  matrixView === 'solution'
                    ? 'bg-[#38bdf8] text-[#060e20] shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                    : 'text-[#d8c3ad] hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                The Solution
              </button>
            </div>
          </div>

          {/* ==================== 1. PROBLEM SECTION ==================== */}
          {matrixView === 'problem' && (
            <div className="relative mb-6">
              {/* Problem Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7b72]/15 border border-[#ff7b72]/30 mb-4 shadow-[0_0_20px_rgba(255,123,114,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-[#ff7b72] animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#ff7b72]">
                    PROBLEM SECTION
                  </span>
                  <span className="text-[#a08e7a]">/</span>
                  <span className="text-[11px] text-[#dae2fd]">THE SCALE PARADOX</span>
                </div>

                <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
                  YOUR BUSINESS IS GROWING.{' '}
                  <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#ff7b72] via-[#ffb4ab] to-[#ffc174] drop-shadow-[0_0_30px_rgba(255,123,114,0.3)]">
                    YOUR WORKLOAD SHOULDN'T.
                  </span>
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-[#d8c3ad] font-normal leading-relaxed">
                  As your business grows, so does the complexity.
                </p>
              </div>

              {/* 6 Complexity Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {/* 1. More leads */}
                <div className="group rounded-2xl bg-[#141b2d]/80 border border-[#ff7b72]/20 hover:border-[#ff7b72]/50 p-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,123,114,0.12)] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ff7b72]/15 border border-[#ff7b72]/30 flex items-center justify-center text-[#ff7b72]">
                      <span className="material-symbols-outlined text-[22px]">contact_mail</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#ff7b72]/10 text-[#ff7b72] border border-[#ff7b72]/20">
                      Bottleneck #01
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5 group-hover:text-[#ff7b72] transition-colors">
                    More leads.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a08e7a] leading-relaxed">
                    Higher influx causes response times to plummet. Qualified buyers slip through the cracks without immediate qualification.
                  </p>
                </div>

                {/* 2. More customers */}
                <div className="group rounded-2xl bg-[#141b2d]/80 border border-[#ff7b72]/20 hover:border-[#ff7b72]/50 p-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,123,114,0.12)] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ff7b72]/15 border border-[#ff7b72]/30 flex items-center justify-center text-[#ff7b72]">
                      <span className="material-symbols-outlined text-[22px]">groups</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#ff7b72]/10 text-[#ff7b72] border border-[#ff7b72]/20">
                      Bottleneck #02
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5 group-hover:text-[#ff7b72] transition-colors">
                    More customers.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a08e7a] leading-relaxed">
                    Customer data gets scattered across inboxes. Team members lack relationship history, slowing down service and retention.
                  </p>
                </div>

                {/* 3. More follow-ups */}
                <div className="group rounded-2xl bg-[#141b2d]/80 border border-[#ff7b72]/20 hover:border-[#ff7b72]/50 p-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,123,114,0.12)] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ff7b72]/15 border border-[#ff7b72]/30 flex items-center justify-center text-[#ff7b72]">
                      <span className="material-symbols-outlined text-[22px]">history_toggle_off</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#ff7b72]/10 text-[#ff7b72] border border-[#ff7b72]/20">
                      Bottleneck #03
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5 group-hover:text-[#ff7b72] transition-colors">
                    More follow-ups.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a08e7a] leading-relaxed">
                    Manual reminders and delayed check-ins leave deals stranded. Over 60% of lost revenue occurs because nobody followed up.
                  </p>
                </div>

                {/* 4. More employees */}
                <div className="group rounded-2xl bg-[#141b2d]/80 border border-[#ff7b72]/20 hover:border-[#ff7b72]/50 p-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,123,114,0.12)] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ff7b72]/15 border border-[#ff7b72]/30 flex items-center justify-center text-[#ff7b72]">
                      <span className="material-symbols-outlined text-[22px]">badge</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#ff7b72]/10 text-[#ff7b72] border border-[#ff7b72]/20">
                      Bottleneck #04
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5 group-hover:text-[#ff7b72] transition-colors">
                    More employees.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a08e7a] leading-relaxed">
                    Handoff friction between sales, support, and operations leads to dropped context, misaligned priorities, and duplicate work.
                  </p>
                </div>

                {/* 5. More data */}
                <div className="group rounded-2xl bg-[#141b2d]/80 border border-[#ff7b72]/20 hover:border-[#ff7b72]/50 p-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,123,114,0.12)] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ff7b72]/15 border border-[#ff7b72]/30 flex items-center justify-center text-[#ff7b72]">
                      <span className="material-symbols-outlined text-[22px]">database</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#ff7b72]/10 text-[#ff7b72] border border-[#ff7b72]/20">
                      Bottleneck #05
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5 group-hover:text-[#ff7b72] transition-colors">
                    More data.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a08e7a] leading-relaxed">
                    Critical intelligence trapped in siloed spreadsheets and isolated apps. Decisions get made using stale, incomplete insights.
                  </p>
                </div>

                {/* 6. More daily tasks */}
                <div className="group rounded-2xl bg-[#141b2d]/80 border border-[#ff7b72]/20 hover:border-[#ff7b72]/50 p-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,123,114,0.12)] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ff7b72]/15 border border-[#ff7b72]/30 flex items-center justify-center text-[#ff7b72]">
                      <span className="material-symbols-outlined text-[22px]">pending_actions</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#ff7b72]/10 text-[#ff7b72] border border-[#ff7b72]/20">
                      Bottleneck #06
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5 group-hover:text-[#ff7b72] transition-colors">
                    More daily tasks.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a08e7a] leading-relaxed">
                    Exhausting copy-pasting, updating spreadsheets, and manual typing drains your team's energy away from actual business growth.
                  </p>
                </div>
              </div>

              {/* The Disconnection Bridge -> VelontraX Solution Pivot */}
              <div className="rounded-2xl bg-gradient-to-r from-[#171f33]/90 via-[#1f2942]/90 to-[#171f33]/90 border border-[#ffc174]/30 p-6 sm:p-8 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#ffc174]/10 blur-[100px] pointer-events-none rounded-full" />
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
                  <div className="max-w-2xl text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ffc174] mb-2">
                      <span className="material-symbols-outlined text-[18px]">hub</span>
                      VelontraX brings everything together.
                    </div>
                    <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                      Instead of managing your business through disconnected tools, spreadsheets and manual processes, create{' '}
                      <span className="text-[#ffddb8] font-bold underline decoration-[#ffc174]/60 decoration-2 underline-offset-4">
                        one connected business ecosystem powered by AI.
                      </span>
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <button
                      onClick={() => setMatrixView('solution')}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ffc174] to-[#ffb86c] text-[#060e20] font-bold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,193,116,0.3)] flex items-center gap-2 cursor-pointer"
                    >
                      <span>Explore The Solution</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==================== 2. SOLUTION SECTION ==================== */}
          {matrixView === 'solution' && (
            <div className="relative">
              {/* Solution Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffc174]/15 border border-[#ffc174]/30 mb-4 shadow-[0_0_20px_rgba(255,193,116,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-ping" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffc174]">
                    SOLUTION SECTION
                  </span>
                  <span className="text-[#a08e7a]">/</span>
                  <span className="text-[11px] text-[#dae2fd]">VELONTRAX OS</span>
                </div>

                <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
                  MEET YOUR NEW BUSINESS OPERATING SYSTEM.
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-[#dae2fd]/90 font-normal leading-relaxed">
                  <strong className="text-[#ffc174] font-semibold">VelontraX</strong> combines powerful business tools with AI-powered automation to help your team work smarter.
                </p>
              </div>

              {/* 6 Core Business Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {/* 1. LEAD GENERATION */}
                <div
                  onClick={() => onNavigate('solutions-smart-crm-and-leads')}
                  className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#141d33]/90 to-[#0e1628]/90 border border-[#222a3d] hover:border-[#ffc174]/50 p-6 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(255,193,116,0.15)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#ffc174]/10 blur-2xl rounded-full pointer-events-none group-hover:bg-[#ffc174]/20 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ffc174]/15 border border-[#ffc174]/30 flex items-center justify-center text-[#ffc174] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">radar</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#ffc174]/10 text-[#ffc174] border border-[#ffc174]/20">
                      Module 01
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#ffc174] transition-colors">
                    LEAD GENERATION
                  </h3>

                  <p className="text-sm text-[#d8c3ad] leading-relaxed mb-4">
                    Capture and organize new business opportunities.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#222a3d]/60 text-xs text-[#a08e7a]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#ffc174]">check_circle</span>
                      <span>Omnichannel multi-source lead ingestion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#ffc174]">check_circle</span>
                      <span>Real-time ICP scoring & qualification</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#ffc174] group-hover:translate-x-1 transition-transform">
                    <span>Explore Lead Generation</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* 2. CRM */}
                <div
                  onClick={() => onNavigate('solutions-smart-crm-and-leads')}
                  className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#141d33]/90 to-[#0e1628]/90 border border-[#222a3d] hover:border-[#b4c5ff]/50 p-6 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(180,197,255,0.15)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#b4c5ff]/10 blur-2xl rounded-full pointer-events-none group-hover:bg-[#b4c5ff]/20 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#b4c5ff]/15 border border-[#b4c5ff]/30 flex items-center justify-center text-[#b4c5ff] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">hub</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#b4c5ff]/10 text-[#b4c5ff] border border-[#b4c5ff]/20">
                      Module 02
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#b4c5ff] transition-colors">
                    CRM
                  </h3>

                  <p className="text-sm text-[#d8c3ad] leading-relaxed mb-4">
                    Manage leads, customers and relationships from one place.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#222a3d]/60 text-xs text-[#a08e7a]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#ffc174]">check_circle</span>
                      <span>360° unified customer context timeline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#ffc174]">check_circle</span>
                      <span>Automated logging across calls & emails</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#b4c5ff] group-hover:translate-x-1 transition-transform">
                    <span>Manage Relationships</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* 3. AUTOMATION */}
                <div
                  onClick={() => onNavigate('how-it-works')}
                  className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#141d33]/90 to-[#0e1628]/90 border border-[#222a3d] hover:border-[#38bdf8]/50 p-6 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(56,189,248,0.15)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#38bdf8]/10 blur-2xl rounded-full pointer-events-none group-hover:bg-[#38bdf8]/20 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">bolt</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
                      Module 03
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#38bdf8] transition-colors">
                    AUTOMATION
                  </h3>

                  <p className="text-sm text-[#d8c3ad] leading-relaxed mb-4">
                    Automate repetitive business workflows and follow-ups.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#222a3d]/60 text-xs text-[#a08e7a]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#ffc174]">check_circle</span>
                      <span>Multi-touch smart follow-ups that never miss</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#ffc174]">check_circle</span>
                      <span>Zero human intervention for routine steps</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#38bdf8] group-hover:translate-x-1 transition-transform">
                    <span>Automate Workflows</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* 4. SALES */}
                <div
                  onClick={() => onNavigate('solutions-smart-crm-and-leads')}
                  className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#141d33]/90 to-[#0e1628]/90 border border-[#222a3d] hover:border-[#ffddb8]/50 p-6 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(255,221,184,0.15)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#ffddb8]/10 blur-2xl rounded-full pointer-events-none group-hover:bg-[#ffddb8]/20 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ffddb8]/15 border border-[#ffddb8]/30 flex items-center justify-center text-[#ffddb8] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">trending_up</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#ffddb8]/10 text-[#ffddb8] border border-[#ffddb8]/20">
                      Module 04
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#ffddb8] transition-colors">
                    SALES
                  </h3>

                  <p className="text-sm text-[#d8c3ad] leading-relaxed mb-4">
                    Track opportunities and manage your sales pipeline.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#222a3d]/60 text-xs text-[#a08e7a]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#ffc174]">check_circle</span>
                      <span>Predictive deal close probability scores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#ffc174]">check_circle</span>
                      <span>Visual pipeline stages & velocity tracking</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#ffddb8] group-hover:translate-x-1 transition-transform">
                    <span>Manage Sales Pipeline</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* 5. AI */}
                <div
                  onClick={() => onNavigate('how-it-works')}
                  className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#141d33]/90 to-[#0e1628]/90 border border-[#222a3d] hover:border-[#b4c5ff]/50 p-6 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(180,197,255,0.15)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#b4c5ff]/10 blur-2xl rounded-full pointer-events-none group-hover:bg-[#b4c5ff]/20 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#b4c5ff]/15 border border-[#b4c5ff]/30 flex items-center justify-center text-[#b4c5ff] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">psychology</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#b4c5ff]/10 text-[#b4c5ff] border border-[#b4c5ff]/20">
                      Module 05
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#b4c5ff] transition-colors">
                    AI
                  </h3>

                  <p className="text-sm text-[#d8c3ad] leading-relaxed mb-4">
                    Use intelligent AI assistance to analyze information and execute tasks.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#222a3d]/60 text-xs text-[#a08e7a]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#ffc174]">check_circle</span>
                      <span>Real-time intelligence synthesis & summaries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#ffc174]">check_circle</span>
                      <span>Autonomous execution across connected apps</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#b4c5ff] group-hover:translate-x-1 transition-transform">
                    <span>Deploy AI Assistance</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* 6. OPERATIONS */}
                <div
                  onClick={() => onNavigate('pricing')}
                  className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#141d33]/90 to-[#0e1628]/90 border border-[#222a3d] hover:border-[#ffc174]/50 p-6 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(255,193,116,0.15)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#ffc174]/10 blur-2xl rounded-full pointer-events-none group-hover:bg-[#ffc174]/20 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ffc174]/15 border border-[#ffc174]/30 flex items-center justify-center text-[#ffc174] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">grid_view</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#ffc174]/10 text-[#ffc174] border border-[#ffc174]/20">
                      Module 06
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#ffc174] transition-colors">
                    OPERATIONS
                  </h3>

                  <p className="text-sm text-[#d8c3ad] leading-relaxed mb-4">
                    Bring your everyday business processes into one centralized platform.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#222a3d]/60 text-xs text-[#a08e7a]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#ffc174]">check_circle</span>
                      <span>Single glass command for team & pipelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#ffc174]">check_circle</span>
                      <span>Zero SaaS fragmentation or manual handoffs</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#ffc174] group-hover:translate-x-1 transition-transform">
                    <span>Centralize Operations</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>

              {/* Bottom Operating System Conversion Callout */}
              <div className="rounded-2xl bg-gradient-to-r from-[#060e20] via-[#10172a] to-[#060e20] border border-[#222a3d] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl font-bold text-white mb-1">
                    Ready to unify your business operations?
                  </h4>
                  <p className="text-sm text-[#d8c3ad]">
                    Experience how VelontraX replaces 12+ fragmented tools with one AI-powered operating system.
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-wrap justify-center">
                  <button
                    onClick={onOpenBookDemo}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ffc174] via-[#ffb86c] to-[#ffddb8] text-[#060e20] font-bold text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(255,193,116,0.35)] flex items-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    <span>Book OS Demo</span>
                  </button>
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-5 py-3 rounded-xl bg-[#141b2d] border border-[#2d3449] hover:border-[#ffc174]/40 text-[#d8c3ad] hover:text-white font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
                    <span>View Live Studio</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Compatible Integrations & Trust Ecosystem */}
      <section className="w-full bg-[#060e20] py-14 my-4 border-y border-[#222a3d]/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#172238]/90 via-[#1f2d48]/90 to-[#172238]/90 border border-[#ffc174]/40 shadow-[0_0_20px_rgba(255,193,116,0.2)] mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc174] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b]" />
            </span>
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#f59e0b]">
              ENTERPRISE INTEGRATIONS ECOSYSTEM
            </span>
            <span className="text-[#a08e7a]">/</span>
            <span className="text-[11px] font-bold text-[#dae2fd]">
              ZERO-CODE SYNC
            </span>
          </div>

          <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Plugs Directly Into The Tools You Already Rely On
          </h2>
          <p className="text-xs sm:text-sm text-[#d8c3ad] max-w-2xl mb-8">
            Zero migration headaches. VelontraX connects in minutes via standard enterprise APIs and secure webhook connectors:
          </p>

          {/* Continuous Infinite Marquee Slider with Edge Fade Masks */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left and Right Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#060e20] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#060e20] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee gap-4 py-2">
              {[
                { name: 'WhatsApp Business', icon: 'chat', color: '#25d366' },
                { name: 'Meta / IG Ads', icon: 'campaign', color: '#1877f2' },
                { name: 'Google Ads', icon: 'ads_click', color: '#ea4335' },
                { name: 'HubSpot CRM', icon: 'hub', color: '#ff7a59' },
                { name: 'Salesforce', icon: 'cloud', color: '#00a1e0' },
                { name: 'Zoho CRM', icon: 'view_quilt', color: '#e53935' },
                { name: 'Google Sheets', icon: 'table_chart', color: '#0f9d58' },
                { name: 'Zapier & Webhooks', icon: 'bolt', color: '#ff4f00' },
                // Duplicate for infinite seamless scroll
                { name: 'WhatsApp Business', icon: 'chat', color: '#25d366' },
                { name: 'Meta / IG Ads', icon: 'campaign', color: '#1877f2' },
                { name: 'Google Ads', icon: 'ads_click', color: '#ea4335' },
                { name: 'HubSpot CRM', icon: 'hub', color: '#ff7a59' },
                { name: 'Salesforce', icon: 'cloud', color: '#00a1e0' },
                { name: 'Zoho CRM', icon: 'view_quilt', color: '#e53935' },
                { name: 'Google Sheets', icon: 'table_chart', color: '#0f9d58' },
                { name: 'Zapier & Webhooks', icon: 'bolt', color: '#ff4f00' },
              ].map((tool, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center w-40 sm:w-44 p-3.5 rounded-2xl bg-[#0f172a]/90 border border-[#222f47] hover:border-[#ffc174]/70 transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:-translate-y-1 group shrink-0 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-115 shadow-inner"
                    style={{ backgroundColor: `${tool.color}15`, border: `1px solid ${tool.color}35` }}
                  >
                    <span className="material-symbols-outlined text-[24px]" style={{ color: tool.color }}>
                      {tool.icon}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#dae2fd] text-center leading-tight group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                  <span className="text-[10px] text-[#ffc174] mt-1 flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffc174] animate-pulse" />
                    <span>Instant Sync</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Advantage Comparison */}
          <div className="w-full mt-12 rounded-2xl bg-[#0b1326] border border-[#24334f] p-6 sm:p-8 text-left shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1c2944]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#ffc174] font-bold">
                  The Commercial Advantage
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-white mt-1">
                  Why High-Growth Businesses Replace Manual Workflows With VelontraX
                </h3>
              </div>
              <button
                onClick={onOpenBookDemo}
                className="self-start sm:self-auto px-4 py-2 rounded-xl bg-[#ffc174]/15 hover:bg-[#ffc174]/25 border border-[#ffc174]/40 text-[#ffc174] font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Calculate Your Business Savings</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-[#080e1c] border border-[#1b263b] hover:border-[#ffc174]/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-300 flex flex-col gap-2 shadow-lg">
                <span className="text-xs text-[#a08e7a] font-medium">Lead Response Time</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-[#ffb4ab] line-through">4 - 6 Hours</span>
                  <span className="text-xl font-extrabold text-[#ffc174]">&lt; 45 Secs</span>
                </div>
                <p className="text-[11px] text-[#d8c3ad] leading-relaxed">
                  Leads contacted in under 1 minute convert at 391% higher close rates before competitors wake up.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#080e1c] border border-[#1b263b] hover:border-[#ffc174]/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-300 flex flex-col gap-2 shadow-lg">
                <span className="text-xs text-[#a08e7a] font-medium">Operating Availability</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-[#ffb4ab] line-through">8 Hrs / 5 Days</span>
                  <span className="text-xl font-extrabold text-[#ffc174]">24/7/365</span>
                </div>
                <p className="text-[11px] text-[#d8c3ad] leading-relaxed">
                  Never miss late-night ad clicks, weekend WhatsApp messages, or overseas customer inquiries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#080e1c] border border-[#1b263b] hover:border-[#ffc174]/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-300 flex flex-col gap-2 shadow-lg">
                <span className="text-xs text-[#a08e7a] font-medium">Cost Per Qualified Lead</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-[#ffb4ab] line-through">$180 / Lead</span>
                  <span className="text-xl font-extrabold text-[#ffc174]">$18 / Lead</span>
                </div>
                <p className="text-[11px] text-[#d8c3ad] leading-relaxed">
                  Automate repetitive preliminary qualification questions so human reps only speak to buyers with budget.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#080e1c] border border-[#1b263b] hover:border-[#ffc174]/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-300 flex flex-col gap-2 shadow-lg">
                <span className="text-xs text-[#a08e7a] font-medium">Human Data Entry Error</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-[#ffb4ab] line-through">35% Dropped</span>
                  <span className="text-xl font-extrabold text-[#b4c5ff]">0% Loss SLA</span>
                </div>
                <p className="text-[11px] text-[#d8c3ad] leading-relaxed">
                  Every call transcript, summary, and action item is logged instantly into your CRM with zero human effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Bottom CTA: High-Converting Business Transformation Banner */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 w-full">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1b253b] via-[#121b2d] to-[#0a1120] border border-[#ffc174]/40 p-8 sm:p-14 shadow-[0_20px_70px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-[radial-gradient(#ffc174_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#ffc174]/20 via-[#f59e0b]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-4xl flex flex-col items-center gap-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffc174]/15 border border-[#ffc174]/40 text-[#ffc174] text-xs uppercase font-extrabold tracking-widest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-ping" />
              <span>Ready For 24/7 Autonomous Sales?</span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tight leading-tight max-w-3xl">
              Do You Want To Deploy This AI Automation System For Your Business?
            </h2>

            <p className="text-base sm:text-lg text-[#d8c3ad] max-w-2xl leading-relaxed">
              Never let another high-intent lead slip away. VelontraX AI Chatbots, AI Voice Calling Agents, and automated workflows run your WhatsApp, Meta Ads, and CRM 24/7 — so your sales team only speaks to pre-qualified buyers ready to purchase.
            </p>

            {/* Value Proof Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl my-2 text-left">
              <div className="p-3.5 rounded-xl bg-[#070d1a]/85 border border-[#222f47] flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-[#ffc174]/15 text-[#ffc174] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                </span>
                <div>
                  <div className="text-xs font-bold text-white">&lt; 45s Response</div>
                  <div className="text-[11px] text-[#a08e7a]">Instant WhatsApp & Calls</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070d1a]/85 border border-[#222f47] flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-[#ffc174]/15 text-[#ffc174] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
                </span>
                <div>
                  <div className="text-xs font-bold text-white">100% Done-For-You</div>
                  <div className="text-[11px] text-[#a08e7a]">Free Setup By Specialists</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070d1a]/85 border border-[#222f47] flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-[#b4c5ff]/15 text-[#b4c5ff] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">trending_up</span>
                </span>
                <div>
                  <div className="text-xs font-bold text-white">3.2x Lead Conversion</div>
                  <div className="text-[11px] text-[#a08e7a]">Zero Dropped Deals</div>
                </div>
              </div>
            </div>

            {/* High-Intent Book Demo Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!sandboxEmail || !sandboxEmail.includes('@')) {
                  onShowToast('Please enter your work email to book a demo.');
                  return;
                }
                setIsSubmitting(true);
                setTimeout(() => {
                  setIsSubmitting(false);
                  onShowToast(`Demo request confirmed for ${sandboxEmail}. Our AI Specialist will connect shortly!`);
                  setSandboxEmail('');
                  onOpenBookDemo();
                }, 400);
              }}
              className="w-full max-w-lg flex flex-col sm:flex-row items-center gap-2.5 mt-2"
            >
              <input
                className="w-full px-4 py-3.5 rounded-xl bg-[#070d1a] border border-[#2d3a54] text-[#dae2fd] placeholder:text-[#a08e7a] text-sm focus:outline-none focus:border-[#ffc174] transition-colors"
                placeholder="Enter your work email or company name..."
                type="email"
                required
                value={sandboxEmail}
                onChange={(e) => setSandboxEmail(e.target.value)}
              />
              <button
                className="w-full sm:w-auto whitespace-nowrap px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#f59e0b] via-[#ffc174] to-[#f59e0b] text-[#472a00] font-['Plus_Jakarta_Sans'] text-sm font-extrabold shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                type="submit"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Scheduling...' : 'Book Free 1-on-1 Demo'}</span>
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </button>
            </form>

            {/* Direct 1-Click Action Alternative */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-[#a08e7a]">Or schedule a calendar meeting directly:</span>
              <button
                onClick={onOpenBookDemo}
                className="text-xs font-bold text-[#ffc174] hover:text-white underline underline-offset-4 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Select Calendar Time Slot Directly</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </button>
            </div>

            <div className="flex items-center gap-5 text-[#a08e7a] text-xs pt-2 flex-wrap justify-center font-medium">
              <span className="flex items-center gap-1.5 text-[#dae2fd]">
                <span className="material-symbols-outlined text-[16px] text-[#ffc174]">check_circle</span>
                <span>No Credit Card Required</span>
              </span>
              <span className="flex items-center gap-1.5 text-[#dae2fd]">
                <span className="material-symbols-outlined text-[16px] text-[#ffc174]">check_circle</span>
                <span>15-Day Free Live Trial</span>
              </span>
              <span className="flex items-center gap-1.5 text-[#dae2fd]">
                <span className="material-symbols-outlined text-[16px] text-[#ffc174]">check_circle</span>
                <span>Dedicated Integration Support</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
