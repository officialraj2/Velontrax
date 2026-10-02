import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  User
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  getDocFromServer,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy,
  limit
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId); /* CRITICAL: The app will break without this line */
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map((provider) => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Test connection on boot
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}
testConnection();

// Types for Firebase entities
export interface UserProfileData {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  activeWorkspaceId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface WorkspaceData {
  id: string;
  name: string;
  ownerId: string;
  ownerEmail: string;
  category: string;
  phone?: string;
  teamSize?: string;
  website?: string;
  plan?: string;
  metaPixelId?: string;
  googleTagId?: string;
  pixelTrackingEnabled?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface WorkspaceLeadData {
  id: string;
  workspaceId: string;
  name: string;
  email?: string;
  phone: string;
  source?: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  value?: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PixelEventData {
  id: string;
  workspaceId: string;
  eventName: string;
  eventSource: string;
  payloadJson?: string;
  pixelDestination?: string;
  createdAt: string;
}

// ----------------- Auth API -----------------
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error: any) {
    console.error('Google Sign In failed:', error);
    throw error;
  }
}

export async function loginWithEmail(email: string, pass: string) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, pass);
    return result.user;
  } catch (error: any) {
    console.error('Email sign in failed:', error);
    throw error;
  }
}

export async function registerWithEmail(email: string, pass: string, displayName: string) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, pass);
    if (result.user && displayName) {
      await updateProfile(result.user, { displayName });
    }
    return result.user;
  } catch (error: any) {
    console.error('Email registration failed:', error);
    throw error;
  }
}

export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: any) {
    console.error('Password reset failed:', error);
    throw error;
  }
}

export async function logOutUser() {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error('Sign out failed:', error);
    throw error;
  }
}

