import { normalizeUsername } from '../utils/normalizeUsername.js';

export function auditUserLog(actor) {
  const cleanActor = normalizeUsername(actor);
  return { action: 'AUDIT', cleanActor };
}
