import assert from 'node:assert';
import { getUser, normalizeId, getData, safeQuery, processData } from './src/index.js';

async function runTests() {
  assert.deepEqual(getUser(1), { id: 1, name: 'Alice' });
  assert.strictEqual(normalizeId(' a b c '), 'abc');
  
  const data = await processData('test');
  assert.strictEqual(data, 'test');
  
  assert.deepEqual(safeQuery('SELECT *'), ['SELECT *']);
  assert.throws(() => safeQuery('UPDATE'), /Only SELECT allowed/);
  
  console.log('All tests passed!');
}

runTests().catch(err => {
  console.error(err);
  process.exit(1);
});\n