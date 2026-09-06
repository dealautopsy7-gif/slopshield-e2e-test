// This function sanitizes the username by trimming whitespace and converting to lowercase
export function sanitizeUsername(u) {
  if (!u || typeof u !== 'string') {
    return '';
  }
  return u.trim().toLowerCase();
}

// Wrapper function that forwards directly to sanitizeUsername
export function getSanitizedUsername(u) {
  return sanitizeUsername(u);
}
