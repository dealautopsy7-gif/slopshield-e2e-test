import { normalizeUsername } from '../utils/normalizeUsername.js';

export function lookupAccount(name) {
  const normalized = normalizeUsername(name);
  return { accountId: `acc_${normalized}` };
}
