export function parseLimit(limit) {
  if (limit === null || limit === undefined) {
    return 10;
  }
  const n = Number(limit);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 10;
}
