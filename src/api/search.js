import { parseLimit } from '../utils/parseLimit.js';

export function handleSearch(query) {
  const limit = parseLimit(query.limit);
  return { query: query.q, limit };
}
