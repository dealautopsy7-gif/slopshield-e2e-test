export function normalizeUsername(username) {
  if (!username || typeof username !== 'string') {
    return '';
  }
  return username.trim().toLowerCase();
}
