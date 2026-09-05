import { cleanUsername } from '../helpers/cleanUsername.js';

export function handleRegistration(body) {
  const username = cleanUsername(body.username);
  return { registered: true, username };
}
