import { normalizeUsername } from '../utils/normalizeUsername.js';

export function handleRegistration(body) {
  const username = normalizeUsername(body.username);
  return { registered: true, username };
}
