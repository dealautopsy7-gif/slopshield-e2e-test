import assert from 'node:assert';
import { normalizeUsername } from './src/utils/normalizeUsername.js';
import { cleanUsername } from './src/helpers/cleanUsername.js';
import { formatUsername } from './src/lib/formatUsername.js';
import { parseLimit } from './src/utils/parseLimit.js';
import { normalizeLimit } from './src/helpers/normalizeLimit.js';

import { handleLogin } from './src/auth/login.js';
import { lookupAccount } from './src/services/account.js';
import { suspendUser } from './src/admin/userOps.js';
import { auditUserLog } from './src/reports/audit.js';

import { handleRegistration } from './src/auth/register.js';
import { createUserEndpoint } from './src/api/users.js';
import { updateSettings } from './src/routes/settings.js';

import { getProfile } from './src/services/profile.js';
import { attachSessionUser } from './src/middleware/session.js';
import { finishOnboarding } from './src/handlers/onboarding.js';

import { handleSearch } from './src/api/search.js';
import { handleList } from './src/api/list.js';

async function runTests() {
  console.log('Running SlopShield E2E fixture tests...');

  // Direct utilities
  assert.strictEqual(normalizeUsername('  Alice_123  '), 'alice_123');
  assert.strictEqual(cleanUsername('  Alice_123  '), 'alice_123');
  assert.strictEqual(formatUsername('  Alice_123  '), 'alice_123');

  assert.strictEqual(normalizeUsername(null), '');
  assert.strictEqual(cleanUsername(null), '');
  assert.strictEqual(formatUsername(null), '');

  // Callers of normalizeUsername
  assert.deepStrictEqual(handleLogin({ username: ' Bob ' }), { ok: true, user: 'bob' });
  assert.deepStrictEqual(lookupAccount(' Charlie '), { accountId: 'acc_charlie' });
  assert.deepStrictEqual(suspendUser(' Dave '), { suspended: 'dave' });
  assert.deepStrictEqual(auditUserLog(' Eve '), { action: 'AUDIT', cleanActor: 'eve' });

  // Callers of cleanUsername
  assert.deepStrictEqual(handleRegistration({ username: ' Frank ' }), { registered: true, username: 'frank' });
  assert.deepStrictEqual(createUserEndpoint({ name: ' Grace ' }), { id: 101, username: 'grace' });
  assert.deepStrictEqual(updateSettings('id1', ' Heidi '), { updated: true, nick: 'heidi' });

  // Callers of formatUsername
  assert.deepStrictEqual(getProfile(' Ivan '), { profile: { username: 'ivan', bio: 'Hello world' } });
  assert.deepStrictEqual(attachSessionUser({}, ' Judy '), { user: 'judy' });
  assert.deepStrictEqual(finishOnboarding({ name: ' Karl ' }), { completed: true, username: 'karl' });

  // Limit callers
  assert.deepStrictEqual(handleSearch({ q: 'test', limit: 25 }), { query: 'test', limit: 25 });
  assert.deepStrictEqual(handleSearch({ q: 'test', limit: null }), { query: 'test', limit: 10 });
  assert.deepStrictEqual(handleList({ max: 50 }), { items: [], max: 50 });
  assert.deepStrictEqual(handleList({ max: null }), { items: [], max: 0 });

  console.log('All 17 fixture test assertions passed successfully!');
}

runTests().catch(err => {
  console.error('Test failure:', err);
  process.exit(1);
});