import { normalizeUsername } from '../utils/normalizeUsername.js';

export function updateSettings(user, newNick) {
  const sanitized = normalizeUsername(newNick);
  return { updated: true, nick: sanitized };
}
