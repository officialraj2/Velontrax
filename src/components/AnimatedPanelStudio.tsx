import React, { useState, useEffect, useRef } from 'react';

interface AnimatedPanelStudioProps {
  onShowToast: (message: string) => void;
  onOpenBookDemo?: () => void;
}

interface CursorAction {
  id: number;
  x: number; // percentage in 1024x640 design canvas
  y: number; // percentage in 1024x640 design canvas
  label: string;
  sidebarActive?: string;
  leadCount?: number;
  adSpend?: string;
  conversionRate?: string;
  novaPrompt?: string;
  novaResponse?: string;
}

export const AnimatedPanelStudio: React.FC<AnimatedPanelStudioProps> = ({
  onShowToast,
  onOpenBookDemo,
}) => {
  // Autopilot loop states
  const [isAutoPilot, setIsAutoPilot] = useState<boolean>(true);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 11, y: 14 });
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [clickRipples, setClickRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);

  // Single Box Scale-to-Fit state
  const [viewMode, setViewMode] = useState<'fit' | 'expanded'>('fit');
  const [isFullscreenModal, setIsFullscreenModal] = useState<boolean>(false);
  const outerWrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);
  const [wrapperWidth, setWrapperWidth] = useState<number>(1024);

  // Internal fixed canvas dimensions
  const DESIGN_WIDTH = 1024;
  const DESIGN_HEIGHT = 640;

  // Live Interactive State reflecting the User's Screenshot
  const [activeSidebar, setActiveSidebar] = useState<string>('dashboard');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'nova'>('dashboard');
  const [selectedStaff, setSelectedStaff] = useState<string>('All Staff');
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);

  // Dynamic Data in KPI Cards
  const [adSpend, setAdSpend] = useState<string>('₹1,42,800');
  const [leadsGenerated, setLeadsGenerated] = useState<number>(4218);
  const [conversionRate, setConversionRate] = useState<string>('94.8%');

  // Nova AI Prompt Bar State
  const [novaInput, setNovaInput] = useState<string>('Create a follow-up for my hottest lead');
  const [novaResponse, setNovaResponse] = useState<string | null>(
    '✦ Nova AI: Follow-up email prepared for Vortex Dynamics VP Tech with Q3 10-K reference. 98.4% ICP Score.'
  );
  const [activeChip, setActiveChip] = useState<string | null>(
    'Create a follow-up for my hottest lead'
  );

  // Measure outer container width and calculate scale factor to fit in ONE box on any screen
  useEffect(() => {
    const handleResize = () => {
      if (outerWrapperRef.current) {
        const clientWidth = outerWrapperRef.current.clientWidth;
        setWrapperWidth(clientWidth);

        if (viewMode === 'fit') {
          // On screens narrower than design width (e.g. mobile 360px-450px, tablet 768px),
          // scale down proportionally so the ENTIRE dashboard fits in 1 box!
          const newScale = Math.min(1, clientWidth / DESIGN_WIDTH);
          setScale(newScale);
        } else {
          setScale(1);
        }
      }
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (outerWrapperRef.current) {
      resizeObserver.observe(outerWrapperRef.current);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [viewMode]);

  // Autonomous sequence designed for pixel-perfect coordinates on 1024x640 canvas
  const cursorSequence: CursorAction[] = [
    {
      id: 0,
      x: 10.5,
      y: 13.5,
      label: '✦ Get Started',
      sidebarActive: 'dashboard',
      adSpend: '₹0.00',
      leadCount: 0,
      conversionRate: '—',
      novaPrompt: '',
      novaResponse: '',
    },
    {
      id: 1,
      x: 31.0,
      y: 13.8,
      label: 'CEO Intelligence View',
      sidebarActive: 'dashboard',
      leadCount: 1420,
      adSpend: '₹34,200',
      conversionRate: '88.4%',
    },
    {
      id: 2,
      x: 58.0,
      y: 40.5,
      label: 'Qualify Inbound Leads',
      leadCount: 4218,
      adSpend: '₹1,42,800',
      conversionRate: '94.8%',
      sidebarActive: 'leads-gen',
    },
    {
      id: 3,
      x: 48.0,
      y: 77.0,
      label: 'Ask Nova AI Trigger',
      novaPrompt: 'Create a follow-up for my hottest lead: Vortex Dynamics',
      novaResponse:
        '✦ Nova AI: Executive outreach synthesized with Q3 10-K signal. Calendar invitation auto-negotiated for Oct 3 @ 2:00 PM EST. 98.4% ICP Receptive Score.',
    },
    {
      id: 4,
      x: 10.0,
      y: 38.0,
      label: 'Lead Automation Engine',
      sidebarActive: 'automation',
      leadCount: 5890,
      adSpend: '₹1,98,400',
      conversionRate: '96.2%',
    },
  ];

  // Run the autonomous vector cursor loop
  useEffect(() => {
    if (!isAutoPilot) return;

    const baseDelay = 3600 / speedMultiplier;
    const timer = setInterval(() => {
      setStepIndex((prev) => {
        const next = (prev + 1) % cursorSequence.length;
        const currentAction = cursorSequence[next];

        setCursorPos({ x: currentAction.x, y: currentAction.y });

        // Trigger simulated click after smooth arrival (650ms)
        setTimeout(() => {
          setIsClicking(true);
          setClickRipples((r) => [
            ...r,
            { id: Date.now(), x: currentAction.x, y: currentAction.y },
          ]);

          // Update real state in the UI
          if (currentAction.sidebarActive) {
            setActiveSidebar(currentAction.sidebarActive);
          }
          if (currentAction.leadCount !== undefined) {
            setLeadsGenerated(currentAction.leadCount);
          }
          if (currentAction.adSpend !== undefined) {
            setAdSpend(currentAction.adSpend);
          }
          if (currentAction.conversionRate !== undefined) {
            setConversionRate(currentAction.conversionRate);
          }
          if (currentAction.novaPrompt) {
            setNovaInput(currentAction.novaPrompt);
            setActiveChip('Create a follow-up for my hottest lead');
          } else {
            setNovaInput('');
            setActiveChip(null);
          }
          if (currentAction.novaResponse) {
            setNovaResponse(currentAction.novaResponse);
          } else {
            setNovaResponse(null);
          }

          setTimeout(() => setIsClicking(false), 240);
        }, 700);

        return next;
      });
    }, baseDelay);

    return () => clearInterval(timer);
  }, [isAutoPilot, speedMultiplier]);

  // Clean old click ripples
  useEffect(() => {
    if (clickRipples.length > 5) {
      setClickRipples((prev) => prev.slice(prev.length - 4));
    }
  }, [clickRipples]);

  const currentAction = cursorSequence[stepIndex];

  // Render the inner dashboard workstation (Full resolution 1024x640)
  const renderWorkstationCanvas = (isModal: boolean = false) => (
    <div
      style={{
        width: `${DESIGN_WIDTH}px`,
        height: `${DESIGN_HEIGHT}px`,
      }}
      className="relative shrink-0 flex flex-col bg-[#040814] text-[#dae2fd] font-['Inter',sans-serif] select-none overflow-hidden"
    >
      {/* Top Application Window Bar */}
      <div className="h-9 px-4 bg-[#030611] border-b border-[#151f33] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 inline-block border border-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 inline-block border border-[#f59e0b]" />
            <span className="w-3 h-3 rounded-full bg-[#10b981]/80 inline-block border border-[#10b981]" />
          </div>
          <span className="text-[11px] font-mono text-[#a08e7a] ml-2">
            velontrax-workstation · v4.2.0-sovereign
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1.5 text-[#ffc174] font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-pulse" />
            LIVE TELEMETRY
          </span>
          <span className="text-[#a08e7a]">|</span>
          <span className="text-[#ffc174] font-mono">14ms latency</span>
        </div>
      </div>

      {/* Main Workspace Body: Sidebar + Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* ============================================================== */}
        {/* SIDEBAR (EXACT MATCH TO USER SCREENSHOT) */}
        {/* ============================================================== */}
        <aside className="w-52 bg-[#02050f] border-r border-[#151f33] flex flex-col justify-between shrink-0 p-3 select-none">
          <div className="flex flex-col gap-3">
            {/* Brand Row */}
            <div className="flex items-center justify-between px-1">
              <span className="font-['Plus_Jakarta_Sans'] text-xl font-black tracking-tight text-white flex items-center">
                velontra
                <span className="bg-gradient-to-tr from-[#f59e0b] via-[#ffc174] to-[#f59e0b] bg-clip-text text-transparent">
                  X
                </span>
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#131d31] text-[#ffc174] font-mono border border-[#ffc174]/30">
                PRO
              </span>
            </div>

            {/* Get Started Button */}
            <button
              id="dash-btn-get-started"
              onClick={() => {
                setActiveSidebar('get-started');
                onOpenBookDemo?.();
              }}
              type="button"
              className={`w-full py-2 px-3 rounded-xl font-['Plus_Jakarta_Sans'] text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                activeSidebar === 'get-started'
                  ? 'bg-gradient-to-r from-[#eab308] to-[#ffc174] text-[#1c1300] ring-2 ring-[#ffc174]'
                  : 'bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-[#1c1300] hover:brightness-110'
              }`}
            >
              <span className="material-symbols-outlined text-[17px]">auto_awesome</span>
              <span>Get Started</span>
            </button>

            {/* Navigation Menu List */}
            <nav className="flex flex-col gap-1 text-xs font-medium text-[#dae2fd]">
              {/* Dashboard */}
              <button
                id="dash-nav-dashboard"
                onClick={() => setActiveSidebar('dashboard')}
                type="button"
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeSidebar === 'dashboard'
                    ? 'bg-[#121c2e] text-[#ffc174] border border-[#ffc174]/40 font-semibold shadow-inner'
                    : 'text-[#d8c3ad] hover:bg-[#0c1424] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[17px] text-[#ffc174]">
                  grid_view
                </span>
                <span>Dashboard</span>
              </button>

              {/* Lead Generation */}
              <button
                id="dash-nav-leads-gen"
                onClick={() => setActiveSidebar('leads-gen')}
                type="button"
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeSidebar === 'leads-gen'
                    ? 'bg-[#121c2e] text-[#ffc174] border border-[#ffc174]/40 font-semibold'
                    : 'text-[#d8c3ad] hover:bg-[#0c1424] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[17px] text-[#a08e7a]">
                  radar
                </span>
                <span>Lead Gen</span>
              </button>

              {/* Lead Automation */}
              <button
                id="dash-nav-automation"
                onClick={() => setActiveSidebar('automation')}
                type="button"
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeSidebar === 'automation'
                    ? 'bg-[#121c2e] text-[#ffc174] border border-[#ffc174]/40 font-semibold'
                    : 'text-[#d8c3ad] hover:bg-[#0c1424] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[17px] text-[#ffc174]">
                  bolt
                </span>
                <span>Automation</span>
              </button>

              {/* Sales */}
              <button
                id="dash-nav-sales"
                onClick={() => setActiveSidebar('sales')}
                type="button"
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeSidebar === 'sales'
                    ? 'bg-[#121c2e] text-[#ffc174] border border-[#ffc174]/40 font-semibold'
                    : 'text-[#d8c3ad] hover:bg-[#0c1424] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[17px] text-[#a08e7a]">
                  trending_up
                </span>
                <span>Sales</span>
              </button>

              {/* AI Suite */}
              <button
                id="dash-nav-ai-suite"
                onClick={() => setActiveSidebar('ai-suite')}
                type="button"
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeSidebar === 'ai-suite'
                    ? 'bg-[#121c2e] text-[#ffc174] border border-[#ffc174]/40 font-semibold'
                    : 'text-[#d8c3ad] hover:bg-[#0c1424] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[17px] text-[#b4c5ff]">
                  smart_toy
                </span>
                <span>AI Suite</span>
              </button>

              {/* Operations */}
              <button
                id="dash-nav-operations"
                onClick={() => setActiveSidebar('operations')}
                type="button"
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeSidebar === 'operations'
                    ? 'bg-[#121c2e] text-[#ffc174] border border-[#ffc174]/40 font-semibold'
                    : 'text-[#d8c3ad] hover:bg-[#0c1424] hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-[17px] text-[#a08e7a]">
                  business_center
                </span>
                <span>Operations</span>
              </button>
            </nav>
          </div>

          {/* Sidebar Bottom Status */}
          <div className="pt-2 border-t border-[#151f33] text-[10px] text-[#a08e7a] flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffc174] animate-pulse" />
              <span>v4.2 Connected</span>
            </span>
            <span className="font-mono text-[#ffc174]">SOC2</span>
          </div>
        </aside>

        {/* ============================================================== */}
        {/* MAIN DASHBOARD CONTENT AREA */}
        {/* ============================================================== */}
        <main className="flex-1 flex flex-col bg-[#050917] overflow-hidden">
          {/* Top Bar Header */}
          <header className="px-4 py-2 border-b border-[#151f33] bg-[#030612] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {/* Top Nav Pills */}
              <div className="flex items-center gap-1 bg-[#0a1122] p-1 rounded-full border border-[#1b263d]">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  type="button"
                  className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                    activeTab === 'dashboard'
                      ? 'bg-[#f59e0b] text-[#331c00] font-bold shadow-sm'
                      : 'text-[#d8c3ad] hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">grid_view</span>
                  <span>Dashboard</span>
                </button>

                <button
                  onClick={() => setActiveTab('nova')}
                  type="button"
                  className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                    activeTab === 'nova'
                      ? 'bg-[#0053db] text-[#dae2fd] font-bold'
                      : 'text-[#d8c3ad] hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px] text-[#ffc174]">
                    auto_awesome
                  </span>
                  <span>Nova</span>
                </button>
              </div>
            </div>

            {/* Header Right Action Icons */}
            <div className="flex items-center gap-2 text-[#a08e7a]">
              <div className="relative p-1 hover:text-white cursor-pointer">
                <span className="material-symbols-outlined text-[17px]">campaign</span>
                <span className="absolute -top-1 -right-1 px-1 rounded-full bg-[#f59e0b] text-[#1c1300] text-[9px] font-bold">
                  9+
                </span>
              </div>

              <div className="p-1 hover:text-white cursor-pointer">
                <span className="material-symbols-outlined text-[17px]">notifications</span>
              </div>

              {/* Profile Pill */}
              <div className="flex items-center gap-1.5 pl-2 border-l border-[#1b263d]">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#f59e0b] to-[#ffc174] flex items-center justify-center text-[#1c1300] font-black text-[10px]">
                  V
                </div>
                <span className="text-[11px] text-[#dae2fd] font-medium">VelontraX CEO</span>
              </div>
            </div>
          </header>

          {/* Subheader: Overview & Controls */}
          <div className="px-4 py-2 bg-[#040816] border-b border-[#151f33] flex items-center justify-between gap-2.5 text-xs">
            {/* Overview Dropdown */}
            <div
              id="dash-overview-dropdown"
              onClick={() => setIsOverviewOpen(!isOverviewOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#0d1527] border border-[#1e2a44] text-[#dae2fd] font-semibold cursor-pointer hover:bg-[#131e36]"
            >
              <span className="material-symbols-outlined text-[15px] text-[#ffc174]">
                workspace_premium
              </span>
              <span className="font-bold">Overview</span>
              <span className="text-[#a08e7a] font-normal text-[10px]">CEO intelligence view</span>
              <span className="material-symbols-outlined text-[15px]">expand_more</span>
            </div>

            {/* Subheader Actions */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#0d1527] border border-[#1e2a44] text-[#d8c3ad] text-[11px]">
                <span className="material-symbols-outlined text-[14px]">group</span>
                <span>{selectedStaff}</span>
              </div>

              <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#0d1527] border border-[#1e2a44] text-[#d8c3ad] text-[11px]">
                <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                <span>Today</span>
              </div>

              <button
                onClick={() => onShowToast('Exporting CEO Intelligence Report PDF...')}
                type="button"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#f59e0b]/50 text-[#ffc174] bg-[#f59e0b]/10 hover:bg-[#f59e0b]/20 font-semibold text-[11px] cursor-pointer transition-colors"
              >
                <span className="material-symbols-outlined text-[14px]">download</span>
                <span>Export Report</span>
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="px-4 py-1.5 flex items-center justify-between gap-3 text-xs bg-[#050917] border-b border-[#121a2c]">
            <div className="flex items-center gap-2 text-[#d8c3ad]">
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0c1324] border border-[#1e2a44] text-[10px] whitespace-nowrap">
                <span className="material-symbols-outlined text-[12px] text-[#ffc174]">
                  calendar_month
                </span>
                <span>Today · 2026-09-30</span>
              </div>

              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0c1324] border border-[#1e2a44] text-[10px] whitespace-nowrap">
                <span className="material-symbols-outlined text-[12px]">schedule</span>
                <span>Asia/Kolkata</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#a08e7a]">14 KPIs grouped by area</span>
              <button
                type="button"
                className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#0c1324] border border-[#1e2a44] text-[10px] text-[#dae2fd] hover:bg-[#131e36] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[12px]">tune</span>
                <span>Customize</span>
              </button>
            </div>
          </div>

          {/* Main Dashboard Canvas Body */}
          <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden">
            {/* Marketing & Leads Section */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#dae2fd]">
                  Marketing & Leads
                </span>
                <div className="h-[1px] flex-1 bg-[#151f33]" />
              </div>

              {/* 3 Main KPI Cards side by side in full desktop perfection */}
              <div className="grid grid-cols-3 gap-3">
                {/* Card 1: Ad Spend */}
                <div
                  id="dash-kpi-ad-spend"
                  className="rounded-xl bg-[#091024] border border-[#1b263e] p-3.5 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:border-[#ffc174]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-[#d8c3ad]">Ad Spend</span>
                    <div className="w-7 h-7 rounded-lg bg-[#3b2d15] text-[#ffc174] flex items-center justify-center border border-[#ffc174]/20">
                      <span className="material-symbols-outlined text-[16px]">campaign</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#dae2fd] tracking-tight">
                      {adSpend}
                    </div>
                    <div className="text-[10px] text-[#a08e7a] mt-0.5 font-mono">in range</div>
                  </div>
                </div>

                {/* Card 2: Leads Generated */}
                <div
                  id="dash-kpi-leads-generated"
                  className="rounded-xl bg-[#091024] border border-[#1b263e] p-3.5 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:border-[#ffc174]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-[#d8c3ad]">Leads Generated</span>
                    <div className="w-7 h-7 rounded-lg bg-[#ffc174]/15 text-[#ffc174] flex items-center justify-center border border-[#ffc174]/20">
                      <span className="material-symbols-outlined text-[16px]">person_add</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#dae2fd] tracking-tight">
                      {leadsGenerated.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-[#a08e7a] mt-0.5 font-mono">in range</div>
                  </div>
                </div>

                {/* Card 3: Conversion Rate */}
                <div
                  id="dash-kpi-conversion"
                  className="rounded-xl bg-[#091024] border border-[#1b263e] p-3.5 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:border-[#b4c5ff]/40 transition-colors"
                >
                  <div className="flex items-center justify-center pt-0.5 mb-1">
                    <div className="w-7 h-7 rounded-full bg-[#121c33] border border-[#1e2c4c] flex items-center justify-center text-[#ffc174] font-bold text-xs">
                      %
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#dae2fd] tracking-tight">
                      {conversionRate}
                    </div>
                    <div className="text-xs text-[#d8c3ad] font-medium mt-0.5">
                      Conversion Rate
                    </div>
                    <div className="text-[10px] text-[#a08e7a] font-mono">in range</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Floating Nova AI Bar */}
            <div className="pt-2 flex flex-col gap-2">
              {/* Prompt Chips */}
              <div className="flex items-center gap-1.5 text-xs overflow-x-auto scrollbar-none">
                <span className="text-[10px] text-[#a08e7a] font-mono whitespace-nowrap pl-1">
                  Ask:
                </span>
                <button
                  id="dash-nova-chip-summary"
                  onClick={() => {
                    setNovaInput("Show this week's summary");
                    setActiveChip("Show this week's summary");
                    setNovaResponse(
                      "✦ Nova AI: Week summary: 4,218 leads ingested, 94.8% predictive qualification, 18 meetings booked."
                    );
                  }}
                  type="button"
                  className={`px-2.5 py-0.5 rounded-full border text-[11px] whitespace-nowrap transition-all cursor-pointer ${
                    activeChip === "Show this week's summary"
                      ? 'bg-[#18253f] border-[#ffc174] text-[#ffc174]'
                      : 'bg-[#0d1629] border-[#1b2742] text-[#d8c3ad]'
                  }`}
                >
                  Show this week's summary
                </button>

                <button
                  id="dash-nova-chip-followup"
                  onClick={() => {
                    setNovaInput('Create a follow-up for my hottest lead');
                    setActiveChip('Create a follow-up for my hottest lead');
                    setNovaResponse(
                      '✦ Nova AI: Follow-up email prepared for Vortex Dynamics VP Tech with Q3 10-K reference.'
                    );
                  }}
                  type="button"
                  className={`px-2.5 py-0.5 rounded-full border text-[11px] whitespace-nowrap transition-all cursor-pointer ${
                    activeChip === 'Create a follow-up for my hottest lead'
                      ? 'bg-[#18253f] border-[#ffc174] text-[#ffc174]'
                      : 'bg-[#0d1629] border-[#1b2742] text-[#d8c3ad]'
                  }`}
                >
                  Create follow-up for hottest lead
                </button>

                <button
                  id="dash-nova-chip-health"
                  onClick={() => {
                    setNovaInput('Check pipeline health');
                    setActiveChip('Check pipeline health');
                    setNovaResponse(
                      '✦ Nova AI: All 14 pipelines operating at 99.8% health with sub-14ms sync latency.'
                    );
                  }}
                  type="button"
                  className={`px-2.5 py-0.5 rounded-full border text-[11px] whitespace-nowrap transition-all cursor-pointer ${
                    activeChip === 'Check pipeline health'
                      ? 'bg-[#18253f] border-[#ffc174] text-[#ffc174]'
                      : 'bg-[#0d1629] border-[#1b2742] text-[#d8c3ad]'
                  }`}
                >
                  Check pipeline health
                </button>
              </div>

              {/* Nova Prompt Input Bar */}
              <div className="flex items-center gap-2 bg-[#0a1224] border border-[#1d2a45] rounded-full px-3 py-1.5 shadow-xl">
                <span className="material-symbols-outlined text-[17px] text-[#ffc174]">
                  auto_awesome
                </span>
                <input
                  type="text"
                  value={novaInput}
                  onChange={(e) => setNovaInput(e.target.value)}
                  placeholder="Ask Nova..."
                  className="flex-1 bg-transparent text-xs text-[#dae2fd] placeholder-[#6b7b99] outline-none min-w-0"
                />
                <button type="button" className="text-[#a08e7a] hover:text-white cursor-pointer">
                  <span className="material-symbols-outlined text-[17px]">mic</span>
                </button>
                <button
                  onClick={() => {
                    if (!novaInput) return;
                    setNovaResponse(
                      `✦ Nova: Executed autonomous sequence for "${novaInput}". Pipeline committed in 14ms.`
                    );
                  }}
                  type="button"
                  className="w-6 h-6 rounded-full bg-[#f59e0b] hover:bg-[#ffc174] text-[#1c1300] flex items-center justify-center transition-all cursor-pointer shadow-md shrink-0"
                >
                  <span className="material-symbols-outlined text-[15px]">send</span>
                </button>
              </div>

              {/* Nova Output Drawer */}
              {novaResponse && (
                <div className="p-2.5 rounded-xl bg-[#0e1933] border border-[#ffc174]/40 text-[11px] text-[#dae2fd] shadow-2xl flex items-start gap-2 animate-fadeIn">
                  <span className="material-symbols-outlined text-[16px] text-[#ffc174] shrink-0 mt-0.5">
                    smart_toy
                  </span>
                  <div className="leading-snug">{novaResponse}</div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* ============================================================== */}
      {/* THE AUTONOMOUS MOVING VECTOR CURSOR (DESIGN PIXEL ANCHORED) */}
      {/* ============================================================== */}
      <div
        className="absolute pointer-events-none z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          left: `${cursorPos.x}%`,
          top: `${cursorPos.y}%`,
          transform: `translate(-2px, -2px) scale(${isClicking ? 0.85 : 1})`,
        }}
      >
        <div className="relative">
          {/* Vector Mouse Pointer SVG */}
          <svg
            className="w-8 h-8 drop-shadow-[0_4px_16px_rgba(255,193,116,0.9)]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill="#ffc174"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>

          {/* Trailing Active Label */}
          <div className="absolute left-6 top-1 whitespace-nowrap bg-[#040816]/95 border border-[#ffc174] px-2 py-0.5 rounded-lg text-[10px] font-mono text-[#ffc174] shadow-2xl flex items-center gap-1 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffc174] animate-ping" />
            <span className="font-bold">{currentAction.label}</span>
          </div>
        </div>
      </div>

      {/* Click Ripple Expanding Wave */}
      {clickRipples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none z-40 w-16 h-16 rounded-full border-2 border-[#ffc174] animate-ping -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="relative max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-8 py-8 w-full select-none">
      {/* Studio Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 px-2">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#172238]/95 via-[#1f2d48]/95 to-[#172238]/95 border border-[#ffc174]/40 shadow-[0_0_20px_rgba(255,193,116,0.2)] mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc174] opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f59e0b]" />
          </span>
          <span className="text-[11px] sm:text-xs uppercase tracking-widest font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ffddb8] via-[#ffc174] to-[#f59e0b]">
            OUR LIVE PREVIEW
          </span>
          <span className="text-[#a08e7a]">/</span>
          <span className="text-[11px] sm:text-xs text-[#dae2fd] font-bold">
            AUTONOMOUS OPERATING SUITE
          </span>
        </div>
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Experience VelontraX In Live Action
        </h2>
        <p className="text-xs sm:text-base text-[#d8c3ad] mt-2.5 max-w-2xl leading-relaxed">
          Watch our unified AI business operating system manage live campaigns, trigger automated workflows, and navigate CRM operations in real-time.
        </p>
      </div>

      {/* ============================================================== */}
      {/* THE SINGLE BOX WORKSTATION CONTAINER */}
      {/* ============================================================== */}
      <div className="flex justify-center w-full">
        <div
          ref={outerWrapperRef}
          className="w-full max-w-[1100px] rounded-2xl bg-[#030611] p-2 sm:p-3 border border-[#ffc174]/25 shadow-[0_20px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(245,158,11,0.08)] relative overflow-hidden"
        >
          {/* Subtle Golden Glow Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#f59e0b]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#ffc174]/10 rounded-full blur-2xl pointer-events-none" />

          {/* THE SINGLE BOX WORKSPACE HOLDER */}
          {viewMode === 'fit' ? (
            /* Scaled down proportionally to fit the entire UI in ONE clean box */
            <div
              className="relative w-full rounded-xl overflow-hidden border border-[#1b253b] bg-[#040814] flex justify-start items-start"
              style={{
                height: `${Math.round(DESIGN_HEIGHT * scale)}px`,
              }}
            >
              <div
                style={{
                  width: `${DESIGN_WIDTH}px`,
                  height: `${DESIGN_HEIGHT}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                }}
              >
                {renderWorkstationCanvas(false)}
              </div>
            </div>
          ) : (
            /* Scrollable mode if the user toggled it */
            <div className="relative w-full rounded-xl overflow-x-auto overflow-y-hidden border border-[#1b253b] bg-[#040814] scrollbar-thin scrollbar-thumb-[#ffc174]/20">
              {renderWorkstationCanvas(false)}
            </div>
          )}
        </div>
      </div>

      {/* ============================================================== */}
      {/* FULLSCREEN ZOOM INSPECT MODAL */}
      {/* ============================================================== */}
      {isFullscreenModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-[1100px] bg-[#030611] rounded-2xl border border-[#ffc174]/40 shadow-2xl overflow-hidden flex flex-col max-h-[96vh]">
            <div className="px-4 py-3 bg-[#080d1e] border-b border-[#1b253b] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffc174] text-[20px]">
                  visibility
                </span>
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-white text-sm">
                  VelontraX Sovereign Workstation — Full Resolution Inspector
                </span>
              </div>

              <button
                onClick={() => setIsFullscreenModal(false)}
                type="button"
                className="w-8 h-8 rounded-lg bg-[#141e33] hover:bg-[#202e4d] text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="p-2 sm:p-4 overflow-auto flex justify-center bg-[#02040b]">
              <div className="rounded-xl overflow-hidden border border-[#1b253b] shadow-2xl">
                {renderWorkstationCanvas(true)}
              </div>
            </div>

            <div className="px-4 py-2 bg-[#080d1e] border-t border-[#1b253b] flex items-center justify-between text-xs text-[#a08e7a]">
              <span>Click any element inside to interact or let autonomous vector cursor run.</span>
              <button
                onClick={() => setIsFullscreenModal(false)}
                type="button"
                className="px-3 py-1 rounded-lg bg-[#ffc174] text-[#331c00] font-bold text-xs cursor-pointer"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
