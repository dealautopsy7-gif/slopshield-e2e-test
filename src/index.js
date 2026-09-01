// 1. Redundant narrator comment (POSITIVE)
// Gets the user by id
export function getUser(id) {
  // Returns the user
  return { id, name: 'Alice' };
}

// 2. Meaningful comment (NEGATIVE)
// We must normalize the ID because legacy systems sometimes pass UUIDs with spaces
export function normalizeId(id) {
  return id.replace(/\s+/g, '');
}

// 3. Safe non-exported wrapper (POSITIVE)
function fetchDataInternal(url) {
  return fetch(url);
}

export function getData(url) {
  return fetchDataInternal(url);
}

// 4. Wrapper with validation (NEGATIVE)
function queryDb(sql) {
  return [sql];
}

export function safeQuery(sql) {
  if (!sql.includes('SELECT')) {
    throw new Error('Only SELECT allowed');
  }
  return queryDb(sql);
}

// 5. Redundant try/catch (POSITIVE)
export async function processData(data) {
  try {
    return await Promise.resolve(data);
  } catch (err) {
    throw err;
  }
}// E2E slop test

