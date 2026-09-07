import { normalizeUsername } from '../utils/normalizeUsername.js';

// Audit user action log
export function auditUserLog(actor) {
    const cleanActor = normalizeUsername(actor);
    return { action: 'AUDIT', cleanActor };
}

