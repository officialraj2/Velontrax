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
  const [typingSpeed, setTypingSpeed] = useState(65);

  useEffect(() => {
    const targetPhrase = animatedPhrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === targetPhrase) {
      // Pause at full word for 1.7 seconds
      timer = setTimeout(() => setIsDeleting(true), 1700);
    } else if (isDeleting && currentText === '') {
      // Switch phrase and pause briefly
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % animatedPhrases.length);
      timer = setTimeout(() => {}, 120);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? targetPhrase.substring(0, currentText.length - 1)
            : targetPhrase.substring(0, currentText.length + 1)
        );
        setTypingSpeed(isDeleting ? 25 : 55);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed]);

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
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] lg:w-[1100px] h-[480px] bg-[radial-gradient(ellipse_at_center,rgba(255,193,116,0.14)_0%,rgba(0,83,219,0.1)_45%,transparent_75%)] pointer-events-none rounded-full" />
        <div className="absolute top-20 right-[-10%] w-[420px] h-[360px] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)] pointer-events-none rounded-full" />

        {/* Hero Header Block */}
        <section className="relative max-w-[1440px] mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-10 flex flex-col items-center text-center">
          {/* Sleek Enterprise Pill Badge - Single Line with Radiant Glowing Stroke */}
          <button
            onClick={onOpenBookDemo}
            type="button"
            className="group relative inline-flex items-center mb-6 cursor-pointer max-w-[calc(100vw-2rem)] outline-none focus:ring-2 focus:ring-[#ffc174]/50 rounded-full"
            aria-label="View VelontraX 94+ AI Business Modules"
          >
            {/* Attractive Radiant Gradient Stroke / Glow Line */}
            <span className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#ffddb8]/60 via-[#ffc174] to-[#f59e0b]/80 opacity-70 blur-[2px] group-hover:opacity-100 group-hover:blur-[5px] transition-all duration-300" />

            {/* Inner Pill Container */}
            <span className="relative inline-flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#060c18]/95 border border-[#ffc174]/60 shadow-[0_0_20px_rgba(255,193,116,0.25)] backdrop-blur-xl max-w-full overflow-hidden">
              {/* Pulsing Live Core Dot */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc174] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b] shadow-[0_0_8px_#ffc174]" />
              </span>

              {/* Main Headline Label */}
              <span className="text-[10px] sm:text-xs font-bold tracking-tight sm:tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#f59e0b] truncate max-w-[130px] min-[360px]:max-w-[180px] sm:max-w-none">
                AI-Powered Automation Suite
              </span>

              {/* Elegant Dot Divider */}
              <span className="w-1 h-1 rounded-full bg-[#ffc174]/60 shrink-0" />

              {/* Live Count Badge (Selected Element span:nth-of-type(4)) */}
              <span className="text-[9.5px] sm:text-[11px] font-mono font-bold text-[#dae2fd] tracking-tight shrink-0 whitespace-nowrap">
                <span className="hidden min-[380px]:inline">94+ Modules Live</span>
                <span className="min-[380px]:hidden">94+ Live</span>
              </span>

              {/* Sleek Arrow */}
              <span className="material-symbols-outlined text-[12px] sm:text-[14px] text-[#ffc174] group-hover:translate-x-0.5 transition-transform duration-200 shrink-0">
                arrow_forward
              </span>
            </span>
          </button>

          {/* Hero Headline - Flexible 3-line wrap on mobile, 2-line lock on desktop */}
          <h1 className="font-['Plus_Jakarta_Sans'] text-[24px] min-[360px]:text-[28px] min-[400px]:text-[32px] sm:text-5xl lg:text-6xl max-w-5xl tracking-tight font-extrabold mb-6 leading-[1.2] sm:leading-[1.14] flex flex-col items-center justify-center select-none text-center px-1">
            {/* Line 1 */}
            <span className="block text-[#dae2fd] whitespace-nowrap">
              YOUR BUSINESS.
            </span>
            {/* Line 2 (and 3 on mobile) with dynamic wrap and stable minimum height */}
            <span className="inline-block max-w-full text-center whitespace-normal sm:whitespace-nowrap bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#b4c5ff] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,193,116,0.35)] min-h-[2.4em] sm:min-h-[1.2em]">
              <span className="inline break-words">{currentText || '\u00A0'}</span>
              <span className="inline-block w-[2.5px] sm:w-[3.5px] h-[0.75em] sm:h-[0.8em] ml-1 sm:ml-2 bg-[#ffc174] animate-pulse align-middle shrink-0" />
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

      {/* SEO Authority & Orbit Ecosystem Section: No. 1 AI Automation Software */}
      <section 
        aria-label="No. 1 AI Automation Software Overview"
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
                NO. 1 AI OPERATING SYSTEM
              </span>
              <span className="text-[#a08e7a]">/</span>
              <span className="text-[#dae2fd] font-bold">NEXT-GEN AUTOMATION</span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              VelontraX:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#f59e0b] drop-shadow-[0_0_25px_rgba(255,193,116,0.35)]">
                No. 1 AI Automation Software
              </span>{' '}
              &amp; Complete Business CRM
            </h2>
            <p className="text-sm sm:text-base text-[#d8c3ad] mt-3 leading-relaxed">
              Engineered by <strong className="text-white">Velontra Global</strong>, VelontraX is the all-in-one business automation platform built to help digital agencies, modern businesses, e-commerce stores, and high-growth startups capture, qualify, and convert leads at 10x speed.
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
                #1 WhatsApp CRM
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
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 w-full mt-6 mb-8 sm:mt-8 sm:mb-10">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#10172a]/95 via-[#0c1427]/95 to-[#060e20]/95 border border-[#222a3d] backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden p-4 sm:p-6 lg:p-8 transition-all">
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff7b72]/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-[-10%] w-96 h-96 bg-[#ffc174]/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#38bdf8]/10 blur-[130px] rounded-full pointer-events-none" />

          {/* Top Storyline Navigation Bar: Problem ➔ Solution Flow */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-6 border-b border-[#222a3d]/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ffc174] shadow-[0_0_8px_#ffc174]" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                BUSINESS TRANSFORMATION JOURNEY:
              </span>
              <span className="text-xs text-[#a08e7a] hidden sm:inline">
                Identify Growth Problems ➔ Deploy The AI Solution
              </span>
            </div>

            {/* Quick Navigation Jump Anchors */}
            <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-[#060e20]/90 border border-[#222a3d]/90 shadow-lg">
              <button
                onClick={() => {
                  const el = document.getElementById('problems-breakdown');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 sm:px-3.5 py-1 rounded-lg text-xs font-bold text-[#ff7b72] hover:bg-[#ff7b72]/15 border border-[#ff7b72]/30 transition-all flex items-center gap-1.5 cursor-pointer"
                type="button"
              >
                <span className="w-2 h-2 rounded-full bg-[#ff7b72] animate-pulse" />
                <span>1. The Problems Faced</span>
              </button>
              <span className="text-[#ffc174] font-bold text-xs px-0.5">➔</span>
              <button
                onClick={() => {
                  const el = document.getElementById('solution-breakdown');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 sm:px-3.5 py-1 rounded-lg text-xs font-bold text-[#10b981] hover:bg-[#10b981]/15 border border-[#10b981]/40 shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all flex items-center gap-1.5 cursor-pointer"
                type="button"
              >
                <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse" />
                <span>2. The VelontraX Solution</span>
              </button>
            </div>
          </div>

          {/* ==================== 1. PROBLEM SECTION (SHOWN FIRST) ==================== */}
          <div id="problems-breakdown" className="relative mb-6 scroll-mt-24">
            {/* Round Badge Highlighting The Problem & What Solution Follows */}
            <div className="text-center max-w-3xl mx-auto mb-6">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-1.5 rounded-full bg-gradient-to-r from-[#ef4444]/20 via-[#161220]/95 to-[#10b981]/20 border border-[#ffc174]/40 mb-3 shadow-[0_0_22px_rgba(239,68,68,0.22)] backdrop-blur-xl">
                {/* Problem Highlight */}
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#ff6b6b] drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                  <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-ping" />
                  <span>THE PROBLEM: 6 GROWTH BOTTLENECKS</span>
                </span>
                
                <span className="text-[#ffc174] font-extrabold text-xs">➔</span>
                
                {/* Solution Highlight - In vibrant green glow */}
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
                  <span>THE SOLUTION: VELONTRAX AI OS</span>
                </span>
              </div>

              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2 leading-tight">
                YOUR BUSINESS IS GROWING.{' '}
                <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] via-[#ff9b90] to-[#ffc174] drop-shadow-[0_0_30px_rgba(239,68,68,0.35)]">
                  BUT BOTTLENECKS SLOW YOU DOWN.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#d8c3ad] font-normal leading-relaxed">
                Aapke business me growth ke liye jo-jo bottlenecks face karni padti hain — 6 critical roadblocks every scaling company hits:
              </p>
            </div>

            {/* 6 Complexity Cards Grid - Red Glowing Problem Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 mb-6">
                {/* 1. More leads - Red Glow */}
                <div className="group relative rounded-2xl bg-gradient-to-b from-[#1b1016]/95 via-[#15101c]/90 to-[#100d17]/95 border border-[#ef4444]/40 hover:border-[#ef4444] p-5 transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.18)] hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/15 blur-2xl rounded-full pointer-events-none group-hover:bg-[#ef4444]/25 transition-all duration-300" />
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#ef4444]/15 border border-[#ef4444]/40 flex items-center justify-center text-[#ff6b6b] shadow-[0_0_15px_rgba(239,68,68,0.3)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[22px]">contact_mail</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#ef4444]/15 text-[#ff8787] border border-[#ef4444]/35 shadow-[0_0_10px_rgba(239,68,68,0.25)]">
                      Bottleneck #01
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5 group-hover:text-[#ff6b6b] transition-colors relative z-10">
                    More leads.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e0b8b8] leading-relaxed relative z-10">
                    Higher influx causes response times to plummet. Qualified buyers slip through the cracks without immediate qualification.
                  </p>
                </div>

                {/* 2. More customers - Red Glow */}
                <div className="group relative rounded-2xl bg-gradient-to-b from-[#1b1016]/95 via-[#15101c]/90 to-[#100d17]/95 border border-[#ef4444]/40 hover:border-[#ef4444] p-5 transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.18)] hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/15 blur-2xl rounded-full pointer-events-none group-hover:bg-[#ef4444]/25 transition-all duration-300" />
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#ef4444]/15 border border-[#ef4444]/40 flex items-center justify-center text-[#ff6b6b] shadow-[0_0_15px_rgba(239,68,68,0.3)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[22px]">groups</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#ef4444]/15 text-[#ff8787] border border-[#ef4444]/35 shadow-[0_0_10px_rgba(239,68,68,0.25)]">
                      Bottleneck #02
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5 group-hover:text-[#ff6b6b] transition-colors relative z-10">
                    More customers.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e0b8b8] leading-relaxed relative z-10">
                    Customer data gets scattered across inboxes. Team members lack relationship history, slowing down service and retention.
                  </p>
                </div>

                {/* 3. More follow-ups - Red Glow */}
                <div className="group relative rounded-2xl bg-gradient-to-b from-[#1b1016]/95 via-[#15101c]/90 to-[#100d17]/95 border border-[#ef4444]/40 hover:border-[#ef4444] p-5 transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.18)] hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/15 blur-2xl rounded-full pointer-events-none group-hover:bg-[#ef4444]/25 transition-all duration-300" />
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#ef4444]/15 border border-[#ef4444]/40 flex items-center justify-center text-[#ff6b6b] shadow-[0_0_15px_rgba(239,68,68,0.3)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[22px]">history_toggle_off</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#ef4444]/15 text-[#ff8787] border border-[#ef4444]/35 shadow-[0_0_10px_rgba(239,68,68,0.25)]">
                      Bottleneck #03
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5 group-hover:text-[#ff6b6b] transition-colors relative z-10">
                    More follow-ups.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e0b8b8] leading-relaxed relative z-10">
                    Manual reminders and delayed check-ins leave deals stranded. Over 60% of lost revenue occurs because nobody followed up.
                  </p>
                </div>

                {/* 4. More employees - Red Glow */}
                <div className="group relative rounded-2xl bg-gradient-to-b from-[#1b1016]/95 via-[#15101c]/90 to-[#100d17]/95 border border-[#ef4444]/40 hover:border-[#ef4444] p-5 transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.18)] hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/15 blur-2xl rounded-full pointer-events-none group-hover:bg-[#ef4444]/25 transition-all duration-300" />
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#ef4444]/15 border border-[#ef4444]/40 flex items-center justify-center text-[#ff6b6b] shadow-[0_0_15px_rgba(239,68,68,0.3)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[22px]">badge</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#ef4444]/15 text-[#ff8787] border border-[#ef4444]/35 shadow-[0_0_10px_rgba(239,68,68,0.25)]">
                      Bottleneck #04
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5 group-hover:text-[#ff6b6b] transition-colors relative z-10">
                    More employees.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e0b8b8] leading-relaxed relative z-10">
                    Handoff friction between sales, support, and operations leads to dropped context, misaligned priorities, and duplicate work.
                  </p>
                </div>

                {/* 5. More data - Red Glow */}
                <div className="group relative rounded-2xl bg-gradient-to-b from-[#1b1016]/95 via-[#15101c]/90 to-[#100d17]/95 border border-[#ef4444]/40 hover:border-[#ef4444] p-5 transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.18)] hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/15 blur-2xl rounded-full pointer-events-none group-hover:bg-[#ef4444]/25 transition-all duration-300" />
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#ef4444]/15 border border-[#ef4444]/40 flex items-center justify-center text-[#ff6b6b] shadow-[0_0_15px_rgba(239,68,68,0.3)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[22px]">database</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#ef4444]/15 text-[#ff8787] border border-[#ef4444]/35 shadow-[0_0_10px_rgba(239,68,68,0.25)]">
                      Bottleneck #05
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5 group-hover:text-[#ff6b6b] transition-colors relative z-10">
                    More data.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e0b8b8] leading-relaxed relative z-10">
                    Critical intelligence trapped in siloed spreadsheets and isolated apps. Decisions get made using stale, incomplete insights.
                  </p>
                </div>

                {/* 6. More daily tasks - Red Glow */}
                <div className="group relative rounded-2xl bg-gradient-to-b from-[#1b1016]/95 via-[#15101c]/90 to-[#100d17]/95 border border-[#ef4444]/40 hover:border-[#ef4444] p-5 transition-all duration-300 shadow-[0_0_25px_rgba(239,68,68,0.18)] hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/15 blur-2xl rounded-full pointer-events-none group-hover:bg-[#ef4444]/25 transition-all duration-300" />
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#ef4444]/15 border border-[#ef4444]/40 flex items-center justify-center text-[#ff6b6b] shadow-[0_0_15px_rgba(239,68,68,0.3)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[22px]">pending_actions</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#ef4444]/15 text-[#ff8787] border border-[#ef4444]/35 shadow-[0_0_10px_rgba(239,68,68,0.25)]">
                      Bottleneck #06
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5 group-hover:text-[#ff6b6b] transition-colors relative z-10">
                    More daily tasks.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e0b8b8] leading-relaxed relative z-10">
                    Exhausting copy-pasting, updating spreadsheets, and manual typing drains your team's energy away from actual business growth.
                  </p>
                </div>
            </div>

              {/* The Disconnection Bridge -> Transitioning Directly to Solution Below */}
              <div className="rounded-xl bg-gradient-to-r from-[#0d1f19]/95 via-[#132822]/95 to-[#0d1f19]/95 border border-[#10b981]/40 p-4 sm:p-5 relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#10b981]/15 blur-[100px] pointer-events-none rounded-full" />
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative z-10">
                  <div className="max-w-2xl text-center lg:text-left">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#34d399] mb-1">
                      <span className="material-symbols-outlined text-[16px] text-[#10b981]">verified</span>
                      HOW VELONTRAX SOLVES EVERY BOTTLENECK
                    </div>
                    <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                      Instead of managing your business through disconnected tools, spreadsheets and manual chaos, switch to{' '}
                      <span className="text-[#a7f3d0] font-bold underline decoration-[#10b981]/60 decoration-2 underline-offset-4">
                        one connected AI Operating System that automates your entire workflow below.
                      </span>
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <button
                      onClick={() => {
                        const el = document.getElementById('solution-breakdown');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#059669] text-[#031d12] font-extrabold text-xs sm:text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] flex items-center gap-2 cursor-pointer"
                      type="button"
                    >
                      <span>Explore The Solution Below</span>
                      <span className="material-symbols-outlined text-[16px] animate-bounce">arrow_downward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================== 2. SOLUTION SECTION (PLACED DIRECTLY BELOW) ==================== */}
            <div id="solution-breakdown" className="relative scroll-mt-24 pt-6 sm:pt-8 border-t border-[#10b981]/30">
              {/* Solution Section Header with Green Glow Round Badge */}
              <div className="text-center max-w-3xl mx-auto mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10b981]/15 border border-[#10b981]/50 mb-2.5 shadow-[0_0_25px_rgba(16,185,129,0.3)] backdrop-blur-xl">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                    THE SOLUTION: VELONTRAX OS
                  </span>
                  <span className="text-[#10b981]/40">/</span>
                  <span className="text-[11px] text-[#a7f3d0] font-bold">ALL 6 PROBLEMS ELIMINATED</span>
                </div>

                <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2 leading-tight">
                  MEET YOUR NEW BUSINESS OPERATING SYSTEM.{' '}
                  <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#6ee7b7] drop-shadow-[0_0_30px_rgba(16,185,129,0.35)]">
                    POWERED BY AI.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-[#dae2fd]/90 font-normal leading-relaxed">
                  <strong className="text-[#34d399] font-semibold">VelontraX</strong> combines powerful business tools with AI-powered automation to solve every single bottleneck above.
                </p>
              </div>

              {/* 6 Core Business Tools Grid - Glowing Green Solution Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
                {/* 1. LEAD GENERATION - Green Glow */}
                <div
                  onClick={() => onNavigate('solutions-smart-crm-and-leads')}
                  className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#0e221d]/95 via-[#0b1c1b]/90 to-[#071415]/95 border border-[#10b981]/35 hover:border-[#10b981] p-6 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.18)] hover:shadow-[0_0_42px_rgba(16,185,129,0.4)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/15 blur-2xl rounded-full pointer-events-none group-hover:bg-[#10b981]/28 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">radar</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/35 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      Module 01
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#34d399] transition-colors relative z-10">
                    LEAD GENERATION
                  </h3>

                  <p className="text-sm text-[#b6d9ce] leading-relaxed mb-4 relative z-10">
                    Capture and organize new business opportunities automatically.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#10b981]/25 text-xs text-[#9cc9bc] relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#10b981]">check_circle</span>
                      <span>Omnichannel multi-source lead ingestion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#10b981]">check_circle</span>
                      <span>Real-time ICP scoring & qualification</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#34d399] group-hover:text-[#6ee7b7] group-hover:translate-x-1 transition-all relative z-10">
                    <span>Explore Lead Generation</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* 2. CRM - Green Glow */}
                <div
                  onClick={() => onNavigate('solutions-smart-crm-and-leads')}
                  className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#0e221d]/95 via-[#0b1c1b]/90 to-[#071415]/95 border border-[#10b981]/35 hover:border-[#10b981] p-6 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.18)] hover:shadow-[0_0_42px_rgba(16,185,129,0.4)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/15 blur-2xl rounded-full pointer-events-none group-hover:bg-[#10b981]/28 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">hub</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/35 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      Module 02
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#34d399] transition-colors relative z-10">
                    CRM
                  </h3>

                  <p className="text-sm text-[#b6d9ce] leading-relaxed mb-4 relative z-10">
                    Manage leads, customers and relationships from one place.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#10b981]/25 text-xs text-[#9cc9bc] relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#10b981]">check_circle</span>
                      <span>360° unified customer context timeline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#10b981]">check_circle</span>
                      <span>Automated logging across calls & emails</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#34d399] group-hover:text-[#6ee7b7] group-hover:translate-x-1 transition-all relative z-10">
                    <span>Manage Relationships</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* 3. AUTOMATION - Green Glow */}
                <div
                  onClick={() => onNavigate('how-it-works')}
                  className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#0e221d]/95 via-[#0b1c1b]/90 to-[#071415]/95 border border-[#10b981]/35 hover:border-[#10b981] p-6 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.18)] hover:shadow-[0_0_42px_rgba(16,185,129,0.4)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/15 blur-2xl rounded-full pointer-events-none group-hover:bg-[#10b981]/28 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">bolt</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/35 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      Module 03
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#34d399] transition-colors relative z-10">
                    AUTOMATION
                  </h3>

                  <p className="text-sm text-[#b6d9ce] leading-relaxed mb-4 relative z-10">
                    Automate repetitive business workflows and follow-ups.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#10b981]/25 text-xs text-[#9cc9bc] relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#10b981]">check_circle</span>
                      <span>Multi-touch smart follow-ups that never miss</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#10b981]">check_circle</span>
                      <span>Zero human intervention for routine steps</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#34d399] group-hover:text-[#6ee7b7] group-hover:translate-x-1 transition-all relative z-10">
                    <span>Automate Workflows</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* 4. SALES - Green Glow */}
                <div
                  onClick={() => onNavigate('solutions-smart-crm-and-leads')}
                  className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#0e221d]/95 via-[#0b1c1b]/90 to-[#071415]/95 border border-[#10b981]/35 hover:border-[#10b981] p-6 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.18)] hover:shadow-[0_0_42px_rgba(16,185,129,0.4)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/15 blur-2xl rounded-full pointer-events-none group-hover:bg-[#10b981]/28 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">trending_up</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/35 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      Module 04
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#34d399] transition-colors relative z-10">
                    SALES
                  </h3>

                  <p className="text-sm text-[#b6d9ce] leading-relaxed mb-4 relative z-10">
                    Track opportunities and manage your sales pipeline.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#10b981]/25 text-xs text-[#9cc9bc] relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#10b981]">check_circle</span>
                      <span>Predictive deal close probability scores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#10b981]">check_circle</span>
                      <span>Visual pipeline stages & velocity tracking</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#34d399] group-hover:text-[#6ee7b7] group-hover:translate-x-1 transition-all relative z-10">
                    <span>Manage Sales Pipeline</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* 5. AI - Green Glow */}
                <div
                  onClick={() => onNavigate('how-it-works')}
                  className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#0e221d]/95 via-[#0b1c1b]/90 to-[#071415]/95 border border-[#10b981]/35 hover:border-[#10b981] p-6 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.18)] hover:shadow-[0_0_42px_rgba(16,185,129,0.4)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/15 blur-2xl rounded-full pointer-events-none group-hover:bg-[#10b981]/28 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">psychology</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/35 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      Module 05
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#34d399] transition-colors relative z-10">
                    AI
                  </h3>

                  <p className="text-sm text-[#b6d9ce] leading-relaxed mb-4 relative z-10">
                    Use intelligent AI assistance to analyze information and execute tasks.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#10b981]/25 text-xs text-[#9cc9bc] relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#10b981]">check_circle</span>
                      <span>Real-time intelligence synthesis & summaries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#10b981]">check_circle</span>
                      <span>Autonomous execution across connected apps</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#34d399] group-hover:text-[#6ee7b7] group-hover:translate-x-1 transition-all relative z-10">
                    <span>Deploy AI Assistance</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>

                {/* 6. OPERATIONS - Green Glow */}
                <div
                  onClick={() => onNavigate('pricing')}
                  className="group cursor-pointer rounded-2xl bg-gradient-to-b from-[#0e221d]/95 via-[#0b1c1b]/90 to-[#071415]/95 border border-[#10b981]/35 hover:border-[#10b981] p-6 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.18)] hover:shadow-[0_0_42px_rgba(16,185,129,0.4)] hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/15 blur-2xl rounded-full pointer-events-none group-hover:bg-[#10b981]/28 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[26px]">grid_view</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/35 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      Module 06
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-[#34d399] transition-colors relative z-10">
                    OPERATIONS
                  </h3>

                  <p className="text-sm text-[#b6d9ce] leading-relaxed mb-4 relative z-10">
                    Bring your everyday business processes into one centralized platform.
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#10b981]/25 text-xs text-[#9cc9bc] relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#10b981]">check_circle</span>
                      <span>Single glass command for team & pipelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-[#10b981]">check_circle</span>
                      <span>Zero SaaS fragmentation or manual handoffs</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#34d399] group-hover:text-[#6ee7b7] group-hover:translate-x-1 transition-all relative z-10">
                    <span>Centralize Operations</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>

              {/* Bottom Operating System Conversion Callout */}
              <div className="rounded-2xl bg-gradient-to-r from-[#060e20] via-[#10172a] to-[#060e20] border border-[#222a3d] p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left mt-6">
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-white mb-0.5">
                    Ready to unify your business operations?
                  </h4>
                  <p className="text-xs sm:text-sm text-[#d8c3ad]">
                    Experience how VelontraX replaces 12+ fragmented tools with one AI-powered operating system.
                  </p>
                </div>
                <div className="flex items-center gap-2.5 flex-wrap justify-center shrink-0">
                  <button
                    onClick={onOpenBookDemo}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ffc174] via-[#ffb86c] to-[#ffddb8] text-[#060e20] font-bold text-xs sm:text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,193,116,0.3)] flex items-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    <span>Book OS Demo</span>
                  </button>
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-4 py-2.5 rounded-xl bg-[#141b2d] border border-[#2d3449] hover:border-[#ffc174]/40 text-[#d8c3ad] hover:text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                    <span>View Live Studio</span>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Compatible Integrations & Trust Ecosystem */}
      <section className="w-full bg-[#060e20] py-8 sm:py-10 border-y border-[#222a3d]/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#172238]/90 via-[#1f2d48]/90 to-[#172238]/90 border border-[#ffc174]/40 shadow-[0_0_15px_rgba(255,193,116,0.15)] mb-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc174] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b]" />
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#f59e0b]">
              ENTERPRISE INTEGRATIONS ECOSYSTEM
            </span>
            <span className="text-[#a08e7a]">/</span>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#dae2fd]">
              ZERO-CODE SYNC
            </span>
          </div>

          <h2 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-1.5">
            Plugs Directly Into The Tools You Already Rely On
          </h2>
          <p className="text-xs sm:text-sm text-[#d8c3ad] max-w-2xl mb-4 sm:mb-5">
            Zero migration headaches. VelontraX connects in minutes via standard enterprise APIs and secure webhook connectors:
          </p>

          {/* Continuous Infinite Marquee Slider with Edge Fade Masks */}
          <div className="relative w-full overflow-hidden py-1 sm:py-2">
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

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tight leading-tight max-w-3xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              Do You Want To Deploy This{' '}
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-[#ffc174]/40 via-[#f59e0b]/30 to-[#ffddb8]/40 blur-xl opacity-90 pointer-events-none rounded-lg" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#f59e0b] drop-shadow-[0_0_35px_rgba(255,193,116,0.6)] font-black">
                  AI Automation System
                </span>
              </span>{' '}
              For Your Business?
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
