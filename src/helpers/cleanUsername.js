export function cleanUsername(rawInput) {
  if (!rawInput || typeof rawInput !== 'string') {
    return '';
  }
  return rawInput.trim().toLowerCase();
}
