import React, { useState } from 'react';
import { ScreenType } from '../types/index.ts';

interface AuthScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenBookDemo: () => void;
  onShowToast: (message: string) => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onNavigate, onOpenBookDemo, onShowToast }) => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>('signin');
  const [showPassword, setShowPassword] = useState(false);

  // Form states (interactive for visual display)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Functionality turned off as requested:
  // Open 15-Day Free Trial & Demo booking form
  const handleAuthAction = (e: React.FormEvent, actionType: string) => {
    e.preventDefault();
    onShowToast(
      'Enterprise Client Portal is currently in private beta rollout. Opening 15-Day Free Trial form...'
    );
    onOpenBookDemo();
  };

  const handleGoogleClick = () => {
    onShowToast('Opening 15-Day Free Trial & Live Demo reservation form...');
    onOpenBookDemo();
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-10 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Brand Value & Direct Action Banner */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc174]/15 border border-[#ffc174]/40 text-[#ffc174] text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
            <span>Autonomous AI Sales & WhatsApp Engine</span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            India's #1 AI Automation & CRM Ecosystem
          </h1>

          <p className="text-sm sm:text-base text-[#8ba2cb] leading-relaxed">
            Velontrax powers autonomous WhatsApp communication, CRM lead qualification, marketing funnels, and real-time conversion tracking for modern businesses.
          </p>

          {/* High-Priority Instant Trial & Demo Card in Brand Gold */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#172238] via-[#10172a] to-[#1c2942] border border-[#ffc174]/40 shadow-2xl relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#f59e0b]/10 rounded-full blur-[70px] pointer-events-none" />

            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#ffc174]/20 border border-[#ffc174]/40 text-[#ffc174] text-xs font-bold uppercase tracking-wider">
                Direct Onboarding
              </span>
              <span className="text-xs text-[#ffc174] font-semibold">Priority Architecture Access</span>
            </div>

            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white">
              Get Instant Access: 15-Day Free Trial or Live Demo
            </h3>
            <p className="text-xs sm:text-sm text-[#d8c3ad] leading-relaxed">
              No waiting required. Submit your business inquiry to receive a 1-on-1 architecture walkthrough and instant credentials sent directly to your email and WhatsApp.
            </p>

            <button
              onClick={onOpenBookDemo}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#f59e0b] via-[#ffc174] to-[#f59e0b] text-[#472a00] font-['Plus_Jakarta_Sans'] font-extrabold text-sm shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_45px_rgba(245,158,11,0.65)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">bolt</span>
              <span>Claim 15-Day Free Trial & Book Demo</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-[#172238]/60 border border-[#2d3a52] flex items-center gap-3">
              <span className="material-symbols-outlined text-[#ffc174] text-[22px]">verified</span>
              <div>
                <div className="text-xs font-bold text-white">15-Day Live Trial</div>
                <div className="text-[11px] text-[#8ba2cb]">Full 94+ Features</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#172238]/60 border border-[#2d3a52] flex items-center gap-3">
              <span className="material-symbols-outlined text-[#ffc174] text-[22px]">support_agent</span>
              <div>
                <div className="text-xs font-bold text-white">Dedicated Support</div>
                <div className="text-[11px] text-[#8ba2cb]">Direct 1-on-1 Specialist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Display-Only Auth Panel ("Sirf Dikhane Ke Liye") */}
        <div className="lg:col-span-6">
          <div className="bg-[#10172a] border border-[#222f47] rounded-3xl p-6 sm:p-9 shadow-2xl relative">
            
            {/* Private Beta Badge */}
            <div className="mb-5 p-3 rounded-2xl bg-[#172238]/80 border border-[#ffc174]/30 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffc174] text-[18px]">lock</span>
                <span className="text-xs font-bold text-white">Enterprise Portal Access</span>
              </div>
              <span className="text-[11px] text-[#ffc174] bg-[#ffc174]/10 border border-[#ffc174]/30 px-2 py-0.5 rounded-full font-semibold">
                Private Beta
              </span>
            </div>

            {/* Mode Switcher */}
            <div className="flex rounded-xl bg-[#172238] p-1 mb-6 border border-[#2d3a52]">
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                  mode === 'signin'
                    ? 'bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] shadow-sm font-extrabold'
                    : 'text-[#8ba2cb] hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                  mode === 'signup'
                    ? 'bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] shadow-sm font-extrabold'
                    : 'text-[#8ba2cb] hover:text-white'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* 1-Click Google Button (Display only) */}
            <button
              type="button"
              onClick={handleGoogleClick}
              className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-3 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all mb-5 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-[#222f47]" />
              <span className="text-[11px] text-[#4f6485] uppercase tracking-wider font-semibold">Or with Email</span>
              <div className="flex-1 h-px bg-[#222f47]" />
            </div>

            {/* FORM: SIGN IN */}
            {mode === 'signin' && (
              <form onSubmit={(e) => handleAuthAction(e, 'signin')} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#8ba2cb] uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@business.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#172238] border border-[#2d3a52] rounded-xl text-white placeholder-[#4f6485] focus:outline-none focus:border-[#ffc174] text-sm"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#8ba2cb] uppercase tracking-wider">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setMode('forgot')}
                      className="text-xs text-[#ffc174] hover:underline"
                    >
                      Forgot?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-[#172238] border border-[#2d3a52] rounded-xl text-white placeholder-[#4f6485] focus:outline-none focus:border-[#ffc174] text-sm pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-[#4f6485] hover:text-[#dae2fd]"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#f59e0b] via-[#ffc174] to-[#f59e0b] text-[#472a00] font-bold text-sm shadow-lg shadow-[#f59e0b]/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Sign In to Workspace</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </form>
            )}

            {/* FORM: SIGN UP */}
            {mode === 'signup' && (
              <form onSubmit={(e) => handleAuthAction(e, 'signup')} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#8ba2cb] uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vikram Singhania"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#172238] border border-[#2d3a52] rounded-xl text-white placeholder-[#4f6485] focus:outline-none focus:border-[#ffc174] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8ba2cb] uppercase tracking-wider mb-1.5">
                    Business / Agency Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Singhania Digital Growth"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#172238] border border-[#2d3a52] rounded-xl text-white placeholder-[#4f6485] focus:outline-none focus:border-[#ffc174] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8ba2cb] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#172238] border border-[#2d3a52] rounded-xl text-white placeholder-[#4f6485] focus:outline-none focus:border-[#ffc174] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8ba2cb] uppercase tracking-wider mb-1.5">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-[#172238] border border-[#2d3a52] rounded-xl text-white placeholder-[#4f6485] focus:outline-none focus:border-[#ffc174] text-sm pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-[#4f6485] hover:text-[#dae2fd]"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-1 rounded bg-[#172238] border-[#2d3a52] text-[#f59e0b] focus:ring-0"
                  />
                  <label htmlFor="agreeTerms" className="text-xs text-[#8ba2cb] leading-relaxed">
                    I agree to the{' '}
                    <button
                      type="button"
                      onClick={() => onNavigate('terms-and-conditions')}
                      className="text-[#ffc174] hover:underline"
                    >
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button
                      type="button"
                      onClick={() => onNavigate('privacy-policy')}
                      className="text-[#ffc174] hover:underline"
                    >
                      Privacy Policy
                    </button>
                    . Includes 15-Day Free Live Trial.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#f59e0b] via-[#ffc174] to-[#f59e0b] text-[#472a00] font-bold text-sm shadow-lg shadow-[#f59e0b]/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start 15-Day Free Trial & Register</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </form>
            )}

            {/* FORM: FORGOT PASSWORD */}
            {mode === 'forgot' && (
              <form onSubmit={(e) => handleAuthAction(e, 'forgot')} className="space-y-4">
                <p className="text-xs text-[#8ba2cb] leading-relaxed">
                  Enter your registered email address. Password reset instructions will be coordinated with our system administrator.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-[#8ba2cb] uppercase tracking-wider mb-1.5">
                    Account Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@business.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#172238] border border-[#2d3a52] rounded-xl text-white placeholder-[#4f6485] focus:outline-none focus:border-[#ffc174] text-sm"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setMode('signin')}
                    className="flex-1 py-2.5 rounded-xl border border-[#2d3a52] text-xs font-semibold text-[#8ba2cb] hover:text-white"
                  >
                    Back to Sign In
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] font-bold text-xs shadow-md hover:scale-105 transition-all"
                  >
                    Request Reset
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
