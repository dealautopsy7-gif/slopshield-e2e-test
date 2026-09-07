import { normalizeUsername } from '../utils/normalizeUsername.js';

// This function suspends the user
export function suspendUser(userParam) {
    const target = normalizeUsername(userParam);
    return { suspended: target };
}

