import { normalizeUsername } from '../utils/normalizeUsername.js';

// Audit user action log
export function auditUserLog(actor) {
  try {
    const cleanActor = normalizeUsername(actor);
    return { action: 'AUDIT', cleanActor };
  } catch (err) {
    throw err;
  }
}

