import React, { useState, useEffect } from 'react';
import { ScreenType } from '../types/index.ts';
import { auth } from '../firebase.ts';
import { onAuthStateChanged, User } from 'firebase/auth';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenBookDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenBookDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authUser, setAuthUser] = useState<User | null>(null);

  useEffect(() => {
    // Ensure clean state without residual light theme
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('light-theme');
      document.documentElement.classList.add('dark-theme');
      localStorage.removeItem('velontrax_theme');
    }

    const unsub = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
    });
    return () => unsub();
  }, []);

  const navItems: { id: ScreenType; label: string }[] = [
    { id: 'platform-and-home', label: 'Platform' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'solutions-smart-crm-and-leads', label: 'Solutions' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'docs', label: 'Integrations & Guide' },
  ];

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060e20]/85 backdrop-blur-xl border-b border-[#222a3d]/60 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
      <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div 
          onClick={() => handleNavClick('platform-and-home')}
          className="flex items-center cursor-pointer group select-none"
        >
          <div className="flex items-center font-['Plus_Jakarta_Sans'] text-2xl font-extrabold tracking-tight transition-transform duration-200 group-hover:scale-105">
            <span className="text-white">velontra</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#ffc174] drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]">X</span>
          </div>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm transition-colors duration-200 cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-[#ffc174] font-bold'
                    : 'text-[#d8c3ad] hover:text-[#dae2fd]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ffc174] rounded-full shadow-[0_0_8px_#ffc174]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#172238] border border-[#2d3a52] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"></span>
            <span className="text-[11px] uppercase tracking-wider text-[#dae2fd] font-semibold">
              <span className="text-[#ffc174] font-bold">&lt; 60s</span> Lead Response
            </span>
          </div>

          <button
            onClick={onOpenBookDemo}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] via-[#ffc174] to-[#f59e0b] text-[#472a00] font-['Plus_Jakarta_Sans'] text-sm font-extrabold shadow-[0_0_24px_rgba(245,158,11,0.45)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <span>Book Demo</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#dae2fd] hover:text-[#ffc174] rounded-lg bg-[#171f33] border border-[#2d3449]"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e172a] border-b border-[#222a3d] px-6 py-4 flex flex-col gap-3 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-sm py-2 px-3 rounded-lg transition-colors ${
                currentScreen === item.id
                  ? 'bg-[#171f33] text-[#ffc174] font-bold'
                  : 'text-[#d8c3ad] hover:bg-[#131b2e]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2 border-t border-[#1f2b42]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookDemo();
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#f59e0b] to-[#ffc174] text-[#472a00] font-bold text-sm text-center cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.35)]"
            >
              Book Demo / Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
