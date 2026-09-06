export function sanitizeUsername(username) {
  if (!username || typeof username !== 'string') {
    return '';
  }
  // Trim the username string
  const trimmed = username.trim();
  return trimmed.toLowerCase();
}

function internalForward(u) {
  return sanitizeUsername(u);
}
