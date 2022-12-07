'use strict';

const eslintReactConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(eslintReactConfig(), 'Hello from eslintReactConfig');
console.info("eslintReactConfig tests passed");
