import React from 'react';

interface InspectPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadName: string;
  leadCompany: string;
}

export const InspectPromptModal: React.FC<InspectPromptModalProps> = ({
  isOpen,
  onClose,
  leadName,
  leadCompany,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#0f172a]/95 border border-[#ffc174]/30 p-5 sm:p-8 shadow-[0_0_60px_rgba(255,193,116,0.16),0_25px_70px_rgba(0,0,0,0.9)] text-[#dae2fd] max-h-[90vh] overflow-y-auto backdrop-blur-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Subtle Glow Orbs */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ffc174]/15 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0053db]/15 rounded-full blur-[90px] pointer-events-none" />

        {/* Sleek Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-[#172238]/90 hover:bg-[#22314e] border border-[#2d3a52] hover:border-[#ffc174]/50 text-[#d8c3ad] hover:text-white transition-all flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 cursor-pointer z-30 group"
          aria-label="Close form"
          title="Close"
        >
          <span className="material-symbols-outlined text-[19px] group-hover:rotate-90 transition-transform duration-200">
            close
          </span>
        </button>

        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-[#ffc174] text-[20px]">
            psychology
          </span>
          <span className="text-[11px] uppercase tracking-widest text-[#ffc174] font-bold">
            Autonomous Agent #41 // Reasoning Pipeline
          </span>
        </div>
        <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold tracking-tight text-[#dae2fd]">
          Internal Reasoning Chain & Grounded Pitch Synthesizer
        </h3>
        <p className="text-xs text-[#a08e7a] mt-0.5 mb-4 font-mono">
          Target: {leadName} @ {leadCompany} · Engine: VelontraX-Bespoke-SLM-4.2
        </p>

        <div className="space-y-4 text-xs font-mono">
          {/* Grounding signals */}
          <div className="p-3 rounded-xl bg-[#060e20] border border-[#2d3449]">
            <div className="text-[#b4c5ff] font-bold mb-1 uppercase tracking-wider text-[10px]">
              01 // Grounding Signals Harvested (Zero-Retention Buffer)
            </div>
            <ul className="list-disc pl-4 space-y-1 text-[#d8c3ad]">
              <li>Company Filings: Q3 investor transcript highlights cloud margin compression (-14%).</li>
              <li>Hiring Surge: +40% Platform Engineering roles added in last 60 days on LinkedIn.</li>
              <li>Intent Surge: High-frequency searches for SOC2 Type II automated audit log bridges.</li>
              <li>Recent Audio Sentiment: 88% Urgency detected in call timestamp 14:02:18.</li>
            </ul>
          </div>

          {/* Calibrated System Prompt */}
          <div className="p-3 rounded-xl bg-[#060e20] border border-[#2d3449]">
            <div className="text-[#ffc174] font-bold mb-1 uppercase tracking-wider text-[10px]">
              02 // Model Prompt & Guardrails
            </div>
            <pre className="text-[#dae2fd] whitespace-pre-wrap leading-relaxed font-mono text-[11px]">
{`SYSTEM INSTRUCTION:
You are VelontraX Executive RevOps Specialist #41.
Synthesize a 2-sentence low-friction dispatch to ${leadName}.
Tone: Technical peer, consultative, zero fluff, zero sales tropes.
Value Vector: Emphasize SOC2 Type II compliance bridge and eliminating 32 hours of manual CRM drift.
Guardrail: Do not fabricate pricing; reference AWS architecture benchmark.`}
            </pre>
          </div>

          {/* Generated Payload */}
          <div className="p-3 rounded-xl bg-[#171f33] border border-[#ffc174]/40">
            <div className="text-[#e2cc73] font-bold mb-1 uppercase tracking-wider text-[10px] flex items-center justify-between">
              <span>03 // Synthesized Dispatch Output</span>
              <span className="text-[#ffc174]">Confidence Score: 0.98</span>
            </div>
            <p className="text-[#dae2fd] italic text-xs leading-relaxed">
              "Marcus - noticed Chronos expanded the platform engineering squad by 40% while preparing for SOC2 Type II. Our sovereign zero-retention pipeline automates audit-ready CRM telemetry sync without engineering hours."
            </p>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-[#222a3d] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#222a3d] hover:bg-[#2d3449] text-[#dae2fd] text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
