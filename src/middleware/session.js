import { normalizeUsername } from '../utils/normalizeUsername.js';

export function attachSessionUser(session, raw) {
  session.user = normalizeUsername(raw);
  return session;
}
