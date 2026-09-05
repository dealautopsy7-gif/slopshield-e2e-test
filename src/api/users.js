import { normalizeUsername } from '../utils/normalizeUsername.js';

export function createUserEndpoint(payload) {
  const user = normalizeUsername(payload.name);
  return { id: 101, username: user };
}
