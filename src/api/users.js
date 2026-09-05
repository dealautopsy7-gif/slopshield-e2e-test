import { cleanUsername } from '../helpers/cleanUsername.js';

export function createUserEndpoint(payload) {
  const user = cleanUsername(payload.name);
  return { id: 101, username: user };
}
