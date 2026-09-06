export function sanitizeUsername(username) {
  if (!username || typeof username !== 'string') {
    return '';
  }
  const trimmed = username.trim();
  return trimmed.toLowerCase();
}

function internalForward(u) {
  return sanitizeUsername(u);
}
