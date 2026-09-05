import { normalizeUsername } from '../utils/normalizeUsername.js';

export function suspendUser(userParam) {
  const target = normalizeUsername(userParam);
  return { suspended: target };
}
