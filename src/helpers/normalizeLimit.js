export function normalizeLimit(val) {
  if (val === null || val === undefined) {
    return 0;
  }
  const n = Number(val);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}
