import { normalizeUsername } from '../utils/normalizeUsername.js';

// Look up user account
export function lookupAccount(name) {
    const normalized = normalizeUsername(name);
    return { accountId: `acc_${normalized}` };
}

