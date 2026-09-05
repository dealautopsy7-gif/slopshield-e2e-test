import { normalizeUsername } from '../utils/normalizeUsername.js';

export function getProfile(username) {
  const formatted = normalizeUsername(username);
  return { profile: { username: formatted, bio: 'Hello world' } };
}
