import React, { useState } from 'react';
import { ScreenType } from '../types/index.ts';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
  onShowToast: (message: string) => void;
  onOpenBookDemo?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onShowToast, onOpenBookDemo }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    onShowToast('Subscribed to Velontra Global updates & playbooks.');
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#060e20] pt-12 pb-8 text-[#d8c3ad] border-t border-[#222a3d]/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info & Legal Entity */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div 
              onClick={() => onNavigate('platform-and-home')}
              className="flex items-center cursor-pointer group select-none"
            >
              <div className="flex items-center font-['Plus_Jakarta_Sans'] text-2xl font-extrabold tracking-tight transition-transform duration-200 group-hover:scale-105">
                <span className="text-white">velontra</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#ffc174] drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]">X</span>
              </div>
            </div>

            <p className="text-sm text-[#d8c3ad] max-w-sm leading-relaxed">
              All-in-One AI Sales, WhatsApp CRM &amp; Workflow Automation platform engineered by <strong className="text-white">Velontra Global</strong>.
            </p>

            <div className="text-xs text-[#a08e7a] space-y-1.5 p-3.5 rounded-xl bg-[#0b1326] border border-[#1f2b42]">
              <div><strong className="text-[#dae2fd]">Legal Registered Entity:</strong> Velontra Global</div>
              <div><strong className="text-[#dae2fd]">Registered Address:</strong> Chatti, Rampur Bushahr, Shimla, Himachal Pradesh 172001, India</div>
              <div><strong className="text-[#dae2fd]">Official Contact:</strong> <a href="mailto:velontrax@gmail.com" className="text-[#ffc174] hover:underline">velontrax@gmail.com</a></div>
            </div>

            <div className="flex items-center gap-2 flex-wrap pt-1">
              <span className="px-3 py-1 rounded-full bg-[#121c30] border border-[#222f47] text-[#ffc174] text-xs font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                WhatsApp Cloud API Ready
              </span>
              <span className="px-3 py-1 rounded-full bg-[#121c30] border border-[#222f47] text-[#dae2fd] text-xs font-medium">
                GST Invoicing Compliant
              </span>
              <span className="px-3 py-1 rounded-full bg-[#121c30] border border-[#222f47] text-[#dae2fd] text-xs font-medium">
                Made in India 🇮🇳
              </span>
            </div>
          </div>

          {/* Solutions & Verticals */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#dae2fd] uppercase tracking-wider mb-1">
              Solutions
            </span>
            <button
              onClick={() => onNavigate('solutions-smart-crm-and-leads')}
              className="text-left text-sm text-[#d8c3ad] hover:text-[#ffc174] transition-colors cursor-pointer"
            >
              Digital Agencies
            </button>
            <button
              onClick={() => onNavigate('solutions-smart-crm-and-leads')}
              className="text-left text-sm text-[#d8c3ad] hover:text-[#ffc174] transition-colors cursor-pointer"
            >
              E-commerce &amp; D2C
            </button>
            <button
              onClick={() => onNavigate('solutions-smart-crm-and-leads')}
              className="text-left text-sm text-[#d8c3ad] hover:text-[#ffc174] transition-colors cursor-pointer"
            >
              Real Estate &amp; Builders
            </button>
            <button
              onClick={() => onNavigate('solutions-smart-crm-and-leads')}
              className="text-left text-sm text-[#d8c3ad] hover:text-[#ffc174] transition-colors cursor-pointer"
            >
              Education &amp; Coaching
            </button>
            <button
              onClick={() => onNavigate('solutions-smart-crm-and-leads')}
              className="text-left text-sm text-[#d8c3ad] hover:text-[#ffc174] transition-colors cursor-pointer"
            >
              94+ Features Directory
            </button>
          </div>

          {/* Platform & Pricing */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#dae2fd] uppercase tracking-wider mb-1">
              Pricing &amp; Plans
            </span>
            <button
              onClick={() => onNavigate('pricing')}
              className="text-left text-sm text-[#d8c3ad] hover:text-[#ffc174] transition-colors cursor-pointer"
            >
              Monthly Plan (₹3,000)
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="text-left text-sm text-[#d8c3ad] hover:text-[#ffc174] transition-colors cursor-pointer"
            >
              Annual Plan (Save ₹16k)
            </button>
            <button
              onClick={onOpenBookDemo || (() => onNavigate('pricing'))}
              className="text-left text-sm text-[#ffc174] hover:underline transition-colors cursor-pointer font-semibold flex items-center gap-1"
            >
              <span>15-Day Free Trial</span>
              <span className="material-symbols-outlined text-[14px]">bolt</span>
            </button>
            <button
              onClick={() => onNavigate('how-it-works')}
              className="text-left text-sm text-[#d8c3ad] hover:text-[#ffc174] transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={onOpenBookDemo || (() => onNavigate('pricing'))}
              className="text-left text-sm text-[#ffc174] hover:underline transition-colors cursor-pointer font-bold"
            >
              Sign In / Log In
            </button>
          </div>

          {/* Legal & Newsletter Digest */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#dae2fd] uppercase tracking-wider">
              Stay Updated
            </span>
            <p className="text-xs text-[#a08e7a] leading-relaxed">
              Receive WhatsApp marketing blueprints, conversion frameworks, and platform release updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 rounded-xl bg-[#121c30] border border-[#222f47] p-1.5 focus-within:border-[#ffc174] transition-colors">
              <input
                className="w-full bg-transparent px-3 text-xs text-[#dae2fd] placeholder:text-[#718096] focus:outline-none"
                placeholder="Enter your work email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] font-['Plus_Jakarta_Sans'] text-xs font-bold whitespace-nowrap hover:brightness-110 transition-all cursor-pointer"
                type="submit"
              >
                {subscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </form>

            <div className="flex items-center gap-4 text-xs text-[#a08e7a] pt-2 flex-wrap">
              <button
                onClick={() => onNavigate('privacy-policy')}
                className="hover:text-[#ffc174] cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>&bull;</span>
              <button
                onClick={() => onNavigate('terms-and-conditions')}
                className="hover:text-[#ffc174] cursor-pointer"
              >
                Terms of Service
              </button>
              <span>&bull;</span>
              <button
                onClick={() => onNavigate('privacy-policy')}
                className="hover:text-[#ffc174] cursor-pointer"
              >
                Data Deletion
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 border-t border-[#222a3d]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a08e7a]">
          <p>© 2025 Velontra Global. All rights reserved.</p>
          <div className="flex items-center gap-5 flex-wrap">
            <button 
              onClick={onOpenBookDemo || (() => onNavigate('pricing'))} 
              className="hover:text-[#ffc174] transition-colors cursor-pointer font-semibold text-white"
            >
              Sign In
            </button>
            <button 
              onClick={() => onNavigate('privacy-policy')} 
              className="hover:text-[#ffc174] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate('terms-and-conditions')} 
              className="hover:text-[#ffc174] transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>

        {/* Meta & WhatsApp Trademark Disclaimer Bar */}
        <div className="pt-4 mt-2 border-t border-[#1b263b] text-[11px] text-[#7888a6] leading-relaxed text-center sm:text-left">
          <p>
            <strong className="text-[#a08e7a]">Meta &amp; WhatsApp Trademark Disclaimer:</strong> WhatsApp® and Meta® are registered trademarks of Meta Platforms, Inc. Velontra Global is an independent software automation provider and is not sponsored, endorsed, affiliated with, or an official partner of Meta Platforms, Inc. or WhatsApp Inc. Platform capabilities operate via published Meta Graph APIs in accordance with Meta Platform Terms.
          </p>
        </div>
      </div>
    </footer>
  );
};
