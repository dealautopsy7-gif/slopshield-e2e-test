import { cleanUsername } from '../helpers/cleanUsername.js';

export function updateSettings(user, newNick) {
  const sanitized = cleanUsername(newNick);
  return { updated: true, nick: sanitized };
}
