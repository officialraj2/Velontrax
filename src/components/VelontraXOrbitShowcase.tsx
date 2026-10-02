import React, { useState } from 'react';

interface OrbitNode {
  id: string;
  name: string;
  shortName: string;
  category: string;
  icon: string;
  color: string;
  badgeBg: string;
  borderColor: string;
  glowColor: string;
  highlightStat: string;
  description: string;
}

export const VelontraXOrbitShowcase: React.FC = () => {
  const [activeHoverNode, setActiveHoverNode] = useState<OrbitNode | null>(null);

  // Inner Orbit: 4 Primary Core Connectors (90 deg intervals: 0, 90, 180, 270)
  const innerNodes: OrbitNode[] = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Business API',
      shortName: 'WhatsApp',
      category: 'Official Cloud API',
      icon: 'chat',
      color: '#25d366',
      badgeBg: 'rgba(37, 211, 102, 0.15)',
      borderColor: 'rgba(37, 211, 102, 0.45)',
      glowColor: 'rgba(37, 211, 102, 0.4)',
      highlightStat: '< 60s Auto Reply',
      description: 'Official Meta Cloud API integration with zero ban risk and automated document collection.',
    },
    {
      id: 'meta-ads',
      name: 'Meta & IG Ads Leads',
      shortName: 'Meta Ads',
      category: 'Sub-60s Capture',
      icon: 'campaign',
      color: '#1877f2',
      badgeBg: 'rgba(24, 119, 242, 0.15)',
      borderColor: 'rgba(24, 119, 242, 0.45)',
      glowColor: 'rgba(24, 119, 242, 0.4)',
      highlightStat: 'Instant Webhook Sync',
      description: 'Captures Facebook and Instagram lead forms in milliseconds and dispatches instant WhatsApp sequences.',
    },
    {
      id: 'gemini-ai',
      name: 'VelontraX Neural AI',
      shortName: 'Neural AI',
      category: 'Cognitive Brain',
      icon: 'psychology',
      color: '#00e5ff',
      badgeBg: 'rgba(0, 229, 255, 0.15)',
      borderColor: 'rgba(0, 229, 255, 0.45)',
      glowColor: 'rgba(0, 229, 255, 0.4)',
      highlightStat: 'Score 1-100 Propensity',
      description: 'Autonomous qualification model trained on high-converting Indian B2B & B2C sales conversations.',
    },
    {
      id: 'gst-invoicing',
      name: 'GST Tax & Invoicing',
      shortName: 'GST Tax',
      category: 'Compliant Finance',
      icon: 'receipt_long',
      color: '#ffc174',
      badgeBg: 'rgba(255, 193, 116, 0.15)',
      borderColor: 'rgba(255, 193, 116, 0.45)',
      glowColor: 'rgba(255, 193, 116, 0.4)',
      highlightStat: 'CGST/SGST Ready',
      description: 'Automated invoice generation, recurring retainers, and instant QR payment links.',
    },
  ];

  // Outer Orbit: 6 Enterprise Ecosystem Connectors (60 deg intervals: 0, 60, 120, 180, 240, 300)
  const outerNodes: OrbitNode[] = [
    {
      id: 'hubspot-salesforce',
      name: 'HubSpot & Salesforce',
      shortName: 'HubSpot',
      category: '2-Way CRM Sync',
      icon: 'hub',
      color: '#ff7a59',
      badgeBg: 'rgba(255, 122, 89, 0.15)',
      borderColor: 'rgba(255, 122, 89, 0.45)',
      glowColor: 'rgba(255, 122, 89, 0.4)',
      highlightStat: 'Realtime Bi-directional',
      description: 'Synchronize pipelines, deal stages, and customer lifecycle attributes without duplicate entries.',
    },
    {
      id: 'google-workspace',
      name: 'Google Sheets & Drive',
      shortName: 'Sheets',
      category: 'Cloud Storage & Logs',
      icon: 'table_chart',
      color: '#0f9d58',
      badgeBg: 'rgba(15, 157, 88, 0.15)',
      borderColor: 'rgba(15, 157, 88, 0.45)',
      glowColor: 'rgba(15, 157, 88, 0.4)',
      highlightStat: 'Live Spreadsheet Feed',
      description: 'Streams qualified leads and dispatch metrics into live team Google Sheets automatically.',
    },
    {
      id: 'razorpay-payments',
      name: 'Razorpay & UPI Collect',
      shortName: 'Razorpay',
      category: 'Instant Payment Rails',
      icon: 'payments',
      color: '#635bff',
      badgeBg: 'rgba(99, 91, 255, 0.15)',
      borderColor: 'rgba(99, 91, 255, 0.45)',
      glowColor: 'rgba(99, 91, 255, 0.4)',
      highlightStat: 'Auto-Reconciliation',
      description: 'Generates secure dynamic UPI payment links inside WhatsApp chats with instant webhook receipt.',
    },
    {
      id: 'ai-voice-bot',
      name: 'Autonomous Voice Calling',
      shortName: 'Voice Bot',
      category: 'Inbound & Outbound',
      icon: 'call',
      color: '#f43f5e',
      badgeBg: 'rgba(244, 63, 94, 0.15)',
      borderColor: 'rgba(244, 63, 94, 0.45)',
      glowColor: 'rgba(244, 63, 94, 0.4)',
      highlightStat: 'Human-Sounding Telephony',
      description: 'Instant outbound qualification call within 30 seconds of an ad lead filling an enquiry form.',
    },
    {
      id: 'zapier-webhooks',
      name: 'Zapier & Webhook Engine',
      shortName: 'Zapier',
      category: 'Universal Dispatch',
      icon: 'bolt',
      color: '#f59e0b',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      borderColor: 'rgba(245, 158, 11, 0.45)',
      glowColor: 'rgba(245, 158, 11, 0.4)',
      highlightStat: '1,000+ App Connectors',
      description: 'Standard REST webhooks and Zapier triggers for infinite interoperability with your stack.',
    },
    {
      id: 'zoho-crm',
      name: 'Zoho CRM & Bigin',
      shortName: 'Zoho CRM',
      category: 'Indian Enterprise Standard',
      icon: 'view_quilt',
      color: '#ea4335',
      badgeBg: 'rgba(234, 67, 53, 0.15)',
      borderColor: 'rgba(234, 67, 53, 0.45)',
      glowColor: 'rgba(234, 67, 53, 0.4)',
      highlightStat: 'Sub-second Sync',
      description: 'Direct field mapping to Zoho CRM modules, lead status transitions, and contact notes.',
    },
  ];

  // Helper to compute orbital coordinate percentages
  // Center is at (50%, 50%). Radius r in percent.
  const getOrbitStyles = (index: number, total: number, radiusPercent: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    const x = 50 + radiusPercent * Math.cos(angle);
    const y = 50 + radiusPercent * Math.sin(angle);
    return {
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)',
    };
  };

  const innerAnimClass = 'animate-orbit-spin-slow';
  const innerCounterClass = 'animate-orbit-counter-slow';
  const outerAnimClass = 'animate-orbit-spin-reverse';
  const outerCounterClass = 'animate-orbit-counter-reverse';

  return (
    <div className="w-full flex flex-col items-center">
      {/* Main Orbit Stage Container - Dynamically Scaled for Mobile & Desktop */}
      <div className="relative w-full max-w-[850px] aspect-square mx-auto flex items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl bg-radial from-[#0e1830] via-[#091122] to-[#040813] border border-[#1e2a42] p-2 sm:p-8 shadow-[inset_0_0_80px_rgba(0,0,0,0.8),0_15px_60px_rgba(0,0,0,0.7)] select-none">
        {/* Subtle Cyber Cosmic Background Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#16233d_1px,transparent_1px),linear-gradient(to_bottom,#16233d_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" 
        />

        {/* Radar Scanner Sweep Light */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[88%] h-[88%] rounded-full relative overflow-hidden opacity-25">
            <div 
              className="absolute inset-0 rounded-full animate-radar-sweep origin-center"
              style={{
                background: 'conic-gradient(from 0deg at 50% 50%, rgba(255, 193, 116, 0.3) 0deg, rgba(245, 158, 11, 0.05) 45deg, transparent 90deg, transparent 360deg)',
              }}
            />
          </div>
        </div>

        {/* Ambient Center Glow Nebula */}
        <div className="absolute w-[200px] sm:w-[360px] h-[200px] sm:h-[360px] bg-gradient-to-tr from-[#f59e0b]/20 via-[#ffc174]/15 to-[#3b82f6]/10 rounded-full blur-[60px] sm:blur-[90px] pointer-events-none" />

        {/* ===================== OUTER ORBIT TRACK ===================== */}
        <div className="absolute w-[88%] sm:w-[84%] h-[88%] sm:h-[84%] rounded-full border border-dashed border-[#334466]/70 pointer-events-none shadow-[0_0_30px_rgba(59,130,246,0.08)]">
          {/* Subtle Outer Rail Graduation Marker Dots */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#3b82f6]/60 shadow-[0_0_8px_#3b82f6]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#3b82f6]/60 shadow-[0_0_8px_#3b82f6]" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#3b82f6]/60 shadow-[0_0_8px_#3b82f6]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#3b82f6]/60 shadow-[0_0_8px_#3b82f6]" />
        </div>

        {/* Outer Orbit Rotating Container */}
        <div className={`absolute w-[88%] sm:w-[84%] h-[88%] sm:h-[84%] rounded-full ${outerAnimClass}`}>
          {outerNodes.map((node, i) => {
            const pos = getOrbitStyles(i, outerNodes.length, 50);
            const isHovered = activeHoverNode?.id === node.id;
            return (
              <div
                key={node.id}
                style={pos}
                className="absolute"
                onMouseEnter={() => setActiveHoverNode(node)}
                onMouseLeave={() => setActiveHoverNode(null)}
                onClick={() => setActiveHoverNode(node)}
              >
                {/* Counter-rotation wrapper keeps card content upright */}
                <div className={`${outerCounterClass} group cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95`}>
                  {/* MOBILE COMPACT SINGLE-LINE PILL (Prevents overlap on small screens) */}
                  <div 
                    className="flex sm:hidden items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#0c162b]/95 border shadow-md backdrop-blur-md transition-all"
                    style={{
                      borderColor: isHovered ? node.color : node.borderColor,
                      boxShadow: isHovered ? `0 0 15px ${node.glowColor}` : '0 2px 10px rgba(0,0,0,0.6)',
                    }}
                  >
                    <div 
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: node.badgeBg,
                        color: node.color,
                      }}
                    >
                      <span className="material-symbols-outlined text-[11px]">
                        {node.icon}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-white tracking-tight whitespace-nowrap leading-none">
                      {node.shortName}
                    </span>
                  </div>

                  {/* DESKTOP EXPANDED ENTERPRISE CARD */}
                  <div 
                    className="hidden sm:flex relative items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#0c162b]/95 border shadow-xl backdrop-blur-xl transition-all duration-300"
                    style={{
                      borderColor: isHovered ? node.color : node.borderColor,
                      boxShadow: isHovered 
                        ? `0 0 25px ${node.glowColor}, inset 0 0 12px ${node.glowColor}` 
                        : `0 4px 20px rgba(0,0,0,0.5)`,
                    }}
                  >
                    {/* Node Icon Box with Accent Background */}
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-inner"
                      style={{
                        backgroundColor: node.badgeBg,
                        color: node.color,
                        boxShadow: `0 0 10px ${node.glowColor}`,
                      }}
                    >
                      <span className="material-symbols-outlined text-[19px]">
                        {node.icon}
                      </span>
                    </div>

                    {/* Node Texts in Single/Double crisp lines */}
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white tracking-tight leading-tight group-hover:text-[#ffc174] transition-colors whitespace-nowrap">
                          {node.name}
                        </span>
                        <span 
                          className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" 
                          style={{ backgroundColor: node.color }} 
                        />
                      </div>
                      <span className="text-[10px] text-[#a08e7a] font-medium leading-none whitespace-nowrap mt-0.5">
                        {node.category}
                      </span>
                    </div>

                    {/* Glowing Accent Border Pill */}
                    <div 
                      className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[8px] font-extrabold uppercase tracking-wider text-black bg-[#ffc174] shadow-sm"
                    >
                      SYNC
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================== INNER ORBIT TRACK ===================== */}
        <div className="absolute w-[54%] sm:w-[56%] h-[54%] sm:h-[56%] rounded-full border border-dashed border-[#ffc174]/40 pointer-events-none shadow-[0_0_35px_rgba(255,193,116,0.12)]">
          {/* Inner Rail Gold Marker Dots */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#ffc174] shadow-[0_0_10px_#ffc174]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#ffc174] shadow-[0_0_10px_#ffc174]" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#ffc174] shadow-[0_0_10px_#ffc174]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#ffc174] shadow-[0_0_10px_#ffc174]" />
        </div>

        {/* Inner Orbit Rotating Container */}
        <div className={`absolute w-[54%] sm:w-[56%] h-[54%] sm:h-[56%] rounded-full ${innerAnimClass}`}>
          {innerNodes.map((node, i) => {
            const pos = getOrbitStyles(i, innerNodes.length, 50);
            const isHovered = activeHoverNode?.id === node.id;
            return (
              <div
                key={node.id}
                style={pos}
                className="absolute"
                onMouseEnter={() => setActiveHoverNode(node)}
                onMouseLeave={() => setActiveHoverNode(null)}
                onClick={() => setActiveHoverNode(node)}
              >
                {/* Counter-rotation wrapper keeps card content upright */}
                <div className={`${innerCounterClass} group cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95`}>
                  {/* MOBILE COMPACT SINGLE-LINE PILL */}
                  <div 
                    className="flex sm:hidden items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#0e1931]/95 border shadow-md backdrop-blur-md transition-all"
                    style={{
                      borderColor: isHovered ? '#ffc174' : node.borderColor,
                      boxShadow: isHovered ? `0 0 15px ${node.glowColor}` : '0 2px 10px rgba(0,0,0,0.6)',
                    }}
                  >
                    <div 
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: node.badgeBg,
                        color: node.color,
                      }}
                    >
                      <span className="material-symbols-outlined text-[11px]">
                        {node.icon}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-white tracking-tight whitespace-nowrap leading-none">
                      {node.shortName}
                    </span>
                  </div>

                  {/* DESKTOP EXPANDED ENTERPRISE CARD */}
                  <div 
                    className="hidden sm:flex relative items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#0e1931]/95 border shadow-2xl backdrop-blur-xl transition-all duration-300"
                    style={{
                      borderColor: isHovered ? '#ffc174' : node.borderColor,
                      boxShadow: isHovered 
                        ? `0 0 30px ${node.glowColor}, inset 0 0 14px ${node.glowColor}` 
                        : `0 6px 24px rgba(0,0,0,0.6)`,
                    }}
                  >
                    {/* Node Icon Box with Radiant Glow */}
                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-lg"
                      style={{
                        backgroundColor: node.badgeBg,
                        color: node.color,
                        boxShadow: `0 0 12px ${node.glowColor}`,
                      }}
                    >
                      <span className="material-symbols-outlined text-[21px]">
                        {node.icon}
                      </span>
                    </div>

                    {/* Node Details */}
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white tracking-tight leading-tight group-hover:text-[#ffc174] transition-colors whitespace-nowrap">
                          {node.name}
                        </span>
                        <span 
                          className="w-2 h-2 rounded-full shrink-0 animate-ping" 
                          style={{ backgroundColor: node.color }} 
                        />
                      </div>
                      <span className="text-[10px] text-[#ffc174] font-semibold leading-tight whitespace-nowrap mt-0.5">
                        {node.highlightStat}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================== CENTERPIECE: VELONTRAX NEURAL CORE ===================== */}
        <div className="relative z-20 flex flex-col items-center justify-center">
          {/* Outer Pulsing Glow Wave */}
          <div className="absolute w-24 h-24 sm:w-44 sm:h-44 rounded-full bg-gradient-to-r from-[#f59e0b]/30 via-[#ffc174]/20 to-[#3b82f6]/20 animate-core-pulse pointer-events-none" />

          {/* Golden Orbit Ring Hugging Center */}
          <div className="absolute w-20 h-20 sm:w-40 sm:h-40 rounded-full border border-dashed sm:border-2 border-[#ffc174]/50 animate-orbit-spin-slow pointer-events-none opacity-80" />

          {/* Center Holographic Core Shield - Scaled for Mobile and Desktop */}
          <div className="relative w-18 h-18 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#18233c] via-[#0d162a] to-[#050b18] border-1.5 sm:border-2 border-[#ffc174] p-1 sm:p-1.5 shadow-[0_0_35px_rgba(245,158,11,0.5),inset_0_0_15px_rgba(255,193,116,0.3)] flex flex-col items-center justify-center text-center cursor-pointer group hover:scale-105 transition-transform duration-300">
            {/* Holographic Concentric Inner Border */}
            <div className="absolute inset-0.5 sm:inset-1 rounded-full border border-[#ffc174]/40 pointer-events-none" />

            {/* Glowing Custom VelontraX Emblem SVG */}
            <div className="relative mb-0.5 sm:mb-1 flex items-center justify-center">
              <svg 
                className="w-6 h-6 sm:w-11 sm:h-11 drop-shadow-[0_0_12px_rgba(255,193,116,0.85)]" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Hexagon Circuit Node */}
                <polygon 
                  points="50,6 90,28 90,72 50,94 10,72 10,28" 
                  stroke="url(#vxGoldGradMobile)" 
                  strokeWidth="3.5" 
                  strokeDasharray="4 2"
                  className="animate-spin"
                  style={{ transformOrigin: '50% 50%', animationDuration: '30s' }}
                />
                {/* Central V and X Geometric Intersection */}
                <path 
                  d="M26 30 L50 70 L74 30" 
                  stroke="url(#vxGoldGradMobile)" 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M32 68 L68 32" 
                  stroke="#ffffff" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  opacity="0.9"
                />
                <circle cx="50" cy="50" r="4.5" fill="#f59e0b" className="animate-ping" />
                <circle cx="50" cy="50" r="3.5" fill="#ffffff" />
                
                <defs>
                  <linearGradient id="vxGoldGradMobile" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffddb8" />
                    <stop offset="0.5" stopColor="#ffc174" />
                    <stop offset="1" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* VelontraX Brand Name in Single Line */}
            <div className="font-['Plus_Jakarta_Sans'] text-[10px] sm:text-sm font-extrabold tracking-tight leading-none text-white flex items-center justify-center gap-0.5">
              <span>velontra</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#ffc174] drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]">
                X
              </span>
            </div>

            {/* Core Subtitle */}
            <span className="text-[7px] sm:text-[9px] uppercase tracking-widest font-black text-[#ffc174] mt-0.5 sm:mt-1">
              CORE AI
            </span>

            {/* Status Indicator */}
            <div className="hidden sm:inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-[#172238]/90 border border-[#2d3a52] text-[8px] text-[#dae2fd] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>SYNC 60ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
