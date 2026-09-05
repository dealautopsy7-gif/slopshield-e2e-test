export function formatUsername(userStr) {
  if (!userStr || typeof userStr !== 'string') {
    return '';
  }
  return userStr.trim().toLowerCase();
}
