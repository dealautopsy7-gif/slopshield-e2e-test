import { formatUsername } from '../lib/formatUsername.js';

export function attachSessionUser(session, raw) {
  session.user = formatUsername(raw);
  return session;
}
