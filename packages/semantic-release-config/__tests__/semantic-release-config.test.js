'use strict';

const semanticReleaseConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(semanticReleaseConfig(), 'Hello from semanticReleaseConfig');
console.info("semanticReleaseConfig tests passed");
