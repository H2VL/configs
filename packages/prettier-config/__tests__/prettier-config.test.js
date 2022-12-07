'use strict';

const prettierConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(prettierConfig(), 'Hello from prettierConfig');
console.info("prettierConfig tests passed");
