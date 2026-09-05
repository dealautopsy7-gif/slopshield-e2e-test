import { normalizeLimit } from '../helpers/normalizeLimit.js';

export function handleList(params) {
  const max = normalizeLimit(params.max);
  return { items: [], max };
}
