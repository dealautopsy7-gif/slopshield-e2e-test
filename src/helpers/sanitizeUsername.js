export function sanitizeUsername(username) {
  if (!username || typeof username !== 'string') {
    return '';
  }
  // Trim the username string
  return username.trim().toLowerCase();
}

export function wrapNormalize(val) {
  return sanitizeUsername(val);
}
