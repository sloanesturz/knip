import assert from 'node:assert/strict';
import test from 'node:test';
import { default as commitlint } from '../../src/plugins/commitlint/index.js';
import { join, resolve } from '../../src/util/path.js';
import { buildOptions } from '../helpers/index.js';

const cwd = resolve('fixtures/plugins/commitlint');
const options = buildOptions(cwd);

test('Find dependencies in commitlint configuration (js)', async () => {
  const configFilePath = join(cwd, 'commitlint.config.js');
  const dependencies = await commitlint.findDependencies(configFilePath, options);
  assert.deepEqual(dependencies, ['@commitlint/config-conventional']);
});

test('Find dependencies in commitlint configuration (json)', async () => {
  const configFilePath = join(cwd, '.commitlintrc.json');
  const dependencies = await commitlint.findDependencies(configFilePath, options);
  assert.deepEqual(dependencies, ['@commitlint/config-conventional']);
});

test('Find dependencies in commitlint configuration (package.json)', async () => {
  const configFilePath = join(cwd, 'package.json');
  const dependencies = await commitlint.findDependencies(configFilePath, options);
  assert.deepEqual(dependencies, ['@commitlint/config-conventional']);
});
