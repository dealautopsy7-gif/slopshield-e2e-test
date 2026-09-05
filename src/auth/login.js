import { normalizeUsername } from '../utils/normalizeUsername.js';

export function handleLogin(req) {
  const username = normalizeUsername(req.username);
  return { ok: true, user: username };
}
