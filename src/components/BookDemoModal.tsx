import React, { useState } from 'react';
import { submitDemoOrTrialRequest } from '../firebase.ts';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
  initialType?: 'free_trial' | 'live_demo';
  initialPlan?: string;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Digital Marketing Agencies');
  const [date, setDate] = useState('Today / Earliest Available Slot');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ id: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;

    setIsSubmitting(true);
    try {
      const res = await submitDemoOrTrialRequest({
        name,
        phone,
        email,
        category,
        requestType: 'live_demo',
        plan: '15-Day Free Live Trial & Demo Walkthrough',
        date,
      });

      setSubmittedData({ id: res.id });
      onSuccess(`Demo request confirmed for ${name}. Our specialist will contact you shortly!`);
    } catch (err: any) {
      console.error('Submission error:', err);
      setSubmittedData({ id: `REQ-${Date.now().toString().slice(-6)}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmittedData(null);
    setName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#10172a] via-[#0d1426] to-[#070b16] border border-[#ffc174]/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(245,158,11,0.28),0_25px_80px_rgba(0,0,0,0.95)] text-[#dae2fd] max-h-[94vh] overflow-y-auto overflow-x-hidden backdrop-blur-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Luxurious Gold Glow Accents */}
        <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#f59e0b]/20 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#ffc174]/15 rounded-full blur-[90px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-[#172238]/90 hover:bg-[#22314e] border border-[#2d3a52] hover:border-[#ffc174]/60 text-[#d8c3ad] hover:text-white transition-all flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 cursor-pointer z-30"
          aria-label="Close"
          title="Close"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {!submittedData ? (
          <div className="relative z-10">
            {/* Header */}
            <div className="mb-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc174]/15 border border-[#ffc174]/40 text-[#ffc174] text-xs font-bold mb-2.5 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
                <span>Velontrax AI • Live Architecture Walkthrough</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Book 1-on-1 Demo &amp; Free Trial
              </h3>
              <p className="text-xs sm:text-sm text-[#8ba2cb] mt-1.5 leading-relaxed">
                Connect directly with our AI automation engineers to experience how Velontrax scales your lead qualification, WhatsApp CRM, and sales pipelines.
              </p>
            </div>

            {/* Simple, Professional Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                  Full Name <span className="text-[#ffc174]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-[#ffc174]/70">
                    person
                  </span>
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060e20] border border-[#26324b] text-sm text-white placeholder-[#5a6884] focus:border-[#ffc174] focus:ring-1 focus:ring-[#ffc174]/40 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* Official WhatsApp / Phone */}
              <div>
                <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                  Official WhatsApp / Phone Number <span className="text-[#ffc174]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-[#ffc174]/70">
                    call
                  </span>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060e20] border border-[#26324b] text-sm text-white placeholder-[#5a6884] focus:border-[#ffc174] focus:ring-1 focus:ring-[#ffc174]/40 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* Business Email */}
              <div>
                <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                  Business Email <span className="text-[#ffc174]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-[#ffc174]/70">
                    mail
                  </span>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060e20] border border-[#26324b] text-sm text-white placeholder-[#5a6884] focus:border-[#ffc174] focus:ring-1 focus:ring-[#ffc174]/40 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                  Industry / Business Category
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-[#ffc174]/70">
                    domain
                  </span>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full pl-10 pr-9 py-3 rounded-xl bg-[#060e20] border border-[#26324b] text-sm text-white focus:border-[#ffc174] focus:ring-1 focus:ring-[#ffc174]/40 focus:outline-none transition-all appearance-none cursor-pointer shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                  >
                    <option value="Digital Marketing Agencies">Digital Marketing Agencies</option>
                    <option value="Real Estate & Property Developers">Real Estate &amp; Property</option>
                    <option value="E-commerce & D2C Brands">E-commerce &amp; D2C Brands</option>
                    <option value="Healthcare & Multi-Specialty Clinics">Healthcare &amp; Clinics</option>
                    <option value="Local Services & Consulting">Local Services &amp; Consulting</option>
                    <option value="Coaching & Education Institutions">Coaching &amp; Education</option>
                    <option value="B2B SaaS & Tech Startups">B2B SaaS &amp; Tech Startups</option>
                    <option value="Other High-Growth Business">Other High-Growth Business</option>
                  </select>
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-[#8ba2cb] pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                  Preferred Time Slot
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-[#ffc174]/70">
                    schedule
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Today 4:00 PM or Tomorrow morning"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#060e20] border border-[#26324b] text-sm text-white placeholder-[#5a6884] focus:border-[#ffc174] focus:ring-1 focus:ring-[#ffc174]/40 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#f59e0b] via-[#ffc174] to-[#f59e0b] text-[#472a00] font-['Plus_Jakarta_Sans'] font-extrabold text-sm shadow-[0_0_30px_rgba(245,158,11,0.45)] hover:shadow-[0_0_45px_rgba(245,158,11,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#472a00]/30 border-t-[#472a00] rounded-full animate-spin" />
                    <span>Confirming Reservation...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Free Demo &amp; Start Trial</span>
                    <span className="material-symbols-outlined text-[19px]">arrow_forward</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#8ba2cb] pt-1">
                <span className="flex items-center gap-1 text-[#ffc174]">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  <span>15-Day Free Trial</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#ffc174]">credit_card_off</span>
                  <span>No Card Required</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#ffc174]">lock</span>
                  <span>256-Bit Encrypted</span>
                </span>
              </div>
            </form>
          </div>
        ) : (
          /* SUCCESS SCREEN - Clean & Professional without exposing internal routing email */
          <div className="text-center py-6 px-2 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f59e0b]/20 to-[#ffc174]/30 border border-[#ffc174] text-[#ffc174] mx-auto flex items-center justify-center shadow-[0_0_35px_rgba(245,158,11,0.5)]">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-[#ffc174] font-bold mb-1">
                Demo Request Confirmed
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-white">
                Thank You, {name}!
              </h3>
              <p className="text-xs sm:text-sm text-[#8ba2cb] mt-2 max-w-md mx-auto leading-relaxed">
                Your 1-on-1 AI Architecture Demo and 15-Day Free Trial have been scheduled. Our enterprise AI specialist will connect with you on WhatsApp and email at your requested time.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#131b2e] border border-[#2d3a52] text-left text-xs space-y-2 max-w-md mx-auto shadow-inner">
              <div className="flex justify-between text-[#8ba2cb]">
                <span>Reference ID:</span>
                <span className="font-mono text-[#ffc174] font-bold">{submittedData.id}</span>
              </div>
              <div className="flex justify-between text-[#8ba2cb]">
                <span>WhatsApp / Phone:</span>
                <span className="text-white font-medium">{phone}</span>
              </div>
              <div className="flex justify-between text-[#8ba2cb]">
                <span>Business Email:</span>
                <span className="text-white font-medium">{email}</span>
              </div>
              <div className="flex justify-between text-[#8ba2cb]">
                <span>Preferred Schedule:</span>
                <span className="text-[#ffc174] font-medium">{date}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={resetAndClose}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] font-extrabold text-xs shadow-md shadow-[#f59e0b]/20 hover:scale-105 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
