import React, { useState } from 'react';
import { ScreenType } from '../types/index.ts';

interface SolutionsProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenBookDemo: () => void;
  onOpenInspectPrompt: (leadName: string, leadCompany: string) => void;
  onShowToast: (message: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({
  onNavigate,
  onOpenBookDemo,
  onShowToast,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('agency');
  const [activeFeatureTab, setActiveFeatureTab] = useState<string>('communication');
  const [searchFeature, setSearchFeature] = useState<string>('');

  const industries = [
    {
      id: 'agency',
      title: 'Digital Marketing Agencies',
      icon: 'campaign',
      tagline: 'Manage multi-client campaigns, lead routing, and reporting in one unified stack.',
      painPoints: 'Client leads lost in spreadsheets, fragmented WhatsApp accounts, manual weekly performance reports.',
      solutionFlow: [
        { step: '01. Instant Capture', desc: 'Sync leads directly from Facebook, Instagram, Google, and TikTok ads in < 1 second.' },
        { step: '02. WhatsApp Auto-Routing', desc: 'AI routes inquiries to designated client sub-accounts or team members instantly.' },
        { step: '03. Automated White-Label Reports', desc: 'Generate PDF performance summaries and conversion metrics for clients automatically.' },
        { step: '04. Retainer GST Billing', desc: 'Auto-generate monthly recurring GST invoices with automated payment reminders.' },
      ],
      metrics: { metric1: '84%', label1: 'Faster Client Onboarding', metric2: '< 45s', label2: 'Lead Response Time' },
    },
    {
      id: 'ecommerce',
      title: 'E-commerce & D2C Brands',
      icon: 'shopping_bag',
      tagline: 'Recover abandoned carts, run targeted WhatsApp promotions, and automate order support.',
      painPoints: 'High cart drop-offs, expensive SMS charges, slow response to delivery and refund questions.',
      solutionFlow: [
        { step: '01. Abandoned Cart Recovery', desc: 'Automated WhatsApp message with cart item image and 1-click checkout discount link.' },
        { step: '02. Official Broadcasts', desc: 'Send festive catalogues and flash sale broadcasts with 98% open rates.' },
        { step: '03. Order Tracking Bot', desc: 'Customers get live tracking updates, AWB details, and COD verification via WhatsApp.' },
        { step: '04. Review & Repeat Orders', desc: 'Automated post-delivery NPS feedback loops and repeat purchase coupons.' },
      ],
      metrics: { metric1: '28.6%', label1: 'Cart Recovery Rate', metric2: '4.2x', label2: 'ROAS on WhatsApp Broadcasts' },
    },
    {
      id: 'realestate',
      title: 'Real Estate & Builders',
      icon: 'apartment',
      tagline: 'Fastest site-visit bookings, broker network synchronization, and deal progression.',
      painPoints: 'Buyers contact multiple properties; slow follow-ups mean lost bookings; broker commission confusion.',
      solutionFlow: [
        { step: '01. Sub-60s Verification', desc: 'Instant WhatsApp brochure delivery when a buyer submits a MagicBricks/99acres lead.' },
        { step: '02. Site Visit Scheduler', desc: 'AI agent qualifies budget, preferred BHK, and automatically books calendar site visits.' },
        { step: '03. Broker Lead Tagging', desc: 'Prevent broker conflicts with automated timestamped registration and deal attribution.' },
        { step: '04. Token Payment Links', desc: 'Share instant payment links for booking advances with immediate GST receipt.' },
      ],
      metrics: { metric1: '3.4x', label1: 'More Site Visits Booked', metric2: '100%', label2: 'Broker Lead Transparency' },
    },
    {
      id: 'coaching',
      title: 'Education & Coaching Institutes',
      icon: 'school',
      tagline: 'Automate student inquiries, webinar registrations, batch schedules, and fee collections.',
      painPoints: 'Counselors waste hours answering repetitive course queries; manual fee reminder calls.',
      solutionFlow: [
        { step: '01. Course Inquiry Chatbot', desc: 'Share curriculum PDFs, fee structure, and upcoming batch dates automatically on WhatsApp.' },
        { step: '02. Webinar Registration Drip', desc: 'Automated Zoom webinar reminder sequences 24 hours, 1 hour, and 10 mins before start.' },
        { step: '03. Installment Fee Links', desc: 'Scheduled UPI/Card payment links with auto-receipts sent to student and parent.' },
        { step: '04. Community & Attendance', desc: 'Automated class links, attendance tracking, and exam notification broadcasts.' },
      ],
      metrics: { metric1: '62%', label1: 'Higher Webinar Show-up', metric2: '94%', label2: 'On-Time Fee Collections' },
    },
    {
      id: 'consultants',
      title: 'Consultants & Professional Advisory',
      icon: 'psychology',
      tagline: 'Structure discovery-to-delivery workflows with high-context relationship management.',
      painPoints: 'Endless back-and-forth emails to schedule meetings, unapproved proposals, delayed retainers.',
      solutionFlow: [
        { step: '01. Self-Service Booking', desc: 'Smart calendar links with pre-consultation intake questionnaires.' },
        { step: '02. Proposal & Quotation Builder', desc: 'Create branded proposals with scope items and digital acceptance signatures.' },
        { step: '03. Milestone Billing', desc: 'Stage-wise milestone GST invoicing linked to deliverables.' },
        { step: '04. Relationship Activity Feed', desc: '360° timeline of all calls, emails, files, and agreements in one record.' },
      ],
      metrics: { metric1: '12 hrs', label1: 'Saved Weekly per Partner', metric2: '91%', label2: 'Proposal Acceptance Speed' },
    },
    {
      id: 'services',
      title: 'Clinics, Salons & Field Services',
      icon: 'medical_services',
      tagline: 'Convert local inquiries into paid appointments with automated doctor/staff assignment.',
      painPoints: 'No-shows on bookings, missed incoming calls from Google Maps, chaotic paper registers.',
      solutionFlow: [
        { step: '01. 24/7 Appointment Booking', desc: 'Patients/clients select time slot directly on WhatsApp or website widget.' },
        { step: '02. WhatsApp Confirmation', desc: 'Instant calendar invite, Google Maps location pin, and preparation instructions.' },
        { step: '03. No-Show Prevention', desc: 'Automated 2-hour reminder requiring 1-click confirmation or rescheduling.' },
        { step: '04. Google Review Collector', desc: 'Post-service review requests sent automatically to happy clients.' },
      ],
      metrics: { metric1: '78%', label1: 'Reduction in No-Shows', metric2: '+4.8★', label2: 'Google Maps Rating Boost' },
    },
    {
      id: 'creators',
      title: 'Creators & Communities',
      icon: 'groups',
      tagline: 'Monetize digital content, run paid communities, and launch courses effortlessly.',
      painPoints: 'Managing Discord/WhatsApp groups manually, handling member cancellations and renewals.',
      solutionFlow: [
        { step: '01. Paid Community Access', desc: 'Instant WhatsApp group invite link generated after successful Razorpay/Stripe checkout.' },
        { step: '02. Automated Onboarding', desc: 'Drip resources, introductory videos, and community guidelines to new members.' },
        { step: '03. Subscription Auto-Renewal', desc: 'Automated renewal reminders before subscription expires; instant revoking if unpaid.' },
        { step: '04. Live Masterclass Events', desc: 'Broadcast event announcements, polls, and feedback capture directly to members.' },
      ],
      metrics: { metric1: '99.5%', label1: 'Automated Member Sync', metric2: '35%', label2: 'Higher Renewal Retention' },
    },
    {
      id: 'startups',
      title: 'Startups & High-Growth Founders',
      icon: 'rocket_launch',
      tagline: 'Scale revenue operations on day 1 without hiring huge operations staff.',
      painPoints: 'Spending ₹30,000+/month on 6 different tools before even making product-market fit.',
      solutionFlow: [
        { step: '01. Complete Stack in 1 Tool', desc: 'CRM + WhatsApp + Invoicing + Landing Pages + Forms ready in 5 minutes.' },
        { step: '02. AI Copilot Qualification', desc: 'AI scores inbound leads and answers technical questions 24/7.' },
        { step: '03. Zero Per-Seat Licensing', desc: 'Add your co-founders, SDRs, and support reps without paying extra fees.' },
        { step: '04. Financial Health Monitor', desc: 'Track profit/loss, revenue forecasts, and cashflow directly inside the dashboard.' },
      ],
      metrics: { metric1: '₹3.2L', label1: 'Saved Yearly on SaaS Tools', metric2: 'Day 1', label2: 'Full Operational Readiness' },
    },
  ];

  // 94+ Feature Ecosystem categorized
  const featureCategories = [
    {
      id: 'communication',
      title: 'Communication Hub (10)',
      icon: 'chat',
      features: [
        { name: 'Unified Omnichannel Inbox', desc: 'Manage WhatsApp, Email, Webchat, and SMS conversations in a single unified view.' },
        { name: 'Two-Way Email Sync', desc: 'Full bi-directional synchronization with Google Workspace and custom IMAP/SMTP accounts.' },
        { name: 'SMS Conversation Threads', desc: 'Send and receive transactional and promotional SMS with instant delivery logs.' },
        { name: 'VoIP Call Notes', desc: 'Log outbound and inbound customer phone call summaries with timestamped outcomes.' },
        { name: 'Internal Team Mentions', desc: 'Tag colleagues inside conversation notes for seamless handovers without customer visibility.' },
        { name: 'Shared Templates Library', desc: 'Pre-approved WhatsApp and email message templates for rapid one-click replies.' },
        { name: 'Smart Auto-Replies', desc: 'Keyword-triggered responses for instant out-of-office and FAQ support.' },
        { name: 'Consent Capture Logs', desc: 'Strict opt-in compliance records verifying customer permissions for message delivery.' },
        { name: 'Conversation Tags', desc: 'Color-coded tags like #HotLead, #PaymentPending, and #VIPClient for quick organization.' },
        { name: 'SLA Reminder Alerts', desc: 'Notifications sent to team leads if any incoming customer message remains unanswered for > 5 mins.' },
      ],
    },
    {
      id: 'whatsapp',
      title: 'Official WhatsApp API (8)',
      icon: 'forum',
      features: [
        { name: 'Official Meta Cloud API Inbox', desc: 'Direct integration with Meta Cloud API for maximum uptime and zero account ban risks.' },
        { name: 'Compliant Broadcast Campaigns', desc: 'Deliver broadcast messages to thousands of opt-in contacts with high template approvals.' },
        { name: 'Click-to-WhatsApp Ads Sync', desc: 'Auto-ingest leads from Instagram and Facebook CTWA ads with full campaign attribution.' },
        { name: 'WhatsApp Chatbot Flows', desc: 'Visual drag-and-drop conversational bot builder with interactive buttons and quick replies.' },
        { name: 'Template Approval Engine', desc: 'Submit and preview marketing, utility, and authentication templates directly to Meta.' },
        { name: 'WhatsApp Commerce Catalog', desc: 'Display product catalogs and accept direct in-chat order selections from customers.' },
        { name: 'Conversation Re-engagement', desc: 'Automated 23-hour nudge alerts before the standard 24-hour Meta service window closes.' },
        { name: 'WhatsApp Team Routing', desc: 'Round-robin or skills-based assignment of incoming chats to available team executives.' },
      ],
    },
    {
      id: 'crm',
      title: 'Smart CRM & 360° Leads (11)',
      icon: 'contact_page',
      features: [
        { name: '360° Contact Profile', desc: 'Complete timeline of every interaction, purchase, conversation, and document per customer.' },
        { name: 'Lead Timeline History', desc: 'Chronological activity stream showing exactly when leads opened emails, clicked links, or replied.' },
        { name: 'Smart Contact Deduplication', desc: 'Automatic merging of duplicate records based on phone numbers, emails, and company names.' },
        { name: 'Custom Sales Pipelines', desc: 'Kanban board views with fully customizable deal stages, probabilities, and rotting alerts.' },
        { name: 'Opportunity Stages', desc: 'Track deals from Initial Inquiry to Qualification, Demo, Proposal, and Won/Lost status.' },
        { name: 'Account-Based Views', desc: 'Group multiple contacts under a single corporate parent account for B2B relationship tracking.' },
        { name: 'Tasks on Contact Record', desc: 'Assign scheduled callbacks, follow-ups, and review meetings with browser notifications.' },
        { name: 'Document Vault', desc: 'Store agreements, KYC documents, tax certificates, and NDA files securely on customer profiles.' },
        { name: 'Notes & Activity Feed', desc: 'Rich text meeting notes, audio summaries, and action checklists per client.' },
        { name: 'Team Ownership Rules', desc: 'Dynamic assignment rules ensuring fair lead distribution across sales reps.' },
        { name: 'Lifecycle Status Engine', desc: 'Automate lead progression from Cold -> MQL -> SQL -> Customer -> Advocate.' },
      ],
    },
    {
      id: 'finance',
      title: 'Finance & GST Suite (9)',
      icon: 'receipt_long',
      features: [
        { name: 'GST Invoice Builder', desc: 'Create clean, compliant B2B/B2C GST tax invoices with automatic CGST, SGST, and IGST calculation.' },
        { name: 'Recurring Invoices', desc: 'Automate monthly and annual retainer billing schedules with auto-dispatch via WhatsApp and email.' },
        { name: 'Payment Link Generator', desc: 'Generate instant UPI, NetBanking, Credit Card, and QR code payment links with Razorpay.' },
        { name: 'Expense Tracker', desc: 'Record operational costs, software subscriptions, and vendor payments with category tags.' },
        { name: 'Profit & Loss Snapshot', desc: 'Real-time overview of monthly collections versus operational expenditures.' },
        { name: 'Cashflow Timeline', desc: 'Forecast incoming receivables from pending invoices against upcoming recurring vendor bills.' },
        { name: 'Vendor Ledger', desc: 'Track supplier balances, bills payable, and purchase histories in one unified ledger.' },
        { name: 'Customer Ledger', desc: 'Detailed statement of accounts showing total invoiced, payments received, and outstanding dues.' },
        { name: 'Tax Filing Export', desc: 'One-click export of GSTR-1 and GSTR-3B compatible summary sheets for chartered accountants.' },
      ],
    },
    {
      id: 'marketing',
      title: 'Marketing & Funnels (10)',
      icon: 'ads_click',
      features: [
        { name: 'Landing Page Builder', desc: 'High-speed, conversion-optimized landing pages with integrated lead capture forms.' },
        { name: 'Lead Form Builder', desc: 'Multi-step forms, conditional logic, file upload fields, and instant WhatsApp alerts on submit.' },
        { name: 'Pop-up & Embed Forms', desc: 'Exit-intent popups, slide-ins, and floating sticky bars to maximize website conversion.' },
        { name: 'Email Campaign Studio', desc: 'Drag-and-drop responsive email newsletter builder with deliverability warm-up tools.' },
        { name: 'SMS Campaign Studio', desc: 'DLT-registered promotional SMS blasts with custom sender ID support.' },
        { name: 'Ad Tracking Connectors', desc: 'Direct integration with Meta Conversions API (CAPI) and Google Ads Offline Conversions.' },
        { name: 'UTM Auto-Tagging', desc: 'Automatically capture utm_source, utm_medium, and utm_campaign on every lead.' },
        { name: 'Audience Segmentation', desc: 'Filter customer lists by buying history, location, last active date, and tag associations.' },
        { name: 'Drip Journey Builder', desc: 'Visual automated workflows orchestrating multi-channel email, SMS, and WhatsApp steps.' },
        { name: 'A/B Message Testing', desc: 'Compare subject lines, creative templates, and copy variations to maximize engagement.' },
      ],
    },
    {
      id: 'ai',
      title: 'AI Workflow Copilots (10)',
      icon: 'smart_toy',
      features: [
        { name: 'AI Lead Scoring', desc: 'Predictive algorithm that ranks inbound leads from 1-100 based on intent and responsiveness.' },
        { name: 'AI Qualification Agent', desc: 'Conversational agent that chats with leads on WhatsApp to verify budget and timeline.' },
        { name: 'AI Follow-up Writer', desc: 'Generates personalized WhatsApp and email follow-up copy tailored to the client’s exact pain points.' },
        { name: 'AI Funnel Analyzer', desc: 'Identifies friction points and drop-offs across your landing pages and sales stages.' },
        { name: 'AI Campaign Assistant', desc: 'Generates high-converting ad headlines, marketing hooks, and promotional email drafts.' },
        { name: 'AI Ticket Summaries', desc: 'Condenses long customer support threads into concise executive bullet points.' },
        { name: 'AI Expense Classifier', desc: 'Automatically scans bill receipts and categorizes expenses under correct accounting ledger heads.' },
        { name: 'AI Forecast Assistant', desc: 'Projects quarterly revenue based on historical conversion velocity and active deal values.' },
        { name: 'AI Workflow Copilot', desc: 'Builds complex automation recipes from plain natural language prompts in seconds.' },
        { name: 'AI Approval Checkpoint', desc: 'Human-in-the-loop validation flag before automated messages are dispatched to VIP clients.' },
      ],
    },
  ];

  const currentInd = industries.find((i) => i.id === selectedIndustry) || industries[0];
  const currentCategory = featureCategories.find((c) => c.id === activeFeatureTab) || featureCategories[0];

  const filteredFeatures = currentCategory.features.filter(
    (f) =>
      f.name.toLowerCase().includes(searchFeature.toLowerCase()) ||
      f.desc.toLowerCase().includes(searchFeature.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full">
      {/* Background glow */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#f59e0b]/20 via-[#0053db]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b263b] border border-[#2d3a52] shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-ping" />
            <span className="text-[11px] uppercase tracking-widest text-[#ffc174] font-bold">
              Tailored Industry Blueprints
            </span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-4xl font-extrabold">
            Built For{' '}
            <span className="bg-gradient-to-r from-[#ffc174] via-[#e2cc73] to-[#f59e0b] bg-clip-text text-transparent">
              Modern Businesses.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#d8c3ad] max-w-2xl mt-4 mb-8 leading-relaxed">
            Practical workflows for teams that need speed, structure, and visibility across growth operations. From digital agencies and real estate to D2C and local services.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenBookDemo}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] font-['Plus_Jakarta_Sans'] font-extrabold text-sm shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:brightness-110 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Start 15 Days Free Trial</span>
              <span className="material-symbols-outlined text-[18px]">bolt</span>
            </button>
            <button
              onClick={onOpenBookDemo}
              className="px-6 py-3.5 rounded-xl bg-[#172238] border border-[#2d3a52] text-[#dae2fd] hover:text-white font-medium text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Book Customized Demo</span>
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            </button>
          </div>
        </section>

        {/* Industry Selector Grid */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none sm:grid sm:grid-cols-4 lg:grid-cols-8">
            {industries.map((ind) => {
              const isSelected = selectedIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => {
                    setSelectedIndustry(ind.id);
                    onShowToast(`Loaded ${ind.title} workflow blueprint.`);
                  }}
                  className={`p-3.5 rounded-2xl border transition-all text-left flex flex-col justify-between min-w-[150px] cursor-pointer ${
                    isSelected
                      ? 'bg-[#152038] border-[#ffc174] shadow-[0_0_20px_rgba(245,158,11,0.25)] ring-1 ring-[#ffc174]'
                      : 'bg-[#0e1628] border-[#222f47] hover:border-[#334261] text-[#a08e7a] hover:text-[#dae2fd]'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${
                    isSelected ? 'bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00]' : 'bg-[#172238] text-[#ffc174]'
                  }`}>
                    <span className="material-symbols-outlined text-[18px]">{ind.icon}</span>
                  </div>
                  <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : ''}`}>
                    {ind.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Deep-Dive Card */}
          <div className="mt-8 bg-[#10172a] border border-[#222f47] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Context & Metrics */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#1b263b] text-[#ffc174] text-xs font-bold uppercase tracking-wider border border-[#ffc174]/20">
                    Industry Blueprint
                  </span>
                  <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-white mt-3">
                    {currentInd.title}
                  </h2>
                  <p className="text-sm text-[#d8c3ad] mt-2 leading-relaxed">
                    {currentInd.tagline}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0c1324] border border-[#1f2b42] text-xs space-y-2">
                  <div className="font-bold text-[#ff7474] flex items-center gap-1.5 uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px]">warning</span>
                    Common Bottleneck:
                  </div>
                  <p className="text-[#a08e7a] leading-relaxed">
                    {currentInd.painPoints}
                  </p>
                </div>

                {/* Key Proven Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#172238] border border-[#2d3a52]">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#ffc174]">
                      {currentInd.metrics.metric1}
                    </div>
                    <div className="text-xs text-[#a08e7a] mt-1 font-medium">
                      {currentInd.metrics.label1}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#172238] border border-[#2d3a52]">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#ffc174]">
                      {currentInd.metrics.metric2}
                    </div>
                    <div className="text-xs text-[#a08e7a] mt-1 font-medium">
                      {currentInd.metrics.label2}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenBookDemo}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] font-['Plus_Jakarta_Sans'] font-extrabold text-sm shadow-md hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Launch {currentInd.title} Setup</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Step-by-Step Execution Journey */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#222f47]">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ffc174] text-[20px]">account_tree</span>
                    Automated Workflow Journey
                  </h3>
                  <span className="text-xs text-[#a08e7a]">Fully Configurable</span>
                </div>

                <div className="space-y-3.5">
                  {currentInd.solutionFlow.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#0c1324] border border-[#1f2b42] hover:border-[#ffc174]/40 transition-colors flex items-start gap-4"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#172238] text-[#ffc174] font-bold text-xs flex items-center justify-center shrink-0 border border-[#2d3a52]">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{step.step}</h4>
                        <p className="text-xs text-[#a08e7a] mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 94+ Feature Ecosystem Explorer */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3.5 py-1 rounded-full bg-[#1b263b] text-[#ffc174] text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Total Platform Capability
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              94+ Powerful Features. One Complete Business Ecosystem.
            </h2>
            <p className="text-sm sm:text-base text-[#d8c3ad] mt-3 leading-relaxed">
              Explore the modules that run your communication, lead management, marketing campaigns, GST finances, and team operations effortlessly.
            </p>
          </div>

          {/* Feature Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 justify-start lg:justify-center">
            {featureCategories.map((cat) => {
              const isActive = activeFeatureTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveFeatureTab(cat.id);
                    setSearchFeature('');
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] shadow-md font-bold'
                      : 'bg-[#10172a] text-[#a08e7a] hover:text-white border border-[#222f47]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Search bar inside category */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#718096]">
                search
              </span>
              <input
                type="text"
                value={searchFeature}
                onChange={(e) => setSearchFeature(e.target.value)}
                placeholder={`Search features in ${currentCategory.title}...`}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0c1324] border border-[#222f47] text-xs text-white placeholder:text-[#525f7a] focus:outline-none focus:border-[#ffc174] transition-colors"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFeatures.map((feat, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-[#0e1628] border border-[#222f47] hover:border-[#ffc174]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#ffc174]" />
                    <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-white group-hover:text-[#ffc174] transition-colors">
                      {feat.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#a08e7a] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1a2337] flex items-center justify-between text-[11px] text-[#718096]">
                  <span>Included in ₹3k/mo Plan</span>
                  <span className="text-[#ffc174] flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[13px]">check</span>
                    Active
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredFeatures.length === 0 && (
            <div className="text-center py-12 text-[#a08e7a] text-sm">
              No features matched "{searchFeature}". Try searching a different keyword.
            </div>
          )}
        </section>

        {/* Digital Growth & Creative Execution Services */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10">
          <div className="rounded-3xl bg-gradient-to-br from-[#121c33] via-[#0b1326] to-[#172238] border border-[#2d3a52] p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="px-3 py-1 rounded-full bg-[#1b263b] text-[#ffc174] text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                Beyond Software
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-white">
                Complete Digital Presence &amp; Creative Production
              </h2>
              <p className="text-sm text-[#d8c3ad] mt-3">
                Need high-converting websites, Android/iOS mobile apps, 3D branding, or AI video ads? Velontra Global delivers end-to-end execution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'Website & Web Software', desc: 'Modern responsive web applications built for business workflows and scalability.', icon: 'web' },
                { title: 'Mobile App Development', desc: 'Android & iOS apps synced with your database and notification center.', icon: 'phone_iphone' },
                { title: '3D 4K Logo & Branding', desc: 'Cinematic brand logo identity treatments and corporate vector assets.', icon: 'view_in_ar' },
                { title: 'AI Videos & Presenters', desc: 'Studio-grade video production for ads, explainer videos, and social campaigns.', icon: 'smart_display' },
                { title: '4K PDF & Pitch Decks', desc: 'Executive presentations and sales collateral tailored for investor closing.', icon: 'description' },
                { title: 'WhatsApp Bulk Messaging', desc: 'Official Meta-compliant broadcasts with high delivery guarantees.', icon: 'send' },
                { title: 'Social Media Management', desc: 'Content strategy, creatives, copywriting, and engagement management.', icon: 'share' },
                { title: 'Zoom Professional Host', desc: 'Live event coordination, webinar hosting, attendee moderation, and recordings.', icon: 'videocam' },
              ].map((serv, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#0c1324] border border-[#1f2b42] hover:border-[#ffc174]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#172238] text-[#ffc174] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-[20px]">{serv.icon}</span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-white mb-1.5">
                    {serv.title}
                  </h3>
                  <p className="text-xs text-[#a08e7a] leading-relaxed">
                    {serv.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[#1f2b42] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-[#d8c3ad] text-center sm:text-left">
                Combine our software automation with custom digital execution for maximum business growth.
              </div>
              <button
                onClick={onOpenBookDemo}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] font-bold text-xs shadow-md hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
              >
                Inquire About Custom Services
              </button>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 text-center">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-white">
            Ready to Automate Your Business Operations?
          </h2>
          <p className="text-sm text-[#a08e7a] max-w-xl mx-auto mt-2 mb-6">
            Get instant access to our 94+ feature ecosystem with a 15-day free trial. Start capturing, routing, and converting leads on autopilot today.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={onOpenBookDemo}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] font-['Plus_Jakarta_Sans'] font-extrabold text-sm shadow-lg hover:brightness-110 transition-all cursor-pointer"
            >
              Start 15 Days Free Trial
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-7 py-3.5 rounded-xl bg-[#172238] border border-[#2d3a52] text-[#dae2fd] hover:text-white font-semibold text-sm transition-all cursor-pointer"
            >
              View Pricing (₹3k/mo)
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
