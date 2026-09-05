import { formatUsername } from '../lib/formatUsername.js';

export function getProfile(username) {
  const formatted = formatUsername(username);
  return { profile: { username: formatted, bio: 'Hello world' } };
}
