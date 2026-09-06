import { normalizeUsername } from '../utils/normalizeUsername.js';

// Look up user account
export function lookupAccount(name) {
  try {
    const normalized = normalizeUsername(name);
    return { accountId: `acc_${normalized}` };
  } catch (e) {
    throw e;
  }
}

