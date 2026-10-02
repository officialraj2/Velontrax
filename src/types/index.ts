export type ScreenType = 
  | 'platform-and-home' 
  | 'how-it-works' 
  | 'solutions-smart-crm-and-leads' 
  | 'pricing' 
  | 'docs'
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'auth';

export interface DealCard {
  id: string;
  name: string;
  amount: string;
  signal: string;
  stage: 'inbound' | 'qualified' | 'meeting' | 'proposal' | 'won';
  healthScore: number;
  matchRate: string;
  execName: string;
  execRole: string;
  company: string;
  funding: string;
  predictedDealSize: string;
  winProbability: string;
  toneIndex: string;
  sentimentPercent: number;
  callTranscript: {
    speaker: string;
    timestamp: string;
    text: string;
    tag?: string;
  }[];
  whisperText: string;
  recommendedAction: string;
  agentId: string;
}

export interface CopilotMessage {
  id: string;
  sender: 'user' | 'copilot';
  text: string;
  timestamp: string;
}

export interface SimulationResult {
  company: string;
  exec: string;
  score: number;
  trigger: string;
  pitch: string;
  latencyMs: number;
  technographics: string;
}
