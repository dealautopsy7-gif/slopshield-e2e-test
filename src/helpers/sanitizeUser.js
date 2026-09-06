export function sanitizeUsername(u) {
  if (!u || typeof u !== 'string') {
    return '';
  }
  // Trim the username
  const trimmed = u.trim();
  return trimmed.toLowerCase();
}

// Wrapper function that forwards directly to sanitizeUsername
export function getSanitizedUsername(u) {
  return sanitizeUsername(u);
}
