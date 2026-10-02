# Security Specification: Velontrax AI CRM & Business Workspace

## 1. Data Invariants
1. **User Identity & Profile**: A user profile in `/users/{userId}` can only be created and read by the authenticated user whose `request.auth.uid == userId`.
2. **Workspace Isolation**: A workspace in `/workspaces/{workspaceId}` can only be accessed or modified by its owner (`ownerId == request.auth.uid`). No cross-tenant data leaks.
3. **Workspace Leads Relational Integrity**: A lead in `/workspaces/{workspaceId}/leads/{leadId}` can only exist within an existing workspace owned by the authenticated user.
4. **Pixel Events Integrity**: A pixel event in `/workspaces/{workspaceId}/pixel_events/{eventId}` records immutable conversion metrics; created events cannot be overwritten or altered.
5. **No Spoofing**: Users cannot create workspaces with another user's UID as `ownerId`.
6. **No Blanket Reads**: All listing queries must evaluate against the owning workspace or user UID.

---

## 2. The "Dirty Dozen" Attack Payloads

1. **Malicious Workspace Impersonation**: Attacker creates workspace setting `ownerId: "victim_123"`. *Expect: PERMISSION_DENIED*.
2. **Ghost Field Injection**: Attacker injects extra field `{ role: "super_admin", isBillingExempt: true }` in UserProfile. *Expect: PERMISSION_DENIED*.
3. **Cross-Tenant Lead Snooping**: Attacker attempts to list `/workspaces/competitor_ws/leads`. *Expect: PERMISSION_DENIED*.
4. **Lead Deletion by Non-Owner**: Attacker attempts to delete a lead from another user's workspace. *Expect: PERMISSION_DENIED*.
5. **Unauthenticated Pixel Event Injection**: Unauthenticated actor attempts write to `/workspaces/ws_1/pixel_events/evt_1`. *Expect: PERMISSION_DENIED*.
6. **Pixel Event Modification**: Attacker attempts to update an existing conversion log to falsify attribution. *Expect: PERMISSION_DENIED*.
7. **Oversized String Buffer Overflow**: Attacker attempts to create workspace with 100KB string in `name`. *Expect: PERMISSION_DENIED*.
8. **Invalid Document ID Poisoning**: Attacker sends document ID containing illegal characters `../../root`. *Expect: PERMISSION_DENIED*.
9. **Workspace Owner Tampering**: Attacker attempts to change `ownerId` of an existing workspace during an update. *Expect: PERMISSION_DENIED*.
10. **Blanket Query Scraping**: Attacker runs unconstrained collection group query over all leads. *Expect: PERMISSION_DENIED*.
11. **Lead Status Value Poisoning**: Attacker attempts to update lead status to an illegal value `"hacked_status"`. *Expect: PERMISSION_DENIED*.
12. **Unverified Admin Role Escalation**: Attacker attempts to write to `/admins/{userId}`. *Expect: PERMISSION_DENIED*.
