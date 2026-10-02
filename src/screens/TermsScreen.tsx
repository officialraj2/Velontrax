import React from 'react';
import { ScreenType } from '../types/index.ts';

interface TermsScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenBookDemo: () => void;
  onShowToast: (message: string) => void;
}

export const TermsScreen: React.FC<TermsScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4 sm:px-8 py-10 sm:py-16 text-[#dae2fd]">
      {/* Top Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#a08e7a] mb-6">
        <button
          onClick={() => onNavigate('platform-and-home')}
          className="hover:text-[#ffc174] transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-[#ffc174] font-medium">Terms of Service</span>
        <span>/</span>
        <span className="px-2 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-[10px] font-bold uppercase tracking-wider">
          Public Document
        </span>
      </div>

      {/* Header */}
      <div className="pb-8 border-b border-[#222a3d] mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172238] border border-[#2d3449] text-xs text-[#ffc174] font-semibold mb-4">
          <span className="material-symbols-outlined text-[16px]">gavel</span>
          <span>Commercial Terms of Service</span>
        </div>
        <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Terms & Conditions of Service
        </h1>
        <p className="text-sm sm:text-base text-[#d8c3ad] mt-3 max-w-3xl leading-relaxed">
          Last Updated: October 2025. These Terms of Service constitute a legally binding agreement between you and Velontra Global.
        </p>
      </div>

      {/* Independent Platform Disclaimer */}
      <div className="rounded-2xl bg-[#10172a] border border-[#ffc174]/40 p-5 sm:p-6 mb-12 shadow-lg flex flex-col gap-2.5">
        <div className="flex items-center gap-2 text-[#ffc174] text-xs font-bold uppercase tracking-wider">
          <span className="material-symbols-outlined text-[18px]">verified</span>
          <span>Meta & WhatsApp Trademark Compliance Notice</span>
        </div>
        <p className="text-xs sm:text-sm text-[#d8c3ad] leading-relaxed">
          VelontraX is an independent business operations software developed by <strong className="text-white">Velontra Global</strong>. WhatsApp® and Meta® are registered trademarks of Meta Platforms, Inc. Velontra Global is not affiliated with, endorsed by, sponsored by, or an authorized distributor of Meta Platforms, Inc. or WhatsApp Inc. Use of third-party platforms via VelontraX connectors requires compliance with respective provider terms.
        </p>
      </div>

      {/* Terms Body */}
      <div className="space-y-10 text-sm leading-relaxed text-[#d8c3ad]">
        {/* 1. Legal Entity */}
        <section className="space-y-3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#ffc174]">01.</span>
            <span>Contracting Party & Business Information</span>
          </h2>
          <p>
            You are contracting with:
          </p>
          <div className="p-4 rounded-xl bg-[#0e1628] border border-[#222f47] text-xs text-[#dae2fd] space-y-1.5 font-mono">
            <div><strong className="text-white">Company Name:</strong> Velontra Global</div>
            <div><strong className="text-white">Jurisdiction:</strong> Himachal Pradesh, India</div>
            <div><strong className="text-white">Registered Address:</strong> Chatti, Rampur Bushahr, Shimla, Himachal Pradesh 172001, India</div>
            <div><strong className="text-white">Legal & Compliance Email:</strong> velontrax@gmail.com</div>
          </div>
        </section>

        {/* 2. Platform Usage & Scope */}
        <section className="space-y-3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#ffc174]">02.</span>
            <span>Platform License & Authorized Use</span>
          </h2>
          <p>
            VelontraX grants customers a non-exclusive, non-transferable, revocable license to access the autonomous AI workflow platform for legitimate commercial business operations, lead communication, and CRM pipeline management.
          </p>
        </section>

        {/* 3. Meta & WhatsApp Compliance Mandate */}
        <section className="space-y-3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#ffc174]">03.</span>
            <span>Compliance with Meta & WhatsApp Messaging Policies</span>
          </h2>
          <p>
            Customers utilizing VelontraX integration modules connecting to Meta Platforms (including WhatsApp Business Platform, Facebook Lead Ads, or Instagram Messaging) must strictly adhere to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
            <li>
              <strong className="text-white">Strict Opt-In Requirement:</strong> Customers must obtain explicit, verifiable prior consent from individuals before dispatching automated WhatsApp messages or automated phone calls.
            </li>
            <li>
              <strong className="text-white">Zero Tolerance for Unsolicited Spam:</strong> Dispatching unsolicited marketing campaigns, cold message blasting, or deceptive communication is strictly prohibited and causes immediate account termination without refund.
            </li>
            <li>
              <strong className="text-white">WhatsApp Business Messaging Policy:</strong> Customers must abide by all Meta guidelines regarding template messaging, customer care windows (24-hour rule), and prohibited goods or services.
            </li>
            <li>
              <strong className="text-white">Opt-Out Mechanisms:</strong> Customers must honor all STOP, UNSUBSCRIBE, or opt-out requests instantly without manual intervention.
            </li>
          </ul>
        </section>

        {/* 4. Data Protection & Deletion */}
        <section className="space-y-3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#ffc174]">04.</span>
            <span>Data Protection & Privacy Rights</span>
          </h2>
          <p>
            Our processing of personal data is governed by our publicly available <button onClick={() => onNavigate('privacy-policy')} className="text-[#ffc174] underline font-bold cursor-pointer">Privacy Policy</button>. You may submit a data deletion request at any time to <a href="mailto:velontrax@gmail.com" className="text-[#ffc174] underline font-bold">velontrax@gmail.com</a> or via our dedicated Data Deletion portal.
          </p>
        </section>

        {/* 5. Limitation of Liability */}
        <section className="space-y-3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#ffc174]">05.</span>
            <span>Uptime SLA & Limitation of Liability</span>
          </h2>
          <p>
            VelontraX provides a 99.98% platform availability SLA for enterprise tier subscribers. To the maximum extent permitted by applicable law, Velontra Global shall not be liable for indirect, incidental, or consequential damages resulting from third-party API provider throttling, telecom outages, or unauthorized third-party access.
          </p>
        </section>

        {/* 6. Governing Law */}
        <section className="space-y-3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#ffc174]">06.</span>
            <span>Governing Law & Dispute Resolution</span>
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
          </p>
        </section>
      </div>

      {/* Navigation */}
      <div className="mt-14 pt-8 border-t border-[#222a3d] flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => {
            onNavigate('platform-and-home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-5 py-2.5 rounded-xl bg-[#172238] hover:bg-[#202f4d] border border-[#2d3a54] text-xs font-bold text-white flex items-center gap-2 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back to Home</span>
        </button>

        <button
          onClick={() => {
            onNavigate('privacy-policy');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-[#ffc174] hover:text-white underline underline-offset-4 flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>View Privacy Policy &amp; Data Deletion Route</span>
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