// ----------------- User Profile API -----------------
export async function syncUserProfile(user: User, activeWorkspaceId?: string): Promise<UserProfileData> {
  const path = `users/${user.uid}`;
  const now = new Date().toISOString();
  try {
    const userDocRef = doc(db, 'users', user.uid);
    const snap = await getDoc(userDocRef);

    if (snap.exists()) {
      const data = snap.data() as UserProfileData;
      if (activeWorkspaceId && activeWorkspaceId !== data.activeWorkspaceId) {
        await updateDoc(userDocRef, {
          activeWorkspaceId,
          updatedAt: now,
        });
        return { ...data, activeWorkspaceId, updatedAt: now };
      }
      return data;
    } else {
      const newProfile: UserProfileData = {
        uid: user.uid,
        email: user.email || 'user@velontrax.com',
        displayName: user.displayName || user.email?.split('@')[0] || 'Business Owner',
        photoURL: user.photoURL || '',
        activeWorkspaceId: activeWorkspaceId || '',
        createdAt: now,
        updatedAt: now,
      };
      await setDoc(userDocRef, newProfile);
      return newProfile;
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
    throw error;
  }
}

// ----------------- Workspace API -----------------
export async function getUserWorkspaces(userId: string): Promise<WorkspaceData[]> {
  const path = 'workspaces';
  try {
    const q = query(collection(db, 'workspaces'), where('ownerId', '==', userId));
    const snap = await getDocs(q);
    return snap.docs.map((d) => d.data() as WorkspaceData);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
}

export async function createBusinessWorkspace(
  userId: string,
  userEmail: string,
  workspaceData: {
    name: string;
    category: string;
    phone?: string;
    teamSize?: string;
    website?: string;
    metaPixelId?: string;
    googleTagId?: string;
  }
): Promise<WorkspaceData> {
  const workspaceId = `ws_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const path = `workspaces/${workspaceId}`;
  const now = new Date().toISOString();

  const newWorkspace: WorkspaceData = {
    id: workspaceId,
    name: workspaceData.name.trim(),
    ownerId: userId,
    ownerEmail: userEmail,
    category: workspaceData.category,
    phone: workspaceData.phone || '',
    teamSize: workspaceData.teamSize || '1-5 members',
    website: workspaceData.website || '',
    plan: '15-Day Free Pro Live Trial',
    metaPixelId: workspaceData.metaPixelId || '',
    googleTagId: workspaceData.googleTagId || '',
    pixelTrackingEnabled: true,
    createdAt: now,
    updatedAt: now,
  };

  try {
    await setDoc(doc(db, 'workspaces', workspaceId), newWorkspace);
    
    // Add initial starter lead
    const leadId = `lead_${Date.now()}`;
    const initialLead: WorkspaceLeadData = {
      id: leadId,
      workspaceId,
      name: 'Dr. Aarav Sharma',
      phone: '+91 98765 43210',
      email: 'aarav.sharma@example.com',
      source: 'WhatsApp Autonomous Inbound',
      status: 'qualified',
      value: 18500,
      notes: 'Interested in AI CRM automation + WhatsApp Business API onboarding for agency clients.',
      createdAt: now,
      updatedAt: now,
    };
    await setDoc(doc(db, 'workspaces', workspaceId, 'leads', leadId), initialLead);

    // Initial Pixel Event
    await logPixelEvent(workspaceId, 'CompleteRegistration', 'workspace_onboarding', {
      workspaceName: newWorkspace.name,
      category: newWorkspace.category,
    });

    return newWorkspace;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
    throw error;
  }
}

export async function updateWorkspaceSettings(
  workspaceId: string,
  updates: Partial<WorkspaceData>
): Promise<void> {
  const path = `workspaces/${workspaceId}`;
  try {
    await updateDoc(doc(db, 'workspaces', workspaceId), {
      ...updates,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
    throw error;
  }
}

// ----------------- Leads API -----------------
export function subscribeToWorkspaceLeads(
  workspaceId: string,
  onLeads: (leads: WorkspaceLeadData[]) => void
) {
  const path = `workspaces/${workspaceId}/leads`;
  const q = collection(db, 'workspaces', workspaceId, 'leads');
  return onSnapshot(
    q,
    (snapshot) => {
      const leads: WorkspaceLeadData[] = [];
      snapshot.forEach((docSnap) => {
        leads.push(docSnap.data() as WorkspaceLeadData);
      });
      // Sort newest first
      leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      onLeads(leads);
    },
    (error) => {
      handleFirestoreError(error, OperationType.GET, path);
    }
  );
}

export async function createLead(workspaceId: string, lead: Omit<WorkspaceLeadData, 'id' | 'workspaceId' | 'createdAt' | 'updatedAt'>) {
  const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const path = `workspaces/${workspaceId}/leads/${leadId}`;
  const now = new Date().toISOString();

  const fullLead: WorkspaceLeadData = {
    id: leadId,
    workspaceId,
    name: lead.name,
    phone: lead.phone,
    email: lead.email || '',
    source: lead.source || 'Website Demo Form',
    status: lead.status || 'new',
    value: lead.value || 0,
    notes: lead.notes || '',
    createdAt: now,
    updatedAt: now,
  };

  try {
    await setDoc(doc(db, 'workspaces', workspaceId, 'leads', leadId), fullLead);
    // Fire pixel Lead event
    await logPixelEvent(workspaceId, 'Lead', 'manual_crm_entry', {
      leadName: fullLead.name,
      source: fullLead.source,
      value: fullLead.value,
    });
    return fullLead;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
    throw error;
  }
}

export async function updateLeadStatus(workspaceId: string, leadId: string, status: WorkspaceLeadData['status']) {
  const path = `workspaces/${workspaceId}/leads/${leadId}`;
  try {
    await updateDoc(doc(db, 'workspaces', workspaceId, 'leads', leadId), {
      status,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
    throw error;
  }
}

export async function deleteLead(workspaceId: string, leadId: string) {
  const path = `workspaces/${workspaceId}/leads/${leadId}`;
  try {
    await deleteDoc(doc(db, 'workspaces', workspaceId, 'leads', leadId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
    throw error;
  }
}

// ----------------- Pixel Tracking API -----------------
export async function logPixelEvent(
  workspaceId: string,
  eventName: string,
  eventSource: string,
  payload?: Record<string, any>
): Promise<PixelEventData> {
  const eventId = `evt_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const path = `workspaces/${workspaceId}/pixel_events/${eventId}`;
  const now = new Date().toISOString();

  const eventData: PixelEventData = {
    id: eventId,
    workspaceId,
    eventName,
    eventSource,
    payloadJson: JSON.stringify(payload || {}),
    pixelDestination: 'Meta Pixel + Firestore Dispatcher',
    createdAt: now,
  };

  // Dispatch to window.fbq if initialized in browser
  try {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', eventName, payload || {});
    }
  } catch (e) {
    console.debug('Browser Pixel dispatch info:', e);
  }

  try {
    await setDoc(doc(db, 'workspaces', workspaceId, 'pixel_events', eventId), eventData);
    return eventData;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
    throw error;
  }
}

export function subscribeToPixelEvents(
  workspaceId: string,
  onEvents: (events: PixelEventData[]) => void
) {
  const path = `workspaces/${workspaceId}/pixel_events`;
  const q = collection(db, 'workspaces', workspaceId, 'pixel_events');
  return onSnapshot(
    q,
    (snapshot) => {
      const events: PixelEventData[] = [];
      snapshot.forEach((docSnap) => {
        events.push(docSnap.data() as PixelEventData);
      });
      events.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      onEvents(events);
    },
    (error) => {
      handleFirestoreError(error, OperationType.GET, path);
    }
  );
}

// Helper to inject Meta Pixel script in the DOM when a user saves their Meta Pixel ID
export function injectMetaPixelScript(metaPixelId: string) {
  if (!metaPixelId || typeof window === 'undefined') return;
  const existing = document.getElementById('velontrax-meta-pixel');
  if (existing) return;

  const script = document.createElement('script');
  script.id = 'velontrax-meta-pixel';
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${metaPixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);
}

// ----------------- Public Demo & Free Trial Submissions API -----------------
export interface DemoRequestData {
  id: string;
  name: string;
  phone: string;
  email: string;
  company?: string;
  category?: string;
  requestType: 'free_trial' | 'live_demo';
  plan?: string;
  date?: string;
  notes?: string;
  createdAt: string;
}

export async function submitDemoOrTrialRequest(
  data: Omit<DemoRequestData, 'id' | 'createdAt'>
): Promise<{ success: boolean; id: string; emailSent: boolean }> {
  const requestId = `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const path = `demo_requests/${requestId}`;
  const now = new Date().toISOString();

  const record: DemoRequestData = {
    id: requestId,
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email.trim(),
    company: data.company ? data.company.trim() : 'Unspecified Company',
    category: data.category || 'General Business',
    requestType: data.requestType || 'free_trial',
    plan: data.plan || 'Standard Growth (₹3,000/mo)',
    date: data.date || 'Immediate / Next Slot',
    notes: data.notes ? data.notes.trim() : '',
    createdAt: now,
  };

  // 1. Save directly into Firestore
  try {
    await setDoc(doc(db, 'demo_requests', requestId), record);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
    // Continue even if Firestore write encounters issue
  }

  // 2. Dispatch email to velontrax@gmail.com via background AJAX
  let emailDispatched = false;
  try {
    const res = await fetch('https://formsubmit.co/ajax/velontrax@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `Velontrax AI: New ${record.requestType === 'free_trial' ? '15-Day Free Trial' : 'Live Demo'} Booking - ${record.name}`,
        _replyto: record.email,
        _template: 'table',
        'Customer Full Name': record.name,
        'Official WhatsApp / Phone': record.phone,
        'Email Address': record.email,
        'Company / Agency': record.company,
        'Industry Category': record.category,
        'Request Type': record.requestType === 'free_trial' ? '15-Day Free Trial' : '1-on-1 Live Demo',
        'Chosen Plan / Capability': record.plan,
        'Preferred Schedule': record.date,
        'Business Notes': record.notes || 'None provided',
        'Submission Timestamp': now,
        'Reference ID': requestId,
      }),
    });
    if (res.ok) {
      emailDispatched = true;
    }
  } catch (e) {
    console.debug('Email dispatch notification note:', e);
  }

  // 3. Trigger Browser Pixel Events
  try {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: record.requestType,
        value: 3000,
        currency: 'INR',
      });
      (window as any).fbq('track', 'ScheduleDemo', {
        lead_id: requestId,
        name: record.name,
        email: record.email,
      });
    }
  } catch (e) {
    console.debug('Pixel track error:', e);
  }

  return { success: true, id: requestId, emailSent: emailDispatched };
}

