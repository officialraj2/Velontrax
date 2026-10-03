/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenType } from './types/index.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { CopilotWidget } from './components/CopilotWidget.tsx';
import { BookDemoModal } from './components/BookDemoModal.tsx';
import { InspectPromptModal } from './components/InspectPromptModal.tsx';
import { Toast } from './components/Toast.tsx';
import { PlatformHome } from './screens/PlatformHome.tsx';
import { HowItWorks } from './screens/HowItWorks.tsx';
import { Solutions } from './screens/Solutions.tsx';
import { PricingScreen } from './screens/PricingScreen.tsx';
import { DocsScreen } from './screens/DocsScreen.tsx';
import { PrivacyPolicyScreen } from './screens/PrivacyPolicyScreen.tsx';
import { TermsScreen } from './screens/TermsScreen.tsx';
import { AuthScreen } from './screens/AuthScreen.tsx';
import { NetworkNodesBackground } from './components/NetworkNodesBackground.tsx';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'privacy-policy') return 'privacy-policy';
      if (hash === 'terms-and-conditions') return 'terms-and-conditions';
      if (hash === 'how-it-works') return 'how-it-works';
      if (hash === 'solutions' || hash === 'solutions-smart-crm-and-leads') return 'solutions-smart-crm-and-leads';
      if (hash === 'pricing') return 'pricing';
      if (hash === 'docs' || hash === 'integrations') return 'docs';
      if (hash === 'auth' || hash === 'login' || hash === 'sign-in') return 'auth';
    }
    return 'platform-and-home';
  });
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [inspectPrompt, setInspectPrompt] = useState<{
    isOpen: boolean;
    leadName: string;
    leadCompany: string;
  }>({
    isOpen: false,
    leadName: 'Marcus Vance',
    leadCompany: 'Chronos Logistics Inc.',
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync hash routing on window popstate/hashchange
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'privacy-policy') setCurrentScreen('privacy-policy');
      else if (hash === 'terms-and-conditions') setCurrentScreen('terms-and-conditions');
      else if (hash === 'how-it-works') setCurrentScreen('how-it-works');
      else if (hash === 'solutions' || hash === 'solutions-smart-crm-and-leads') setCurrentScreen('solutions-smart-crm-and-leads');
      else if (hash === 'pricing') setCurrentScreen('pricing');
      else if (hash === 'docs' || hash === 'integrations') setCurrentScreen('docs');
      else if (hash === 'auth' || hash === 'login' || hash === 'sign-in') setCurrentScreen('auth');
      else if (hash === 'platform-and-home' || hash === '') setCurrentScreen('platform-and-home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4500);
  };

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    if (typeof window !== 'undefined') {
      if (screen === 'platform-and-home') {
        window.history.pushState(null, '', window.location.pathname);
      } else {
        window.location.hash = screen;
      }
    }
    window.scrollTo(0, 0);
  };

  const handleOpenInspectPrompt = (leadName: string, leadCompany: string) => {
    setInspectPrompt({
      isOpen: true,
      leadName,
      leadCompany,
    });
  };

  return (
    <div className="min-h-screen bg-[#060d1e] text-[#dae2fd] font-['Inter'] flex flex-col selection:bg-[#f59e0b] selection:text-[#613b00] relative">
      {/* Dynamic Network Points & Connected Glowing Nodes Background - Active Across All Pages */}
      <NetworkNodesBackground />

      {/* Fixed Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenBookDemo={() => setIsBookDemoOpen(true)}
      />

        {/* Main Content Area */}
        <main className="w-full pt-20 flex-1 relative z-10">
        {currentScreen === 'platform-and-home' && (
          <PlatformHome
            onNavigate={handleNavigate}
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'how-it-works' && (
          <HowItWorks
            onNavigate={handleNavigate}
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'solutions-smart-crm-and-leads' && (
          <Solutions
            onNavigate={handleNavigate}
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenInspectPrompt={handleOpenInspectPrompt}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'pricing' && (
          <PricingScreen
            onNavigate={handleNavigate}
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'docs' && (
          <DocsScreen
            onNavigate={handleNavigate}
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'privacy-policy' && (
          <PrivacyPolicyScreen
            onNavigate={handleNavigate}
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'terms-and-conditions' && (
          <TermsScreen
            onNavigate={handleNavigate}
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'auth' && (
          <AuthScreen
            onNavigate={handleNavigate}
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBookDemo={() => setIsBookDemoOpen(true)}
        onShowToast={showToast}
      />

      {/* Persistent Floating AI Copilot Assistant */}
      <CopilotWidget
        onShowToast={showToast}
        onOpenBookDemo={() => setIsBookDemoOpen(true)}
      />

      {/* Book Demo Modal */}
      <BookDemoModal
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
        onSuccess={showToast}
      />

      {/* Inspect Prompt & Chain-of-Thought Modal */}
      <InspectPromptModal
        isOpen={inspectPrompt.isOpen}
        onClose={() => setInspectPrompt((prev) => ({ ...prev, isOpen: false }))}
        leadName={inspectPrompt.leadName}
        leadCompany={inspectPrompt.leadCompany}
      />

      {/* Global Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
