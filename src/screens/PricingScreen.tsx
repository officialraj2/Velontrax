import React, { useState } from 'react';
import { ScreenType } from '../types/index.ts';

interface PricingScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenBookDemo: () => void;
  onShowToast: (message: string) => void;
}

export const PricingScreen: React.FC<PricingScreenProps> = ({
  onNavigate,
  onOpenBookDemo,
  onShowToast,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedAddon, setSelectedAddon] = useState<string | null>(null);

  // Simple ROI Calculator state
  const [leadVolume, setLeadVolume] = useState<number>(500);

  const calculateHoursSaved = Math.round((leadVolume * 14) / 60);
  const calculateMoneySaved = Math.round(leadVolume * 35 + 18000);

  const faqs = [
    {
      q: 'How does the 15-Day Free Trial work?',
      a: 'You get full, unrestricted access to the entire 94+ feature ecosystem for 15 days without entering any credit card. You can connect your channels, test WhatsApp automation flows, generate GST invoices, and manage leads risk-free.',
    },
    {
      q: 'How much do I save with the Annual Plan?',
      a: 'The Monthly Plan is ₹3,000/month (totaling ₹36,000/year). By choosing the Annual Plan at ₹20,000/year, you save ₹16,000 immediately — that is over 44% savings with VIP onboarding included.',
    },
    {
      q: 'Is GST included in the pricing, and do I get a tax invoice?',
      a: 'Yes, Velontra Global provides fully compliant B2B GST tax invoices with your company GSTIN, allowing you to claim full input tax credit (ITC).',
    },
    {
      q: 'Are there any hidden charges or per-seat costs?',
      a: 'None! We do not charge per user or per seat. You can invite your entire sales, marketing, and operations team without paying extra license fees.',
    },
    {
      q: 'How does WhatsApp automation work with Meta compliance?',
      a: 'We integrate with the official Meta Cloud API. Your business profile operates with official template approvals, zero ban risk, and compliant opt-in logs.',
    },
    {
      q: 'Can I add custom services like Website Development or 3D Logo?',
      a: 'Yes! Our digital creative division offers custom software/app development, 3D 4K logo design, AI video production, and pitch decks as standalone or bundled add-ons.',
    },
  ];

  const digitalAddons = [
    {
      id: 'web-dev',
      title: 'Website & Custom Software',
      category: 'Technology',
      description: 'High-converting responsive websites and custom web software engineered for scalability.',
      icon: 'language',
      startingPrice: 'Starting ₹15,000',
    },
    {
      id: 'app-dev',
      title: 'Android & iOS App Development',
      category: 'Technology',
      description: 'Native & cross-platform business applications seamlessly synced with your CRM backend.',
      icon: 'smartphone',
      startingPrice: 'Starting ₹25,000',
    },
    {
      id: '3d-logo',
      title: '3D 4K Cinematic Logo',
      category: 'Creative Design',
      description: 'Ultra high-definition 3D logo branding, animations, and corporate visual assets.',
      icon: 'view_in_ar',
      startingPrice: 'Starting ₹3,500',
    },
    {
      id: 'ai-videos',
      title: 'AI Branded Videos & Explainers',
      category: 'Creative & AI',
      description: 'Studio-grade promotional videos, avatar presenters, and social media reels.',
      icon: 'smart_display',
      startingPrice: 'Starting ₹5,000',
    },
    {
      id: 'presentations',
      title: '4K PDF & Pitch Deck Design',
      category: 'Creative Design',
      description: 'High-impact client proposals, investor presentations, and product catalogs.',
      icon: 'picture_as_pdf',
      startingPrice: 'Starting ₹4,000',
    },
    {
      id: 'whatsapp-marketing',
      title: 'Official WhatsApp Bulk Campaigns',
      category: 'Marketing',
      description: 'Managed broadcast campaigns, high-intent audience segmentation, and Meta template approvals.',
      icon: 'chat',
      startingPrice: 'Pay-per-reach',
    },
    {
      id: 'zoom-hosting',
      title: 'Zoom Professional Host & Webinars',
      category: 'Online Meetings',
      description: 'Live corporate event coordination, webinar management, attendee engagement, and recordings.',
      icon: 'videocam',
      startingPrice: 'Starting ₹2,500 / event',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Glow Backdrops */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#f59e0b]/20 via-[#0053db]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

        {/* Section Header */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#172238]/95 via-[#1f2d48]/95 to-[#172238]/95 border border-[#ffc174]/50 shadow-[0_0_25px_rgba(255,193,116,0.25)] backdrop-blur-xl mb-4 hover:border-[#ffc174] transition-all duration-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc174] opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f59e0b] shadow-[0_0_8px_#ffc174]" />
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#f59e0b]">
              TRANSPARENT ALL-INCLUSIVE PRICING
            </span>
            <span className="text-[#ffc174]/60 font-mono text-xs">/</span>
            <span className="text-[11px] sm:text-xs font-bold text-[#dae2fd] tracking-wide">
              ZERO PER-SEAT TAXES
            </span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-4xl font-bold">
            Simple Pricing.{' '}
            <span className="bg-gradient-to-r from-[#ffc174] via-[#e2cc73] to-[#f59e0b] bg-clip-text text-transparent">
              Powerful Automation.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#d8c3ad] max-w-2xl mt-4 mb-8 leading-relaxed">
            One comprehensive business operating system replacing 10+ disconnected tools. Choose flexible monthly billing or lock in huge annual savings.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="flex items-center gap-2 bg-[#10172a] p-1.5 rounded-full border border-[#222f47] shadow-xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] shadow-md font-bold'
                  : 'text-[#d8c3ad] hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] shadow-md font-bold'
                  : 'text-[#d8c3ad] hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-[#f59e0b] text-[#472a00] text-[10px] uppercase tracking-wider font-extrabold shadow-sm">
                Save ₹16,000
              </span>
            </button>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Plan A: Monthly Plan */}
            <div className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative border ${
              billingCycle === 'monthly' 
                ? 'bg-[#10192e] border-[#ffc174] shadow-[0_0_55px_rgba(245,158,11,0.25)] ring-1 ring-[#ffc174]/40' 
                : 'bg-[#0e1628] border-[#222f47] hover:border-[#ffc174]/40 hover:shadow-[0_0_35px_rgba(245,158,11,0.15)]'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#1b263b] text-[#ffc174] text-xs font-bold uppercase tracking-wider border border-[#ffc174]/20">
                    Plan A &bull; Monthly
                  </span>
                  <span className="text-xs text-[#a08e7a]">Flexible Operational Model</span>
                </div>

                <div className="my-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">₹3,000</span>
                    <span className="text-sm font-medium text-[#a08e7a]">/ month</span>
                  </div>
                  <p className="text-xs text-[#a08e7a] mt-2">Billed month-to-month. Cancel anytime with 1-click.</p>
                </div>

                <p className="text-sm text-[#d8c3ad] leading-relaxed mb-6 pb-6 border-b border-[#222f47]">
                  Full access to the core 94+ feature ecosystem. Perfect for growing agencies, consultants, and emerging brands who want monthly flexibility.
                </p>

                <div className="space-y-3.5 mb-8">
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                    Included in Monthly Plan:
                  </div>
                  {[
                    'Access to core 94+ feature business ecosystem',
                    'Complete CRM + Lead Pipeline + 360° Profiles',
                    'Official WhatsApp API Cloud inbox & automated replies',
                    'Marketing Automation + Landing Page & Form Builder',
                    'Sales Quotation Builder & Proposal Tracking',
                    'GST Invoice Builder & Recurring Billing Generator',
                    'Finance Management & Profit/Loss Snapshot',
                    'AI-powered lead scoring and follow-up writer',
                    'Unlimited team members & contacts (Zero seat fees)',
                    'Standard email and ticketing support',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-[#dae2fd]">
                      <span className="material-symbols-outlined text-[18px] text-[#ffc174] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenBookDemo}
                  className="w-full py-4 rounded-2xl bg-[#172238] border border-[#2d3a52] hover:border-[#ffc174] text-white hover:text-[#ffc174] font-['Plus_Jakarta_Sans'] font-bold text-sm transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span>Start 15 Days Free Trial</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <div className="text-center text-[11px] text-[#718096] mt-3">
                  No credit card required &bull; Setup in under 3 minutes
                </div>
              </div>
            </div>

            {/* Plan B: Annual Plan (Featured) */}
            <div className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative border ${
              billingCycle === 'annual'
                ? 'bg-[#121c33] border-[#ffc174] shadow-[0_0_65px_rgba(245,158,11,0.35)] ring-1 ring-[#ffc174]/60'
                : 'bg-[#0e1628] border-[#222f47] hover:border-[#ffc174]/40 hover:shadow-[0_0_35px_rgba(245,158,11,0.15)]'
            }`}>
              {/* Highlight ribbon */}
              <div className="absolute -top-4 right-8 px-4 py-1 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">local_fire_department</span>
                <span>SAVE ₹16,000 / YEAR</span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#ffc174]/15 text-[#ffc174] text-xs font-extrabold uppercase tracking-wider border border-[#ffc174]/40">
                    Plan B &bull; Annual Advantage
                  </span>
                  <span className="text-xs text-[#ffc174] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">savings</span>
                    Best Value
                  </span>
                </div>

                <div className="my-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">₹20,000</span>
                    <span className="text-sm font-medium text-[#a08e7a]">/ year</span>
                    <span className="text-sm line-through text-[#718096]">₹36,000</span>
                  </div>
                  <p className="text-xs text-[#ffc174] font-semibold mt-2">
                    Equivalent to only ₹1,667/month! You save ₹16,000 every single year.
                  </p>
                </div>

                <p className="text-sm text-[#d8c3ad] leading-relaxed mb-6 pb-6 border-b border-[#222f47]">
                  Everything in Monthly plan plus annual billing advantage, priority onboarding, dedicated account manager, and workflow optimization support.
                </p>

                <div className="space-y-3.5 mb-8">
                  <div className="text-xs font-bold text-[#ffc174] uppercase tracking-wider mb-2">
                    Everything in Monthly Plan, Plus:
                  </div>
                  {[
                    'Instant ₹16,000 cash savings every year',
                    'Priority 1-on-1 Onboarding Planning & Setup',
                    'Dedicated Account Manager for fast resolution',
                    'Free Custom GST Invoice Branding Template',
                    'Pre-built WhatsApp Campaign & Drip Template Library',
                    'Official Meta Cloud API Verification Guidance',
                    'Priority VIP Ticketing & WhatsApp Support SLA (< 2 hrs)',
                    'Multi-location & branch pipeline management',
                    'Early access to next-gen AI autonomous sales agents',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-[#dae2fd]">
                      <span className="material-symbols-outlined text-[18px] text-[#ffc174] shrink-0 mt-0.5">
                        verified
                      </span>
                      <span className={i < 4 ? 'font-semibold text-white' : ''}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenBookDemo}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#f59e0b] via-[#ffc174] to-[#f59e0b] text-[#472a00] font-['Plus_Jakarta_Sans'] font-extrabold text-sm shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-[1.02] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Start 15 Days Free Trial (Save ₹16k)</span>
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                </button>
                <div className="text-center text-[11px] text-[#a08e7a] mt-3">
                  Full 15 days unrestricted test drive &bull; Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capability Comparison Matrix */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12">
          <div className="bg-[#10172a] border border-[#222f47] rounded-3xl p-6 sm:p-10 shadow-xl overflow-x-auto">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-white">
                Detailed Capability Matrix
              </h2>
              <p className="text-sm text-[#a08e7a] mt-2">
                See exact feature distribution between Monthly and Annual execution plans.
              </p>
            </div>

            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#222f47] text-xs font-bold uppercase tracking-wider text-[#a08e7a]">
                  <th className="py-4 px-4 text-white">Platform Capability</th>
                  <th className="py-4 px-4 text-center">Monthly Plan (₹3,000)</th>
                  <th className="py-4 px-4 text-center text-[#ffc174]">Annual Plan (₹20,000)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2a40] text-sm">
                {[
                  { cap: '94+ Feature Platform Access', m: 'Full Access', a: 'Full Access', hl: false },
                  { cap: 'CRM + Marketing + Sales Suite', m: 'Included', a: 'Included', hl: false },
                  { cap: 'WhatsApp / Email / SMS Workflows', m: 'Unlimited Workflows', a: 'Unlimited Workflows', hl: false },
                  { cap: 'AI Assisted Scoring & Qualification', m: 'Included', a: 'Included', hl: false },
                  { cap: 'Finance + GST Invoicing + Analytics', m: 'Included', a: 'Included', hl: false },
                  { cap: 'Team Seats / User Licenses', m: 'Unlimited (₹0 seat fee)', a: 'Unlimited (₹0 seat fee)', hl: false },
                  { cap: '15-Day Free Trial', m: 'Yes (Instant Access)', a: 'Yes (Instant Access)', hl: false },
                  { cap: 'Annual Cost Efficiency', m: 'Standard (₹36,000/yr)', a: 'Save ₹16,000 / year', hl: true },
                  { cap: 'Onboarding & Setup Strategy', m: 'Self-serve + Docs', a: 'Dedicated 1-on-1 Setup Call', hl: true },
                  { cap: 'Priority WhatsApp & Phone SLA', m: 'Standard Response', a: 'VIP Priority (< 2 Hours)', hl: true },
                  { cap: 'Best For', m: 'Flexible monthly ops', a: 'Long-term scale planning', hl: false },
                ].map((row, idx) => (
                  <tr key={idx} className={row.hl ? 'bg-[#ffc174]/5' : ''}>
                    <td className="py-3.5 px-4 font-medium text-white flex items-center gap-2">
                      {row.hl && <span className="material-symbols-outlined text-[16px] text-[#ffc174]">star</span>}
                      <span>{row.cap}</span>
                    </td>
                    <td className="py-3.5 px-4 text-center text-[#dae2fd]">{row.m}</td>
                    <td className={`py-3.5 px-4 text-center font-semibold ${row.hl ? 'text-[#ffc174]' : 'text-white'}`}>
                      {row.a}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Free 15-Day Trial Highlight Banner */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#172238] via-[#10172a] to-[#1c2942] border border-[#ffc174]/40 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-[#ffc174]/15 text-[#ffc174] text-xs font-bold uppercase tracking-wider border border-[#ffc174]/40">
                Zero Risk Guarantee
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-white">
                Try Velontra Global Free for 15 Days
              </h3>
              <p className="text-sm text-[#d8c3ad] max-w-xl">
                New users can explore our complete business operating system with a 15-day free trial. Experience autonomous lead capture, WhatsApp routing, and GST billing live.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={onOpenBookDemo}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] font-['Plus_Jakarta_Sans'] font-extrabold text-sm shadow-lg hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
              >
                Start Free Trial
              </button>
              <button
                onClick={onOpenBookDemo}
                className="px-6 py-3.5 rounded-xl bg-[#10172a] border border-[#2d3a52] text-[#dae2fd] hover:text-white font-medium text-sm transition-all cursor-pointer whitespace-nowrap"
              >
                Schedule Live Walkthrough
              </button>
            </div>
          </div>
        </section>

        {/* Interactive ROI & Savings Calculator */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-8 py-10">
          <div className="bg-[#10172a] border border-[#222f47] rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b263b] text-[#ffc174] text-xs font-bold uppercase tracking-wider mb-2">
                Real-World Financial Return
              </div>
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-bold text-white">
                Calculate Your Monthly Automation Savings
              </h2>
              <p className="text-sm text-[#a08e7a] mt-2">
                See how much time and money your team saves by eliminating manual follow-ups and disconnected tool subscriptions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-[#dae2fd] font-medium">Estimated Monthly Inbound Leads:</span>
                    <span className="font-bold text-[#ffc174] text-lg">{leadVolume.toLocaleString()} Leads</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={leadVolume}
                    onChange={(e) => setLeadVolume(Number(e.target.value))}
                    className="w-full h-2 bg-[#222f47] rounded-lg appearance-none cursor-pointer accent-[#f59e0b]"
                  />
                  <div className="flex justify-between text-xs text-[#718096] mt-1">
                    <span>50 leads</span>
                    <span>1,000 leads</span>
                    <span>5,000 leads</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0c1324] border border-[#1f2b42] text-xs text-[#a08e7a] space-y-2">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#ffc174]">check</span>
                    <span>Replaces HubSpot ($50/mo) + ActiveCampaign ($49/mo) + Twilio + Freshdesk</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#ffc174]">check</span>
                    <span>Sub-60 second lead response increases booking rates by 3.8x</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#0c1324] border border-[#1f2b42] text-center">
                  <span className="text-xs text-[#a08e7a] uppercase font-bold tracking-wider">Manual Hours Saved</span>
                  <div className="text-4xl font-extrabold text-[#ffc174] my-2">~{calculateHoursSaved} hrs</div>
                  <span className="text-xs text-[#718096]">Saved from manual data entry &amp; reminders</span>
                </div>

                <div className="p-6 rounded-2xl bg-[#0c1324] border border-[#1f2b42] text-center">
                  <span className="text-xs text-[#a08e7a] uppercase font-bold tracking-wider">Est. Monthly Savings</span>
                  <div className="text-4xl font-extrabold text-[#ffc174] my-2">₹{calculateMoneySaved.toLocaleString()}</div>
                  <span className="text-xs text-[#718096]">Tool consolidation + staff productivity</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Creative & Growth Services Add-Ons Section */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-8 py-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full bg-[#1b263b] text-[#ffc174] text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Full-Stack Digital Execution
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-white">
              More Than Automation. We Build Your Digital Presence.
            </h2>
            <p className="text-sm text-[#d8c3ad] mt-3">
              Combine our 94+ feature automation software with high-end creative, development, and marketing services from Velontra Global.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalAddons.map((addon) => (
              <div
                key={addon.id}
                className="p-6 rounded-2xl bg-[#0e1628] border border-[#222f47] hover:border-[#ffc174]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#172238] text-[#ffc174] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[22px]">{addon.icon}</span>
                    </div>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#1b263b] text-[#a08e7a] border border-[#2d3a52]">
                      {addon.category}
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white group-hover:text-[#ffc174] transition-colors">
                    {addon.title}
                  </h3>
                  <p className="text-xs text-[#a08e7a] mt-2 leading-relaxed">
                    {addon.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1f2b42] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#ffc174]">{addon.startingPrice}</span>
                  <button
                    onClick={() => {
                      setSelectedAddon(addon.title);
                      onOpenBookDemo();
                      onShowToast(`Requesting quote for ${addon.title}...`);
                    }}
                    className="text-xs font-semibold text-[#dae2fd] hover:text-[#ffc174] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Get Quote</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-[1000px] mx-auto px-4 sm:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#a08e7a] mt-2">
              Everything you need to know about plans, billing, and platform onboarding.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#0e1628] border border-[#222f47] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#131b2e] transition-colors"
                  >
                    <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white">
                      {faq.q}
                    </span>
                    <span className="material-symbols-outlined text-[#ffc174] text-[20px] shrink-0 transition-transform duration-200">
                      {isOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-[#d8c3ad] leading-relaxed border-t border-[#1f2b42] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
