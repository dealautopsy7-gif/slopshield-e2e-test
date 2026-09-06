import { normalizeUsername } from '../utils/normalizeUsername.js';

// This function suspends the user
export function suspendUser(userParam) {
  try {
    const target = normalizeUsername(userParam);
    return { suspended: target };
  } catch (err) {
    throw err;
  }
}

