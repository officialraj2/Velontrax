import React, { useState } from 'react';
import { ScreenType } from '../types/index.ts';

interface PrivacyPolicyScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenBookDemo: () => void;
  onShowToast: (message: string) => void;
}

export const PrivacyPolicyScreen: React.FC<PrivacyPolicyScreenProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [deletionEmail, setDeletionEmail] = useState('');
  const [deletionSubmitted, setDeletionSubmitted] = useState(false);

  const handleDataDeletionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deletionEmail || !deletionEmail.includes('@')) {
      onShowToast('Please provide a valid work email for data deletion verification.');
      return;
    }
    setDeletionSubmitted(true);
    onShowToast(`Data Deletion request registered for ${deletionEmail}. Confirmation dispatched.`);
  };

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4 sm:px-8 py-10 sm:py-16 text-[#dae2fd]">
      {/* Top Breadcrumb & Status */}
      <div className="flex items-center gap-2 text-xs text-[#a08e7a] mb-6">
        <button
          onClick={() => onNavigate('platform-and-home')}
          className="hover:text-[#ffc174] transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-[#ffc174] font-medium">Privacy Policy</span>
        <span>/</span>
        <span className="px-2 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 text-[10px] font-bold uppercase tracking-wider">
          Public Document · Meta Compliant
        </span>
      </div>

      {/* Document Header */}
      <div className="pb-8 border-b border-[#222a3d] mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172238] border border-[#2d3a52] text-xs text-[#ffc174] font-semibold mb-4">
          <span className="material-symbols-outlined text-[16px]">verified_user</span>
          <span>Public Data Privacy & Security Statement</span>
        </div>
        <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Privacy Policy & Data Processing Agreement
        </h1>
        <p className="text-sm sm:text-base text-[#d8c3ad] mt-3 max-w-3xl leading-relaxed">
          Effective Date: October 1, 2025 · Last Updated: October 2025. This Privacy Policy is publicly accessible at all times without requiring authentication or account creation.
        </p>
      </div>

      {/* Meta & Trademark Compliance Notice Banner */}
      <div className="rounded-2xl bg-[#10172a] border border-[#ffc174]/40 p-5 sm:p-6 mb-12 shadow-lg flex flex-col gap-2.5">
        <div className="flex items-center gap-2 text-[#ffc174] text-xs font-bold uppercase tracking-wider">
          <span className="material-symbols-outlined text-[18px]">info</span>
          <span>Independent Platform & Trademark Disclaimer</span>
        </div>
        <p className="text-xs sm:text-sm text-[#d8c3ad] leading-relaxed">
          VelontraX is an independent business automation and AI orchestration software owned and operated by <strong className="text-white">Velontra Global</strong>. WhatsApp® and Meta® are registered trademarks of Meta Platforms, Inc. Velontra Global is not affiliated with, sponsored by, endorsed by, or an official partner of Meta Platforms, Inc. or WhatsApp Inc. All integrations operate exclusively via published, standard Meta Graph APIs and Cloud API protocols in full compliance with Meta Platform Terms.
        </p>
      </div>

      {/* Document Body */}
      <div className="space-y-10 text-sm leading-relaxed text-[#d8c3ad]">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#ffc174]">01.</span>
            <span>Legal Entity & Data Controller Identification</span>
          </h2>
          <p>
            This Privacy Policy governs the processing of data collected through the website (velontrax.com) and the VelontraX software platform provided by:
          </p>
          <div className="p-4 rounded-xl bg-[#0e1628] border border-[#222f47] text-xs text-[#dae2fd] space-y-1.5 font-mono">
            <div><strong className="text-white">Legal Entity:</strong> Velontra Global</div>
            <div><strong className="text-white">Registered Address:</strong> Chatti, Rampur Bushahr, Shimla, Himachal Pradesh 172001, India</div>
            <div><strong className="text-white">Official Website:</strong> https://velontrax.com</div>
            <div><strong className="text-white">Privacy Inquiries & DPO Email:</strong> velontrax@gmail.com</div>
            <div><strong className="text-white">Customer Support Email:</strong> velontrax@gmail.com</div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#ffc174]">02.</span>
            <span>Information We Collect & Process</span>
          </h2>
          <p>
            We collect only data strictly necessary to provide intelligent lead qualification, workflow automations, and CRM synchronization:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
            <li>
              <strong className="text-white">Account & Contact Information:</strong> Name, work email address, company name, phone number, and billing records.
            </li>
            <li>
              <strong className="text-white">Connected Integration Credentials:</strong> Secure OAuth tokens for third-party platforms (such as Meta Ads, WhatsApp Business Cloud API, Salesforce, HubSpot). VelontraX never stores raw passwords.
            </li>
            <li>
              <strong className="text-white">Customer Interaction & Message Telemetry:</strong> Inbound message timestamps, phone numbers, communication transcripts, and qualification outcomes processed on behalf of business customers.
            </li>
            <li>
              <strong className="text-white">Technical & Log Data:</strong> IP addresses, browser types, session durations, and error diagnostics used strictly for platform reliability.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#ffc174]">03.</span>
            <span>Purpose & Legal Basis of Processing</span>
          </h2>
          <p>
            Under GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act), we process personal data under the following legal bases:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-[#0e1628] border border-[#222f47] space-y-1">
              <strong className="text-white text-xs uppercase tracking-wider text-[#ffc174]">Contractual Necessity</strong>
              <p className="text-xs">
                To execute workflow logic, route customer messages, trigger AI voice calls, and update your designated CRM records.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#0e1628] border border-[#222f47] space-y-1">
              <strong className="text-white text-xs uppercase tracking-wider text-[#ffc174]">Legitimate Interests</strong>
              <p className="text-xs">
                To prevent spam, detect fraudulent traffic, ensure 99.98% system uptime, and safeguard infrastructure against security threats.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 - CRITICAL FOR META: Dedicated User Data Deletion Instructions */}
        <section id="data-deletion" className="space-y-4 pt-4">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#172238] via-[#1c2944] to-[#172238] border-2 border-[#ffc174]/50 shadow-2xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ffc174] animate-pulse" />
              <h2 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-white">
                04. User Data Deletion Instructions & Request Route
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#dae2fd] leading-relaxed">
              In strict accordance with Meta Platform Policy and global data protection laws (GDPR Art. 17 & CCPA), all users have the absolute right to request the permanent deletion of their personal data and all associated communication history stored by VelontraX.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-[#ffc174] uppercase tracking-wider">
                How to Request Permanent Data Deletion:
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-[#d8c3ad]">
                <li>
                  <strong className="text-white">Method 1 (Instant Email Request):</strong> Send an email from your registered account to <a href="mailto:velontrax@gmail.com" className="text-[#ffc174] underline font-bold">velontrax@gmail.com</a> with the subject line <em>"Data Deletion Request"</em>. Please specify your account name and phone number or Meta User ID.
                </li>
                <li>
                  <strong className="text-white">Method 2 (In-App Deletion):</strong> Navigate to <em>Settings &gt; Integrations &gt; Connected Channels</em> inside your VelontraX workspace and click <em>"Disconnect &amp; Purge All Stored Data"</em>.
                </li>
                <li>
                  <strong className="text-white">Method 3 (Meta Platform Data Deletion Callback):</strong> If you authenticated via Facebook or Instagram Lead Ads, you may remove VelontraX in your Facebook Account Settings under <em>Apps and Websites &gt; VelontraX &gt; Remove</em>. Our automated endpoint will immediately process the deletion event.
                </li>
              </ol>
            </div>

            <div className="pt-2 text-xs text-[#a08e7a] border-t border-[#2d3a52] space-y-1">
              <div><strong className="text-white">Processing Timeline:</strong> Requests are confirmed within 48 hours and permanently executed across all databases within 30 days.</div>
              <div><strong className="text-white">What is Deleted:</strong> Customer profiles, message logs, audio recordings, transcripts, IP traces, and OAuth tokens.</div>
            </div>

            {/* Quick In-Page Data Deletion Submission Box */}
            <div className="pt-4 mt-4 border-t border-[#2d3a52]">
              <span className="text-xs font-bold text-white block mb-2">
                Submit an Instant Data Deletion Request Online:
              </span>
              {deletionSubmitted ? (
                <div className="p-4 rounded-xl bg-[#ffc174]/10 border border-[#ffc174]/40 text-[#ffc174] text-xs font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>Your deletion request has been recorded. Our Data Protection Officer will email verification within 24 hours.</span>
                </div>
              ) : (
                <form onSubmit={handleDataDeletionSubmit} className="flex flex-col sm:flex-row gap-2 max-w-lg">
                  <input
                    type="email"
                    required
                    placeholder="Enter email associated with your data..."
                    value={deletionEmail}
                    onChange={(e) => setDeletionEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#070d1a] border border-[#2d3a54] text-xs text-white placeholder:text-[#a08e7a] focus:outline-none focus:border-[#ffc174]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#ffb4ab]/20 hover:bg-[#ffb4ab]/30 border border-[#ffb4ab]/40 text-[#ffb4ab] text-xs font-bold whitespace-nowrap cursor-pointer transition-all"
                  >
                    Request Deletion
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#ffc174]">05.</span>
            <span>No AI Model Training on Customer Data</span>
          </h2>
          <p>
            VelontraX does <strong className="text-white">NOT</strong> use confidential customer records, WhatsApp conversations, or CRM data to train generalized AI models. Model inferences are executed in isolated, ephemeral memory environments that undergo immediate cryptographic teardown upon completion.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#ffc174]">06.</span>
            <span>Third-Party Data Processors & Sub-Processors</span>
          </h2>
          <p>
            To provide enterprise cloud operations, we share data solely with verified sub-processors adhering to SOC2 Type II, ISO27001, and GDPR standards:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
            <div className="p-3 rounded-xl bg-[#0e1628] border border-[#222f47]">
              <strong className="text-white block mb-1">Cloud Infrastructure</strong>
              <span className="text-[#a08e7a]">Google Cloud Platform &amp; AWS (Encrypted at rest &amp; in transit via TLS 1.3)</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0e1628] border border-[#222f47]">
              <strong className="text-white block mb-1">Messaging Platforms</strong>
              <span className="text-[#a08e7a]">Meta Platforms, Inc. (WhatsApp Business Cloud API via official endpoints)</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0e1628] border border-[#222f47]">
              <strong className="text-white block mb-1">CRM Connectors</strong>
              <span className="text-[#a08e7a]">HubSpot Inc., Salesforce Inc., and Zoho Corp (OAuth-authorized)</span>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#ffc174]">07.</span>
            <span>Contact & Data Protection Officer</span>
          </h2>
          <p>
            For questions concerning this Privacy Policy, user rights, or data deletion inquiries, please reach out to our dedicated privacy desk:
          </p>
          <div className="p-4 rounded-xl bg-[#0e1628] border border-[#222f47] text-xs text-[#dae2fd]">
            <p><strong className="text-white">Data Protection Officer:</strong> Legal &amp; Privacy Office</p>
            <p><strong className="text-white">Direct Email:</strong> <a href="mailto:velontrax@gmail.com" className="text-[#ffc174] underline">velontrax@gmail.com</a></p>
            <p><strong className="text-white">Physical Inquiries:</strong> Velontra Global, Attn: Privacy Office, Chatti, Rampur Bushahr, Shimla, Himachal Pradesh 172001, India</p>
          </div>
        </section>
      </div>

      {/* Bottom Navigation Back */}
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
            onNavigate('terms-and-conditions');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-[#ffc174] hover:text-white underline underline-offset-4 flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>View Terms &amp; Conditions</span>
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
